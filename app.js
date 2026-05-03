// IndyTrain — combined data + app (auto-generated)
/* ============================================================
   IndyTrain — data.js
   Edit this file to add/update courses, resources, chat rooms.
   ============================================================ */

// ── GOOGLE DRIVE VIDEO EMBED HELPER ──
const GD = id => `https://drive.google.com/file/d/${id}/preview`;

// ── DEFAULT VIDEOS (pre-mapped from Google Drive) ──
// Editorial = Devereaux Morkel's videos
// Sales = Training Workflow document videos
const DEFAULT_VIDS = {
  // Editorial
  1:   GD('1ZMO4x50XtQNbY-25_KIl6YCdp3wfrQXF'),
  2:   GD('1zy6uKZyUXl6izuKB090okPqmWWfO8OD8'),
  3:   GD('1uOG4iC1n9uBPbmCx5H7f76sh5CPEV293'),
  4:   GD('12dMdFE0TDH3yu6_qtk-v8zvPfP_6VWod'),
  5:   GD('15iIFEmzIwiP6XRTebzPspthJItHv0h7W'),
  6:   GD('1YNsK43hUZp72hACEECt-nP-sv1oYqpFd'),
  7:   GD('17Xl9OASABt0qd5uRShO_ohs0jc5_L0z7'),
  8:   GD('1uChWCXH-yA8GC2_AMSuAL7S6t5VK1RUS'),
  9:   GD('1uA5XlGs7okac69O8cDpR8faFWj3jxc40'),
  10:  GD('1YH6JvAcjf2KvRRCPppMr07ZadO4P-rZR'),
  11:  GD('1DbkOmDWE7aGfjYGAnNb6UwqWpsdMuY8K'),
  // Sales (Training Workflow)
  101: GD('1Rmq6UBwhomVK2mn-E6Ge_1dcEwylUf0L'),
  102: GD('1068bUmMpjlJGmaj6NJJyod-eK926dTJN'),
  103: GD('1_RIyVqRubNHrd4gVyK90DCQTm-BDLI_a'),
  104: GD('1muurwW5pwq5uWpC-Ay0um42zLeIclw5a'),
  105: GD('16B9mnjwPuYF4Lc_FnOQ-QQXRQiFm2ZBy'),
  106: GD('1ClnQmpRZu-pAhTZRlrXHVP5-kKXsoT6T'),
  107: GD('1mKvXiYEOIPJpoF4O0RftxyNtxu6lyF6k'),
  108: GD('1cq36weEuPdAe3u6vSyvxNhspizjbsG68'),
  109: GD('1ldbbC8foH3ZbOtiHKUmpKZFFaT1OX21Z'),
};

// ── EXTRA VIDEO LIBRARY (available for admin to assign) ──
const EXTRA_VIDS = [
  { n: 'Subbing.mp4',                                     id: '1qxi0YNYsp8Yj4NpJ6piEoLD7Y_h_neaY' },
  { n: 'Before You Go On-Air.mp4',                        id: '1se5ihOYdGOmsQH-zB14Q5ZBk_8vXQHx-' },
  { n: 'Podcasting Basics.mp4',                           id: '1LuRP-6fdHMsQnV-jbd4khGcRkPXfQe1T' },
  { n: 'Filing from the Field.mp4',                       id: '1oIxRH_WfkFF0LdN338z8U23HNeGcUoqk' },
  { n: 'Piece-to-Camera (PTC) Scriptwriting.mp4',         id: '1so_ETINsvxLmd1Z2RSlgArcnXy7KA1Fb' },
  { n: 'Writing Engaging Captions.mp4',                   id: '1kxcnr6jIn62Va5a6q2A3e2o4BsF4RET2' },
  { n: 'Repurposing Content for Different Platforms.mp4', id: '1sOqkn4Gi-U5mmjAjisVfL_j9j4RMdBda' },
  { n: 'Basic Analytics for Tracking.mp4',                id: '1tXr72clUjVipD8d1K1O9ArflxUm8US33' },
  { n: 'Tone and Voice.mp4',                              id: '1_VLiROfKLUNv_a-M-XmmnFG_Jf3GMGvt' },
  { n: 'Mobile-First Design & Social Distribution.mp4',   id: '1rYhGihQl9RQ48YG0cZGmsWFGR5i8xHuM' },
  { n: 'Accessibility — Contrast and Legibility.mp4',     id: '1u2pVlIq3-C_UoAIxpx86tjdK0KfxQTC7' },
  { n: 'Ethical Image Sourcing.mp4',                      id: '18AEXJ-K84Q-iS8SpiAE4hcAavFkpisXD' },
  { n: 'Creating for Formats (Reels, Stories).mp4',       id: '1MLecgD0KAGMpk02s0tuPLhUG0Bwlgd_H' },
  { n: 'From Press Release to Story.mp4',                 id: '14-wCMfTE3eL4qVeEuCYnqbBox8Ruq8Ub' },
];

// ── COURSE IMAGES ──
// Uses Unsplash source for royalty-free relevant thumbnails.
// To use your own image: set img to a full URL or relative path.
const COURSE_IMAGES = {
  1:   'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',  // writing/journalism
  2:   'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',  // pitch meeting
  3:   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',  // newspaper headline
  4:   'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80',  // google/search
  5:   'https://images.unsplash.com/photo-1616587896595-51d3b6b6e0c7?w=600&q=80',  // multimedia/camera
  6:   'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',  // social media
  7:   'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',  // design
  8:   'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',  // AI/Gemini
  9:   'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&q=80',  // notebook/research
  10:  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',  // investigative/docs
  11:  'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&q=80',  // journalism 101
  101: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',  // welcome/office
  102: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',  // volt africa/team
  103: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',  // digital landscape
  104: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=600&q=80',  // social media landscape
  105: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',  // digital ecosystem
  106: 'https://images.unsplash.com/photo-1565372745085-5ba16a69f1e0?w=600&q=80',  // paid media
  107: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',  // opportunities
  108: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',  // workflow
  109: 'https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?w=600&q=80',  // strategy
};

// ── COURSES ──
// To add a course: append a new object to this array.
// To update: find the course by id and edit its fields.
const COURSES = [
  // ════════════════════════════════
  // EDITORIAL
  // ════════════════════════════════
  {
    id: 1, title: "Writing and Content Creation", cat: "Editorial",
    emoji: "✍️", color: "#2c3e50", rating: "4.9", badge: "✍️",
    steps: 10, dur: "~3 hrs",
    about: "Master the fundamentals of journalism writing. Develop essential skills in news writing, feature writing, and digital storytelling. Covers the inverted pyramid, subbing, copy editing, interview techniques, and editorial ethics.",
    modules: [
      { name: "Basics of Writing", steps: [
        { t: "The Inverted Pyramid", d: "Most important information first, then supporting details, then background." },
        { t: "News Values", d: "The six core news values: timeliness, proximity, prominence, consequence, human interest, and conflict." }
      ]},
      { name: "Subbing", steps: [
        { t: "Introduction to Copy Editing", d: "Checking facts, correcting grammar and spelling, ensuring house style, and improving readability." },
        { t: "Headline Craft", d: "Write accurate, active, and engaging headlines. Avoid clickbait while still drawing readers in." },
        { t: "Story Flow and Transitions", d: "Linking paragraphs logically and keeping readers engaged." }
      ]},
      { name: "Feature Writing", steps: [
        { t: "Long-form Storytelling", d: "Structure a feature with a compelling lede, nut graf, body, and kicker." },
        { t: "Interviewing Techniques", d: "Plan effective interviews, ask open-ended questions, actively listen, and extract usable quotes." },
        { t: "Source Verification", d: "Multi-source confirmation, document checking, and digital verification tools." }
      ]},
      { name: "Ethics & Standards", steps: [
        { t: "Editorial Ethics", d: "Truth, fairness, independence, and accountability in journalism." },
        { t: "Plagiarism and Attribution", d: "Understand plagiarism, correct attribution, and why it builds credibility." },
        { t: "Fact-Checking", d: "Systematic fact-checking — names, dates, titles, statistics, and claims before publication." }
      ]}
    ],
    quiz: [
      { q: "What does the 'inverted pyramid' structure mean in news writing?", opts: ["A visual layout technique", "The most important information comes first, followed by supporting details", "Stories start with background and build to the main point", "Headlines at the bottom"], ans: 1 },
      { q: "Which of the following is NOT one of the six core news values?", opts: ["Timeliness", "Proximity", "Profitability", "Human interest"], ans: 2 },
      { q: "In journalism, 'subbing' refers to:", opts: ["Submitting articles", "Substituting sources", "Copy editing and subediting a story", "Writing sub-headings only"], ans: 2 },
      { q: "Why is source verification critical before publishing?", opts: ["It makes articles longer", "To ensure accuracy and maintain journalistic credibility", "Sources prefer it", "It improves SEO"], ans: 1 },
      { q: "Plagiarism in journalism is best defined as:", opts: ["Writing too quickly", "Using another person's work or ideas without proper attribution", "Quoting sources directly", "Writing in a similar style to other journalists"], ans: 1 }
    ]
  },
  {
    id: 2, title: "Pitch Perfect", cat: "Editorial",
    emoji: "🎯", color: "#8B4513", rating: "4.7", badge: "🎯",
    steps: 6, dur: "~2 hrs",
    about: "A practical, self-paced program for journalists focused on pitching ideas and turning ideas into a story. Learn how to identify strong story ideas, craft compelling pitches that grab an editor's attention, and understand what publications are really looking for.",
    modules: [{ name: "Pitching Ideas", steps: [
      { t: "What Makes a Great Pitch", d: "The hook, the angle, the why-now factor, your credentials, and the proposed approach." },
      { t: "Knowing Your Audience", d: "Research the publication and tailor your pitch to the right editor." },
      { t: "Crafting the Perfect Subject Line", d: "Your subject line is your headline — make it specific, urgent, and interesting." },
      { t: "From Idea to Story", d: "Sharpen a vague idea into a clear, focused pitch." },
      { t: "Following Up Professionally", d: "The etiquette of following up on unanswered pitches." },
      { t: "Common Pitch Mistakes", d: "Being too vague, pitching the wrong publication, over-explaining." }
    ]}],
    quiz: [
      { q: "What is the most important element of a compelling pitch?", opts: ["Length", "A clear, specific news angle that serves the publication's readers", "The journalist's personal background", "A list of all possible sources"], ans: 1 },
      { q: "The 'why now' element of a pitch refers to:", opts: ["The time of day you send the email", "The reason this story is relevant and timely right now", "How quickly you can write the piece", "Your deadline availability"], ans: 1 },
      { q: "When following up on an unanswered pitch, you should:", opts: ["Send a follow-up daily", "Wait at least 5–7 business days before a single polite follow-up", "Never follow up", "Call the editor directly on the same day"], ans: 1 },
      { q: "Which of these makes a pitch WEAKER?", opts: ["Including your credentials", "Explaining the reader benefit", "Being vague about the story angle", "Proposing a specific format"], ans: 2 }
    ]
  },
  {
    id: 3, title: "Headline Writing and SEO", cat: "Editorial",
    emoji: "📰", color: "#1a3a5c", rating: "4.8", badge: "📰",
    steps: 9, dur: "~2.5 hrs",
    about: "Craft click-worthy, accurate headlines that serve both readers and search engines. Learn practical techniques to sharpen clarity, boost curiosity without clickbait, and apply simple SEO principles so your stories are easier to find online.",
    modules: [
      { name: "The Basics", steps: [
        { t: "Psychology of Headlines", d: "Curiosity gaps, specificity, and emotional triggers in headlines." },
        { t: "Active Voice and Strong Verbs", d: "Practise converting passive constructions into punchy, active headline forms." },
        { t: "Accuracy First", d: "The line between engaging and misleading — accuracy in headlines is non-negotiable." },
        { t: "Numbers and Power Words", d: "When and how to use numbers, questions, and power words without tipping into clickbait." }
      ]},
      { name: "SEO for Headlines", steps: [
        { t: "Keyword Research Basics", d: "Use Google Trends and Search Console to find what readers are searching for." },
        { t: "Where to Place Keywords", d: "Front-loading your primary keyword improves both SEO and reader comprehension." },
        { t: "Metadata and Slugs", d: "Write slug-friendly URLs that are clean and keyword-rich." },
        { t: "Balancing SEO and Creativity", d: "Write the creative headline first, then optimise for SEO." },
        { t: "Analytics and Testing", d: "Use CMS analytics and Search Console to understand which headlines perform best." }
      ]}
    ],
    quiz: [
      { q: "Which headline principle states that important keywords should appear early?", opts: ["Backloading", "Front-loading", "Passive placement", "Metadata stuffing"], ans: 1 },
      { q: "What is a 'URL slug' in web publishing?", opts: ["A type of clickbait headline", "The URL-friendly version of your article title", "A description tag only search engines see", "The author byline in a URL"], ans: 1 },
      { q: "'Man arrested' is weaker than 'Police arrest Cape Town man for fraud' because:", opts: ["The second is longer", "The second is more specific, active, and informative", "The first is more accurate", "Length determines quality"], ans: 1 },
      { q: "Which tool would you use to find keywords readers are searching for?", opts: ["Microsoft Word", "Google Trends and Google Search Console", "Instagram Insights", "Your editor's opinion"], ans: 1 }
    ]
  },
  {
    id: 4, title: "Good for Google", cat: "Editorial",
    emoji: "🔍", color: "#1a5c3a", rating: "4.6", badge: "🔍",
    steps: 9, dur: "~2 hrs",
    about: "Master Google's content guidelines, search optimisation principles, and how to make your journalism discoverable online. Covers E-E-A-T, Google News Publisher Centre, structured data, and how modern journalists can work with — rather than against — Google's algorithms.",
    modules: [
      { name: "Google & News", steps: [
        { t: "How Google Indexes News", d: "How stories are discovered, ranked, and displayed. What signals Google uses to determine news quality." },
        { t: "Google News Publisher Centre", d: "Setup and management of your publication in Google News Publisher Centre." },
        { t: "E-E-A-T Principles", d: "Experience, Expertise, Authoritativeness, and Trustworthiness — and what they mean for journalism and bylines." },
        { t: "Author Pages and Bylines", d: "Build author profiles and structured data that signals expertise to search engines." }
      ]},
      { name: "Optimisation", steps: [
        { t: "Structured Data for News", d: "How implementing Article schema helps Google understand and surface your content." },
        { t: "Page Speed and Core Web Vitals", d: "Why page speed matters for both readers and Google rankings." },
        { t: "Mobile-First Writing", d: "Formatting and structural choices that make articles readable on small screens." },
        { t: "Google Analytics for Journalists", d: "Navigate Google Analytics to understand your audience, traffic sources, and most-read stories." },
        { t: "Search Console Deep Dive", d: "Use Search Console to see which queries drive traffic to your stories." }
      ]}
    ],
    quiz: [
      { q: "What does E-E-A-T stand for in Google's quality guidelines?", opts: ["Engage, Evaluate, Analyse, Track", "Experience, Expertise, Authoritativeness, Trustworthiness", "Edit, Enhance, Approve, Test", "Explore, Explain, Apply, Transform"], ans: 1 },
      { q: "What is the Google News Publisher Centre used for?", opts: ["Paying for Google advertising", "Claiming and managing your publication's presence in Google News", "Submitting press releases to Google", "Monitoring competitors"], ans: 1 },
      { q: "Why is mobile-first formatting important for digital journalism?", opts: ["Google penalises desktop websites", "The majority of news readers access content on mobile devices", "Mobile articles rank higher regardless of content", "Advertisers prefer mobile content"], ans: 1 }
    ]
  },
  {
    id: 5, title: "Multimedia Content Creation", cat: "Editorial",
    emoji: "🎬", color: "#4a1a5c", rating: "4.9", badge: "🎬",
    steps: 12, dur: "~4 hrs",
    about: "Produce compelling videos, podcasts, and multimedia content that engage modern audiences across platforms. Covers writing for radio and broadcast, podcasting fundamentals, video journalism, photography for news, and how to package multimedia stories effectively.",
    modules: [
      { name: "Writing For Radio", steps: [
        { t: "Radio Writing Fundamentals", d: "Radio is written for the ear. Conversational writing, short sentences, active voice." },
        { t: "Script Structure", d: "How a radio news bulletin, package, and voicer are structured." },
        { t: "The Sound of Words", d: "Read copy aloud and edit for rhythm, clarity, and natural cadence." }
      ]},
      { name: "Podcasting", steps: [
        { t: "Podcast Formats and Planning", d: "Interview, narrative, panel, solo formats. Plan a podcast from concept to rundown." },
        { t: "Recording Quality", d: "Microphone placement, room acoustics, recording environment." }
      ]},
      { name: "Video Journalism", steps: [
        { t: "Shooting on a Smartphone", d: "Framing, the rule of thirds, stable handheld techniques, and capturing usable footage in the field." },
        { t: "Video Story Structure", d: "Establishing shot, interview setup, B-roll, and piece-to-camera." },
        { t: "Basic Video Editing", d: "Cuts, transitions, text overlays, and exporting for social media." },
        { t: "B-Roll and Visual Storytelling", d: "What makes good B-roll and how to use visuals to show — not just tell — your story." }
      ]},
      { name: "Photography for News", steps: [
        { t: "News Photography Basics", d: "Composition fundamentals: the decisive moment, framing, light." },
        { t: "Caption Writing", d: "Write informative, accurate captions that answer who, what, where, when." },
        { t: "Photo Ethics", d: "Manipulation, consent, contextualisation, and the power that images carry." }
      ]}
    ],
    quiz: [
      { q: "What is the primary difference between writing for radio versus writing for print?", opts: ["Radio copy is always shorter", "Radio is written to be heard once — it must be conversational and immediately clear", "Print articles are less factual", "Radio requires more sources"], ans: 1 },
      { q: "The 'rule of thirds' in photography and video composition means:", opts: ["Always use three cameras", "Dividing the frame into a 3x3 grid and placing subjects along the lines or at intersections", "Filming three versions of every shot", "Using thirds of the day"], ans: 1 },
      { q: "What is B-roll footage?", opts: ["Backup footage stored on a second drive", "Supplementary visuals that support and illustrate the main interview or narration", "Black-and-white archival footage", "The first roll of footage shot on location"], ans: 1 },
      { q: "For podcast recording, the best environment is:", opts: ["A large echo-filled hall", "Outdoors to capture ambient sound", "A small, soft-furnished room that absorbs sound reflections", "Near air conditioning"], ans: 2 }
    ]
  },
  {
    id: 6, title: "Social Media and Distribution", cat: "Editorial",
    emoji: "📱", color: "#5c1a1a", rating: "4.7", badge: "📱",
    steps: 9, dur: "~2.5 hrs",
    about: "Build a social media strategy that amplifies your journalism and grows your audience. Platform-specific strategies for X, Instagram, LinkedIn, and TikTok, as well as newsletter fundamentals, community building, algorithm insights, and analytics.",
    modules: [
      { name: "Platform Strategy", steps: [
        { t: "X (Twitter) for Journalists", d: "Breaking news, live-tweeting, building threads, and engaging with peers and sources ethically." },
        { t: "Instagram for News", d: "Stories, Reels, carousels, and captions to tell news stories visually." },
        { t: "LinkedIn for Journalists", d: "Build a professional profile, share long-form journalism, and network with industry professionals." },
        { t: "TikTok and Short-Form Video", d: "Reach younger audiences with short-form video journalism." }
      ]},
      { name: "Distribution", steps: [
        { t: "Newsletter Fundamentals", d: "Build a subscriber list, design an effective newsletter, and write subject lines that get opened." },
        { t: "Community Building", d: "Engaging readers meaningfully, managing comments, and building membership." },
        { t: "Understanding Algorithms", d: "Key ranking signals for major platforms and how to work with algorithms." },
        { t: "Analytics and Growth", d: "Use platform analytics to understand what content performs and when." },
        { t: "Audience Engagement Ethics", d: "Ethical boundaries of social media engagement." }
      ]}
    ],
    quiz: [
      { q: "What is 'earned media' in the context of content distribution?", opts: ["Paid social media advertising", "Organic coverage, shares, or mentions your content receives from others without payment", "Your publication's own website and channels", "Licensing fees"], ans: 1 },
      { q: "Which statement about social media algorithms is most accurate?", opts: ["Algorithms show content to all followers equally", "Algorithms prioritise content that generates engagement — reactions, comments, and shares", "Algorithms only favour paid content", "Algorithms are irrelevant to organic reach"], ans: 1 },
      { q: "What is the most important metric for measuring a newsletter's effectiveness?", opts: ["Number of subscribers", "Open rate and click-through rate", "Social media followers", "Length of each newsletter"], ans: 1 }
    ]
  },
  {
    id: 7, title: "Basic Design", cat: "Editorial",
    emoji: "🎨", color: "#2d5a1a", rating: "4.8", badge: "🎨",
    steps: 8, dur: "~2 hrs",
    about: "Master the design fundamentals every digital journalist needs. Typography, colour theory, layout basics, and how to use tools like Canva to produce graphics, social cards, and basic page layouts that elevate your journalism without requiring a professional designer.",
    modules: [
      { name: "Design Principles", steps: [
        { t: "Typography for Journalists", d: "Serif vs. sans-serif, font pairing, hierarchy, line length, and spacing." },
        { t: "Colour Theory", d: "The colour wheel, complementary and analogous colours, contrast ratios for accessibility." },
        { t: "Layout and White Space", d: "White space, visual hierarchy, alignment, and how to direct a reader's eye." },
        { t: "Visual Hierarchy", d: "How size, weight, colour, and placement create an order of importance." }
      ]},
      { name: "Digital Design Tools", steps: [
        { t: "Canva for Journalists", d: "Building social media graphics, quote cards, story templates, infographics, and article thumbnails." },
        { t: "Image Selection and Editing", d: "Selecting powerful news images and basic editing." },
        { t: "Accessible Design", d: "Minimum contrast ratios, alt text for images, and readable font sizes." },
        { t: "Branding Consistency", d: "Apply brand guidelines consistently across all visual content." }
      ]}
    ],
    quiz: [
      { q: "In typography, a 'serif' font is best described as:", opts: ["A font without any decorative strokes", "A font with small decorative strokes at the ends of letterforms", "A font used only for headlines", "A monospace coding font"], ans: 1 },
      { q: "What does 'white space' accomplish in graphic design?", opts: ["It is wasted space that should always be filled", "It improves readability, reduces cognitive load, and directs focus", "It makes designs look unfinished", "It is only relevant for print"], ans: 1 },
      { q: "Visual hierarchy in design refers to:", opts: ["Ordering designers by seniority", "Arranging design elements so viewers naturally look at the most important elements first", "Using only two font sizes", "Stacking images vertically"], ans: 1 }
    ]
  },
  {
    id: 8, title: "Gemini for Newsrooms", cat: "Editorial",
    emoji: "🤖", color: "#1a2a5c", rating: "4.9", badge: "🤖",
    steps: 7, dur: "~1.5 hrs",
    about: "Unlock the power of generative AI in journalism. This practical training equips journalists, editors, and content teams with the skills to effectively use Gemini AI in their daily workflows — from headlines and summaries to research, fact-checking, and ethical AI use.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "Introduction to Gemini AI", d: "What Gemini is and why AI tools are becoming essential in modern newsrooms." },
      { t: "What is a Prompt? — Prompt Engineering", d: "The key ingredients of a high-quality prompt and why they matter for getting accurate, useful outputs." },
      { t: "Generating Headlines and Summaries", d: "Rapidly generate headline options, article summaries, social media captions, and newsletter blurbs." },
      { t: "Research and Fact-Checking Assistance", d: "Use AI to identify research directions and flag claims that need verification." },
      { t: "Gems — Custom AI Assistants", d: "Create custom AI assistants for specific journalism tasks." },
      { t: "Deep Research Function", d: "Gemini's Deep Research function for investigative journalism and in-depth reporting." },
      { t: "Ethics and Responsible AI Use", d: "AI hallucinations, copyright concerns, and maintaining editorial independence." }
    ]}],
    quiz: [
      { q: "Which of the following is NOT a goal of Google's Gemini for News initiative?", opts: ["Advancing quality journalism", "Strengthening business models", "Replacing human editors", "Cultivating a global news community"], ans: 2 },
      { q: "What is a 'prompt' in the context of using Gemini?", opts: ["A reminder notification", "The instruction or question you give to Gemini to guide its response", "A type of headline format", "A Google advertising format"], ans: 1 },
      { q: "What is the purpose of 'Gems' in Gemini?", opts: ["To store images", "To train custom AI assistants for specific tasks", "To translate documents", "To generate headlines randomly"], ans: 1 },
      { q: "Gemini-generated images are digitally watermarked to show they are AI-generated.", opts: ["True", "False"], ans: 0 },
      { q: "Which of the following is an example of a high-quality prompt?", opts: ["Give me ideas", "Write something good", "Act as an expert on healthy ageing and list activities for seniors with limited mobility", "Make something cool"], ans: 2 },
      { q: "An 'AI hallucination' refers to:", opts: ["A journalist using AI for creative inspiration", "When an AI model generates false or fabricated information presented as fact", "AI generating overly creative headlines", "Using AI tools while fatigued"], ans: 1 }
    ]
  },
  {
    id: 9, title: "NotebookLM Training", cat: "Editorial",
    emoji: "📓", color: "#2a1a5c", rating: "4.8", badge: "📓",
    steps: 6, dur: "~1.5 hrs",
    about: "Use Google's NotebookLM to organise research, synthesise sources, and produce smarter journalism faster. Covers creating notebooks, uploading and querying source documents, the Audio Overview feature, and using NotebookLM for investigative journalism workflows.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "Introduction to NotebookLM", d: "What NotebookLM is and how it differs from general AI chatbots. NotebookLM is grounded in your uploaded sources." },
      { t: "Creating Notebooks and Uploading Sources", d: "Create a notebook, upload documents (PDFs, Google Docs, pasted text, web links), and organise source material." },
      { t: "Asking Questions of Your Documents", d: "Ask for summaries, specific facts, comparisons between sources, and identifying contradictions." },
      { t: "Cross-Source Synthesis", d: "Identify themes, contradictions, and information gaps across multiple sources." },
      { t: "Audio Overview Feature", d: "Generate a spoken-word podcast-style briefing of your source documents — ideal for pre-interview prep." },
      { t: "Investigative Journalism Workflows", d: "Analysing leaked documents, cross-referencing financial records, and building a research base for long-form journalism." }
    ]}],
    quiz: [
      { q: "What is the main function of NotebookLM for journalists?", opts: ["Designing infographics", "AI-powered research grounded in your uploaded sources", "Social media automation", "Podcast editing"], ans: 1 },
      { q: "NotebookLM uses your uploaded data to train its models.", opts: ["True", "False"], ans: 1 },
      { q: "NotebookLM allows users to collaborate with a virtual research assistant that can cite sources.", opts: ["True", "False"], ans: 0 },
      { q: "How does NotebookLM help users ensure the accuracy of the information it provides?", opts: ["It searches the internet in real time", "It cites the specific sources from your uploaded documents for every response", "It uses a fact-checking algorithm", "It randomly samples internet data"], ans: 1 }
    ]
  },
  {
    id: 10, title: "Google Pinpoint Training", cat: "Editorial",
    emoji: "📌", color: "#5c3a1a", rating: "4.7", badge: "📌",
    steps: 7, dur: "~2 hrs",
    about: "Master Google Pinpoint for investigative journalism — search thousands of documents, audio, and images at scale. Pinpoint uses machine learning to automatically identify and label people, organisations, and locations across large document collections.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "What is Google Pinpoint?", d: "Search and analyse large collections of documents, images, and audio files using AI-powered entity recognition." },
      { t: "Uploading Document Collections", d: "Create a collection, upload bulk documents (PDFs, images, audio), and organise collections by investigation." },
      { t: "Effective Search Strategies", d: "Search for people, organisations, and locations across thousands of documents simultaneously." },
      { t: "Entity Recognition", d: "Pinpoint automatically identifies and labels named entities — people, organisations, and places — across your documents." },
      { t: "Pattern Spotting Across Documents", d: "Identify which entities appear together most often and build a picture of relationships." },
      { t: "Cross-Referencing Documents", d: "Finding contradictions, confirming details, and building a timeline of events." },
      { t: "Exporting and Documenting Findings", d: "Export findings for use in your reporting and document your methodology for editors." }
    ]}],
    quiz: [
      { q: "Google Pinpoint is primarily designed for journalists who need to:", opts: ["Write articles faster", "Search and analyse large collections of documents using AI-powered entity recognition", "Schedule social media posts", "Build news websites"], ans: 1 },
      { q: "'Entity recognition' in Pinpoint refers to:", opts: ["User account login processes", "The automatic identification and labelling of people, organisations, and locations across documents", "Photo recognition technology", "Pinpoint's pricing model"], ans: 1 },
      { q: "When using Pinpoint for investigative journalism, which approach is MOST effective?", opts: ["Read every document manually before uploading", "Upload the complete document collection first, then use entity search to identify key patterns", "Only upload documents you have already read", "Use Pinpoint to write the final story automatically"], ans: 1 }
    ]
  },
  {
    id: 11, title: "Journalism 101: Essential Skills", cat: "Editorial",
    emoji: "📡", color: "#1a4a4a", rating: "5.0", badge: "📡",
    steps: 10, dur: "~5 hrs",
    about: "A comprehensive refresher on the core principles and practices of quality journalism. Covers clear and accurate writing, ethical decision-making, effective sourcing, and fact verification. Participants will enhance their storytelling techniques for diverse platforms while adapting to the rapidly changing media landscape.",
    modules: [{ name: "Chapter 1", steps: [
      { t: "What is News?", d: "The six pillars of news value: timeliness, significance, proximity, prominence, human interest, and unusualness." },
      { t: "The Journalist's Role", d: "Holding power to account, informing the public, and giving voice to the voiceless." },
      { t: "Newsgathering Techniques", d: "Tip-offs, document searches, developing and cultivating sources, and finding stories others miss." },
      { t: "Effective Interviewing", d: "Plan interviews, establish rapport, ask open and follow-up questions, and manage difficult interviewees." },
      { t: "Accuracy and Verification", d: "Multi-source confirmation, document checking, and reverse image search." },
      { t: "Ethics and Decision-Making", d: "When to name a victim, when to publish sensitive information, how to handle anonymous sources." },
      { t: "Press Freedom and Media Law", d: "Defamation, privacy, contempt of court, and protections offered by the Constitution and Press Code." },
      { t: "Storytelling for Multiple Platforms", d: "Adapt your storytelling approach for print, web, audio, and video." },
      { t: "The Modern Newsroom", d: "How modern newsrooms are structured and how to navigate a newsroom hierarchy." },
      { t: "Your First Byline", d: "Building a portfolio, writing to editors, using freelancing to gain experience." }
    ]}],
    quiz: [
      { q: "The six pillars of news value include all of the following EXCEPT:", opts: ["Timeliness", "Profitability", "Proximity", "Human interest"], ans: 1 },
      { q: "What is the primary democratic function of journalism?", opts: ["Generating advertising revenue", "Holding power to account, informing the public, and giving voice to the voiceless", "Entertaining audiences", "Promoting government policies"], ans: 1 },
      { q: "In journalism, 'multi-source confirmation' means:", opts: ["Getting the same story confirmed by at least two independent sources before publishing", "Having multiple editors review a story", "Interviewing multiple people for one quote", "Using multiple social media platforms"], ans: 0 },
      { q: "In South African media law, defamation refers to:", opts: ["Criticising government policy", "Publishing a false statement that damages a person's reputation", "Interviewing a source anonymously", "Breaking a story before competitors"], ans: 1 }
    ]
  },

  // ════════════════════════════════
  // SALES (Training Workflow)
  // ════════════════════════════════
  {
    id: 101, title: "Welcome to Independent Media Group", cat: "Sales",
    emoji: "🏢", color: "#1a3a1a", rating: "5.0", badge: "🏢",
    steps: 1, dur: "~30 min",
    about: "An introduction to the Independent Media Group — our history, values, mission, and the role we play in South Africa's media landscape. Essential onboarding for all new team members.",
    modules: [{ name: "Welcome", steps: [{ t: "Welcome to Independent Media Group", d: "Our history, values, mission, and our role in South Africa's media landscape." }] }],
    quiz: [
      { q: "Independent Media is primarily based in:", opts: ["Johannesburg", "Cape Town", "Durban", "Pretoria"], ans: 0 },
      { q: "What is the primary mission of Independent Media Group?", opts: ["Entertainment only", "Quality journalism that serves communities across South Africa", "International news only", "Digital advertising only"], ans: 1 }
    ]
  },
  {
    id: 102, title: "Introduction to Volt Africa", cat: "Sales",
    emoji: "⚡", color: "#1a1a5c", rating: "5.0", badge: "⚡",
    steps: 1, dur: "~30 min",
    about: "Learn about Volt Africa — our digital media brand, its audiences, offerings, and how it fits into the broader Independent Media ecosystem. Essential for all client-facing and commercial teams.",
    modules: [{ name: "Volt Africa", steps: [{ t: "Introduction to Volt Africa", d: "Volt Africa's audiences, digital offerings, and its position in the Independent Media ecosystem." }] }],
    quiz: [
      { q: "Volt Africa is primarily a:", opts: ["Print newspaper", "Digital media brand targeting South African audiences", "Radio station", "Television network"], ans: 1 },
      { q: "Volt Africa is part of which larger media group?", opts: ["Media24", "Naspers", "Independent Media Group", "Times Media"], ans: 2 }
    ]
  },
  {
    id: 103, title: "Module 1: The Digital Landscape", cat: "Sales",
    emoji: "🌐", color: "#0f3460", rating: "4.9", badge: "🌐",
    steps: 1, dur: "~45 min",
    about: "Understand the evolving digital media landscape in South Africa and globally. How audiences consume digital content, where advertising spend is shifting, and what it means for Independent Media's commercial strategy.",
    modules: [{ name: "The Digital Landscape", steps: [{ t: "The Digital Landscape", d: "How audiences consume digital content, where advertising spend is shifting, and what it means for our commercial strategy." }] }],
    quiz: [
      { q: "Digital advertising spend in South Africa has been:", opts: ["Declining steadily", "Growing year on year as audiences shift online", "Remaining flat", "Replaced entirely by print advertising"], ans: 1 },
      { q: "What is 'programmatic advertising'?", opts: ["Advertising on TV programmes", "Automated buying and selling of digital advertising inventory", "Print advertising with a programme", "Social media advertising only"], ans: 1 },
      { q: "Which platform type has seen the biggest growth in news consumption?", opts: ["Print newspapers", "Mobile and social media platforms", "Radio", "Billboards"], ans: 1 }
    ]
  },
  {
    id: 104, title: "Module 2: Social Media Landscape", cat: "Sales",
    emoji: "📲", color: "#16213e", rating: "4.8", badge: "📲",
    steps: 1, dur: "~45 min",
    about: "A deep dive into the social media landscape as it relates to Independent Media's commercial offerings. Covers key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix.",
    modules: [{ name: "Social Media Landscape", steps: [{ t: "Social Media Landscape", d: "Key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix." }] }],
    quiz: [
      { q: "When pitching social media to a client, the most important factor to lead with is:", opts: ["The number of followers", "Audience alignment — reaching the right people at the right time", "The lowest cost per post", "The platform's global popularity"], ans: 1 },
      { q: "Which social media metric is most useful for measuring brand awareness campaigns?", opts: ["Conversions", "Reach and impressions", "Cost per click", "Revenue generated"], ans: 1 },
      { q: "Short-form video content (e.g. Reels, TikTok) is effective because:", opts: ["It is cheaper to produce", "It captures attention quickly and has high organic reach on most platforms", "It replaces all other content formats", "Only young people watch it"], ans: 1 }
    ]
  },
  {
    id: 105, title: "Module 4: Our Ecosystem — Digital", cat: "Sales",
    emoji: "💻", color: "#533483", rating: "4.8", badge: "💻",
    steps: 1, dur: "~45 min",
    about: "Explore the full suite of Independent Media's digital platforms and products. Learn how to package digital offerings for clients, understand audience data, and build compelling digital proposals that drive results.",
    modules: [{ name: "Our Ecosystem — Digital", steps: [{ t: "Our Ecosystem — Digital", d: "The full suite of Independent Media's digital platforms and products. How to package digital offerings for clients and build compelling digital proposals." }] }],
    quiz: [
      { q: "When selling digital advertising, which is the strongest value proposition for a client?", opts: ["The lowest CPM in the market", "Reaching a qualified, engaged audience that aligns with their target market", "The most ad formats available", "The largest total audience regardless of relevance"], ans: 1 },
      { q: "What does 'CPM' stand for in digital advertising?", opts: ["Cost Per Month", "Cost Per Mille (cost per thousand impressions)", "Clicks Per Minute", "Content Per Medium"], ans: 1 },
      { q: "An 'integrated digital campaign' typically includes:", opts: ["One ad format only", "A combination of display, social, video, and content marketing across multiple touchpoints", "Only social media advertising", "Only Google advertising"], ans: 1 }
    ]
  },
  {
    id: 106, title: "Module 5: Our Ecosystem — Paid Media", cat: "Sales",
    emoji: "💰", color: "#e94560", rating: "4.8", badge: "💰",
    steps: 1, dur: "~45 min",
    about: "Understand Independent Media's paid media offerings including display advertising, native content, sponsored features, and programmatic solutions. Learn how to match client objectives with the right paid media products.",
    modules: [{ name: "Our Ecosystem — Paid Media", steps: [{ t: "Our Ecosystem — Paid Media", d: "Display advertising, native content, sponsored features, and programmatic solutions. Match client objectives with the right paid media products." }] }],
    quiz: [
      { q: "'Native advertising' refers to:", opts: ["Advertising that appears on local community websites only", "Paid content that matches the look and feel of the editorial environment it appears in", "Outdoor advertising using local landmarks", "Only print advertising"], ans: 1 },
      { q: "Which paid media format is generally most effective for brand storytelling?", opts: ["Standard display banner ads", "Sponsored content/native articles", "Pop-up ads", "Pre-roll video only"], ans: 1 },
      { q: "When a client asks for 'performance-based' advertising, they typically want:", opts: ["Brand awareness with no measurement", "To pay based on measurable outcomes like clicks, leads, or conversions", "The cheapest available option", "Only social media advertising"], ans: 1 }
    ]
  },
  {
    id: 107, title: "Module 8: Our Ecosystem — Opportunities", cat: "Sales",
    emoji: "🚀", color: "#f5a623", rating: "4.9", badge: "🚀",
    steps: 1, dur: "~45 min",
    about: "Explore the full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client, build integrated proposals, and close deals with confidence.",
    modules: [{ name: "Our Ecosystem — Opportunities", steps: [{ t: "Our Ecosystem — Opportunities", d: "The full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client and build integrated proposals." }] }],
    quiz: [
      { q: "An 'integrated media proposal' combines:", opts: ["Only print advertising", "Multiple platforms and formats tailored to the client's objectives and target audience", "Only digital advertising", "Only sponsored content"], ans: 1 },
      { q: "When identifying opportunities for a client, the best starting point is:", opts: ["The cheapest available packages", "Understanding the client's business objectives and target audience", "The most expensive premium packages", "Whatever was sold to the last client"], ans: 1 }
    ]
  },
  {
    id: 108, title: "Back End: Workflow", cat: "Sales",
    emoji: "⚙️", color: "#2c3e50", rating: "4.7", badge: "⚙️",
    steps: 1, dur: "~45 min",
    about: "Understand the internal workflow processes at Independent Media — from campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members to ensure seamless campaign execution.",
    modules: [{ name: "Workflow", steps: [{ t: "Workflow 2026", d: "Campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members." }] }],
    quiz: [
      { q: "In campaign management, 'trafficking' refers to:", opts: ["Road-based advertising", "The process of setting up and managing digital ad creative in the ad server", "Illegal ad activities", "Print distribution logistics"], ans: 1 },
      { q: "Why is accurate campaign briefing important?", opts: ["It fills in time before a campaign starts", "It ensures the creative and technical teams can execute the campaign correctly, on time, and on spec", "It is only required for large campaigns", "It is only required for digital campaigns"], ans: 1 },
      { q: "When a campaign goes live, the next key step is:", opts: ["Immediately booking the next campaign", "Monitoring delivery and performance to ensure it is running correctly", "Waiting until the end of the campaign to review", "Sending an invoice immediately"], ans: 1 }
    ]
  },
  {
    id: 109, title: "Back End: Strategy", cat: "Sales",
    emoji: "🎯", color: "#8e44ad", rating: "4.9", badge: "🎯",
    steps: 1, dur: "~45 min",
    about: "Learn how to think and operate strategically as part of the Independent Media commercial team. Covers understanding client business objectives, building strategic media proposals, and positioning Independent Media's offerings as a strategic partner — not just a vendor.",
    modules: [{ name: "Strategy", steps: [{ t: "Back End — Strategy", d: "Understanding client business objectives, building strategic media proposals, and positioning Independent Media as a strategic partner." }] }],
    quiz: [
      { q: "The difference between a vendor and a strategic partner is:", opts: ["Price", "A strategic partner understands the client's business goals and proposes media solutions that help achieve them", "A strategic partner only sells premium products", "There is no difference"], ans: 1 },
      { q: "A strong media strategy proposal should always include:", opts: ["Only rate cards", "Client objectives, target audience insights, recommended media mix, and expected outcomes", "Only digital advertising options", "Whatever the client has used before"], ans: 1 },
      { q: "When a client says 'we have no budget', a strategic response is:", opts: ["End the conversation immediately", "Understand their objectives and show how a focused campaign can deliver ROI even with limited budget", "Offer only the cheapest option", "Promise results without any data"], ans: 1 }
    ]
  }
];

// ── RESOURCES ──
// To update: edit URL, title, desc, or type here.
const RESOURCES = [
  {
    title: "How to Create & Publish a New Article",
    type: "Guide", emoji: "📝",
    desc: "Step-by-step walkthrough of publishing content on the IMCS platform using Scribehow.",
    url: "https://scribehow.com/shared/How_to_Create__Publish_a_New_Article__IMCS"
  },
  {
    title: "IMCS Writer's Style Guide",
    type: "Document", emoji: "📄",
    desc: "Official editorial style guide: grammar, spelling, AP style, and formatting rules for all IMCS writers.",
    url: "https://docs.google.com/document/d/1HnLVTNnkXILXnKvOa73Zljkw1Y_pCepiuVNktAmO_7o/view"
  },
  {
    title: "Journalism Ethics Video",
    type: "Video", emoji: "🎥",
    desc: "A comprehensive look at journalistic ethics, standards, and real-world ethical dilemmas.",
    url: "https://www.youtube.com/watch?v=AlrC-XaKwew"
  },
  {
    title: "AP Style Quick Reference",
    type: "Document", emoji: "📚",
    desc: "Quick-reference guide to AP style: numbers, titles, abbreviations, and more.",
    url: "https://www.apstylebook.com/"
  },
  {
    title: "Interview Preparation Checklist",
    type: "Guide", emoji: "✅",
    desc: "Everything you need before, during, and after a journalist interview.",
    url: "https://www.poynter.org/reporting-editing/2016/how-to-prepare-for-an-interview/"
  },
  {
    title: "Google News Publisher Guide",
    type: "Guide", emoji: "📰",
    desc: "How to set up and manage your publication in Google News Publisher Centre.",
    url: "https://support.google.com/news/publisher-center/answer/9607025"
  },
  {
    title: "Training Workflow Document",
    type: "Document", emoji: "📋",
    desc: "The full IndyTrain course and module workflow document including all video links.",
    url: "https://docs.google.com/document/d/1HnLVTNnkXILXnKvOa73Zljkw1Y_pCepiuVNktAmO_7o/view"
  },
  {
    title: "Gemini for Newsrooms Quiz",
    type: "Quiz", emoji: "🤖",
    desc: "Official Gemini for Newsrooms assessment via Google Forms.",
    url: "https://forms.gle/rjfZSEQNACh4VkQ4A"
  },
  {
    title: "Digital Landscape Quiz",
    type: "Quiz", emoji: "🌐",
    desc: "Module 1 assessment: The Digital Landscape.",
    url: "https://forms.gle/xu6M5eiunqGWv4k9A"
  },
  {
    title: "Social Media Landscape Quiz",
    type: "Quiz", emoji: "📲",
    desc: "Module 2 assessment: Social Media Landscape.",
    url: "https://forms.gle/mJ2xL22eNStTeQFn6"
  }
];

// ── CHAT ROOMS ──
const CHAT_ROOMS = [
  { id: "general",   name: "General",   icon: "💬", desc: "All cadets",              prev: "Welcome to IndyTrain!" },
  { id: "editorial", name: "Editorial", icon: "✍️", desc: "Writing & editing",       prev: "Tips on headline writing" },
  { id: "sales",     name: "Sales",     icon: "💼", desc: "Sales & commercial",      prev: "Module 8 is really useful!" },
  { id: "digital",   name: "Digital",   icon: "📱", desc: "Social, SEO & multimedia", prev: "Anyone tried Gemini for research?" },
  { id: "ai-tools",  name: "AI Tools",  icon: "🤖", desc: "AI in journalism",        prev: "NotebookLM is a game changer!" },
];

/* ============================================================
   IndyTrain — app.js
   Edit this file for feature/behaviour changes.
   ============================================================ */

// ── STATE ──
let U = null, CUR = null, ROOM = 'general';
let ENROLLED = [], COMPLETED = [], BADGES = [];
let PROG = {};
let QS = {};
let VID_OVERRIDES = {};
let IMG_OVERRIDES = {};
let ADMIN_TAB = 'users';
let CMSGS = {};
let CUSTOM = [];
let MC = 0, QC = 0;

// ── BRANDING STATE (admin-editable) ──
let BRAND = {
  name: 'IndyTrain',
  tagline: 'Independent Media Cadet School',
  logoUrl: null,       // null = use text logo
  primaryColor: '#c8a84b',
};

// ── USER REGISTRY ──
// status: 'active' | 'pending' | 'inactive'
// 'pending' = registered but awaiting admin approval
// INVITED = email addresses pre-approved by admin (auto-approve on register)
let USERS = [
  { id:1, name:'Admin', email:'admin@imcs.co.za', role:'admin', status:'active', enrolled:0, completed:0, joined:'2026-01-01', password:'admin' },
];
let INVITED_EMAILS = []; // pre-approved emails added by admin

// ── ANNOUNCEMENTS ──
let ANNOUNCEMENTS = [];

// ── HELPERS ──
const allC = () => [...COURSES, ...CUSTOM];

function initChat() {
  CMSGS = {
    general:    [{ u:'Admin', i:'AD', msg:'Welcome to ' + BRAND.name + '! 🎉 Your community hub for all training.', t:'9:00 AM', own:false }],
    editorial:  [{ u:'Admin', i:'AD', msg:'Welcome to Editorial. Share tips and ask questions here.', t:'9:00 AM', own:false }],
    sales:      [{ u:'Admin', i:'AD', msg:'Welcome to Sales. Discuss commercial modules and client strategies here.', t:'9:00 AM', own:false }],
    digital:    [{ u:'Admin', i:'AD', msg:'Welcome to Digital. Discuss social media, SEO, and multimedia here.', t:'9:00 AM', own:false }],
    'ai-tools': [{ u:'Admin', i:'AD', msg:'Welcome to AI Tools. Discuss Gemini, NotebookLM, and Pinpoint here.', t:'9:00 AM', own:false }],
  };
}

// ── AUTH ──
function doLogin() {
  const emailVal = document.getElementById('login-email').value.trim().toLowerCase();
  const passVal  = document.getElementById('login-pass').value;
  if (!emailVal || !passVal) { toast('Please enter your email and password','error'); return; }

  // Check hardcoded admin credentials first
  if (emailVal === 'admin' && passVal === 'admin') {
    const adminUser = USERS.find(u => u.email === 'admin@imcs.co.za');
    U = { name:'Admin', email:'admin@imcs.co.za', role:'admin', ini:'AD' };
    if (adminUser) adminUser.status = 'active';
    startApp(); return;
  }

  // Look up registered user
  const found = USERS.find(u => u.email.toLowerCase() === emailVal);
  if (!found) { toast('No account found with that email. Please register or contact your admin.','error'); return; }
  if (found.password && found.password !== passVal) { toast('Incorrect password.','error'); return; }
  if (found.status === 'pending') {
    toast('Your account is awaiting admin approval. Please check back soon.','error'); return;
  }
  if (found.status === 'inactive') {
    toast('Your account has been deactivated. Please contact your admin.','error'); return;
  }
  U = { name:found.name, email:found.email, role:found.role, ini:found.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2) };
  startApp();
}

function loginAdmin() {
  // Demo shortcut — signs in as admin without password
  U = { name:'Admin', email:'admin@imcs.co.za', role:'admin', ini:'AD' };
  startApp();
}

function doReg() {
  const n = document.getElementById('reg-name').value.trim();
  const e = document.getElementById('reg-email').value.trim().toLowerCase();
  const p = document.getElementById('reg-pass').value;
  if (!n||!e||!p) { toast('Please fill in all fields','error'); return; }
  if (USERS.find(u => u.email.toLowerCase() === e)) {
    toast('An account with this email already exists.','error'); return;
  }

  // Check if email was pre-approved by admin (invited)
  const isInvited = INVITED_EMAILS.map(x=>x.toLowerCase()).includes(e);
  const status = isInvited ? 'active' : 'pending';

  USERS.push({
    id: Date.now(), name:n, email:e, role:'cadet',
    status, enrolled:0, completed:0,
    joined: new Date().toISOString().slice(0,10),
    password: p
  });

  if (isInvited) {
    // Remove from invite list — used
    INVITED_EMAILS = INVITED_EMAILS.filter(x => x.toLowerCase() !== e);
    U = { name:n, email:e, role:'cadet', ini:n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2) };
    startApp();
  } else {
    // Show pending message — do NOT log them in
    showPendingScreen(n);
  }
}

function showPendingScreen(name) {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('reg-form').classList.add('hidden');
  // Show a pending message in the auth right panel
  const right = document.querySelector('.auth-right');
  right.innerHTML = `
    <div class="auth-fw" style="text-align:center">
      <div style="font-size:3rem;margin-bottom:1rem">⏳</div>
      <h2 style="margin-bottom:.5rem">Request Submitted!</h2>
      <p style="color:var(--muted);margin-bottom:1.5rem">Thanks, <strong>${name}</strong>! Your account is pending approval by an administrator. You'll be able to log in once approved.</p>
      <p style="font-size:.78rem;color:var(--muted)">Please check back later or contact <a href="mailto:Info@imcs.co.za" style="color:var(--gold)">Info@imcs.co.za</a> if you have any questions.</p>
      <button class="btn btn-secondary btn-lg" style="margin-top:1.5rem;width:100%;justify-content:center" onclick="location.reload()">Back to Login</button>
    </div>`;
}

function doLogout() {
  U=null; ENROLLED=[]; COMPLETED=[]; BADGES=[]; PROG={}; QS={}; CUR=null;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('login-email').value='';
  document.getElementById('login-pass').value='';
  showLogin();
}
function showReg()   { document.getElementById('login-form').classList.add('hidden');  document.getElementById('reg-form').classList.remove('hidden'); }
function showLogin() { document.getElementById('reg-form').classList.add('hidden');    document.getElementById('login-form').classList.remove('hidden'); }

function startApp() {
  initChat();
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  applyBranding();
  syncUI();
  if (U.role==='admin') document.getElementById('admin-nav').classList.remove('hidden');
  else document.getElementById('admin-nav').classList.add('hidden');
  renderDash(); renderCourses(); renderRes(); renderRooms(); renderMsgs();
  nav('dashboard');
}

// ── BRANDING ──
function applyBranding() {
  // Update CSS primary colour
  document.documentElement.style.setProperty('--gold', BRAND.primaryColor);
  // Sidebar brand name
  const bn = document.querySelector('.brand-name');
  if (bn) {
    if (BRAND.logoUrl) {
      bn.innerHTML = `<img src="${BRAND.logoUrl}" style="height:28px;object-fit:contain;max-width:160px" alt="logo">`;
    } else {
      bn.innerHTML = `${BRAND.name}<span>${BRAND.tagline}</span>`;
    }
  }
  // Auth page brand
  const ab = document.querySelector('.auth-brand');
  if (ab) {
    if (BRAND.logoUrl) {
      ab.innerHTML = `<img src="${BRAND.logoUrl}" style="height:36px;object-fit:contain" alt="logo">`;
    } else {
      const [first, ...rest] = BRAND.name.split('');
      ab.innerHTML = `${BRAND.name.slice(0,-BRAND.name.length/2)}<span>${BRAND.name.slice(BRAND.name.length/2)}</span>`;
      ab.textContent = '';
      ab.innerHTML = BRAND.name.slice(0, Math.ceil(BRAND.name.length/2)) + `<span>${BRAND.name.slice(Math.ceil(BRAND.name.length/2))}</span>`;
    }
  }
  // Page title
  document.title = BRAND.name + ' — ' + BRAND.tagline;
}

function syncUI() {
  ['sb-ava','top-ava'].forEach(id => document.getElementById(id).textContent = U.ini);
  document.getElementById('sb-name').textContent = U.name;
  document.getElementById('sb-role').textContent = U.role==='admin' ? 'Administrator' : 'Cadet';
  document.getElementById('prof-ava').textContent = U.ini;
  document.getElementById('prof-name').textContent = U.name;
  document.getElementById('prof-email').textContent = U.email;
  document.getElementById('prof-role').textContent = U.role==='admin' ? 'Administrator' : 'Cadet';
  document.getElementById('cert-name').textContent = U.name;
  document.getElementById('edit-name').value = U.name;
  document.getElementById('edit-email').value = U.email;
}

// ── NAVIGATION ──
function nav(p) {
  document.querySelectorAll('.page').forEach(x => x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x => x.classList.remove('active'));
  const el = document.getElementById('page-'+p); if (el) el.classList.add('active');
  const ni = document.querySelector(`.nav-item[onclick="nav('${p}')"]`); if (ni) ni.classList.add('active');
  const TT = { dashboard:'Dashboard', courses:'Learning Modules', programs:'My Programs', chat:'Member Chat', resources:'Resources', profile:'My Profile', contact:'Contact Us', admin:'Admin Panel', 'course-detail':'Course Detail', quiz:'Quiz' };
  document.getElementById('pg-title').textContent = TT[p]||p;
  if (p==='profile')  renderProfile();
  if (p==='programs') renderProgs('enrolled');
  if (p==='admin')    renderAdmin();
  if (p==='chat')     renderMsgs();
  window.scrollTo(0,0);
}
function toggleSB() { document.getElementById('sidebar').classList.toggle('open'); }

// ── DASHBOARD ──
function renderDash() {
  document.getElementById('h-total').textContent = allC().length;
  document.getElementById('s-enrolled').textContent = ENROLLED.length;
  document.getElementById('s-completed').textContent = COMPLETED.length;
  document.getElementById('s-badges').textContent = BADGES.length;
  document.getElementById('s-certs').textContent = COMPLETED.length;
  const g = document.getElementById('dash-grid'); g.innerHTML='';
  const di = document.getElementById('dash-enrolled');
  // Announcements banner
  const existing = document.getElementById('announce-banner');
  if (existing) existing.remove();
  if (ANNOUNCEMENTS.length>0) {
    const latest = ANNOUNCEMENTS[ANNOUNCEMENTS.length-1];
    const banner = document.createElement('div');
    banner.id = 'announce-banner';
    banner.style.cssText = 'background:linear-gradient(135deg,#1a2a0f,#2a3a1a);border:1px solid rgba(200,168,75,.3);border-radius:10px;padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:.875rem;color:#fff';
    banner.innerHTML = `<span style="font-size:1.5rem">📢</span><div style="flex:1"><div style="font-size:.82rem;font-weight:700;color:var(--gold)">${latest.title}</div><div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.15rem">${latest.body}</div></div><button onclick="this.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,.4);font-size:1.1rem;cursor:pointer;padding:.25rem">✕</button>`;
    document.querySelector('#page-dashboard .cw').insertBefore(banner, document.querySelector('#page-dashboard .stats-grid'));
  }
  if (ENROLLED.length===0) {
    di.style.display='block'; g.style.display='none';
  } else {
    di.style.display='none'; g.style.display='';
    ENROLLED.slice(0,3).forEach(id=>{ const c=allC().find(x=>x.id===id); if(c) g.appendChild(makeCard(c,true)); });
  }
}

// ── COURSES ──
function renderCourses() {
  const cats = ['all','Editorial','Sales',...new Set(CUSTOM.map(c=>c.cat).filter(c=>!['Editorial','Sales'].includes(c)))];
  const fr = document.getElementById('course-filters'); fr.innerHTML='';
  cats.forEach((cat,i)=>{
    const ch=document.createElement('div'); ch.className='fchip'+(i===0?' active':'');
    ch.textContent=cat==='all'?'All Programs':cat;
    ch.onclick=()=>filterC(cat,ch); fr.appendChild(ch);
  });
  const g=document.getElementById('courses-grid'); g.innerHTML='';
  allC().forEach(c=>g.appendChild(makeCard(c)));
}

function filterC(cat,el) {
  document.querySelectorAll('.fchip').forEach(c=>c.classList.remove('active')); el.classList.add('active');
  const g=document.getElementById('courses-grid'); g.innerHTML='';
  (cat==='all'?allC():allC().filter(c=>c.cat===cat)).forEach(c=>g.appendChild(makeCard(c)));
}

function searchCourses(val) {
  const g=document.getElementById('courses-grid'); if(!g) return;
  g.innerHTML='';
  const v=val.toLowerCase();
  (v?allC().filter(c=>c.title.toLowerCase().includes(v)||c.cat.toLowerCase().includes(v)||(c.about||'').toLowerCase().includes(v)):allC()).forEach(c=>g.appendChild(makeCard(c)));
}

function getThumb(c) {
  if (IMG_OVERRIDES[c.id]) return IMG_OVERRIDES[c.id];
  if (typeof COURSE_IMAGES!=='undefined' && COURSE_IMAGES[c.id]) return COURSE_IMAGES[c.id];
  return null;
}

function makeCard(c, showP=false) {
  const isE=ENROLLED.includes(c.id), isDone=COMPLETED.includes(c.id), p=PROG[c.id]||0;
  const thumb=getThumb(c);
  const div=document.createElement('div'); div.className='course-card';
  div.innerHTML=`
    <div class="course-thumb" style="${!thumb?'background:linear-gradient(135deg,'+(c.color||'#2c3e50')+','+(c.color||'#2c3e50')+'99)':''}">
      ${thumb?`<img src="${thumb}" alt="${c.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0"><div style="position:absolute;inset:0;background:rgba(0,0,0,.3)"></div>`:''}
      <div class="cthumb-icon" style="position:relative;z-index:1">${c.emoji||'📚'}</div>
      ${isDone?'<div class="cbadge">✓ Completed</div>':isE?'<div class="cbadge" style="background:#3b82f6;color:#fff">Enrolled</div>':''}
      ${isE&&!isDone?`<div class="cprog" style="width:${p}%"></div>`:''}
    </div>
    <div class="course-info">
      <div class="course-cat">${c.cat}</div>
      <div class="course-title">${c.title}</div>
      <div class="course-desc">${c.about||''}</div>
      <div class="course-meta">
        <div class="cmi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${c.steps} step${c.steps!==1?'s':''}</div>
        <div class="cmi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${c.dur}</div>
        <div class="cmi">⭐ ${c.rating}</div>
      </div>
      ${showP&&isE&&!isDone?`<div style="margin-top:.6rem"><div class="prog-label"><span>Progress</span><span>${p}%</span></div><div class="prog-track"><div class="prog-fill" style="width:${p}%"></div></div></div>`:''}
      <div class="course-actions">
        <button class="btn btn-primary btn-sm" onclick="openCourse(${c.id});event.stopPropagation()">${isDone?'Review':isE?'Continue':'Start'}</button>
        ${isDone?`<button class="btn btn-secondary btn-sm" onclick="openCert(${c.id});event.stopPropagation()">🎓 Cert</button>`:''}
      </div>
    </div>`;
  div.onclick=()=>openCourse(c.id); return div;
}

function openCourse(id) {
  CUR=allC().find(c=>c.id===id); if(!CUR) return;
  document.getElementById('cd-title').textContent=CUR.title;
  document.getElementById('cd-about').innerHTML=CUR.about?`<div class="cd-about-box"><strong>About This Course</strong>${CUR.about}</div>`:'';
  document.getElementById('cd-meta').innerHTML=`
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${CUR.steps} step${CUR.steps!==1?'s':''}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${CUR.dur}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${CUR.rating} rating</div>`;
  document.getElementById('enroll-btn').textContent=ENROLLED.includes(id)?'Continue Learning':'Enroll Now';
  renderMods();
  const va=document.getElementById('vid-area');
  const vidUrl=(VID_OVERRIDES[id]||{}).url || (typeof DEFAULT_VIDS!=='undefined'?DEFAULT_VIDS[id]:null);
  va.className='vid-area';
  if (vidUrl) {
    va.innerHTML=`<iframe src="${vidUrl}" allowfullscreen allow="autoplay" style="width:100%;height:100%;border:none"></iframe>`;
  } else {
    va.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg><span>Video lesson will appear here</span>`;
  }
  nav('course-detail');
}

function renderMods() {
  const list=document.getElementById('cd-modules'); list.innerHTML='';
  const done=COMPLETED.includes(CUR.id);
  (CUR.modules||[]).forEach((mod,i)=>{
    const div=document.createElement('div'); div.className='module-item';
    div.innerHTML=`
      <div class="mhdr" onclick="toggleMod(this)">
        <div class="mnum ${done?'done':''}">${i+1}</div>
        <div class="mtitle">${mod.name}</div>
        <div class="msteps-lbl">${mod.steps.length} step${mod.steps.length!==1?'s':''}</div>
        <svg class="mchev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="steps-list hidden">
        ${mod.steps.map(s=>`
          <div class="step-item">
            <div class="step-check ${done?'done':''}">${done?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`:''}</div>
            <div><div class="step-t">${typeof s==='string'?s:s.t}</div>${typeof s==='object'&&s.d?`<div class="step-d">${s.d}</div>`:''}</div>
          </div>`).join('')}
      </div>`;
    list.appendChild(div);
  });
}

function toggleMod(el) { const l=el.nextElementSibling,c=el.querySelector('.mchev'); l.classList.toggle('hidden'); c.classList.toggle('open'); }

function enrollCourse() {
  if(!CUR) return;
  if(!ENROLLED.includes(CUR.id)){ ENROLLED.push(CUR.id); PROG[CUR.id]=0; }
  document.getElementById('enroll-btn').textContent='Continue Learning';
  // Update user record
  const ur=USERS.find(u=>u.email===U.email); if(ur) ur.enrolled=ENROLLED.length;
  renderDash(); toast('Enrolled in '+CUR.title+'!','success');
}

// ── QUIZ ──
function startQuiz(c) {
  if(!c||!c.quiz||!c.quiz.length){ toast('No quiz available for this course yet.'); return; }
  QS={c,qs:c.quiz,cur:0,ans:[],done:false};
  nav('quiz'); renderQuiz();
}

function renderQuiz() {
  const body=document.getElementById('quiz-body');
  document.getElementById('quiz-title').textContent=QS.c.title+' — Quiz';
  if(QS.done){
    const sc=QS.ans.filter((a,i)=>a===QS.qs[i].ans).length;
    const pct=Math.round(sc/QS.qs.length*100), pass=pct>=70;
    body.innerHTML=`
      <div class="question-card" style="text-align:center;padding:2.25rem">
        <div class="score-circle"><div class="score-num">${pct}%</div><div class="score-lbl">${sc}/${QS.qs.length}</div></div>
        <h2 style="font-size:1.35rem;margin-bottom:.4rem">${pass?'🎉 Congratulations!':'Keep Practising'}</h2>
        <p style="color:var(--muted);margin-bottom:1.25rem;font-size:.875rem">${pass?'You passed with '+pct+'%! Your badge and certificate are ready.':'You need 70% to pass. You scored '+pct+'% — review the course and try again.'}</p>
        ${pass?`<div style="display:flex;gap:.65rem;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary" onclick="awardAll()">🏅 Claim Badge &amp; Certificate</button><button class="btn btn-secondary" onclick="nav('courses')">Back to Courses</button></div>`:`<div style="display:flex;gap:.65rem;justify-content:center"><button class="btn btn-primary" onclick="startQuiz(QS.c)">Try Again</button><button class="btn btn-secondary" onclick="backToCourse()">Review Course</button></div>`}
        <div style="margin-top:1.5rem;border-top:1px solid var(--border);padding-top:1.25rem;text-align:left">
          <h4 style="font-size:.85rem;font-weight:700;margin-bottom:.875rem">Review Answers</h4>
          ${QS.qs.map((q,i)=>`<div style="margin-bottom:.875rem;padding:.875rem;background:${QS.ans[i]===q.ans?'#f0fdf4':'#fef2f2'};border:1px solid ${QS.ans[i]===q.ans?'#bbf7d0':'#fecaca'};border-radius:8px">
            <div style="font-size:.82rem;font-weight:600;margin-bottom:.3rem">${i+1}. ${q.q}</div>
            <div style="font-size:.78rem;color:${QS.ans[i]===q.ans?'var(--success)':'var(--red)'}">${QS.ans[i]===q.ans?'✓ Correct':'✗ Your answer: '+(q.opts[QS.ans[i]]||'Not answered')}${QS.ans[i]!==q.ans?`<span style="color:var(--success);margin-left:.5rem">✓ Correct: ${q.opts[q.ans]}</span>`:''}</div>
          </div>`).join('')}
        </div>
      </div>`;
    return;
  }
  const q=QS.qs[QS.cur];
  body.innerHTML=`
    <div class="qprog">${QS.qs.map((_,i)=>`<div class="qps ${i<QS.cur?'done':i===QS.cur?'cur':''}"></div>`).join('')}</div>
    <div class="question-card">
      <div class="q-num">Question ${QS.cur+1} of ${QS.qs.length}</div>
      <div class="q-text">${q.q}</div>
      <div class="opts">${q.opts.map((opt,i)=>`<button class="opt-btn ${QS.ans[QS.cur]===i?'selected':''}" onclick="pickOpt(${i},this)"><span class="opt-letter">${String.fromCharCode(65+i)}</span><span>${opt}</span></button>`).join('')}</div>
    </div>
    <div class="quiz-nav">
      <button class="btn btn-secondary btn-sm" ${QS.cur===0?'disabled':''} onclick="prevQ()">← Back</button>
      <span style="font-size:.78rem;color:var(--muted)">${QS.cur+1} / ${QS.qs.length}</span>
      <button class="btn btn-primary btn-sm" id="qnxt" onclick="nextQ()" ${QS.ans[QS.cur]===undefined?'disabled':''}>${QS.cur===QS.qs.length-1?'Submit Quiz':'Next →'}</button>
    </div>`;
}
function pickOpt(i,el) { QS.ans[QS.cur]=i; el.closest('.opts').querySelectorAll('.opt-btn').forEach(b=>b.classList.remove('selected')); el.classList.add('selected'); const n=document.getElementById('qnxt'); if(n) n.removeAttribute('disabled'); }
function nextQ() { if(QS.ans[QS.cur]===undefined)return; if(QS.cur<QS.qs.length-1){QS.cur++;renderQuiz();}else{QS.done=true;renderQuiz();} }
function prevQ() { if(QS.cur>0){QS.cur--;renderQuiz();} }
function backToCourse() { nav('course-detail'); }
function awardAll() {
  const cid=QS.c.id;
  if(!COMPLETED.includes(cid)) COMPLETED.push(cid);
  if(!BADGES.includes(cid)) BADGES.push(cid);
  if(!ENROLLED.includes(cid)) ENROLLED.push(cid);
  PROG[cid]=100;
  const ur=USERS.find(u=>u.email===U.email); if(ur){ ur.enrolled=ENROLLED.length; ur.completed=COMPLETED.length; }
  renderDash(); toast('🏅 Badge earned! 🎓 Certificate ready!','success'); openCert(cid);
}

// ── PROFILE ──
function renderProfile() {
  syncUI();
  document.getElementById('ps-en').textContent=ENROLLED.length;
  document.getElementById('ps-co').textContent=COMPLETED.length;
  document.getElementById('ps-ba').textContent=BADGES.length;
  document.getElementById('ps-ce').textContent=COMPLETED.length;
  const bg=document.getElementById('prof-badges'); bg.innerHTML='';
  allC().forEach(c=>{ const earned=BADGES.includes(c.id); const d=document.createElement('div'); d.className='badge-item'; d.innerHTML=`<div class="badge-circle ${earned?'':'locked'}" title="${c.title}">${c.badge||'📚'}</div><div class="badge-name">${c.title.split(':')[0].split(' ')[0]}</div>`; bg.appendChild(d); });
  const cl=document.getElementById('prof-certs'); cl.innerHTML='';
  if(!COMPLETED.length){ cl.innerHTML='<div style="color:var(--muted);font-size:.82rem;text-align:center;padding:1.25rem">Complete a course to earn your first certificate!</div>'; return; }
  COMPLETED.forEach(id=>{ const c=allC().find(x=>x.id===id); if(!c)return; const d=document.createElement('div'); d.className='cert-item'; d.innerHTML=`<div class="cert-icon">🎓</div><div style="flex:1"><div style="font-weight:700;font-size:.875rem;margin-bottom:.1rem">${c.title}</div><div style="font-size:.75rem;color:var(--muted)">${BRAND.name} · IMCS · Completed</div></div><button class="btn btn-secondary btn-sm" onclick="openCert(${id})">Download</button>`; cl.appendChild(d); });
}
function toggleEditProf() { const c=document.getElementById('edit-prof'); c.style.display=c.style.display==='none'?'block':'none'; }
function saveProf() { const n=document.getElementById('edit-name').value||U.name; U.name=n; U.ini=n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2); const ur=USERS.find(u=>u.email===U.email); if(ur) ur.name=n; syncUI(); document.getElementById('edit-prof').style.display='none'; toast('Profile updated!','success'); }
function handleAva(e) { const f=e.target.files[0]; if(!f)return; const url=URL.createObjectURL(f); ['prof-ava','sb-ava','top-ava'].forEach(id=>{ const el=document.getElementById(id); el.innerHTML=`<img src="${url}" alt="avatar">`; }); toast('Photo updated!','success'); }

// ── CERTIFICATE ──
function openCert(cid) { const c=allC().find(x=>x.id===cid); if(!c)return; document.getElementById('cert-course').textContent=c.title; document.getElementById('cert-name').textContent=U.name; document.getElementById('cert-date').textContent='Issued '+new Date().toLocaleDateString('en-ZA',{year:'numeric',month:'long',day:'numeric'}); document.getElementById('cert-modal').classList.remove('hidden'); }
function closeCert() { document.getElementById('cert-modal').classList.add('hidden'); }
function dlCert() {
  const win=window.open('','_blank');
  const html=document.getElementById('cert-preview').outerHTML;
  win.document.write(`<!DOCTYPE html><html><head><title>Certificate — ${BRAND.name}</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet"><style>body{margin:0;padding:2rem;font-family:'Poppins',sans-serif;background:#fff}:root{--gold:${BRAND.primaryColor};--muted:#6b7280;--border:#e5e3dc;--ink:#0a0a0f}.certificate{background:linear-gradient(135deg,#fefef9,#fffef0);border:2px solid var(--gold);border-radius:12px;padding:2.5rem;text-align:center;position:relative;max-width:680px;margin:0 auto}.cert-border{position:absolute;inset:10px;border:1px solid rgba(200,168,75,.3);border-radius:8px}.cert-logo{font-size:.9rem;font-weight:800;color:var(--gold);text-transform:uppercase;letter-spacing:.12em;margin-bottom:1.25rem}.cert-title{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted);margin-bottom:.4rem}.cert-main{font-size:1.8rem;font-weight:800;margin-bottom:.4rem}.cert-sub{font-size:.85rem;color:var(--muted);margin-bottom:1.25rem}.cert-course-name{font-size:1.25rem;font-weight:800;color:var(--gold);margin-bottom:1.25rem;border-bottom:2px solid rgba(200,168,75,.3);padding-bottom:.875rem}.cert-footer{display:flex;justify-content:space-between;align-items:flex-end;margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid var(--border);font-size:.72rem;color:var(--muted)}.cert-sig-line{width:90px;height:1px;background:var(--ink);margin:.4rem auto .2rem}</style></head><body>${html}<script>window.print()<\/script></body></html>`);
  win.document.close(); toast('Certificate opened — use Ctrl+P / Cmd+P to save as PDF!','success');
}

// ── MY PROGRAMS ──
function renderProgs(tab) {
  const g=document.getElementById('prog-grid'); g.innerHTML='';
  let cs;
  if(tab==='enrolled') cs=allC().filter(c=>ENROLLED.includes(c.id)&&!COMPLETED.includes(c.id));
  else if(tab==='completed') cs=allC().filter(c=>COMPLETED.includes(c.id));
  else cs=allC();
  if(!cs.length){ g.innerHTML=`<div style="color:var(--muted);font-size:.82rem;padding:1.25rem;grid-column:1/-1">${tab==='enrolled'?'No courses in progress. <a href="#" onclick="nav(\'courses\')" style="color:var(--gold)">Browse modules →</a>':tab==='completed'?'No completed courses yet — keep going!':''}</div>`; return; }
  cs.forEach(c=>g.appendChild(makeCard(c,true)));
}
function switchPT(tab,el) { document.querySelectorAll('.prog-tab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); renderProgs(tab); }

// ── CHAT ──
function renderRooms() {
  const list=document.getElementById('chat-rooms'); list.innerHTML='';
  CHAT_ROOMS.forEach(r=>{ const d=document.createElement('div'); d.className='cri-wrap'+(r.id===ROOM?' active':''); d.innerHTML=`<div class="cri-icon">${r.icon}</div><div style="flex:1;overflow:hidden"><div class="cr-name">#${r.name}</div><div class="cr-prev">${r.prev}</div></div>`; d.onclick=()=>switchRoom(r.id); list.appendChild(d); });
}
function switchRoom(id) { ROOM=id; const r=CHAT_ROOMS.find(x=>x.id===id); document.getElementById('chat-rname').textContent='#'+r.name; document.getElementById('chat-rdesc').textContent=r.desc; document.getElementById('chat-icon').textContent=r.icon; renderRooms(); renderMsgs(); }
function renderMsgs() {
  const area=document.getElementById('msgs-area'); area.innerHTML='';
  (CMSGS[ROOM]||[]).forEach(m=>{ const d=document.createElement('div'); d.className='msg'+(m.own?' own':''); d.innerHTML=`${!m.own?`<div class="msg-ava" style="background:${sclr(m.u)}">${m.i||m.u.slice(0,2).toUpperCase()}</div>`:''}<div>${!m.own?`<div style="font-size:.72rem;font-weight:600;margin-bottom:.15rem;color:var(--muted)">${m.u}</div>`:''}<div class="msg-bubble">${m.msg}</div><div class="msg-meta">${m.t}</div></div>${m.own?`<div class="msg-ava" style="background:var(--ink);color:#fff">${U.ini}</div>`:''}`; area.appendChild(d); });
  area.scrollTop=area.scrollHeight;
}
function sclr(s) { const c=['#c8a84b','#2c3e50','#8B4513','#1a3a5c','#4a1a5c','#1a5c3a','#8e44ad']; let h=0; for(let i=0;i<s.length;i++) h=s.charCodeAt(i)+((h<<5)-h); return c[Math.abs(h)%c.length]; }
function sendMsg() { const inp=document.getElementById('chat-input'); const txt=inp.value.trim(); if(!txt)return; if(!CMSGS[ROOM])CMSGS[ROOM]=[]; CMSGS[ROOM].push({u:U.name,i:U.ini,msg:txt,t:new Date().toLocaleTimeString('en-ZA',{hour:'2-digit',minute:'2-digit'}),own:true}); inp.value=''; renderMsgs(); }
function chatKey(e) { if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();} }

// ── RESOURCES ──
function renderRes() {
  const g=document.getElementById('res-grid'); g.innerHTML='';
  RESOURCES.forEach((r,i)=>{ const d=document.createElement('div'); d.className='res-card'; d.innerHTML=`<div class="res-thumb" style="background:linear-gradient(135deg,#2c3e50,#1a2a3a)">${r.emoji}</div><div class="res-body"><div class="res-type">${r.type}</div><div class="res-title">${r.title}</div><div class="res-desc">${r.desc}</div><div style="margin-top:.75rem"><a href="${r.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" onclick="event.stopPropagation()">Open →</a></div></div>`; g.appendChild(d); });
}

// ════════════════════════════════════════════════════════════
// ADMIN PANEL
// ════════════════════════════════════════════════════════════
function renderAdmin() { renderAC(ADMIN_TAB); }
function switchAT(tab,el) { document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); ADMIN_TAB=tab; renderAC(tab); }

function renderAC(tab) {
  const c=document.getElementById('admin-content');

  // ── USERS ──
  if (tab==='users') {
    const searchVal = window._userSearch||'';
    const pending   = USERS.filter(u => u.status === 'pending');
    const filtered  = USERS.filter(u => {
      const matchSearch = !searchVal || u.name.toLowerCase().includes(searchVal) || u.email.toLowerCase().includes(searchVal);
      return matchSearch;
    });

    c.innerHTML=`
      ${pending.length>0?`
      <div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #f59e0b;border-radius:10px;padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:.875rem">
        <span style="font-size:1.5rem">⏳</span>
        <div style="flex:1"><div style="font-weight:700;font-size:.875rem;color:#92400e">${pending.length} user${pending.length>1?'s':''} awaiting approval</div>
        <div style="font-size:.78rem;color:#b45309;margin-top:.1rem">Review and approve or reject below.</div></div>
      </div>`:''}

      <div class="section-hdr">
        <h2>User Management <span style="font-size:.8rem;font-weight:400;color:var(--muted)">(${USERS.filter(u=>u.status==='active').length} active · ${pending.length} pending)</span></h2>
        <div style="display:flex;gap:.5rem">
          <button class="btn btn-secondary btn-sm" onclick="showBatchInvite()">📧 Batch Invite</button>
          <button class="btn btn-primary btn-sm" onclick="showAddUserModal()">+ Add User</button>
        </div>
      </div>

      <div style="display:flex;gap:.75rem;margin-bottom:1.25rem;flex-wrap:wrap">
        <div class="search-bar" style="max-width:280px;background:#fff">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search users…" value="${searchVal}" oninput="window._userSearch=this.value;renderAC('users')" style="border:none;outline:none;font-size:.82rem;width:100%;background:none">
        </div>
        <select onchange="window._userFilter=this.value;renderAC('users')" style="padding:.45rem .8rem;border:1px solid var(--border);border-radius:8px;font-size:.82rem;outline:none;background:#fff">
          <option value="all" ${(window._userFilter||'all')==='all'?'selected':''}>All Users</option>
          <option value="pending" ${(window._userFilter||'')==='pending'?'selected':''}>Pending Approval</option>
          <option value="active"  ${(window._userFilter||'')==='active'?'selected':''}>Active</option>
          <option value="admin"   ${(window._userFilter||'')==='admin'?'selected':''}>Admins</option>
          <option value="inactive"${(window._userFilter||'')==='inactive'?'selected':''}>Deactivated</option>
        </select>
      </div>

      <div class="table-wrap"><table>
        <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Enrolled</th><th>Joined</th><th>Actions</th></tr></thead>
        <tbody id="user-tbody"></tbody>
      </table></div>

      <!-- ADD USER FORM -->
      <div id="add-user-modal" style="display:none;margin-top:1.25rem" class="card">
        <div class="card-header"><h3>Add New User</h3><button class="btn btn-secondary btn-sm" onclick="document.getElementById('add-user-modal').style.display='none'">Cancel</button></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
            <div class="form-group"><label>Full Name</label><input type="text" id="nu-name" placeholder="Full name"></div>
            <div class="form-group"><label>Email</label><input type="email" id="nu-email" placeholder="email@imcs.co.za"></div>
            <div class="form-group"><label>Password</label><input type="password" id="nu-pass" placeholder="Set a password"></div>
            <div class="form-group"><label>Role</label><select id="nu-role"><option value="cadet">Cadet</option><option value="admin">Admin</option></select></div>
          </div>
          <button class="btn btn-primary" onclick="addUser()">Add User</button>
        </div>
      </div>

      <!-- BATCH INVITE FORM -->
      <div id="batch-invite-modal" style="display:none;margin-top:1.25rem" class="card">
        <div class="card-header"><h3>📧 Batch Invite by Email</h3><button class="btn btn-secondary btn-sm" onclick="document.getElementById('batch-invite-modal').style.display='none'">Cancel</button></div>
        <div class="card-body">
          <p style="font-size:.82rem;color:var(--muted);margin-bottom:1rem">Add email addresses below (one per line, or comma-separated). These emails will be pre-approved — when users register with these addresses they will go straight in without needing approval.</p>
          <div class="form-group"><label>Email Addresses</label><textarea id="invite-emails" placeholder="jane@imcs.co.za&#10;thabo@imcs.co.za&#10;sarah@imcs.co.za" style="min-height:120px;font-family:monospace;font-size:.82rem"></textarea></div>
          ${INVITED_EMAILS.length>0?`<div style="margin-bottom:1rem"><div style="font-size:.78rem;font-weight:600;margin-bottom:.4rem">Currently pre-approved (${INVITED_EMAILS.length}):</div><div style="display:flex;flex-wrap:wrap;gap:.4rem">${INVITED_EMAILS.map((e,i)=>`<span style="background:#dcfce7;color:#16a34a;padding:2px 8px;border-radius:20px;font-size:.72rem;display:flex;align-items:center;gap:.3rem">${e}<button onclick="INVITED_EMAILS.splice(${i},1);renderAC('users')" style="background:none;border:none;cursor:pointer;color:#16a34a;font-size:.8rem;padding:0;line-height:1">✕</button></span>`).join('')}</div></div>`:''}
          <button class="btn btn-primary" onclick="saveBatchInvite()">Save Pre-approved Emails</button>
        </div>
      </div>`;

    // Populate table
    const tbody = document.getElementById('user-tbody');
    const filterVal = window._userFilter || 'all';
    let display = filtered;
    if (filterVal === 'pending')  display = filtered.filter(u => u.status==='pending');
    if (filterVal === 'active')   display = filtered.filter(u => u.status==='active' && u.role!=='admin');
    if (filterVal === 'admin')    display = filtered.filter(u => u.role==='admin');
    if (filterVal === 'inactive') display = filtered.filter(u => u.status==='inactive');

    display.forEach(u => {
      const isMe = u.email === U.email;
      const isPending = u.status === 'pending';
      const tr = document.createElement('tr');
      if (isPending) tr.style.background = '#fffbeb';
      tr.innerHTML = `
        <td><div style="display:flex;align-items:center;gap:.65rem">
          <div class="ava" style="background:${sclr(u.name)};color:#fff">${u.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2)}</div>
          <div><div style="font-weight:600">${u.name}</div>${isMe?'<div style="font-size:.68rem;color:var(--gold)">← You</div>':''}</div>
        </div></td>
        <td style="color:var(--muted);font-size:.82rem">${u.email}</td>
        <td>
          ${isMe
            ? `<span style="font-size:.78rem;font-weight:600;color:var(--gold)">Admin</span>`
            : `<select onchange="changeUserRole(${u.id},this.value)" style="padding:.3rem .5rem;border:1px solid var(--border);border-radius:6px;font-size:.75rem;background:#fff">
                <option value="cadet" ${u.role==='cadet'?'selected':''}>Cadet</option>
                <option value="admin" ${u.role==='admin'?'selected':''}>Admin</option>
               </select>`}
        </td>
        <td>
          ${isPending
            ? `<span class="sbadge pending">⏳ Pending</span>`
            : u.status==='inactive'
              ? `<span class="sbadge inactive">Inactive</span>`
              : `<span class="sbadge active">Active</span>`}
        </td>
        <td>${u.enrolled}</td>
        <td style="color:var(--muted);font-size:.75rem">${u.joined}</td>
        <td><div style="display:flex;gap:.35rem;flex-wrap:wrap">
          ${isPending
            ? `<button class="btn btn-sm" style="background:#dcfce7;color:#16a34a;border:1px solid #bbf7d0" onclick="approveUser(${u.id})">✓ Approve</button>
               <button class="btn btn-danger btn-sm" onclick="rejectUser(${u.id})">✗ Reject</button>`
            : !isMe
              ? `<button class="btn btn-sm" style="background:${u.status==='active'?'#fee2e2':'#dcfce7'};color:${u.status==='active'?'#dc2626':'#16a34a'};border:1px solid ${u.status==='active'?'#fecaca':'#bbf7d0'}" onclick="toggleUserStatus(${u.id})">${u.status==='active'?'Deactivate':'Activate'}</button>`
              : ''}
          ${!isMe&&!isPending?`<button class="btn btn-secondary btn-sm" onclick="resetUserPass(${u.id})">Reset Pass</button>`:''}
        </div></td>`;
      tbody.appendChild(tr);
    });

    if (display.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:2rem">No users found.</td></tr>`;
    }


  // ── COURSES & VIDEOS ──
  } else if (tab==='videos') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Courses, Videos &amp; Images</h2></div>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:1.25rem">All courses have pre-loaded Google Drive videos. Replace any video or upload a thumbnail image per course below.</p>
      <div id="vid-list" style="display:flex;flex-direction:column;gap:.875rem"></div>`;
    const vl=document.getElementById('vid-list');
    allC().forEach(course=>{
      const ov=VID_OVERRIDES[course.id];
      const defUrl=typeof DEFAULT_VIDS!=='undefined'?DEFAULT_VIDS[course.id]:null;
      const hasVid=!!(ov||defUrl);
      const imgUrl=IMG_OVERRIDES[course.id]||(typeof COURSE_IMAGES!=='undefined'?COURSE_IMAGES[course.id]:null);
      const d=document.createElement('div'); d.className='card'; d.style.overflow='visible';
      d.innerHTML=`
        <div class="card-body" style="display:flex;align-items:flex-start;gap:1.1rem">
          <div style="width:44px;height:44px;background:linear-gradient(135deg,${course.color||'#2c3e50'},${course.color||'#2c3e50'}99);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0">${course.emoji||'📚'}</div>
          <div style="flex:1">
            <div style="font-weight:700;font-size:.875rem;margin-bottom:.15rem">${course.title}</div>
            <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">${course.cat} · ${course.steps} step${course.steps!==1?'s':''}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${ov?'#2563eb':hasVid?'var(--success)':'#f59e0b'}">🎥 ${ov?'Custom video assigned':hasVid?'Default video loaded':'No video'}</div>
                <div class="vtab-row" id="vtabs-${course.id}">
                  <button class="vtab active" onclick="switchVT(${course.id},'file',this)">📁 Upload</button>
                  <button class="vtab" onclick="switchVT(${course.id},'gdrive',this)">🔗 Drive Link</button>
                  <button class="vtab" onclick="switchVT(${course.id},'library',this)">📺 Library</button>
                </div>
                <div id="vp-file-${course.id}">
                  <button class="btn btn-primary btn-sm" onclick="trigVid(${course.id})">⬆ Upload Video</button>
                  <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">MP4, MOV, WebM</div>
                </div>
                <div id="vp-gdrive-${course.id}" style="display:none">
                  <div style="display:flex;gap:.75rem;align-items:flex-end">
                    <div class="form-group" style="margin:0;flex:1"><input type="text" id="gdi-${course.id}" placeholder="Paste Google Drive share link…" value="${ov&&ov.type==='gdrive'?ov.url:''}"></div>
                    <button class="btn btn-primary btn-sm" onclick="saveGD(${course.id})">Save</button>
                  </div>
                  <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">Set sharing to "Anyone with the link can view" first.</div>
                </div>
                <div id="vp-library-${course.id}" style="display:none">
                  <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Available videos:</div>
                  <div style="display:flex;flex-direction:column;gap:.35rem;max-height:180px;overflow-y:auto">
                    ${typeof EXTRA_VIDS!=='undefined'?EXTRA_VIDS.map(v=>`<button class="btn btn-secondary btn-sm" style="justify-content:flex-start;text-align:left" onclick="useLib(${course.id},'${GD(v.id)}','${v.n}')">▶ ${v.n}</button>`).join(''):''}
                  </div>
                </div>
                ${ov?`<button class="btn btn-danger btn-sm" style="margin-top:.5rem" onclick="rmVid(${course.id})">Restore Default</button>`:''}
              </div>
              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${IMG_OVERRIDES[course.id]?'#2563eb':imgUrl?'var(--success)':'#f59e0b'}">🖼 ${IMG_OVERRIDES[course.id]?'Custom image':'Default image'}</div>
                ${imgUrl?`<img src="${imgUrl}" style="width:100%;height:80px;object-fit:cover;border-radius:6px;margin-bottom:.5rem" alt="thumb">`:'<div style="width:100%;height:80px;background:var(--paper);border:1px dashed var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.75rem;margin-bottom:.5rem">No image set</div>'}
                <button class="btn btn-secondary btn-sm" onclick="trigImg(${course.id})">⬆ Upload Image</button>
                ${IMG_OVERRIDES[course.id]?`<button class="btn btn-danger btn-sm" style="margin-left:.4rem" onclick="rmImg(${course.id})">Remove</button>`:''}
              </div>
            </div>
          </div>
        </div>`;
      vl.appendChild(d);
    });

  // ── RESOURCES ──
  } else if (tab==='resources') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Resource Management</h2><button class="btn btn-primary btn-sm" onclick="showAddResource()">+ Add Resource</button></div>
      <div class="table-wrap"><table>
        <thead><tr><th>Icon</th><th>Title</th><th>Type</th><th>URL</th><th>Actions</th></tr></thead>
        <tbody id="res-tbody"></tbody>
      </table></div>
      <div id="res-form" style="display:none;margin-top:1.25rem" class="card">
        <div class="card-header"><h3 id="res-form-title">Add Resource</h3><button class="btn btn-secondary btn-sm" onclick="document.getElementById('res-form').style.display='none'">Cancel</button></div>
        <div class="card-body">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
            <div class="form-group"><label>Title</label><input type="text" id="rf-title" placeholder="Resource title"></div>
            <div class="form-group"><label>Type</label><select id="rf-type"><option>Guide</option><option>Document</option><option>Video</option><option>Quiz</option><option>Tool</option><option>Template</option></select></div>
            <div class="form-group"><label>Emoji Icon</label><input type="text" id="rf-emoji" placeholder="📄" maxlength="4"></div>
            <div class="form-group"><label>URL</label><input type="url" id="rf-url" placeholder="https://…"></div>
            <div class="form-group" style="grid-column:1/-1"><label>Description</label><textarea id="rf-desc" placeholder="Brief description…" style="min-height:70px"></textarea></div>
          </div>
          <button class="btn btn-primary" onclick="saveResource()">Save Resource</button>
        </div>
      </div>`;
    const tbody=document.getElementById('res-tbody');
    RESOURCES.forEach((r,i)=>{
      const tr=document.createElement('tr');
      tr.innerHTML=`<td style="font-size:1.3rem">${r.emoji}</td><td><strong>${r.title}</strong></td><td><span class="sbadge active">${r.type}</span></td><td><a href="${r.url}" target="_blank" style="color:var(--gold);font-size:.78rem">${r.url.length>40?r.url.slice(0,40)+'…':r.url}</a></td>
        <td><div style="display:flex;gap:.35rem">
          <button class="btn btn-secondary btn-sm" onclick="editResource(${i})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteResource(${i})">Delete</button>
        </div></td>`;
      tbody.appendChild(tr);
    });

  // ── CREATE COURSE ──
  } else if (tab==='create') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Create New Course</h2></div>
      <div class="card"><div class="card-body" style="max-width:720px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div class="form-group" style="margin:0"><label>Course Title *</label><input type="text" id="nc-title" placeholder="e.g. Client Relationship Management"></div>
          <div class="form-group" style="margin:0"><label>Category *</label><select id="nc-cat"><option value="">Select category</option><option>Editorial</option><option>Sales</option><option>Digital</option><option>AI</option><option>Operations</option><option>Leadership</option></select></div>
          <div class="form-group" style="margin:0"><label>Custom Category</label><input type="text" id="nc-ccat" placeholder="e.g. Photojournalism"></div>
          <div class="form-group" style="margin:0"><label>Emoji Icon</label><input type="text" id="nc-emoji" placeholder="📸" maxlength="4"></div>
          <div class="form-group" style="margin:0"><label>Colour</label><input type="color" id="nc-color" value="#2c3e50" style="height:38px;padding:3px 6px"></div>
          <div class="form-group" style="margin:0"><label>Estimated Duration</label><input type="text" id="nc-dur" placeholder="~2 hrs"></div>
        </div>
        <div class="form-group"><label>About / Description *</label><textarea id="nc-about" placeholder="Describe what cadets will learn…" style="min-height:100px"></textarea></div>
        <div style="margin-bottom:1rem">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem"><label style="font-size:.78rem;font-weight:600">Modules &amp; Steps</label><button class="btn btn-secondary btn-sm" onclick="addMod()">+ Add Module</button></div>
          <div id="mod-builder"></div>
        </div>
        <div style="margin-bottom:1rem">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem"><label style="font-size:.78rem;font-weight:600">Quiz Questions (min 2)</label><button class="btn btn-secondary btn-sm" onclick="addQQ()">+ Add Question</button></div>
          <div id="qq-builder"></div>
        </div>
        <div style="display:flex;gap:.75rem"><button class="btn btn-primary" onclick="createCourse()">Create Course</button><button class="btn btn-secondary" onclick="resetForm()">Reset</button></div>
      </div></div>`;
    if(!document.querySelector('#mod-builder .mbi')) addMod();

  // ── BRANDING ──
  } else if (tab==='branding') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Platform Branding</h2></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
        <div class="card"><div class="card-header"><h3>Platform Identity</h3></div><div class="card-body">
          <div class="form-group"><label>Platform Name</label><input type="text" id="b-name" value="${BRAND.name}" placeholder="e.g. IndyTrain"></div>
          <div class="form-group"><label>Tagline</label><input type="text" id="b-tagline" value="${BRAND.tagline}" placeholder="e.g. Independent Media Cadet School"></div>
          <div class="form-group"><label>Primary / Accent Colour</label>
            <div style="display:flex;gap:.75rem;align-items:center">
              <input type="color" id="b-color" value="${BRAND.primaryColor}" style="height:38px;padding:3px 6px;width:60px">
              <input type="text" id="b-color-hex" value="${BRAND.primaryColor}" placeholder="#c8a84b" style="width:120px" oninput="document.getElementById('b-color').value=this.value">
            </div>
          </div>
          <div class="form-group"><label>Logo Image <span style="font-size:.7rem;color:var(--muted)">(replaces text name in sidebar)</span></label>
            ${BRAND.logoUrl?`<img src="${BRAND.logoUrl}" style="height:48px;object-fit:contain;display:block;margin-bottom:.5rem;background:var(--paper);border-radius:6px;padding:.25rem" alt="logo">`:''}
            <button class="btn btn-secondary btn-sm" onclick="document.getElementById('logo-input').click()">⬆ Upload Logo</button>
            ${BRAND.logoUrl?`<button class="btn btn-danger btn-sm" style="margin-left:.5rem" onclick="BRAND.logoUrl=null;applyBranding();renderAC('branding');toast('Logo removed')">Remove Logo</button>`:''}
            <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">PNG or SVG recommended. Transparent background works best.</div>
          </div>
          <button class="btn btn-primary" onclick="saveBranding()">Apply Branding</button>
        </div></div>
        <div class="card"><div class="card-header"><h3>Live Preview</h3></div><div class="card-body">
          <div style="background:var(--sidebar);border-radius:10px;padding:1.25rem;color:#fff;margin-bottom:1rem">
            <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1rem">
              <div id="preview-icon" style="width:36px;height:36px;background:${BRAND.primaryColor};border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                ${BRAND.logoUrl?`<img src="${BRAND.logoUrl}" style="height:22px;object-fit:contain" alt="logo">`:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'}
              </div>
              <div>
                <div id="preview-name" style="font-size:1rem;font-weight:800">${BRAND.name}</div>
                <div id="preview-tag" style="font-size:.6rem;opacity:.6;text-transform:uppercase;letter-spacing:.05em">${BRAND.tagline}</div>
              </div>
            </div>
            <div style="height:1px;background:rgba(255,255,255,.1);margin-bottom:.875rem"></div>
            <div style="font-size:.75rem;opacity:.5;margin-bottom:.5rem">NAVIGATION PREVIEW</div>
            ${['Dashboard','Learning Modules','My Programs','Member Chat'].map((n,i)=>`<div style="display:flex;align-items:center;gap:.6rem;padding:.4rem .5rem;border-radius:6px;font-size:.78rem;color:rgba(255,255,255,.55);${i===0?'background:rgba(255,255,255,.1);color:#fff':''}">${n}</div>`).join('')}
          </div>
          <div style="padding:.875rem;background:var(--paper);border-radius:8px;border:1px solid var(--border)">
            <div style="font-size:.72rem;color:var(--muted);margin-bottom:.5rem">ACCENT COLOUR PREVIEW</div>
            <div style="display:flex;gap:.5rem;flex-wrap:wrap">
              <button class="btn btn-sm" id="preview-btn" style="background:${BRAND.primaryColor};color:#000">Primary Button</button>
              <span style="padding:2px 8px;border-radius:20px;font-size:.72rem;background:${BRAND.primaryColor};color:#000">Badge</span>
              <div style="width:100%;height:3px;background:${BRAND.primaryColor};border-radius:2px;margin-top:.25rem"></div>
            </div>
          </div>
          <p style="font-size:.75rem;color:var(--muted);margin-top:.875rem">Changes apply instantly across the platform when you click <strong>Apply Branding</strong>.</p>
        </div></div>
      </div>`;
    // Live preview sync
    document.getElementById('b-name').oninput=function(){ document.getElementById('preview-name').textContent=this.value; };
    document.getElementById('b-tagline').oninput=function(){ document.getElementById('preview-tag').textContent=this.value; };
    document.getElementById('b-color').oninput=function(){ document.getElementById('b-color-hex').value=this.value; document.getElementById('preview-btn').style.background=this.value; document.getElementById('preview-icon').style.background=this.value; };

  // ── ANNOUNCEMENTS ──
  } else if (tab==='announce') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Announcements</h2></div>
      <div class="card mb-2"><div class="card-header"><h3>Send Announcement</h3></div><div class="card-body">
        <div class="form-group"><label>Title</label><input type="text" id="ann-title" placeholder="e.g. New course available!"></div>
        <div class="form-group"><label>Message</label><textarea id="ann-body" placeholder="Write your announcement…" style="min-height:80px"></textarea></div>
        <button class="btn btn-primary" onclick="sendAnnouncement()">📢 Broadcast to All Users</button>
      </div></div>
      <div class="card"><div class="card-header"><h3>Previous Announcements</h3></div><div class="card-body">
        ${ANNOUNCEMENTS.length===0?'<div style="color:var(--muted);font-size:.82rem">No announcements sent yet.</div>':ANNOUNCEMENTS.slice().reverse().map((a,i)=>`
          <div style="padding:.875rem;border:1px solid var(--border);border-radius:8px;margin-bottom:.6rem;display:flex;gap:.875rem;align-items:flex-start">
            <span style="font-size:1.3rem">📢</span>
            <div style="flex:1"><div style="font-weight:700;font-size:.875rem">${a.title}</div><div style="font-size:.8rem;color:var(--muted);margin-top:.2rem">${a.body}</div><div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">${a.date}</div></div>
            <button class="btn btn-danger btn-sm" onclick="deleteAnnouncement(${ANNOUNCEMENTS.length-1-i})">Delete</button>
          </div>`).join('')}
      </div></div>`;

  // ── ANALYTICS ──
  } else if (tab==='analytics') {
    const totalEnroll = USERS.reduce((s,u)=>s+u.enrolled,0);
    const totalComplete = USERS.reduce((s,u)=>s+u.completed,0);
    const completionRate = totalEnroll>0 ? Math.round(totalComplete/totalEnroll*100) : 0;
    const courseStats = allC().map(course=>({
      title:course.title.length>35?course.title.slice(0,35)+'…':course.title,
      cat:course.cat,
      enrolled: USERS.filter(u=>u.enrolled>0).length,
      rating:course.rating
    })).slice(0,10);
    c.innerHTML=`
      <div class="section-hdr"><h2>Platform Analytics</h2></div>
      <div class="stats-grid" style="margin-bottom:1.75rem">
        <div class="stat-card"><div class="stat-label">Total Users</div><div class="stat-value">${USERS.length}</div><div class="stat-change">Registered cadets</div></div>
        <div class="stat-card"><div class="stat-label">Total Courses</div><div class="stat-value">${allC().length}</div><div class="stat-change">${COURSES.filter(c=>c.cat==='Editorial').length} Editorial · ${COURSES.filter(c=>c.cat==='Sales').length} Sales</div></div>
        <div class="stat-card"><div class="stat-label">Completion Rate</div><div class="stat-value">${completionRate}%</div><div class="stat-change">${totalComplete} completions</div></div>
        <div class="stat-card"><div class="stat-label">Custom Courses</div><div class="stat-value">${CUSTOM.length}</div><div class="stat-change">Admin-created</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
        <div class="card"><div class="card-header"><h3>Courses by Category</h3></div><div class="card-body">
          ${['Editorial','Sales',...new Set(CUSTOM.map(c=>c.cat))].map(cat=>{
            const count=allC().filter(c=>c.cat===cat).length;
            const pct=Math.round(count/allC().length*100);
            return `<div style="margin-bottom:.875rem"><div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:.3rem"><span style="font-weight:600">${cat}</span><span style="color:var(--muted)">${count} courses</span></div><div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div></div>`;
          }).join('')}
        </div></div>
        <div class="card"><div class="card-header"><h3>User Overview</h3></div><div class="card-body">
          <div style="display:flex;flex-direction:column;gap:.75rem">
            <div style="display:flex;justify-content:space-between;padding:.75rem;background:var(--paper);border-radius:8px"><span style="font-size:.82rem">Total Registered</span><strong>${USERS.length}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:.75rem;background:var(--paper);border-radius:8px"><span style="font-size:.82rem">Admins</span><strong>${USERS.filter(u=>u.role==='admin').length}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:.75rem;background:var(--paper);border-radius:8px"><span style="font-size:.82rem">Active Cadets</span><strong>${USERS.filter(u=>u.role==='cadet'&&u.status==='active').length}</strong></div>
            <div style="display:flex;justify-content:space-between;padding:.75rem;background:var(--paper);border-radius:8px"><span style="font-size:.82rem">Inactive / Deactivated</span><strong>${USERS.filter(u=>u.status!=='active').length}</strong></div>
          </div>
        </div></div>
      </div>`;
  }
}

// ── USER MANAGEMENT HELPERS ──
function showAddUserModal() { document.getElementById('add-user-modal').style.display='block'; document.getElementById('batch-invite-modal').style.display='none'; }
function showBatchInvite()  { document.getElementById('batch-invite-modal').style.display='block'; document.getElementById('add-user-modal').style.display='none'; }

function addUser() {
  const name  = document.getElementById('nu-name').value.trim();
  const email = document.getElementById('nu-email').value.trim().toLowerCase();
  const pass  = document.getElementById('nu-pass').value;
  const role  = document.getElementById('nu-role').value;
  if (!name||!email) { toast('Please fill in name and email','error'); return; }
  if (USERS.find(u=>u.email.toLowerCase()===email)) { toast('A user with this email already exists','error'); return; }
  USERS.push({ id:Date.now(), name, email, role, status:'active', enrolled:0, completed:0, joined:new Date().toISOString().slice(0,10), password:pass||'changeme' });
  toast('User "'+name+'" added!','success'); renderAC('users');
}

function approveUser(id) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  u.status='active';
  toast('✓ '+u.name+' approved — they can now log in.','success'); renderAC('users'); renderDash();
}

function rejectUser(id) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  if(!confirm('Reject and remove "'+u.name+'"\'s registration request?')) return;
  USERS.splice(USERS.indexOf(u),1);
  toast('Registration rejected and removed.'); renderAC('users');
}

function changeUserRole(id,role) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  u.role=role;
  toast(u.name+' is now '+(role==='admin'?'an Admin':'a Cadet'),'success');
}

function toggleUserStatus(id) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  u.status=u.status==='active'?'inactive':'active';
  renderAC('users'); toast('User '+(u.status==='active'?'activated':'deactivated'));
}

function resetUserPass(id) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  const np=prompt('Set new password for '+u.name+':');
  if(!np) return;
  u.password=np;
  toast('Password reset for "'+u.name+'"','success');
}

function enrollUserInAll(id) {
  const u=USERS.find(x=>x.id===id); if(!u)return;
  u.enrolled=allC().length; toast('Enrolled '+u.name+' in all courses','success'); renderAC('users');
}

function saveBatchInvite() {
  const raw = document.getElementById('invite-emails').value;
  const emails = raw.split(/[\n,]+/).map(e=>e.trim().toLowerCase()).filter(e=>e.includes('@'));
  if(!emails.length){ toast('No valid emails found','error'); return; }
  let added=0;
  emails.forEach(e=>{ if(!INVITED_EMAILS.includes(e)&&!USERS.find(u=>u.email===e)){ INVITED_EMAILS.push(e); added++; } });
  toast(added+' email'+(added!==1?'s':'')+' pre-approved. They can register and go straight in.','success');
  renderAC('users');
}

// ── RESOURCE MANAGEMENT ──
let _editResIdx = null;
function showAddResource() {
  _editResIdx=null;
  document.getElementById('res-form-title').textContent='Add Resource';
  ['rf-title','rf-url','rf-desc'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('rf-emoji').value='📄';
  document.getElementById('rf-type').value='Guide';
  document.getElementById('res-form').style.display='block';
}
function editResource(i) {
  _editResIdx=i; const r=RESOURCES[i];
  document.getElementById('res-form-title').textContent='Edit Resource';
  document.getElementById('rf-title').value=r.title;
  document.getElementById('rf-url').value=r.url;
  document.getElementById('rf-desc').value=r.desc;
  document.getElementById('rf-emoji').value=r.emoji;
  document.getElementById('rf-type').value=r.type;
  document.getElementById('res-form').style.display='block';
}
function saveResource() {
  const title=document.getElementById('rf-title').value.trim();
  const url=document.getElementById('rf-url').value.trim();
  if(!title||!url){ toast('Please fill in title and URL','error'); return; }
  const r={ title, url, emoji:document.getElementById('rf-emoji').value||'📄', type:document.getElementById('rf-type').value, desc:document.getElementById('rf-desc').value.trim() };
  if(_editResIdx!==null){ RESOURCES[_editResIdx]=r; toast('Resource updated!','success'); }
  else { RESOURCES.push(r); toast('Resource added!','success'); }
  renderRes(); document.getElementById('res-form').style.display='none'; renderAC('resources');
}
function deleteResource(i) {
  if(!confirm('Delete "'+RESOURCES[i].title+'"?')) return;
  RESOURCES.splice(i,1); renderRes(); renderAC('resources'); toast('Resource deleted');
}

// ── BRANDING HELPERS ──
function saveBranding() {
  BRAND.name=document.getElementById('b-name').value||BRAND.name;
  BRAND.tagline=document.getElementById('b-tagline').value||BRAND.tagline;
  BRAND.primaryColor=document.getElementById('b-color').value||BRAND.primaryColor;
  applyBranding(); toast('Branding applied across platform!','success');
}
function handleLogoFile(e) {
  const f=e.target.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload=evt=>{ BRAND.logoUrl=evt.target.result; applyBranding(); renderAC('branding'); toast('Logo uploaded!','success'); };
  reader.readAsDataURL(f); e.target.value='';
}

// ── ANNOUNCEMENTS ──
function sendAnnouncement() {
  const title=document.getElementById('ann-title').value.trim();
  const body=document.getElementById('ann-body').value.trim();
  if(!title||!body){ toast('Please enter a title and message','error'); return; }
  ANNOUNCEMENTS.push({title,body,date:new Date().toLocaleString('en-ZA')});
  document.getElementById('ann-title').value=''; document.getElementById('ann-body').value='';
  toast('📢 Announcement broadcast to all users!','success');
  renderAC('announce'); renderDash();
}
function deleteAnnouncement(i) { ANNOUNCEMENTS.splice(i,1); renderAC('announce'); renderDash(); toast('Announcement deleted'); }

// ── VIDEO MANAGEMENT ──
function switchVT(cid,type,el) { document.getElementById('vtabs-'+cid).querySelectorAll('.vtab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); ['file','gdrive','library'].forEach(t=>{const p=document.getElementById('vp-'+t+'-'+cid);if(p)p.style.display=t===type?'block':'none';}); }
let PVC=null;
function trigVid(cid){ PVC=cid; document.getElementById('vid-input').click(); }
function handleVidFile(e) { const f=e.target.files[0]; if(!f||!PVC)return; const url=URL.createObjectURL(f); VID_OVERRIDES[PVC]={type:'file',url}; const c=allC().find(x=>x.id===PVC); toast('Video uploaded for "'+c.title+'"!','success'); renderAC('videos'); e.target.value=''; }
function saveGD(cid) { const url=(document.getElementById('gdi-'+cid)||{}).value; if(!url||!url.trim()){toast('Please enter a Google Drive link','error');return;} const clean=url.trim().replace('/view','/preview').replace('open?id=','file/d/').replace(/\/edit.*$/,'/preview'); VID_OVERRIDES[cid]={type:'gdrive',url:clean}; const c=allC().find(x=>x.id===cid); toast('Drive link saved for "'+c.title+'"!','success'); renderAC('videos'); }
function useLib(cid,url,name) { VID_OVERRIDES[cid]={type:'gdrive',url}; const c=allC().find(x=>x.id===cid); toast('"'+name+'" assigned to "'+c.title+'"!','success'); renderAC('videos'); }
function rmVid(cid) { delete VID_OVERRIDES[cid]; const c=allC().find(x=>x.id===cid); toast('Default video restored for "'+c.title+'"'); renderAC('videos'); }

// ── IMAGE MANAGEMENT ──
let PIC=null;
function trigImg(cid){ PIC=cid; document.getElementById('img-input').click(); }
function handleImgFile(e) { const f=e.target.files[0]; if(!f||!PIC)return; const reader=new FileReader(); reader.onload=evt=>{ IMG_OVERRIDES[PIC]=evt.target.result; const c=allC().find(x=>x.id===PIC); toast('Image uploaded for "'+c.title+'"!','success'); renderAC('videos'); renderCourses(); renderDash(); }; reader.readAsDataURL(f); e.target.value=''; }
function rmImg(cid) { delete IMG_OVERRIDES[cid]; const c=allC().find(x=>x.id===cid); toast('Image removed from "'+c.title+'"'); renderAC('videos'); renderCourses(); renderDash(); }

// ── CREATE COURSE ──
function addMod() { const list=document.getElementById('mod-builder'); if(!list)return; const id=++MC; const d=document.createElement('div'); d.className='mbi'; d.id='mb-'+id; d.innerHTML=`<div class="mbh"><input type="text" placeholder="Module name" id="mn-${id}"><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('mb-${id}').remove()">✕</button></div><div class="sbl" id="ms-${id}"><div class="sbr"><input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button></div></div><div style="padding:.5rem .875rem;border-top:1px solid var(--border)"><button class="btn btn-secondary btn-sm" onclick="addStep(${id})">+ Add Step</button></div>`; list.appendChild(d); }
function addStep(mid) { const l=document.getElementById('ms-'+mid); if(!l)return; const d=document.createElement('div'); d.className='sbr'; d.innerHTML=`<input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button>`; l.appendChild(d); }
function addQQ() { const list=document.getElementById('qq-builder'); if(!list)return; const id=++QC; const d=document.createElement('div'); d.className='card mb-2'; d.id='qq-'+id; d.innerHTML=`<div class="card-header"><h3 style="font-size:.82rem">Question ${id}</h3><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('qq-${id}').remove()">✕</button></div><div class="card-body" style="padding:1rem"><div class="form-group"><label>Question text</label><input type="text" id="qqt-${id}" placeholder="Enter your question…"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:.75rem"><div class="form-group" style="margin:0"><label>Option A</label><input type="text" id="qqa-${id}"></div><div class="form-group" style="margin:0"><label>Option B</label><input type="text" id="qqb-${id}"></div><div class="form-group" style="margin:0"><label>Option C</label><input type="text" id="qqc-${id}"></div><div class="form-group" style="margin:0"><label>Option D</label><input type="text" id="qqd-${id}"></div></div><div class="form-group" style="margin:0"><label>Correct Answer</label><select id="qqs-${id}"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></div></div>`; list.appendChild(d); }
function createCourse() {
  const title=(document.getElementById('nc-title')||{}).value||'';
  const cat=(document.getElementById('nc-ccat')||{}).value||(document.getElementById('nc-cat')||{}).value||'';
  const about=(document.getElementById('nc-about')||{}).value||'';
  if(!title.trim()||!cat.trim()||!about.trim()){ toast('Please fill in Title, Category, and Description','error'); return; }
  const emoji=(document.getElementById('nc-emoji')||{}).value||'📚';
  const color=(document.getElementById('nc-color')||{}).value||'#2c3e50';
  const dur=(document.getElementById('nc-dur')||{}).value||'~1 hr';
  const modules=[]; let totalS=0;
  document.querySelectorAll('.mbi').forEach(mb=>{ const inp=mb.querySelector('input[type="text"]'); const mname=inp?inp.value.trim():'Module'; const steps=[]; mb.querySelectorAll('.sti').forEach(i=>{if(i.value.trim())steps.push({t:i.value.trim(),d:''});}); if(steps.length){modules.push({name:mname,steps});totalS+=steps.length;} });
  const quiz=[]; document.querySelectorAll('[id^="qqt-"]').forEach(el=>{ const id=el.id.split('-')[1]; const q=el.value.trim(); const a=(document.getElementById('qqa-'+id)||{}).value||''; const b=(document.getElementById('qqb-'+id)||{}).value||''; const cv=(document.getElementById('qqc-'+id)||{}).value||''; const d2=(document.getElementById('qqd-'+id)||{}).value||''; const ans=parseInt((document.getElementById('qqs-'+id)||{}).value||'0'); const opts=[a,b,cv,d2].filter(Boolean); if(q&&opts.length>=2) quiz.push({q,opts,ans:Math.min(ans,opts.length-1)}); });
  const nid=Date.now();
  CUSTOM.push({id:nid,title:title.trim(),cat:cat.trim(),emoji,color,about:about.trim(),steps:totalS||1,dur,rating:'New',badge:emoji,modules,quiz});
  renderDash(); renderCourses(); toast('"'+title.trim()+'" course created!','success');
  const vtab=document.querySelector('.admin-tab'); if(vtab) vtab.click();
  resetForm();
}
function resetForm() { ['nc-title','nc-about','nc-emoji','nc-dur','nc-ccat'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';}); const cat=document.getElementById('nc-cat'); if(cat)cat.value=''; const col=document.getElementById('nc-color'); if(col)col.value='#2c3e50'; const mb=document.getElementById('mod-builder'); if(mb)mb.innerHTML=''; const qb=document.getElementById('qq-builder'); if(qb)qb.innerHTML=''; MC=0; QC=0; addMod(); }

// ── TOAST ──
function toast(msg,type='info') { const tc=document.getElementById('toasts'); const t=document.createElement('div'); t.className='toast '+type; t.innerHTML=`<span>${type==='success'?'✓':type==='error'?'✕':'ℹ'}</span><span>${msg}</span>`; tc.appendChild(t); setTimeout(()=>{t.style.animation='sIn .3s ease reverse';setTimeout(()=>t.remove(),280);},3500); }

// ── RESPONSIVE ──
function chkMob() { document.getElementById('menu-btn').style.display=window.innerWidth<=768?'flex':'none'; }
window.addEventListener('resize',chkMob); chkMob();
