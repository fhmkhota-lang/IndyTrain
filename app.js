/* ============================================================
   IndyTrain — app.js
   All application logic. Edit this file for feature changes.
   ============================================================ */

// ── STATE ──
let U = null, CUR = null, ROOM = 'general';
let ENROLLED = [], COMPLETED = [], BADGES = [];
let PROG = {};
let QS = {};
let VID_OVERRIDES = {};   // { courseId: { type: 'file'|'gdrive', url: '...' } }
let IMG_OVERRIDES = {};   // { courseId: dataURL }
let ADMIN_TAB = 'videos';
let CMSGS = {};
let CUSTOM = [];          // admin-created courses
let MC = 0, QC = 0;

// ── HELPERS ──
const allC = () => [...COURSES, ...CUSTOM];

function initChat() {
  CMSGS = {
    general:   [{ u: "Admin", i: "AD", msg: "Welcome to IndyTrain! 🎉 Your community hub for everything journalism and sales training.", t: "9:00 AM", own: false }],
    editorial: [{ u: "Admin", i: "AD", msg: "Welcome to the Editorial channel. Share tips, ask questions, and collaborate here.", t: "9:00 AM", own: false }],
    sales:     [{ u: "Admin", i: "AD", msg: "Welcome to the Sales channel. Discuss the commercial modules and client strategies here.", t: "9:00 AM", own: false }],
    digital:   [{ u: "Admin", i: "AD", msg: "Welcome to Digital. Discuss social media, SEO, and multimedia journalism here.", t: "9:00 AM", own: false }],
    "ai-tools":[{ u: "Admin", i: "AD", msg: "Welcome to AI Tools. Discuss Gemini, NotebookLM, and Pinpoint here.", t: "9:00 AM", own: false }],
  };
}

// ── AUTH ──
function doLogin() {
  const e = document.getElementById('login-email').value.trim();
  if (!e) { toast('Please enter your email address', 'error'); return; }
  const n = e.split('@')[0].split('.').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  U = { name: n, email: e, role: 'cadet', ini: n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) };
  startApp();
}
function loginAdmin() {
  U = { name: 'Admin', email: 'admin@imcs.co.za', role: 'admin', ini: 'AD' };
  startApp();
}
function doReg() {
  const n = document.getElementById('reg-name').value.trim();
  const e = document.getElementById('reg-email').value.trim();
  if (!n || !e) { toast('Please fill in all fields', 'error'); return; }
  U = { name: n, email: e, role: 'cadet', ini: n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) };
  startApp();
}
function doLogout() {
  U = null; ENROLLED = []; COMPLETED = []; BADGES = []; PROG = {}; QS = {}; CUR = null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('login-email').value = '';
  document.getElementById('login-pass').value = '';
  showLogin();
}
function showReg() { document.getElementById('login-form').classList.add('hidden'); document.getElementById('reg-form').classList.remove('hidden'); }
function showLogin() { document.getElementById('reg-form').classList.add('hidden'); document.getElementById('login-form').classList.remove('hidden'); }

function startApp() {
  initChat();
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  syncUI();
  if (U.role === 'admin') document.getElementById('admin-nav').classList.remove('hidden');
  else document.getElementById('admin-nav').classList.add('hidden');
  renderDash(); renderCourses(); renderRes(); renderRooms(); renderMsgs();
  nav('dashboard');
}

function syncUI() {
  ['sb-ava', 'top-ava'].forEach(id => document.getElementById(id).textContent = U.ini);
  document.getElementById('sb-name').textContent = U.name;
  document.getElementById('sb-role').textContent = U.role === 'admin' ? 'Administrator' : 'Cadet';
  document.getElementById('prof-ava').textContent = U.ini;
  document.getElementById('prof-name').textContent = U.name;
  document.getElementById('prof-email').textContent = U.email;
  document.getElementById('prof-role').textContent = U.role === 'admin' ? 'Administrator' : 'Cadet';
  document.getElementById('cert-name').textContent = U.name;
  document.getElementById('edit-name').value = U.name;
  document.getElementById('edit-email').value = U.email;
}

// ── NAVIGATION ──
function nav(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
  const el = document.getElementById('page-' + p); if (el) el.classList.add('active');
  const ni = document.querySelector(`.nav-item[onclick="nav('${p}')"]`); if (ni) ni.classList.add('active');
  const TT = { dashboard: 'Dashboard', courses: 'Learning Modules', programs: 'My Programs', chat: 'Member Chat', resources: 'Resources', profile: 'My Profile', contact: 'Contact Us', admin: 'Admin Panel', 'course-detail': 'Course Detail', quiz: 'Quiz' };
  document.getElementById('pg-title').textContent = TT[p] || p;
  if (p === 'profile') renderProfile();
  if (p === 'programs') renderProgs('enrolled');
  if (p === 'admin') renderAdmin();
  if (p === 'chat') renderMsgs();
  window.scrollTo(0, 0);
}
function toggleSB() { document.getElementById('sidebar').classList.toggle('open'); }

// ── DASHBOARD ──
function renderDash() {
  document.getElementById('h-total').textContent = allC().length;
  document.getElementById('s-enrolled').textContent = ENROLLED.length;
  document.getElementById('s-completed').textContent = COMPLETED.length;
  document.getElementById('s-badges').textContent = BADGES.length;
  document.getElementById('s-certs').textContent = COMPLETED.length;
  const g = document.getElementById('dash-grid'); g.innerHTML = '';
  const di = document.getElementById('dash-enrolled');
  if (ENROLLED.length === 0) {
    di.style.display = 'block'; g.style.display = 'none';
  } else {
    di.style.display = 'none'; g.style.display = '';
    ENROLLED.slice(0, 3).forEach(id => { const c = allC().find(x => x.id === id); if (c) g.appendChild(makeCard(c, true)); });
  }
}

// ── COURSES ──
function renderCourses() {
  const cats = ['all', 'Editorial', 'Sales', ...new Set(CUSTOM.map(c => c.cat).filter(c => !['Editorial', 'Sales'].includes(c)))];
  const fr = document.getElementById('course-filters'); fr.innerHTML = '';
  cats.forEach((cat, i) => {
    const ch = document.createElement('div'); ch.className = 'fchip' + (i === 0 ? ' active' : '');
    ch.textContent = cat === 'all' ? 'All Programs' : cat;
    ch.onclick = () => filterC(cat, ch); fr.appendChild(ch);
  });
  const g = document.getElementById('courses-grid'); g.innerHTML = '';
  allC().forEach(c => g.appendChild(makeCard(c)));
}

function filterC(cat, el) {
  document.querySelectorAll('.fchip').forEach(c => c.classList.remove('active')); el.classList.add('active');
  const g = document.getElementById('courses-grid'); g.innerHTML = '';
  (cat === 'all' ? allC() : allC().filter(c => c.cat === cat)).forEach(c => g.appendChild(makeCard(c)));
}

function searchCourses(val) {
  const g = document.getElementById('courses-grid'); if (!g) return;
  g.innerHTML = '';
  const v = val.toLowerCase();
  (v ? allC().filter(c => c.title.toLowerCase().includes(v) || c.cat.toLowerCase().includes(v) || (c.about || '').toLowerCase().includes(v)) : allC())
    .forEach(c => g.appendChild(makeCard(c)));
}

function getThumb(c) {
  if (IMG_OVERRIDES[c.id]) return IMG_OVERRIDES[c.id];
  if (COURSE_IMAGES && COURSE_IMAGES[c.id]) return COURSE_IMAGES[c.id];
  return null;
}

function makeCard(c, showP = false) {
  const isE = ENROLLED.includes(c.id), isDone = COMPLETED.includes(c.id), p = PROG[c.id] || 0;
  const thumb = getThumb(c);
  const div = document.createElement('div'); div.className = 'course-card';
  div.innerHTML = `
    <div class="course-thumb" style="${!thumb ? 'background:linear-gradient(135deg,' + (c.color || '#2c3e50') + ',' + (c.color || '#2c3e50') + '99)' : ''}">
      ${thumb ? `<img src="${thumb}" alt="${c.title}"><div class="course-thumb-overlay"></div>` : ''}
      <div class="cthumb-icon">${c.emoji || '📚'}</div>
      ${isDone ? '<div class="cbadge">✓ Completed</div>' : isE ? '<div class="cbadge" style="background:#3b82f6;color:#fff">Enrolled</div>' : ''}
      ${isE && !isDone ? `<div class="cprog" style="width:${p}%"></div>` : ''}
    </div>
    <div class="course-info">
      <div class="course-cat">${c.cat}</div>
      <div class="course-title">${c.title}</div>
      <div class="course-desc">${c.about || ''}</div>
      <div class="course-meta">
        <div class="cmi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${c.steps} step${c.steps !== 1 ? 's' : ''}</div>
        <div class="cmi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${c.dur}</div>
        <div class="cmi">⭐ ${c.rating}</div>
      </div>
      ${showP && isE && !isDone ? `<div style="margin-top:.6rem"><div class="prog-label"><span>Progress</span><span>${p}%</span></div><div class="prog-track"><div class="prog-fill" style="width:${p}%"></div></div></div>` : ''}
      <div class="course-actions">
        <button class="btn btn-primary btn-sm" onclick="openCourse(${c.id});event.stopPropagation()">${isDone ? 'Review' : isE ? 'Continue' : 'Start'}</button>
        ${isDone ? `<button class="btn btn-secondary btn-sm" onclick="openCert(${c.id});event.stopPropagation()">🎓 Certificate</button>` : ''}
      </div>
    </div>`;
  div.onclick = () => openCourse(c.id); return div;
}

function openCourse(id) {
  CUR = allC().find(c => c.id === id); if (!CUR) return;
  document.getElementById('cd-title').textContent = CUR.title;
  document.getElementById('cd-about').innerHTML = CUR.about ? `<div class="cd-about-box"><strong>About This Course</strong>${CUR.about}</div>` : '';
  document.getElementById('cd-meta').innerHTML = `
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${CUR.steps} step${CUR.steps !== 1 ? 's' : ''}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${CUR.dur}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${CUR.rating} rating</div>`;
  document.getElementById('enroll-btn').textContent = ENROLLED.includes(id) ? 'Continue Learning' : 'Enroll Now';
  renderMods();
  // Video: override > default
  const va = document.getElementById('vid-area');
  const ov = VID_OVERRIDES[id];
  const defUrl = DEFAULT_VIDS[id];
  const vidUrl = ov ? ov.url : defUrl;
  va.className = 'vid-area';
  if (vidUrl) {
    va.innerHTML = `<iframe src="${vidUrl}" allowfullscreen allow="autoplay" style="width:100%;height:100%;border:none"></iframe>`;
  } else {
    va.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg><span>Video lesson will appear here</span>`;
  }
  nav('course-detail');
}

function renderMods() {
  const list = document.getElementById('cd-modules'); list.innerHTML = '';
  const done = COMPLETED.includes(CUR.id);
  (CUR.modules || []).forEach((mod, i) => {
    const div = document.createElement('div'); div.className = 'module-item';
    div.innerHTML = `
      <div class="mhdr" onclick="toggleMod(this)">
        <div class="mnum ${done ? 'done' : ''}">${i + 1}</div>
        <div class="mtitle">${mod.name}</div>
        <div class="msteps-lbl">${mod.steps.length} step${mod.steps.length !== 1 ? 's' : ''}</div>
        <svg class="mchev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="steps-list hidden">
        ${mod.steps.map(s => `
          <div class="step-item">
            <div class="step-check ${done ? 'done' : ''}">${done ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>` : ''}</div>
            <div><div class="step-t">${typeof s === 'string' ? s : s.t}</div>${typeof s === 'object' && s.d ? `<div class="step-d">${s.d}</div>` : ''}</div>
          </div>`).join('')}
      </div>`;
    list.appendChild(div);
  });
}

function toggleMod(el) {
  const l = el.nextElementSibling, c = el.querySelector('.mchev');
  l.classList.toggle('hidden'); c.classList.toggle('open');
}

function enrollCourse() {
  if (!CUR) return;
  if (!ENROLLED.includes(CUR.id)) { ENROLLED.push(CUR.id); PROG[CUR.id] = 0; }
  document.getElementById('enroll-btn').textContent = 'Continue Learning';
  renderDash(); toast('Enrolled in ' + CUR.title + '!', 'success');
}

// ── QUIZ ──
function startQuiz(c) {
  if (!c || !c.quiz || !c.quiz.length) { toast('No quiz available for this course yet.'); return; }
  QS = { c, qs: c.quiz, cur: 0, ans: [], done: false };
  nav('quiz'); renderQuiz();
}

function renderQuiz() {
  const body = document.getElementById('quiz-body');
  document.getElementById('quiz-title').textContent = QS.c.title + ' — Quiz';
  if (QS.done) {
    const sc = QS.ans.filter((a, i) => a === QS.qs[i].ans).length;
    const pct = Math.round(sc / QS.qs.length * 100);
    const pass = pct >= 70;
    body.innerHTML = `
      <div class="question-card" style="text-align:center;padding:2.25rem">
        <div class="score-circle"><div class="score-num">${pct}%</div><div class="score-lbl">${sc}/${QS.qs.length}</div></div>
        <h2 style="font-size:1.35rem;margin-bottom:.4rem">${pass ? '🎉 Congratulations!' : 'Keep Practising'}</h2>
        <p style="color:var(--muted);margin-bottom:1.25rem;font-size:.875rem">${pass ? 'You passed with ' + pct + '%! Your badge and certificate are ready.' : 'You need 70% to pass. You scored ' + pct + '% — review the course and try again.'}</p>
        ${pass ? `<div style="display:flex;gap:.65rem;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary" onclick="awardAll()">🏅 Claim Badge &amp; Certificate</button><button class="btn btn-secondary" onclick="nav('courses')">Back to Courses</button></div>` : `<div style="display:flex;gap:.65rem;justify-content:center"><button class="btn btn-primary" onclick="startQuiz(QS.c)">Try Again</button><button class="btn btn-secondary" onclick="backToCourse()">Review Course</button></div>`}
        <div style="margin-top:1.5rem;border-top:1px solid var(--border);padding-top:1.25rem;text-align:left">
          <h4 style="font-size:.85rem;font-weight:700;margin-bottom:.875rem">Review Answers</h4>
          ${QS.qs.map((q, i) => `<div style="margin-bottom:.875rem;padding:.875rem;background:${QS.ans[i] === q.ans ? '#f0fdf4' : '#fef2f2'};border:1px solid ${QS.ans[i] === q.ans ? '#bbf7d0' : '#fecaca'};border-radius:8px">
            <div style="font-size:.82rem;font-weight:600;margin-bottom:.3rem">${i + 1}. ${q.q}</div>
            <div style="font-size:.78rem;color:${QS.ans[i] === q.ans ? 'var(--success)' : 'var(--red)'}">${QS.ans[i] === q.ans ? '✓ Correct' : '✗ Your answer: ' + (q.opts[QS.ans[i]] || 'Not answered')}${QS.ans[i] !== q.ans ? `<span style="color:var(--success);margin-left:.5rem">✓ Correct: ${q.opts[q.ans]}</span>` : ''}</div>
          </div>`).join('')}
        </div>
      </div>`;
    return;
  }
  const q = QS.qs[QS.cur];
  body.innerHTML = `
    <div class="qprog">${QS.qs.map((_, i) => `<div class="qps ${i < QS.cur ? 'done' : i === QS.cur ? 'cur' : ''}"></div>`).join('')}</div>
    <div class="question-card">
      <div class="q-num">Question ${QS.cur + 1} of ${QS.qs.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="opts">
        ${q.opts.map((opt, i) => `<button class="opt-btn ${QS.ans[QS.cur] === i ? 'selected' : ''}" onclick="pickOpt(${i},this)">
          <span class="opt-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>
        </button>`).join('')}
      </div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-secondary btn-sm" ${QS.cur === 0 ? 'disabled' : ''} onclick="prevQ()">← Back</button>
      <span style="font-size:.78rem;color:var(--muted)">${QS.cur + 1} / ${QS.qs.length}</span>
      <button class="btn btn-primary btn-sm" id="qnxt" onclick="nextQ()" ${QS.ans[QS.cur] === undefined ? 'disabled' : ''}>
        ${QS.cur === QS.qs.length - 1 ? 'Submit Quiz' : 'Next →'}
      </button>
    </div>`;
}

function pickOpt(i, el) {
  QS.ans[QS.cur] = i;
  el.closest('.opts').querySelectorAll('.opt-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  const n = document.getElementById('qnxt'); if (n) n.removeAttribute('disabled');
}
function nextQ() { if (QS.ans[QS.cur] === undefined) return; if (QS.cur < QS.qs.length - 1) { QS.cur++; renderQuiz(); } else { QS.done = true; renderQuiz(); } }
function prevQ() { if (QS.cur > 0) { QS.cur--; renderQuiz(); } }
function backToCourse() { nav('course-detail'); }
function awardAll() {
  const cid = QS.c.id;
  if (!COMPLETED.includes(cid)) COMPLETED.push(cid);
  if (!BADGES.includes(cid)) BADGES.push(cid);
  if (!ENROLLED.includes(cid)) ENROLLED.push(cid);
  PROG[cid] = 100;
  renderDash(); toast('🏅 Badge earned! 🎓 Certificate ready!', 'success');
  openCert(cid);
}

// ── PROFILE ──
function renderProfile() {
  syncUI();
  document.getElementById('ps-en').textContent = ENROLLED.length;
  document.getElementById('ps-co').textContent = COMPLETED.length;
  document.getElementById('ps-ba').textContent = BADGES.length;
  document.getElementById('ps-ce').textContent = COMPLETED.length;
  const bg = document.getElementById('prof-badges'); bg.innerHTML = '';
  allC().forEach(c => {
    const earned = BADGES.includes(c.id);
    const d = document.createElement('div'); d.className = 'badge-item';
    d.innerHTML = `<div class="badge-circle ${earned ? '' : 'locked'}" title="${c.title}">${c.badge || '📚'}</div><div class="badge-name">${c.title.split(':')[0].split(' ')[0]}</div>`;
    bg.appendChild(d);
  });
  const cl = document.getElementById('prof-certs'); cl.innerHTML = '';
  if (!COMPLETED.length) {
    cl.innerHTML = '<div style="color:var(--muted);font-size:.82rem;text-align:center;padding:1.25rem">Complete a course to earn your first certificate!</div>';
    return;
  }
  COMPLETED.forEach(id => {
    const c = allC().find(x => x.id === id); if (!c) return;
    const d = document.createElement('div'); d.className = 'cert-item';
    d.innerHTML = `<div class="cert-icon">🎓</div><div style="flex:1"><div style="font-weight:700;font-size:.875rem;margin-bottom:.1rem">${c.title}</div><div style="font-size:.75rem;color:var(--muted)">IndyTrain · IMCS · Completed</div></div><button class="btn btn-secondary btn-sm" onclick="openCert(${id})">Download</button>`;
    cl.appendChild(d);
  });
}
function toggleEditProf() { const c = document.getElementById('edit-prof'); c.style.display = c.style.display === 'none' ? 'block' : 'none'; }
function saveProf() {
  const n = document.getElementById('edit-name').value || U.name;
  U.name = n; U.ini = n.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
  syncUI(); document.getElementById('edit-prof').style.display = 'none'; toast('Profile updated!', 'success');
}
function handleAva(e) {
  const f = e.target.files[0]; if (!f) return;
  const url = URL.createObjectURL(f);
  ['prof-ava', 'sb-ava', 'top-ava'].forEach(id => { const el = document.getElementById(id); el.innerHTML = `<img src="${url}" alt="avatar">`; });
  toast('Photo updated!', 'success');
}

// ── CERTIFICATE ──
function openCert(cid) {
  const c = allC().find(x => x.id === cid); if (!c) return;
  document.getElementById('cert-course').textContent = c.title;
  document.getElementById('cert-name').textContent = U.name;
  document.getElementById('cert-date').textContent = 'Issued ' + new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' });
  document.getElementById('cert-modal').classList.remove('hidden');
}
function closeCert() { document.getElementById('cert-modal').classList.add('hidden'); }
function dlCert() {
  const win = window.open('', '_blank');
  const html = document.getElementById('cert-preview').outerHTML;
  win.document.write(`<!DOCTYPE html><html><head><title>Certificate — IndyTrain</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet"><style>body{margin:0;padding:2rem;font-family:'Poppins',sans-serif;background:#fff}:root{--gold:#c8a84b;--muted:#6b7280;--border:#e5e3dc;--ink:#0a0a0f}.certificate{background:linear-gradient(135deg,#fefef9,#fffef0);border:2px solid var(--gold);border-radius:12px;padding:2.5rem;text-align:center;position:relative;max-width:680px;margin:0 auto}.cert-border{position:absolute;inset:10px;border:1px solid rgba(200,168,75,.3);border-radius:8px}.cert-logo{font-size:.9rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.12em;margin-bottom:1.25rem}.cert-title{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted);margin-bottom:.4rem}.cert-main{font-size:1.8rem;font-weight:800;margin-bottom:.4rem}.cert-sub{font-size:.85rem;color:var(--muted);margin-bottom:1.25rem}.cert-course-name{font-size:1.25rem;font-weight:800;color:var(--gold);margin-bottom:1.25rem;border-bottom:2px solid rgba(200,168,75,.3);padding-bottom:.875rem}.cert-footer{display:flex;justify-content:space-between;align-items:flex-end;margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid var(--border);font-size:.72rem;color:var(--muted)}.cert-sig-line{width:90px;height:1px;background:var(--ink);margin:.4rem auto .2rem}</style></head><body>${html}<script>window.print()<\/script></body></html>`);
  win.document.close(); toast('Certificate opened — use Ctrl+P / Cmd+P to save as PDF!', 'success');
}

// ── MY PROGRAMS ──
function renderProgs(tab) {
  const g = document.getElementById('prog-grid'); g.innerHTML = '';
  let cs;
  if (tab === 'enrolled') cs = allC().filter(c => ENROLLED.includes(c.id) && !COMPLETED.includes(c.id));
  else if (tab === 'completed') cs = allC().filter(c => COMPLETED.includes(c.id));
  else cs = allC();
  if (!cs.length) {
    g.innerHTML = `<div style="color:var(--muted);font-size:.82rem;padding:1.25rem;grid-column:1/-1">${tab === 'enrolled' ? 'No courses in progress. <a href="#" onclick="nav(\'courses\')" style="color:var(--gold)">Browse modules →</a>' : tab === 'completed' ? 'No completed courses yet — keep going!' : ''}</div>`;
    return;
  }
  cs.forEach(c => g.appendChild(makeCard(c, true)));
}
function switchPT(tab, el) { document.querySelectorAll('.prog-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); renderProgs(tab); }

// ── CHAT ──
function renderRooms() {
  const list = document.getElementById('chat-rooms'); list.innerHTML = '';
  CHAT_ROOMS.forEach(r => {
    const d = document.createElement('div'); d.className = 'cri-wrap' + (r.id === ROOM ? ' active' : '');
    d.innerHTML = `<div class="cri-icon">${r.icon}</div><div style="flex:1;overflow:hidden"><div class="cr-name">#${r.name}</div><div class="cr-prev">${r.prev}</div></div>`;
    d.onclick = () => switchRoom(r.id); list.appendChild(d);
  });
}
function switchRoom(id) {
  ROOM = id; const r = CHAT_ROOMS.find(x => x.id === id);
  document.getElementById('chat-rname').textContent = '#' + r.name;
  document.getElementById('chat-rdesc').textContent = r.desc;
  document.getElementById('chat-icon').textContent = r.icon;
  renderRooms(); renderMsgs();
}
function renderMsgs() {
  const area = document.getElementById('msgs-area'); area.innerHTML = '';
  (CMSGS[ROOM] || []).forEach(m => {
    const d = document.createElement('div'); d.className = 'msg' + (m.own ? ' own' : '');
    d.innerHTML = `${!m.own ? `<div class="msg-ava" style="background:${sclr(m.u)}">${m.i || m.u.slice(0, 2).toUpperCase()}</div>` : ''}<div>${!m.own ? `<div style="font-size:.72rem;font-weight:600;margin-bottom:.15rem;color:var(--muted)">${m.u}</div>` : ''}<div class="msg-bubble">${m.msg}</div><div class="msg-meta">${m.t}</div></div>${m.own ? `<div class="msg-ava" style="background:var(--ink);color:#fff">${U.ini}</div>` : ''}`;
    area.appendChild(d);
  });
  area.scrollTop = area.scrollHeight;
}
function sclr(s) { const c = ['#c8a84b', '#2c3e50', '#8B4513', '#1a3a5c', '#4a1a5c', '#1a5c3a', '#8e44ad']; let h = 0; for (let i = 0; i < s.length; i++) h = s.charCodeAt(i) + ((h << 5) - h); return c[Math.abs(h) % c.length]; }
function sendMsg() {
  const inp = document.getElementById('chat-input'); const txt = inp.value.trim(); if (!txt) return;
  if (!CMSGS[ROOM]) CMSGS[ROOM] = [];
  CMSGS[ROOM].push({ u: U.name, i: U.ini, msg: txt, t: new Date().toLocaleTimeString('en-ZA', { hour: '2-digit', minute: '2-digit' }), own: true });
  inp.value = ''; renderMsgs();
}
function chatKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMsg(); } }

// ── RESOURCES ──
function renderRes() {
  const g = document.getElementById('res-grid'); g.innerHTML = '';
  RESOURCES.forEach(r => {
    const d = document.createElement('div'); d.className = 'res-card';
    d.innerHTML = `<div class="res-thumb" style="background:linear-gradient(135deg,#2c3e50,#1a2a3a)">${r.emoji}</div><div class="res-body"><div class="res-type">${r.type}</div><div class="res-title">${r.title}</div><div class="res-desc">${r.desc}</div><div style="margin-top:.75rem"><a href="${r.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" onclick="event.stopPropagation()">Open →</a></div></div>`;
    g.appendChild(d);
  });
}

// ── ADMIN ──
function renderAdmin() { renderAC(ADMIN_TAB); }
function switchAT(tab, el) { document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active')); el.classList.add('active'); ADMIN_TAB = tab; renderAC(tab); }

function renderAC(tab) {
  const c = document.getElementById('admin-content');
  if (tab === 'videos') {
    c.innerHTML = `
      <div class="section-hdr"><h2>Courses, Videos &amp; Images</h2></div>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:1.25rem">All courses have pre-loaded Google Drive videos. You can replace any video or add a thumbnail image for any course below.</p>
      <div id="vid-list" style="display:flex;flex-direction:column;gap:.875rem"></div>`;
    const vl = document.getElementById('vid-list');
    allC().forEach(course => {
      const ov = VID_OVERRIDES[course.id];
      const defUrl = DEFAULT_VIDS[course.id];
      const hasVid = !!(ov || defUrl);
      const hasImg = !!(IMG_OVERRIDES[course.id] || (COURSE_IMAGES && COURSE_IMAGES[course.id]));
      const d = document.createElement('div'); d.className = 'card'; d.style.overflow = 'visible';
      d.innerHTML = `
        <div class="card-body" style="display:flex;align-items:flex-start;gap:1.1rem">
          <div style="width:44px;height:44px;background:linear-gradient(135deg,${course.color || '#2c3e50'},${course.color || '#2c3e50'}99);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">${course.emoji || '📚'}</div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:.875rem;margin-bottom:.15rem">${course.title}</div>
            <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">${course.cat} · ${course.steps} step${course.steps !== 1 ? 's' : ''}</div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${ov ? '#2563eb' : hasVid ? 'var(--success)' : '#f59e0b'}">
                  🎥 ${ov ? 'Custom video assigned' : hasVid ? 'Default video loaded' : 'No video available'}
                </div>
                <div class="vtab-row" id="vtabs-${course.id}">
                  <button class="vtab active" onclick="switchVT(${course.id},'file',this)">📁 Upload</button>
                  <button class="vtab" onclick="switchVT(${course.id},'gdrive',this)">🔗 Drive Link</button>
                  <button class="vtab" onclick="switchVT(${course.id},'library',this)">📺 Library</button>
                </div>
                <div id="vp-file-${course.id}">
                  <button class="btn btn-primary btn-sm" onclick="trigVid(${course.id})">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>Upload Video</button>
                  <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">MP4, MOV, WebM accepted</div>
                </div>
                <div id="vp-gdrive-${course.id}" style="display:none">
                  <div style="display:flex;gap:.75rem;align-items:flex-end">
                    <div class="form-group" style="margin:0;flex:1"><input type="text" id="gdi-${course.id}" placeholder="Paste Google Drive share link…" value="${ov && ov.type === 'gdrive' ? ov.url : ''}"></div>
                    <button class="btn btn-primary btn-sm" onclick="saveGD(${course.id})">Save</button>
                  </div>
                  <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">Set sharing to "Anyone with the link can view" in Drive first.</div>
                </div>
                <div id="vp-library-${course.id}" style="display:none">
                  <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Additional videos:</div>
                  <div style="display:flex;flex-direction:column;gap:.35rem;max-height:180px;overflow-y:auto">
                    ${EXTRA_VIDS.map(v => `<button class="btn btn-secondary btn-sm" style="justify-content:flex-start;text-align:left" onclick="useLib(${course.id},'${GD(v.id)}','${v.n}')">▶ ${v.n}</button>`).join('')}
                  </div>
                </div>
                ${ov ? `<button class="btn btn-danger btn-sm" style="margin-top:.5rem" onclick="rmVid(${course.id})">Restore Default Video</button>` : ''}
              </div>

              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${IMG_OVERRIDES[course.id] ? '#2563eb' : hasImg ? 'var(--success)' : '#f59e0b'}">
                  🖼 ${IMG_OVERRIDES[course.id] ? 'Custom image uploaded' : hasImg ? 'Default image loaded' : 'No image set'}
                </div>
                ${IMG_OVERRIDES[course.id] || (COURSE_IMAGES && COURSE_IMAGES[course.id]) ? `<img src="${IMG_OVERRIDES[course.id] || COURSE_IMAGES[course.id]}" class="course-thumb-preview" alt="thumbnail">` : ''}
                <button class="btn btn-secondary btn-sm" style="margin-top:.5rem" onclick="trigImg(${course.id})">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>Upload Image</button>
                ${IMG_OVERRIDES[course.id] ? `<button class="btn btn-danger btn-sm" style="margin-top:.4rem;margin-left:.4rem" onclick="rmImg(${course.id})">Remove</button>` : ''}
              </div>
            </div>
          </div>
        </div>`;
      vl.appendChild(d);
    });

  } else if (tab === 'create') {
    c.innerHTML = `
      <div class="section-hdr"><h2>Create New Course</h2></div>
      <div class="card"><div class="card-body" style="max-width:720px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div class="form-group" style="margin:0"><label>Course Title *</label><input type="text" id="nc-title" placeholder="e.g. Client Relationship Management"></div>
          <div class="form-group" style="margin:0"><label>Category *</label>
            <select id="nc-cat"><option value="">Select category</option><option>Editorial</option><option>Sales</option><option>Digital</option><option>AI</option><option>Operations</option><option>Leadership</option></select>
          </div>
          <div class="form-group" style="margin:0"><label>Custom Category (overrides dropdown)</label><input type="text" id="nc-ccat" placeholder="e.g. Photojournalism"></div>
          <div class="form-group" style="margin:0"><label>Emoji Icon</label><input type="text" id="nc-emoji" placeholder="e.g. 📸" maxlength="4"></div>
          <div class="form-group" style="margin:0"><label>Colour</label><input type="color" id="nc-color" value="#2c3e50" style="height:38px;padding:3px 6px"></div>
          <div class="form-group" style="margin:0"><label>Estimated Duration</label><input type="text" id="nc-dur" placeholder="e.g. ~2 hrs"></div>
        </div>
        <div class="form-group"><label>About / Course Description *</label><textarea id="nc-about" placeholder="Describe what cadets will learn in this course…" style="min-height:100px"></textarea></div>
        <div style="margin-bottom:1rem">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem">
            <label style="font-size:.78rem;font-weight:600">Course Modules &amp; Steps</label>
            <button class="btn btn-secondary btn-sm" onclick="addMod()">+ Add Module</button>
          </div>
          <div id="mod-builder"></div>
        </div>
        <div style="margin-bottom:1rem">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem">
            <label style="font-size:.78rem;font-weight:600">Quiz Questions (min 2 to enable quiz)</label>
            <button class="btn btn-secondary btn-sm" onclick="addQQ()">+ Add Question</button>
          </div>
          <div id="qq-builder"></div>
        </div>
        <div style="display:flex;gap:.75rem"><button class="btn btn-primary" onclick="createCourse()">Create Course</button><button class="btn btn-secondary" onclick="resetForm()">Reset</button></div>
      </div></div>`;
    if (!document.querySelector('#mod-builder .mbi')) addMod();

  } else if (tab === 'resources') {
    c.innerHTML = `
      <div class="section-hdr"><h2>Resource Management</h2><button class="btn btn-primary btn-sm" onclick="toast('Add resource — coming soon')">+ Add Resource</button></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Title</th><th>Type</th><th>URL</th><th>Actions</th></tr></thead>
        <tbody>${RESOURCES.map(r => `<tr><td><div style="display:flex;align-items:center;gap:.65rem">${r.emoji}<strong>${r.title}</strong></div></td><td><span class="sbadge active">${r.type}</span></td><td><a href="${r.url}" target="_blank" style="color:var(--gold);font-size:.78rem">${r.url.length > 45 ? r.url.slice(0, 45) + '…' : r.url}</a></td><td><div style="display:flex;gap:.35rem"><button class="btn btn-secondary btn-sm">Edit</button><button class="btn btn-danger btn-sm">Remove</button></div></td></tr>`).join('')}</tbody>
      </table></div>`;
  }
}

// ── VIDEO MANAGEMENT ──
function switchVT(cid, type, el) {
  document.getElementById('vtabs-' + cid).querySelectorAll('.vtab').forEach(t => t.classList.remove('active')); el.classList.add('active');
  ['file', 'gdrive', 'library'].forEach(t => { const p = document.getElementById('vp-' + t + '-' + cid); if (p) p.style.display = t === type ? 'block' : 'none'; });
}
let PVC = null;
function trigVid(cid) { PVC = cid; document.getElementById('vid-input').click(); }
function handleVidFile(e) {
  const f = e.target.files[0]; if (!f || !PVC) return;
  const url = URL.createObjectURL(f);
  VID_OVERRIDES[PVC] = { type: 'file', url };
  const c = allC().find(x => x.id === PVC);
  toast('Video uploaded for "' + c.title + '"!', 'success'); renderAC('videos'); e.target.value = '';
}
function saveGD(cid) {
  const url = (document.getElementById('gdi-' + cid) || {}).value;
  if (!url || !url.trim()) { toast('Please enter a Google Drive link', 'error'); return; }
  const clean = url.trim().replace('/view', '/preview').replace('open?id=', 'file/d/').replace(/\/edit.*$/, '/preview');
  VID_OVERRIDES[cid] = { type: 'gdrive', url: clean };
  const c = allC().find(x => x.id === cid);
  toast('Drive link saved for "' + c.title + '"!', 'success'); renderAC('videos');
}
function useLib(cid, url, name) {
  VID_OVERRIDES[cid] = { type: 'gdrive', url };
  const c = allC().find(x => x.id === cid);
  toast('"' + name + '" assigned to "' + c.title + '"!', 'success'); renderAC('videos');
}
function rmVid(cid) {
  delete VID_OVERRIDES[cid];
  const c = allC().find(x => x.id === cid);
  toast('Default video restored for "' + c.title + '"'); renderAC('videos');
}

// ── IMAGE MANAGEMENT ──
let PIC = null;
function trigImg(cid) { PIC = cid; document.getElementById('img-input').click(); }
function handleImgFile(e) {
  const f = e.target.files[0]; if (!f || !PIC) return;
  const reader = new FileReader();
  reader.onload = evt => {
    IMG_OVERRIDES[PIC] = evt.target.result;
    const c = allC().find(x => x.id === PIC);
    toast('Image uploaded for "' + c.title + '"!', 'success'); renderAC('videos'); e.target.value = '';
  };
  reader.readAsDataURL(f);
}
function rmImg(cid) {
  delete IMG_OVERRIDES[cid];
  const c = allC().find(x => x.id === cid);
  toast('Image removed from "' + c.title + '"'); renderAC('videos');
}

// ── CREATE COURSE ──
function addMod() {
  const list = document.getElementById('mod-builder'); if (!list) return;
  const id = ++MC;
  const d = document.createElement('div'); d.className = 'mbi'; d.id = 'mb-' + id;
  d.innerHTML = `
    <div class="mbh"><input type="text" placeholder="Module name" id="mn-${id}"><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('mb-${id}').remove()">✕</button></div>
    <div class="sbl" id="ms-${id}">
      <div class="sbr"><input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button></div>
    </div>
    <div style="padding:.5rem .875rem;border-top:1px solid var(--border)"><button class="btn btn-secondary btn-sm" onclick="addStep(${id})">+ Add Step</button></div>`;
  list.appendChild(d);
}
function addStep(mid) {
  const l = document.getElementById('ms-' + mid); if (!l) return;
  const d = document.createElement('div'); d.className = 'sbr';
  d.innerHTML = `<input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button>`;
  l.appendChild(d);
}
function addQQ() {
  const list = document.getElementById('qq-builder'); if (!list) return;
  const id = ++QC;
  const d = document.createElement('div'); d.className = 'card mb-2'; d.id = 'qq-' + id;
  d.innerHTML = `
    <div class="card-header"><h3 style="font-size:.82rem">Question ${id}</h3><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('qq-${id}').remove()">✕</button></div>
    <div class="card-body" style="padding:1rem">
      <div class="form-group"><label>Question text</label><input type="text" id="qqt-${id}" placeholder="Enter your question…"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:.75rem">
        <div class="form-group" style="margin:0"><label>Option A</label><input type="text" id="qqa-${id}"></div>
        <div class="form-group" style="margin:0"><label>Option B</label><input type="text" id="qqb-${id}"></div>
        <div class="form-group" style="margin:0"><label>Option C (optional)</label><input type="text" id="qqc-${id}"></div>
        <div class="form-group" style="margin:0"><label>Option D (optional)</label><input type="text" id="qqd-${id}"></div>
      </div>
      <div class="form-group" style="margin:0"><label>Correct Answer</label>
        <select id="qqs-${id}"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select>
      </div>
    </div>`;
  list.appendChild(d);
}
function createCourse() {
  const title = (document.getElementById('nc-title') || {}).value || '';
  const cat = (document.getElementById('nc-ccat') || {}).value || (document.getElementById('nc-cat') || {}).value || '';
  const about = (document.getElementById('nc-about') || {}).value || '';
  if (!title.trim() || !cat.trim() || !about.trim()) { toast('Please fill in Title, Category, and Description', 'error'); return; }
  const emoji = (document.getElementById('nc-emoji') || {}).value || '📚';
  const color = (document.getElementById('nc-color') || {}).value || '#2c3e50';
  const dur = (document.getElementById('nc-dur') || {}).value || '~1 hr';
  const modules = []; let totalS = 0;
  document.querySelectorAll('.mbi').forEach(mb => {
    const inp = mb.querySelector('input[type="text"]');
    const mname = inp ? inp.value.trim() : 'Module';
    const steps = [];
    mb.querySelectorAll('.sti').forEach(i => { if (i.value.trim()) steps.push({ t: i.value.trim(), d: '' }); });
    if (steps.length) { modules.push({ name: mname, steps }); totalS += steps.length; }
  });
  const quiz = [];
  document.querySelectorAll('[id^="qqt-"]').forEach(el => {
    const id = el.id.split('-')[1];
    const q = el.value.trim();
    const a = (document.getElementById('qqa-' + id) || {}).value || '';
    const b = (document.getElementById('qqb-' + id) || {}).value || '';
    const cv = (document.getElementById('qqc-' + id) || {}).value || '';
    const d2 = (document.getElementById('qqd-' + id) || {}).value || '';
    const ans = parseInt((document.getElementById('qqs-' + id) || {}).value || '0');
    const opts = [a, b, cv, d2].filter(Boolean);
    if (q && opts.length >= 2) quiz.push({ q, opts, ans: Math.min(ans, opts.length - 1) });
  });
  const nid = Date.now();
  CUSTOM.push({ id: nid, title: title.trim(), cat: cat.trim(), emoji, color, about: about.trim(), steps: totalS || 1, dur, rating: 'New', badge: emoji, modules, quiz });
  renderDash(); renderCourses();
  toast('"' + title.trim() + '" course created successfully!', 'success');
  const vtab = document.querySelector('.admin-tab'); if (vtab) vtab.click();
  resetForm();
}
function resetForm() {
  ['nc-title', 'nc-about', 'nc-emoji', 'nc-dur', 'nc-ccat'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  const cat = document.getElementById('nc-cat'); if (cat) cat.value = '';
  const col = document.getElementById('nc-color'); if (col) col.value = '#2c3e50';
  const mb = document.getElementById('mod-builder'); if (mb) mb.innerHTML = '';
  const qb = document.getElementById('qq-builder'); if (qb) qb.innerHTML = '';
  MC = 0; QC = 0; addMod();
}

// ── TOAST ──
function toast(msg, type = 'info') {
  const tc = document.getElementById('toasts');
  const t = document.createElement('div'); t.className = 'toast ' + type;
  t.innerHTML = `<span>${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span><span>${msg}</span>`;
  tc.appendChild(t);
  setTimeout(() => { t.style.animation = 'sIn .3s ease reverse'; setTimeout(() => t.remove(), 280); }, 3500);
}

// ── RESPONSIVE ──
function chkMob() { document.getElementById('menu-btn').style.display = window.innerWidth <= 768 ? 'flex' : 'none'; }
window.addEventListener('resize', chkMob); chkMob();
