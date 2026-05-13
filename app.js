// IndyTrain — combined data + app
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
      { q: "Which company serves as the exclusive sales partner for Independent Media Group and IOL?", opts: ["Sandton Times", "Mail & Guardian", "Volt Africa", "African Community Property"], ans: 2 },
      { q: "What is the primary method used to sell to clients across various platforms?", opts: ["Raw reader volume", "Audience-based targeting", "Print-only packages", "Geographical location"], ans: 1 },
      { q: "What percentage of the group's digital traffic is generated via mobile devices?", opts: ["50%", "23%", "80%", "48%"], ans: 2 },
      { q: "Independent Media focuses its newspaper coverage on which major South African metropolitan areas?", opts: ["Durban, Johannesburg, Pretoria, and Cape Town", "Soweto, Polokwane, and Bloemfontein", "Port Elizabeth, East London, and George", "Kimberley, Nelspruit, and Rustenburg"], ans: 0 },
      { q: "Which social media platform has the largest following for the group?", opts: ["X (formerly Twitter)", "TikTok", "Facebook", "Instagram", "YouTube", "LinkedIn"], ans: 2 },
      { q: "What is the average age distribution of the Independent Media audience?", opts: ["18 to 24", "25 to 34", "35 to 54", "55 and older"], ans: 2 },
      { q: "Beyond selling internal inventory, what other service does Volt Africa provide as an agency?", opts: ["Printing newspapers", "Buying paid media inventory on behalf of customers", "Writing original editorial content", "Manufacturing cosmetics"], ans: 1 },
      { q: "Approximately how many unique online users does the group have?", opts: ["5 million", "10 to 15 million", "36 million", "680,000"], ans: 2 }
    ]
  },
  {
    id: 102, title: "Introduction to Volt Africa", cat: "Sales",
    emoji: "⚡", color: "#1a1a5c", rating: "5.0", badge: "⚡",
    steps: 1, dur: "~30 min",
    about: "Learn about Volt Africa — our digital media brand, its audiences, offerings, and how it fits into the broader Independent Media ecosystem. Essential for all client-facing and commercial teams.",
    modules: [{ name: "Volt Africa", steps: [{ t: "Introduction to Volt Africa", d: "Volt Africa's audiences, digital offerings, and its position in the Independent Media ecosystem." }] }],
    quiz: [
      { q: "What is the core approach Volt Africa uses to redefine advertising?", opts: ["A digital-only strategy", "A 360° approach integrating print, digital, social, and paid media", "A focus exclusively on traditional print media", "A localised approach focusing only on search engines"], ans: 1 },
      { q: "Which of these publishers is part of Volt Africa's exclusive 'sell side' network?", opts: ["Facebook and Instagram", "News24 and Times Live", "Independent Media, ACM, Condé Nast, and Mail & Guardian", "YouTube and TikTok"], ans: 2 },
      { q: "What does operating on the 'buy side' allow Volt Africa to do for its clients?", opts: ["Purchase inventory only within their own publisher network", "Manage print subscriptions for publishers", "Buy inventory outside their network, such as programmatic ads, Google search, and paid social", "Sell their own company shares to investors"], ans: 2 },
      { q: "How does Volt Africa utilise DV360 for advertising?", opts: ["To create print advertisements for House & Garden", "To run video advertisements on platforms like YouTube", "To manage physical billboards in Sandton", "To track organic search results on Google"], ans: 1 },
      { q: "What is the ultimate goal of Volt Africa's results-driven campaigns?", opts: ["To focus purely on traditional advertising methods", "To ensure clients reach the right audience at the right time, regardless of platform or content", "To replace digital media with print media", "To limit client reach to a single specific platform"], ans: 1 }
    ]
  },
  {
    id: 103, title: "Module 1: The Digital Landscape", cat: "Sales",
    emoji: "🌐", color: "#0f3460", rating: "4.9", badge: "🌐",
    steps: 1, dur: "~45 min",
    about: "Understand the evolving digital media landscape in South Africa and globally. How audiences consume digital content, where advertising spend is shifting, and what it means for Independent Media's commercial strategy.",
    modules: [{ name: "The Digital Landscape", steps: [{ t: "The Digital Landscape", d: "How audiences consume digital content, where advertising spend is shifting, and what it means for our commercial strategy." }] }],
    quiz: [
      { q: "How much time does the average user spend consuming digital content daily?", opts: ["3.5 hours per day", "9.5 hours per week", "9.5 hours per day", "1 hour per day"], ans: 0 },
      { q: "Which type of content currently dominates user attention and is used by roughly 97% of internet users?", opts: ["Content", "Display", "Social Media", "Video", "DV360"], ans: 3 },
      { q: "What is user attention driven by?", opts: ["Reach", "Algorithms", "Loyalty"], ans: 1 },
      { q: "Why do news platforms remain a vital part of a digital strategy despite high usage of social media?", opts: ["They are cheaper than social media", "They offer trusted, credible environments that social media cannot replicate", "They have more users than social media", "They are easier to advertise on"], ans: 1 },
      { q: "Why is 'Organic Reach' for brands no longer considered a reliable standalone strategy?", opts: ["It costs too much", "Algorithm changes have drastically reduced organic visibility for brands", "It only works for large brands", "It requires too much content"], ans: 1 }
    ]
  },
  {
    id: 104, title: "Module 2: Social Media Landscape", cat: "Sales",
    emoji: "📲", color: "#16213e", rating: "4.8", badge: "📲",
    steps: 1, dur: "~45 min",
    about: "A deep dive into the social media landscape as it relates to Independent Media's commercial offerings. Covers key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix.",
    modules: [{ name: "Social Media Landscape", steps: [{ t: "Social Media Landscape", d: "Key platforms, audience behaviour, content formats, and how to position social media as part of a client's media mix." }] }],
    quiz: [
      { q: "What percentage of the adult population in South Africa used social media at the end of 2025?", opts: ["Roughly 50%", "Roughly 65%", "Roughly 75%", "Over 80%"], ans: 1 },
      { q: "On average, how many different social media apps does a South African user have on their phone?", opts: ["5-6", "7-8", "8-9", "Less than 5"], ans: 1 },
      { q: "True or False: The gender split of social media users in South Africa is heavily skewed, with 75% being male.", opts: ["True", "False"], ans: 1 },
      { q: "Approximately how many hours per week does the average user spend on social media?", opts: ["3.5 hours", "4 hours", "4.5 hours", "9 hours"], ans: 3 },
      { q: "Which platform is currently noted for receiving the most attention and taking 'huge leaps' in the market?", opts: ["Facebook", "YouTube", "TikTok", "Instagram"], ans: 2 },
      { q: "Why is a single platform social media strategy considered 'weak'?", opts: ["Because algorithms favour brands that post identical content across all platforms", "Because each platform has the same audience, so using more than one is redundant", "Because managing multiple platforms is always cheaper and more efficient", "Because users toggle between multiple platforms; a single-platform strategy misses large portions of audience"], ans: 3 },
      { q: "What determines what content gets seen or ignored on social media platforms?", opts: ["Reach", "Budget", "Algorithm", "Followers"], ans: 2 },
      { q: "Which platform is described as the 'backbone of digital campaigns' and carries the most weight for ad spend and ROI?", opts: ["Facebook", "TikTok", "Instagram", "X", "LinkedIn", "WhatsApp"], ans: 0 },
      { q: "On which platform is user intent often driven by 'search', making it valuable for in-depth storytelling and message retention?", opts: ["YouTube", "Google", "DV360", "Video"], ans: 0 },
      { q: "Which platform relies on real-time participation in conversations rather than just broadcasting content?", opts: ["YouTube", "Facebook", "X", "TikTok", "LinkedIn"], ans: 2 }
    ]
  },
  {
    id: 105, title: "Module 4: Our Ecosystem — Digital", cat: "Sales",
    emoji: "💻", color: "#533483", rating: "4.8", badge: "💻",
    steps: 1, dur: "~45 min",
    about: "Explore the full suite of Independent Media's digital platforms and products. Learn how to package digital offerings for clients, understand audience data, and build compelling digital proposals that drive results.",
    modules: [{ name: "Our Ecosystem — Digital", steps: [{ t: "Our Ecosystem — Digital", d: "The full suite of Independent Media's digital platforms and products. How to package digital offerings for clients and build compelling digital proposals." }] }],
    quiz: [
      { q: "True or False: Display advertising should primarily be sold as a direct conversion tool.", opts: ["True", "False"], ans: 1 },
      { q: "What is the 'billboard on a highway' analogy used to describe?", opts: ["High click-through rates (CTR)", "Brand awareness through repeated visibility", "Direct response marketing", "Content marketing strategy"], ans: 1 },
      { q: "In digital advertising, what does the acronym CPM stand for?", opts: ["Cost per Thousand Impressions", "Cost per Thousand Users"], ans: 0 },
      { q: "A 'Page Takeover' provides a client with exclusivity on a page or section for what period of time?", opts: ["12 hours", "24 hours", "Not time based, based on amount of impressions sold"], ans: 1 },
      { q: "Which type of content is written by the publisher's staff, does not show 'partnered' in the URL, and is credited to a 'staff reporter'?", opts: ["Sponsored content", "Partnered content", "Native content"], ans: 2 },
      { q: "According to the video, how does strong content improve paid media performance?", opts: ["It increases engagement rates (clicks and shares)", "It increases engagement rates (clicks and shares) and lowers the cost per click", "It lowers the cost per click"], ans: 1 },
      { q: "Why is content considered a 'bridge' in the marketing funnel?", opts: ["Between Awareness and Consideration", "Between Consideration and Conversion", "Between Awareness and Conversion"], ans: 2 },
      { q: "What is the main difference between 'boosting' a post and a 'paid social campaign'?", opts: ["Boosting uses existing organic posts; paid campaigns are built from scratch with specific objectives", "They are the same — it is just the budget that differs", "Paid campaigns uses existing organic posts for reach; boosted campaigns are built from scratch with specific objectives"], ans: 0 },
      { q: "Why are hashtags described as 'vital' to a social media campaign?", opts: ["They show what is trending", "They group content together", "They help with Gorilla Marketing"], ans: 1 },
      { q: "Within how many seconds must a video capture a user's attention before it typically becomes skippable?", opts: ["30 seconds", "5 seconds", "15 seconds"], ans: 1 },
      { q: "Which platform is built entirely on short-form video for discovery?", opts: ["YouTube", "Instagram", "TikTok", "LinkedIn"], ans: 2 }
    ]
  },
  {
    id: 106, title: "Module 5: Our Ecosystem — Paid Media", cat: "Sales",
    emoji: "💰", color: "#e94560", rating: "4.8", badge: "💰",
    steps: 1, dur: "~45 min",
    about: "Understand Independent Media's paid media offerings including display advertising, native content, sponsored features, and programmatic solutions. Learn how to match client objectives with the right paid media products.",
    modules: [{ name: "Our Ecosystem — Paid Media", steps: [{ t: "Our Ecosystem — Paid Media", d: "Display advertising, native content, sponsored features, and programmatic solutions. Match client objectives with the right paid media products." }] }],
    quiz: [
      { q: "How does the speaker define 'Paid Media' in relation to a publisher's own platforms?", opts: ["It is internal advertising within platforms like IOL or the Star", "It is targeting an audience that is not on the publisher's own platforms", "It is purely organic content shared on social media", "It is only available for ad agency clients"], ans: 1 },
      { q: "Why is caution advised when offering paid media services to ad agencies?", opts: ["Because agencies do not understand digital advertising", "Because it is too expensive for agencies to afford", "Because it acts as direct competition to them and could damage the professional relationship", "Because agencies only focus on print media"], ans: 2 },
      { q: "In the South African digital ad spend landscape, which category accounts for the majority (approximately 70%) of spend?", opts: ["Social Media", "Programmatic Display", "Search", "Native Advertising"], ans: 0 },
      { q: "What is DV360 (Display & Video 360) described as in the video?", opts: ["A tool specifically for building websites", "A social media platform competing with TikTok", "A central hub to buy digital ads efficiently across multiple platforms at scale", "An offline billboard management system"], ans: 2 },
      { q: "What is the core focus of Google Ads as described by the speaker?", opts: ["Passively scrolling through content", "Intent-driven marketing that connects with individuals actively searching for products or services", "Reaching audiences only on non-reputable websites", "Strictly video-only content for YouTube"], ans: 1 },
      { q: "True or False: Google Ads is ineffective for retargeting previous website visitors.", opts: ["True", "False"], ans: 1 },
      { q: "Which social media platform is mentioned as growing 'exceptionally fast' and sometimes offering a better ROI than Meta?", opts: ["X (formerly Twitter)", "LinkedIn", "TikTok", "Instagram"], ans: 2 },
      { q: "What does 'Programmatic' advertising mean in the context of system-to-system transactions?", opts: ["A manual process where humans call each other to buy ads", "A system where one automated system buys from another automated system", "Advertising that is only available on radio", "A way to increase wastage in advertising budgets"], ans: 1 },
      { q: "How does the company charge for managing paid media campaigns?", opts: ["A 20% management fee with no setup costs", "A flat monthly subscription with a 50% discount for agencies", "A R5,000 setup fee and 15% management fee", "A R3,500 setup fee per platform and a 30% management fee"], ans: 3 }
    ]
  },
  {
    id: 107, title: "Module 8: Our Ecosystem — Opportunities", cat: "Sales",
    emoji: "🚀", color: "#f5a623", rating: "4.9", badge: "🚀",
    steps: 1, dur: "~45 min",
    about: "Explore the full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client, build integrated proposals, and close deals with confidence.",
    modules: [{ name: "Our Ecosystem — Opportunities", steps: [{ t: "Our Ecosystem — Opportunities", d: "The full range of commercial opportunities within the Independent Media ecosystem. Identify the right opportunities for each client and build integrated proposals." }] }],
    quiz: [
      { q: "What is the primary key to creating an effective marketing campaign from a large portfolio of products?", opts: ["Quoting only on products you are most familiar with", "Matching the specific product to the client's objective", "Using as many different platforms as possible to increase reach", "Focusing solely on high-reach display advertising"], ans: 1 },
      { q: "Which product is described as being ideal for 'brand awareness' due to high reach and visibility, despite having a low click-through rate?", opts: ["Sponsored articles", "Paid search", "Display advertising", "Organic social media"], ans: 2 },
      { q: "Why is 'native advertising' (content) considered highly credible?", opts: ["It uses advanced data targeting", "It is integrated within trusted editorial platforms", "It forces a hard sell to the reader", "It is more cost-effective than print"], ans: 1 },
      { q: "What is the main difference between 'organic social' and 'boosted social'?", opts: ["Organic is only for video, while boosted is for text", "Organic posts are on owned platforms; boosted posts use paid amplification to reach external audiences", "Boosted social is only for older demographics", "There is no difference; they are the same product"], ans: 1 },
      { q: "Which products are recommended for 'performance and conversion' objectives?", opts: ["Print magazines and newspapers", "Display banners and billboards", "Paid search, paid social, and retargeting", "Webinars and in-person activations"], ans: 2 },
      { q: "True or False: Multi-product campaigns can lead to a stronger return on investment and higher client retention.", opts: ["True", "False"], ans: 0 },
      { q: "True or False: Banners and leaderboards cannot be targeted by demographics or geography.", opts: ["True", "False"], ans: 1 },
      { q: "True or False: Traditional print media is still valuable for reaching premium audiences and establishing brand authority.", opts: ["True", "False"], ans: 0 },
      { q: "True or False: Content-led campaigns are designed for an immediate 'hard sell' where customers buy right away.", opts: ["True", "False"], ans: 1 },
      { q: "True or False: Retargeting involves sending campaigns specifically to people who have already shown interest, such as by abandoning a shopping cart.", opts: ["True", "False"], ans: 0 },
      { q: "What is the 'most important word' used to describe what clients are actually buying?", opts: ["Solution", "Audience", "Reach", "Budget"], ans: 1 }
    ]
  },
  {
    id: 108, title: "Back End: Workflow", cat: "Sales",
    emoji: "⚙️", color: "#2c3e50", rating: "4.7", badge: "⚙️",
    steps: 1, dur: "~45 min",
    about: "Understand the internal workflow processes at Independent Media — from campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members to ensure seamless campaign execution.",
    modules: [{ name: "Workflow", steps: [{ t: "Workflow 2026", d: "Campaign booking and trafficking to delivery and reporting. Essential knowledge for all sales and operations team members." }] }],
    quiz: [
      { q: "What are the two items that must be present before any action can be taken?", opts: ["Trello Card and Signed IO", "Signed IO and POP", "Trello Card and Creatives"], ans: 0 },
      { q: "When a campaign involves multiple departments what should you do?", opts: ["Copy the card to each department board", "Keep the card on your board and tag the relevant people", "Mirror the card to 1 department and they will share it with the other departments", "Mirror the card to each department"], ans: 2 },
      { q: "What is the standard turnaround time for the strategy department?", opts: ["24 hours", "48 hours", "72 hours"], ans: 1 },
      { q: "When you sell a content piece — mark all the elements that MUST be on the card.", opts: ["Banners", "Insertion Order", "Copy of the content in pdf format", "Image", "hashtags", "Copy of content in word format", "Video", "URL's"], ans: 1 }
    ]
  },
  {
    id: 109, title: "Back End: Strategy", cat: "Sales",
    emoji: "🎯", color: "#8e44ad", rating: "4.9", badge: "🎯",
    steps: 1, dur: "~45 min",
    about: "Learn how to think and operate strategically as part of the Independent Media commercial team. Covers understanding client business objectives, building strategic media proposals, and positioning Independent Media's offerings as a strategic partner — not just a vendor.",
    modules: [{ name: "Strategy", steps: [{ t: "Back End — Strategy", d: "Understanding client business objectives, building strategic media proposals, and positioning Independent Media as a strategic partner." }] }],
    quiz: [
      { q: "Where does the strategy team sit within the business structure?", opts: ["At the end of the production line", "At the center of the business", "Exclusively within the digital department"], ans: 1 },
      { q: "True or False: The strategy team's primary job is only to plan campaigns.", opts: ["True", "False"], ans: 1 },
      { q: "The strategy team bridges the gap between which two areas?", opts: ["Creative and Finance", "Sales aspirations and executive realities", "Marketing and Human Resources"], ans: 1 },
      { q: "At what stage of the business process does the strategy team primarily operate?", opts: ["After the sale is made", "When prospecting", "Pre-Sale"], ans: 2 },
      { q: "Which of the following is a characteristic of a good strategy according to the video?", opts: ["A broad audience defined as 'anyone with money'", "Using 'cookie-cutter' or 'copy and paste' plans", "A clearly defined target audience and specific roles for each platform"], ans: 2 }
    ]
  },
  {
    id: 110, title: "Trello for Campaign Management", cat: "Sales",
    emoji: "📋", color: "#0052cc", rating: "New", badge: "📋",
    steps: 1, dur: "~30 min",
    about: "Learn how to use Trello to manage campaigns efficiently across departments at Volt Africa. Covers card creation, naming conventions, mirroring, tagging, reporting, and archiving.",
    modules: [{ name: "Trello Workflow", steps: [{ t: "Trello for Campaign Management", d: "How to use Trello to manage campaigns across departments." }] }],
    quiz: [
      { q: "Which of the following is the system NOT used for?", opts: ["Banner campaigns", "Social media (organic or paid)", "Print media requests", "Strategy and information requests"], ans: 3 },
      { q: "What is the main benefit of using Trello instead of email?", opts: ["It is less daunting for beginners", "It minimises back-and-forth emails between departments", "It automatically builds the insertion orders", "It deletes old campaigns to save space"], ans: 1 },
      { q: "What specific information must be included in the card's naming convention?", opts: ["Campaign ID, client name, type of campaign (content, social, or display), and start date", "Consultant name, client name, and budget", "Client name, Navigator ID, and department head", "Campaign type and end date"], ans: 0 },
      { q: "How do you notify a specific team member about a message on a card?", opts: ["Send them a separate email with the card link", "Tag them using the '@' symbol followed by their name in the comments", "Move the card to the 'Completed' folder", "Archive the card and then unarchive it"], ans: 1 },
      { q: "What is the function of 'mirroring' a card?", opts: ["To create an exact copy that can be deleted later", "To allow different departments to see and work on the same card while keeping all communication synchronised", "To back up the card in case of a server error", "To send the card directly to the client"], ans: 1 },
      { q: "When does reporting happen?", opts: ["Only at the very end of the campaign", "Once the client asks for an interim report", "As soon as the campaign goes live", "After the consultant uploads the final screenshots"], ans: 3 },
      { q: "Why should sales representatives download and send reports to clients themselves rather than giving clients direct access to the live link?", opts: ["To prevent clients from seeing internal comments", "Because live data can take a long time to load or show 'no data' errors for third parties", "To ensure the consultant's name is on the document", "Because the live links expire after 24 hours"], ans: 1 },
      { q: "What should you do with a card once a campaign is finished?", opts: ["Delete it", "Move it to the 'Incoming' list", "Archive it to maintain a searchable filing system", "Leave it on the main board"], ans: 2 },
      { q: "What attachments MUST be on every card?", opts: ["Proof of payment", "PO", "Insertion Order", "Assets", "Copy of Client's ID"], ans: 2 }
    ]
  },
  {
    id: 111, title: "Sandton Times", cat: "Sales",
    emoji: "📰", color: "#1a3a5c", rating: "New", badge: "📰",
    steps: 1, dur: "~30 min",
    about: "Learn about Sandton Times — its history, platforms, audience, and distribution strategy. Essential for sales teams representing the Sandton Times brand.",
    modules: [{ name: "Sandton Times", steps: [{ t: "Sandton Times Platform Overview", d: "History, platforms, audience, and distribution strategy." }] }],
    quiz: [
      { q: "When was Sandton Times started, and how did it begin?", opts: ["2012 as a print publication", "2010 as a social media account", "2010 as a website"], ans: 2 },
      { q: "True or False: Sandton Times focuses its coverage on local hard news, such as potholes and ward councillors.", opts: ["True", "False"], ans: 1 },
      { q: "Name at least four platforms that make up the Sandton Times media universe.", opts: ["Website", "Friend", "Newsletter", "Mobile App", "Radio Show", "Podcast", "Print", "SMS"], ans: 0 },
      { q: "What is the current total addressable audience across the entire platform?", opts: ["Approx 1 million", "Approx 920 000", "Approx 520 000"], ans: 0 },
      { q: "What is the 'silver bullet' for the print edition's distribution strategy?", opts: ["Distributed Free with Uber Eats", "Distribute Free with Checkers 60/60", "Knock and Drop"], ans: 1 },
      { q: "What is the average demographics of the Sandton Times audience?", opts: ["Young professionals and young families, aged 25 to 45, with a slight female bias", "Middle age professionals and families, aged 35 to 55, with a slight male bias", "Professionals, aged 35, with a slight female bias"], ans: 0 }
    ]
  },
  {
    id: 112, title: "Programmatic Advertising", cat: "Sales",
    emoji: "📡", color: "#2c3e50", rating: "New", badge: "📡",
    steps: 1, dur: "~30 min",
    about: "Understand the programmatic advertising ecosystem — DSPs, SSPs, DMPs, RTB, and the different types of programmatic buying. Essential knowledge for all digital sales teams.",
    modules: [{ name: "Programmatic Advertising", steps: [{ t: "Programmatic Advertising Fundamentals", d: "DSPs, SSPs, DMPs, RTB, and programmatic buying types." }] }],
    quiz: [
      { q: "What is the primary function of a Demand-Side Platform (DSP) in the programmatic ecosystem?", opts: ["To host ad inventory for publishers", "To allow advertisers to automate the purchase of ad space across multiple sources", "To manually negotiate ad contracts between brands and websites", "To serve as the primary database for user browsing history"], ans: 1 },
      { q: "Which type of programmatic ad buying involves an invite-only auction for premium inventory?", opts: ["Programmatic Guaranteed (PG)", "Open Auction", "Private Marketplace (PMP)", "Direct Sales"], ans: 2 },
      { q: "What is the primary purpose of a Data Management Platform (DMP)?", opts: ["It manages the physical servers for ad networks", "It helps advertisers and publishers store, organise, and activate user data for better targeting", "It replaces the need for an Ad Exchange", "It is used specifically to design creative ad assets"], ans: 1 },
      { q: "What is the core characteristic of 'Real-Time Bidding' (RTB)?", opts: ["It is a manual process that takes several days to complete", "It involves a long-term contract between a publisher and an advertiser", "It is a technological process where ad impressions are bought and sold in milliseconds", "It is a method used exclusively for social media advertising"], ans: 2 }
    ]
  },
  {
    id: 113, title: "Paid Media — Meta", cat: "Sales",
    emoji: "📘", color: "#1877f2", rating: "New", badge: "📘",
    steps: 1, dur: "~45 min",
    about: "Master Meta paid media — from image text limits and caption best practices to campaign structure, the Learning Phase, Meta Pixel, Lookalike Audiences, and Creative Fatigue. Essential for anyone managing or selling Meta advertising.",
    modules: [{ name: "Meta Paid Media", steps: [{ t: "Paid Media on Meta Platforms", d: "Campaign structure, budgets, targeting, pixels, and best practices." }] }],
    quiz: [
      { q: "What is the maximum recommended percentage of text that should be included on an image for social media optimisation?", opts: ["50%", "20%", "100%", "30%"], ans: 1 },
      { q: "For a boosted post, what is the ideal character count range for a caption to ensure high engagement?", opts: ["50 to 60 characters", "230 characters", "70 to 80 characters", "No limit"], ans: 2 },
      { q: "True or False: Converting print ads directly into PDFs for social media posts is the ideal format for high-performing content.", opts: ["True", "False"], ans: 1 },
      { q: "What are currently the top-performing content formats on publisher titles?", opts: ["Images with links", "Video content", "Carousel ads", "GIFs"], ans: 1 },
      { q: "What are the three levels of setup within Meta Ads Manager?", opts: ["Campaign level, Adset level, and Ad level", "Campaign level, Budget level, and Ad level", "Campaign level, Adset level, and Budget level"], ans: 0 },
      { q: "How long does the 'Learning Phase' typically take for Meta's algorithm to gather enough data to find a viable audience?", opts: ["3 days", "6 days", "7 days", "14 days"], ans: 2 },
      { q: "When should a 'Daily Budget' be used instead of a 'Lifetime Budget'?", opts: ["When there is a start and end date", "Always on Campaign", "When it is a conversion campaign", "When it is a traffic campaign"], ans: 1 },
      { q: "What is the 'Meta Pixel' and how does it assist in retargeting?", opts: ["A code on a website that tracks user geographical location; it allows users to see ads targeted to that regions", "An article on a website that tracks user behaviour; it allows advertisers to show ads to people who have previously engaged", "A code on a website that tracks user behaviour; it allows advertisers to show ads to people who have previously visited"], ans: 2 },
      { q: "What is a 'Lookalike Audience'?", opts: ["People that have the behaviour of an existing pool of customers", "People that look similar", "People that have the same behavior as Facebook's customers"], ans: 0 },
      { q: "What is 'Creative Fatigue' and how does it impact campaign performance?", opts: ["The users are tired and not focusing", "Users have seen an image too many times", "Users don't like the images"], ans: 1 }
    ]
  },

  {
    id: 114, title: "Back End: Data & BI", cat: "Sales",
    emoji: "🗃️", color: "#16213e", rating: "New", badge: "🗃️",
    steps: 1, dur: "~30 min",
    about: "Understand the Lighthouse data platform, how to access reports, when to log support tickets, and how data requests are handled at Volt Africa. Essential for all sales and operations teams.",
    modules: [{ name: "Data & Business Intelligence", steps: [{ t: "Back End: Data & BI", d: "Lighthouse platform, reports, support tickets, and data request workflows." }] }],
    quiz: [
      { q: "What is the name of the new site formulated for data inquiries?", opts: ["Beacon", "Lighthouse", "Vault", "Insight"], ans: 1 },
      { q: "Which department is the primary custodian for data-related inquiries in the media business?", opts: ["Creative Services", "Research and Analytics", "Editorial", "IT Support"], ans: 1 },
      { q: "What types of reports are accessible to colleagues once they log into the site?", opts: ["Monthly and annual reports only", "Live data and daily reports only", "Live data, daily, monthly, quarterly, and annual performance summaries", "Only archived reports from previous years"], ans: 2 },
      { q: "Under what condition should a colleague log a support ticket for a data request?", opts: ["When they forget their login credentials", "For any data request, regardless of whether it is on the site", "When the required data is not available on the Lighthouse platform", "To request creative design for a presentation"], ans: 2 },
      { q: "What is the standard turnaround time for a data request ticket?", opts: ["12 hours", "24 hours", "48 hours", "One week"], ans: 2 },
      { q: "How will data typically be delivered following a tailor-made request?", opts: ["In a highly creative and artistic infographic", "As a raw database export only", "In a simplistic form, such as a spreadsheet or generic PowerPoint presentation", "Via a physical printed report"], ans: 2 },
      { q: "When are urgent data requests prioritised?", opts: ["Whenever a colleague marks them as high priority", "Only with a clear business justification", "Only for senior management", "If the request is made over the phone"], ans: 1 }
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


const CHAT_ROOMS = [
  { id: "general",   name: "General",   icon: "💬", desc: "All cadets",              prev: "Welcome to IndyTrain!" },
  { id: "editorial", name: "Editorial", icon: "✍️", desc: "Writing & editing",       prev: "Tips on headline writing" },
  { id: "sales",     name: "Sales",     icon: "💼", desc: "Sales & commercial",      prev: "Module 8 is really useful!" },
  { id: "digital",   name: "Digital",   icon: "📱", desc: "Social, SEO & multimedia", prev: "Anyone tried Gemini for research?" },
  { id: "ai-tools",  name: "AI Tools",  icon: "🤖", desc: "AI in journalism",        prev: "NotebookLM is a game changer!" },
];

/* ============================================================
   IndyTrain — app.js (Supabase backend)
   ============================================================ */

// ── SUPABASE CONFIG ──
const SUPA_URL = 'https://zbwstfwqzkwbqvmlhxqu.supabase.co';
const SUPA_KEY = 'sb_publishable_EqtIMj0jivC1n-7kdwTVtg_tRgXLSRY';

// Lightweight Supabase REST client — no npm needed
const sb = {
  async query(table, opts={}) {
    let url = `${SUPA_URL}/rest/v1/${table}`;
    const params = [];
    if (opts.select)  params.push(`select=${opts.select}`);
    if (opts.eq)      Object.entries(opts.eq).forEach(([k,v]) => params.push(`${k}=eq.${encodeURIComponent(v)}`));
    if (opts.neq)     Object.entries(opts.neq).forEach(([k,v]) => params.push(`${k}=neq.${encodeURIComponent(v)}`));
    if (opts.order)   params.push(`order=${opts.order}`);
    if (opts.limit)   params.push(`limit=${opts.limit}`);
    if (params.length) url += '?' + params.join('&');
    const res = await fetch(url, {
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer '+SUPA_KEY, 'Content-Type': 'application/json' }
    });
    if (!res.ok) { const e=await res.text(); throw new Error(e); }
    return res.json();
  },
  async insert(table, data, opts={}) {
    const url = `${SUPA_URL}/rest/v1/${table}`;
    const headers = { 'apikey': SUPA_KEY, 'Authorization': 'Bearer '+SUPA_KEY, 'Content-Type': 'application/json' };
    if (opts.upsert) { headers['Prefer'] = 'resolution=merge-duplicates'; }
    else             { headers['Prefer'] = 'return=representation'; }
    const res = await fetch(url, { method: opts.upsert ? 'POST' : 'POST', headers, body: JSON.stringify(data) });
    if (!res.ok) { const e=await res.text(); throw new Error(e); }
    return res.json();
  },
  async upsert(table, data) {
    const url = `${SUPA_URL}/rest/v1/${table}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer '+SUPA_KEY, 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates,return=representation' },
      body: JSON.stringify(data)
    });
    if (!res.ok) { const e=await res.text(); throw new Error(e); }
    return res.json();
  },
  async update(table, data, eq) {
    let url = `${SUPA_URL}/rest/v1/${table}?`;
    url += Object.entries(eq).map(([k,v]) => `${k}=eq.${encodeURIComponent(v)}`).join('&');
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer '+SUPA_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
      body: JSON.stringify(data)
    });
    if (!res.ok) { const e=await res.text(); throw new Error(e); }
    return res.json();
  },
  async delete(table, eq) {
    let url = `${SUPA_URL}/rest/v1/${table}?`;
    url += Object.entries(eq).map(([k,v]) => `${k}=eq.${encodeURIComponent(v)}`).join('&');
    const res = await fetch(url, {
      method: 'DELETE',
      headers: { 'apikey': SUPA_KEY, 'Authorization': 'Bearer '+SUPA_KEY }
    });
    if (!res.ok) { const e=await res.text(); throw new Error(e); }
    return true;
  }
};

// ── SESSION STATE ──
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
let DB_USERS = [];
let DB_ANNOUNCEMENTS = [];
let COURSE_ORDER = [];       // array of course IDs in display order — [] means default
let BADGE_OVERRIDES = {};    // { courseId: { emoji, color, label } }

let BRAND = {
  name: 'IndyTrain',
  tagline: 'Independent Media Cadet School',
  logoUrl: 'data:image/png;base64,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',
  primaryColor: '#c8a84b',
  sidebarColor: '#111118',
  navActiveColor: 'rgba(200,168,75,.15)',
  fontFamily: 'Poppins',
  borderRadius: '12px',
  loginHeadline: 'Invest in yourself.<br><em>Grow your career.</em>',
  // ── CERTIFICATE CONFIG ──
  cert: {
    bgFrom:        '#fefef9',
    bgTo:          '#fffef0',
    accentColor:   '#c8a84b',
    logoUrl:       null,         // null = use platform logo
    headerText:    '✦ IndyTrain ✦',
    titleText:     'Certificate of Completion',
    bodyText:      'This is to certify that',
    subText:       'has successfully completed the course',
    footerNote:    'Independent Media Cadet School · IndyTrain',
    sig1Name:      'IMCS Editorial Board',
    sig1Role:      'Programme Director',
    sig2Name:      'IndyTrain Platform',
    sig2Role:      'Verified Certificate',
    showBorder:    true,
  },
  loginSubtext: "Whether you're sharpening existing skills, learning something new, or preparing for your next step — IndyTrain gives you the tools, knowledge, and confidence to level up at your own pace.",
  faviconUrl: 'data:image/png;base64,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',
};

const allC = () => {
  const all = [...COURSES, ...CUSTOM];
  if (!COURSE_ORDER || !COURSE_ORDER.length) return all;
  // Normalise to numbers for safe comparison
  const order = COURSE_ORDER.map(Number);
  const ordered = order.map(id => all.find(c => Number(c.id) === id)).filter(Boolean);
  const rest = all.filter(c => !order.includes(Number(c.id)));
  return [...ordered, ...rest];
};

function initChat() {
  CMSGS = {
    general:    [{ u:'Admin', i:'AD', msg:'Welcome to '+BRAND.name+'! 🎉 Your community hub for all training.', t:'9:00 AM', own:false }],
    editorial:  [{ u:'Admin', i:'AD', msg:'Welcome to Editorial. Share tips and ask questions here.', t:'9:00 AM', own:false }],
    sales:      [{ u:'Admin', i:'AD', msg:'Welcome to Sales. Discuss commercial modules and client strategies here.', t:'9:00 AM', own:false }],
    digital:    [{ u:'Admin', i:'AD', msg:'Welcome to Digital. Discuss social media, SEO, and multimedia here.', t:'9:00 AM', own:false }],
    'ai-tools': [{ u:'Admin', i:'AD', msg:'Welcome to AI Tools. Discuss Gemini, NotebookLM, and Pinpoint here.', t:'9:00 AM', own:false }],
  };
}

// ── AUTH ──
async function doLogin() {
  const emailVal = document.getElementById('login-email').value.trim().toLowerCase();
  const passVal  = document.getElementById('login-pass').value;
  if (!emailVal||!passVal) { toast('Please enter your email and password','error'); return; }
  setLoading(true, 'Signing in…');
  try {
    // Hardcoded admin shortcut
    if ((emailVal==='admin'||emailVal==='faheem.khota@iol.co.za') && passVal==='admin') {
      U = { name:'Faheem Khota', email:'faheem.khota@iol.co.za', role:'admin', ini:'FK', dbId:null };
      await loadUserSession();
      await startApp();
      return;
    }
    const users = await sb.query('users', { eq:{ email: emailVal } });
    if (!users.length) { toast('No account found with that email.','error'); return; }
    const user = users[0];
    if (user.password !== passVal) { toast('Incorrect password.','error'); return; }
    if (user.status==='pending')   { toast('Your account is awaiting admin approval.','error'); return; }
    if (user.status==='inactive')  { toast('Your account has been deactivated. Contact your admin.','error'); return; }
    U = { name:user.name, email:user.email, role:user.role, ini:user.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2), dbId:user.id };
    await loadUserSession();
    await startApp();
  } catch(e) { toast('Login error: '+e.message,'error'); }
  finally { setLoading(false); }
}

async function doReg() {
  const n = document.getElementById('reg-name').value.trim();
  const e = document.getElementById('reg-email').value.trim().toLowerCase();
  const p = document.getElementById('reg-pass').value;
  if (!n||!e||!p) { toast('Please fill in all fields','error'); return; }
  setLoading(true, 'Creating account…');
  try {
    // Check if already registered
    const existing = await sb.query('users', { eq:{email:e} });
    if (existing.length) { toast('An account with this email already exists.','error'); return; }
    // Check if invited
    const invited = await sb.query('invited_emails', { eq:{email:e} });
    const status = invited.length ? 'active' : 'pending';
    await sb.insert('users', { name:n, email:e, password:p, role:'cadet', status, enrolled:0, completed:0, joined:new Date().toISOString().slice(0,10) });
    if (invited.length) {
      await sb.delete('invited_emails', {email:e});
      const user = (await sb.query('users', {eq:{email:e}}))[0];
      U = { name:n, email:e, role:'cadet', ini:n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2), dbId:user.id };
      await loadUserSession();
      await startApp();
    } else {
      showPendingScreen(n);
    }
  } catch(e2) { toast('Registration error: '+e2.message,'error'); }
  finally { setLoading(false); }
}

function doLogout() {
  U=null; ENROLLED=[]; COMPLETED=[]; BADGES=[]; PROG={}; QS={}; CUR=null; DB_USERS=[];
  document.getElementById('app').classList.add('hidden');
  document.getElementById('auth-screen').classList.remove('hidden');
  document.getElementById('login-email').value='';
  document.getElementById('login-pass').value='';
  showLogin();
}

function showPendingScreen(name) {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('reg-form').classList.add('hidden');
  const right = document.querySelector('.auth-right');
  right.innerHTML = `
    <div class="auth-fw" style="text-align:center">
      <div style="font-size:3rem;margin-bottom:1rem">⏳</div>
      <h2 style="margin-bottom:.5rem">Request Submitted!</h2>
      <p style="color:var(--muted);margin-bottom:1.5rem">Thanks, <strong>${name}</strong>! Your account is pending approval. You'll be able to log in once an admin approves you.</p>
      <p style="font-size:.78rem;color:var(--muted)">Contact <a href="mailto:Info@imcs.co.za" style="color:var(--gold)">Info@imcs.co.za</a> if you have any questions.</p>
      <button class="btn btn-secondary btn-lg" style="margin-top:1.5rem;width:100%;justify-content:center" onclick="location.reload()">Back to Login</button>
    </div>`;
}

function showReg()   { document.getElementById('login-form').classList.add('hidden');  document.getElementById('reg-form').classList.remove('hidden'); }
function showLogin() { document.getElementById('reg-form').classList.add('hidden');    document.getElementById('login-form').classList.remove('hidden'); }

// ── LOAD USER SESSION (enrollments, badges, progress) ──
async function loadUserSession() {
  if (!U?.dbId) return;
  try {
    const enr = await sb.query('enrollments', { eq:{user_id:U.dbId} });
    ENROLLED  = enr.map(e => e.course_id);
    // Supabase returns booleans as true/false OR as 't'/'f' strings — handle both
    COMPLETED = enr.filter(e => e.completed === true || e.completed === 'true' || e.completed === 't' || e.progress >= 100).map(e => e.course_id);
    PROG      = {};
    enr.forEach(e => { PROG[e.course_id] = e.progress || 0; });
    const bdg = await sb.query('badges', { eq:{user_id:U.dbId} });
    BADGES    = bdg.map(b => b.course_id);
    console.log('Session loaded — enrolled:', ENROLLED.length, 'completed:', COMPLETED.length, 'badges:', BADGES.length);
  } catch(e) { console.warn('Session load error:', e); }
}

// ── LOADING OVERLAY ──
function setLoading(on, msg='') {
  let ov = document.getElementById('loading-overlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'loading-overlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(10,10,15,.7);backdrop-filter:blur(4px);z-index:900;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;gap:1rem';
    ov.innerHTML = `<div style="width:36px;height:36px;border:3px solid rgba(200,168,75,.3);border-top-color:var(--gold);border-radius:50%;animation:spin 0.8s linear infinite"></div><div id="loading-msg" style="font-size:.875rem;color:rgba(255,255,255,.7)"></div>`;
    const style = document.createElement('style');
    style.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(style);
    document.body.appendChild(ov);
  }
  ov.style.display = on ? 'flex' : 'none';
  const m = document.getElementById('loading-msg');
  if (m) m.textContent = msg;
}

// ── START APP ──
async function startApp() {
  initChat();
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  // Load branding from DB
  try {
    const b = await sb.query('branding', { eq:{id:1} });
    if (b.length) {
      BRAND.name         = b[0].name;
      BRAND.tagline      = b[0].tagline;
      BRAND.primaryColor = b[0].primary_color;
      BRAND.sidebarColor   = b[0].sidebar_color  || BRAND.sidebarColor;
      BRAND.fontFamily     = b[0].font_family    || BRAND.fontFamily;
      BRAND.logoUrl        = b[0].logo_url       || BRAND.logoUrl;
      BRAND.faviconUrl     = b[0].favicon_url    || BRAND.faviconUrl;
      BRAND.loginHeadline  = b[0].login_headline || BRAND.loginHeadline;
      BRAND.loginSubtext   = b[0].login_subtext  || BRAND.loginSubtext;
      if (b[0].cert_config)     { try { Object.assign(BRAND.cert, JSON.parse(b[0].cert_config)); } catch(e) {} }
      if (b[0].course_order)    { try { COURSE_ORDER = JSON.parse(b[0].course_order); } catch(e) {} }
      if (b[0].badge_overrides) { try { BADGE_OVERRIDES = JSON.parse(b[0].badge_overrides); } catch(e) {} }
    }
  } catch(e) {}
  // Load video/image overrides
  try {
    const vids = await sb.query('video_overrides');
    vids.forEach(v => { VID_OVERRIDES[v.course_id] = { url:v.url, type:v.type }; });
    const imgs = await sb.query('image_overrides');
    imgs.forEach(i => { IMG_OVERRIDES[i.course_id] = i.url; });
  } catch(e) {}
  // Load announcements
  try {
    DB_ANNOUNCEMENTS = await sb.query('announcements', { order:'created_at.desc' });
  } catch(e) {}
  applyBranding();
  syncUI();
  if (U.role==='admin') {
    document.getElementById('admin-nav').classList.remove('hidden');
    updatePendingBadge();
  } else {
    document.getElementById('admin-nav').classList.add('hidden');
  }
  renderDash(); renderCourses(); renderRes(); renderRooms(); renderMsgs();
  nav('dashboard');
  // If a hash was in the URL before login, navigate there
  applyInitialHash();
}

// ── BRANDING ──
function applyBranding() {
  // Accent colour
  document.documentElement.style.setProperty('--gold', BRAND.primaryColor);
  // Sidebar colour
  if (BRAND.sidebarColor) {
    document.documentElement.style.setProperty('--sidebar', BRAND.sidebarColor);
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.style.background = BRAND.sidebarColor;
  }
  // Font
  if (BRAND.fontFamily) {
    document.documentElement.style.setProperty('--font', BRAND.fontFamily);
    document.body.style.fontFamily = `'${BRAND.fontFamily}', sans-serif`;
    // Load font from Google Fonts if not Poppins (already loaded)
    if (BRAND.fontFamily !== 'Poppins') {
      const fontName = BRAND.fontFamily.replace(' ', '+');
      if (!document.querySelector(`link[data-gfont="${fontName}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.dataset.gfont = fontName;
        link.href = `https://fonts.googleapis.com/css2?family=${fontName}:wght@300;400;500;600;700;800&display=swap`;
        document.head.appendChild(link);
      }
    }
  }
  // Sidebar brand — icon on left, name only on right (no tagline)
  const bn = document.querySelector('.brand-name');
  if (bn) {
    bn.innerHTML = BRAND.name;
    bn.querySelector('span') && (bn.querySelector('span').style.display = 'none');
  }
  // Brand icon — show logo image inside the icon box if set
  const bi = document.querySelector('.brand-icon');
  if (bi) {
    bi.style.background = BRAND.logoUrl ? 'transparent' : BRAND.primaryColor;
    if (BRAND.logoUrl) {
      bi.innerHTML = `<img src="${BRAND.logoUrl}" style="width:32px;height:32px;object-fit:contain;border-radius:6px" alt="logo">`;
    } else {
      bi.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5" width="18" height="18"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;
    }
  }
  // Auth page branding
  const authBrand = document.querySelector('.auth-brand');
  if (authBrand) {
    if (BRAND.logoUrl) {
      authBrand.innerHTML = `<img src="${BRAND.logoUrl}" style="height:38px;object-fit:contain;display:block;margin-bottom:.2rem" alt="logo">`;
    } else {
      const half = Math.ceil(BRAND.name.length / 2);
      authBrand.innerHTML = `${BRAND.name.slice(0, half)}<span>${BRAND.name.slice(half)}</span>`;
    }
  }
  const authTagline = document.querySelector('.auth-tagline');
  if (authTagline) authTagline.textContent = BRAND.tagline;
  // Auth page headline (h1)
  if (BRAND.loginHeadline) {
    const h1 = document.querySelector('.auth-left h1');
    if (h1) h1.innerHTML = BRAND.loginHeadline;
  }
  if (BRAND.loginSubtext) {
    const p = document.querySelector('.auth-left p');
    if (p) p.textContent = BRAND.loginSubtext;
  }
  // Favicon
  if (BRAND.faviconUrl) {
    let link = document.querySelector("link[rel*='icon']");
    if (!link) { link = document.createElement('link'); link.rel = 'shortcut icon'; document.head.appendChild(link); }
    link.href = BRAND.faviconUrl;
  }
  // Page title
  document.title = BRAND.name + ' — ' + BRAND.tagline;
}

function syncUI() {
  ['sb-ava','top-ava'].forEach(id=>document.getElementById(id).textContent=U.ini);
  document.getElementById('sb-name').textContent=U.name;
  document.getElementById('sb-role').textContent=U.role==='admin'?'Administrator':'Cadet';
  document.getElementById('prof-ava').textContent=U.ini;
  document.getElementById('prof-name').textContent=U.name;
  document.getElementById('prof-email').textContent=U.email;
  document.getElementById('prof-role').textContent=U.role==='admin'?'Administrator':'Cadet';
  document.getElementById('cert-name').textContent=U.name;
  document.getElementById('edit-name').value=U.name;
  document.getElementById('edit-email').value=U.email;
  // Personalise the dashboard hero greeting with first name
  const firstName = U.name.split(' ')[0];
  const eyebrow = document.getElementById('hero-eyebrow');
  if (eyebrow) eyebrow.textContent = 'Welcome back, ' + firstName + ' 👋';
}

async function updatePendingBadge() {
  try {
    const pending = await sb.query('users', { eq:{status:'pending'} });
    const adminNavItem = document.querySelector('.nav-item.admin-item');
    if (!adminNavItem) return;
    const existing = adminNavItem.querySelector('.nbadge');
    if (existing) existing.remove();
    if (pending.length>0) {
      const badge=document.createElement('span'); badge.className='nbadge';
      badge.style.cssText='background:#ef4444;color:#fff'; badge.textContent=pending.length;
      adminNavItem.appendChild(badge);
    }
  } catch(e){}
}

// ── NAV ──
// ── NAVIGATION (hash-based routing) ──
const PAGE_TITLES = {
  dashboard:      'Dashboard',
  courses:        'Learning Modules',
  programs:       'My Programs',
  chat:           'Member Chat',
  resources:      'Resources',
  profile:        'My Profile',
  contact:        'Contact Us',
  admin:          'Admin Panel',
  'course-detail':'Course Detail',
  quiz:           'Quiz'
};

function nav(p, pushState=true) {
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
  const el=document.getElementById('page-'+p); if(el) el.classList.add('active');
  const ni=document.querySelector(`.nav-item[onclick="nav('${p}')"]`); if(ni) ni.classList.add('active');
  const title = PAGE_TITLES[p] || p;
  document.getElementById('pg-title').textContent = title;
  document.title = BRAND.name + ' — ' + title;
  // Update the URL hash without triggering the hashchange event
  if (pushState && location.hash !== '#' + p) {
    history.pushState({ page:p }, '', '#' + p);
  }
  if(p==='profile')  renderProfile();
  if(p==='programs') renderProgs('enrolled');
  if(p==='admin')    renderAdmin();
  if(p==='chat')     renderMsgs();
  window.scrollTo(0,0);
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function(e) {
  if (!U) return; // not logged in
  const page = (e.state && e.state.page) || location.hash.replace('#','') || 'dashboard';
  nav(page, false); // false = don't push another history entry
});

// On load, read hash and navigate to that page if logged in
function applyInitialHash() {
  const hash = location.hash.replace('#','');
  const validPages = Object.keys(PAGE_TITLES);
  if (hash && validPages.includes(hash)) {
    nav(hash, false);
  }
}

function toggleSB() { document.getElementById('sidebar').classList.toggle('open'); }

// ── DASHBOARD ──
function renderDash() {
  document.getElementById('h-total').textContent=allC().length;
  document.getElementById('s-enrolled').textContent=ENROLLED.length;
  document.getElementById('s-completed').textContent=COMPLETED.length;
  document.getElementById('s-badges').textContent=BADGES.length;
  document.getElementById('s-certs').textContent=COMPLETED.length;
  const g=document.getElementById('dash-grid'); g.innerHTML='';
  const di=document.getElementById('dash-enrolled');
  // Announcement banner
  const existing=document.getElementById('announce-banner'); if(existing) existing.remove();
  if(DB_ANNOUNCEMENTS.length>0) {
    const latest=DB_ANNOUNCEMENTS[0];
    const banner=document.createElement('div'); banner.id='announce-banner';
    banner.style.cssText='background:linear-gradient(135deg,#1a2a0f,#2a3a1a);border:1px solid rgba(200,168,75,.3);border-radius:10px;padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:.875rem;color:#fff';
    banner.innerHTML=`<span style="font-size:1.5rem">📢</span><div style="flex:1"><div style="font-size:.82rem;font-weight:700;color:var(--gold)">${latest.title}</div><div style="font-size:.78rem;color:rgba(255,255,255,.65);margin-top:.15rem">${latest.body}</div></div><button onclick="this.parentElement.remove()" style="background:none;border:none;color:rgba(255,255,255,.4);font-size:1.1rem;cursor:pointer;padding:.25rem">✕</button>`;
    document.querySelector('#page-dashboard .cw').insertBefore(banner, document.querySelector('#page-dashboard .stats-grid'));
  }
  if(ENROLLED.length===0) { di.style.display='block'; g.style.display='none'; }
  else { di.style.display='none'; g.style.display=''; ENROLLED.slice(0,3).forEach(id=>{const c=allC().find(x=>x.id===id);if(c)g.appendChild(makeCard(c,true));}); }
}

// ── COURSES ──
function renderCourses() {
  const cats=['all','Editorial','Sales',...new Set(CUSTOM.map(c=>c.cat).filter(c=>!['Editorial','Sales'].includes(c)))];
  const fr=document.getElementById('course-filters'); fr.innerHTML='';
  cats.forEach((cat,i)=>{
    const ch=document.createElement('div'); ch.className='fchip'+(i===0?' active':'');
    ch.textContent=cat==='all'?'All Programs':cat; ch.onclick=()=>filterC(cat,ch); fr.appendChild(ch);
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
  const g=document.getElementById('courses-grid'); if(!g) return; g.innerHTML='';
  const v=val.toLowerCase();
  (v?allC().filter(c=>c.title.toLowerCase().includes(v)||c.cat.toLowerCase().includes(v)||(c.about||'').toLowerCase().includes(v)):allC()).forEach(c=>g.appendChild(makeCard(c)));
}
function getThumb(c) {
  if(IMG_OVERRIDES[c.id]) return IMG_OVERRIDES[c.id];
  if(typeof COURSE_IMAGES!=='undefined'&&COURSE_IMAGES[c.id]) return COURSE_IMAGES[c.id];
  return null;
}
function makeCard(c,showP=false) {
  const isE=ENROLLED.includes(c.id),isDone=COMPLETED.includes(c.id),p=PROG[c.id]||0;
  const thumb=getThumb(c);
  const div=document.createElement('div');
  // Remove card-level click — only the button triggers enroll/open
  div.className='course-card';
  div.style.cursor='default';
  div.innerHTML=`
    <div class="course-thumb" style="${!thumb?'background:linear-gradient(135deg,'+(c.color||'#2c3e50')+','+(c.color||'#2c3e50')+'99)':''}">
      ${thumb?`<img src="${thumb}" alt="${c.title}" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0"><div style="position:absolute;inset:0;background:rgba(0,0,0,.3)"></div>`:
        `<div class="cthumb-icon" style="position:relative;z-index:1">${c.emoji||'📚'}</div>`}
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
        <button class="btn btn-primary btn-sm" onclick="openAndEnroll(${c.id})">${isDone?'Review':isE?'Continue':'Start Program'}</button>
        ${isDone?`<button class="btn btn-secondary btn-sm" onclick="openCert(${c.id})">🎓 Certificate</button>`:''}
      </div>
    </div>`;
  // No div.onclick — card is NOT clickable, only the button is
  return div;
}

function openCourse(id) {
  CUR=allC().find(c=>c.id===id); if(!CUR) return;
  document.getElementById('cd-title').textContent=CUR.title;
  document.getElementById('cd-about').innerHTML=CUR.about?`<div class="cd-about-box"><strong>About This Course</strong>${CUR.about}</div>`:'';
  document.getElementById('cd-meta').innerHTML=`
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>${CUR.steps} step${CUR.steps!==1?'s':''}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>${CUR.dur}</div>
    <div class="cdm"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${CUR.rating} rating</div>`;
  document.getElementById('enroll-btn').textContent = COMPLETED.includes(id) ? '✓ Completed' : ENROLLED.includes(id) ? 'Continue Learning' : 'Enroll Now';
  document.getElementById('enroll-btn').style.background = COMPLETED.includes(id) ? 'var(--success)' : ENROLLED.includes(id) ? '' : '';
  document.getElementById('enroll-btn').disabled = COMPLETED.includes(id);
  renderMods();
  const va=document.getElementById('vid-area');
  const vidUrl=(VID_OVERRIDES[id]||{}).url||(typeof DEFAULT_VIDS!=='undefined'?DEFAULT_VIDS[id]:null);
  va.className='vid-area';
  if(vidUrl) va.innerHTML=`<iframe src="${vidUrl}" allowfullscreen allow="autoplay" style="width:100%;height:100%;border:none"></iframe>`;
  else va.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg><span>Video lesson will appear here</span>`;
  nav('course-detail');
}
function renderMods() {
  const list=document.getElementById('cd-modules'); list.innerHTML='';
  const done=COMPLETED.includes(CUR.id);
  (CUR.modules||[]).forEach((mod,i)=>{
    const div=document.createElement('div'); div.className='module-item';
    div.innerHTML=`
      <div class="mhdr" onclick="toggleMod(this)">
        <div class="mnum ${done?'done':''}">${i+1}</div><div class="mtitle">${mod.name}</div>
        <div class="msteps-lbl">${mod.steps.length} step${mod.steps.length!==1?'s':''}</div>
        <svg class="mchev" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
      <div class="steps-list hidden">
        ${mod.steps.map(s=>`<div class="step-item">
          <div class="step-check ${done?'done':''}">${done?`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`:''}</div>
          <div><div class="step-t">${typeof s==='string'?s:s.t}</div>${typeof s==='object'&&s.d?`<div class="step-d">${s.d}</div>`:''}</div>
        </div>`).join('')}
      </div>`;
    list.appendChild(div);
  });
}
function toggleMod(el) { const l=el.nextElementSibling,c=el.querySelector('.mchev'); l.classList.toggle('hidden'); c.classList.toggle('open'); }

// Opens course and auto-enrolls if not already enrolled
async function openAndEnroll(id) {
  openCourse(id);
  if (!ENROLLED.includes(id) && !COMPLETED.includes(id)) {
    await enrollCourse();
  }
}

async function enrollCourse() {
  if (!CUR) return;
  const alreadyEnrolled = ENROLLED.includes(CUR.id);
  if (!alreadyEnrolled) {
    ENROLLED.push(CUR.id);
    PROG[CUR.id] = 0;
    // Save to DB if we have a user record
    if (U?.dbId) {
      try {
        await sb.upsert('enrollments', { user_id:U.dbId, course_id:CUR.id, progress:0, completed:false });
        await sb.update('users', { enrolled:ENROLLED.length }, { id:U.dbId });
      } catch(e) { console.warn('Enroll DB error:', e.message); }
    }
    toast('Enrolled in ' + CUR.title + '!', 'success');
  }
  // Update button
  const btn = document.getElementById('enroll-btn');
  if (btn) {
    btn.textContent = 'Continue Learning';
    btn.style.background = 'var(--success)';
  }
  renderDash();
  renderCourses();
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
  if(QS.done) {
    const sc=QS.ans.filter((a,i)=>a===QS.qs[i].ans).length;
    const pct=Math.round(sc/QS.qs.length*100),pass=pct>=70;
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
function pickOpt(i,el) { QS.ans[QS.cur]=i; el.closest('.opts').querySelectorAll('.opt-btn').forEach(b=>b.classList.remove('selected')); el.classList.add('selected'); const n=document.getElementById('qnxt'); if(n)n.removeAttribute('disabled'); }
function nextQ() { if(QS.ans[QS.cur]===undefined)return; if(QS.cur<QS.qs.length-1){QS.cur++;renderQuiz();}else{QS.done=true;renderQuiz();} }
function prevQ() { if(QS.cur>0){QS.cur--;renderQuiz();} }
function backToCourse() { nav('course-detail'); }
async function awardAll() {
  const cid = QS.c.id;
  // Update local state immediately
  if (!COMPLETED.includes(cid)) COMPLETED.push(cid);
  if (!BADGES.includes(cid))    BADGES.push(cid);
  if (!ENROLLED.includes(cid))  ENROLLED.push(cid);
  PROG[cid] = 100;
  if (U?.dbId) {
    try {
      // Use raw fetch to guarantee completed=true is saved as boolean
      const res = await fetch(SUPA_URL + '/rest/v1/enrollments', {
        method: 'POST',
        headers: {
          'apikey': SUPA_KEY,
          'Authorization': 'Bearer ' + SUPA_KEY,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({ user_id: U.dbId, course_id: cid, progress: 100, completed: true })
      });
      if (!res.ok) throw new Error(await res.text());
      await sb.upsert('badges', { user_id:U.dbId, course_id:cid });
      await sb.update('users', { enrolled:ENROLLED.length, completed:COMPLETED.length }, { id:U.dbId });
    } catch(e) { console.warn('Award DB error:', e.message); }
  }
  renderDash(); renderCourses();
  toast('🏅 Badge earned! 🎓 Certificate ready!', 'success');
  setTimeout(() => openCert(cid), 300);
}

// ── PROFILE ──
function renderProfile() {
  syncUI();
  document.getElementById('ps-en').textContent=ENROLLED.length;
  document.getElementById('ps-co').textContent=COMPLETED.length;
  document.getElementById('ps-ba').textContent=BADGES.length;
  document.getElementById('ps-ce').textContent=COMPLETED.length;
  const bg=document.getElementById('prof-badges'); bg.innerHTML='';
  // Use allC() so custom/new courses are always included
  allC().forEach(c=>{
    const earned = BADGES.includes(c.id);
    const ov = BADGE_OVERRIDES[c.id] || {};
    const emoji = ov.emoji || c.emoji || '📚';
    const color = ov.color || c.color || '#c8a84b';
    const shortName = (ov.label || c.title)
      .replace(/^Module \d+:/i,'')
      .replace(/^Back End:/i,'')
      .replace(/^Introduction to /i,'')
      .replace(/^Welcome to /i,'')
      .trim()
      .split(' ').slice(0,2).join(' ');
    const d = document.createElement('div');
    d.className = 'badge-item';
    d.innerHTML = `
      <div class="badge-circle ${earned?'':'locked'}" title="${ov.label||c.title}" style="${earned?'background:linear-gradient(135deg,'+color+','+color+'cc);position:relative':'position:relative'}">
        <span style="font-size:1.4rem">${emoji}</span>
        ${earned?'<div style="position:absolute;bottom:-2px;right:-2px;width:18px;height:18px;background:var(--success);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.6rem;color:#fff;border:2px solid #fff">✓</div>':''}
      </div>
      <div class="badge-name" style="color:${earned?'var(--ink)':'var(--muted)'}">${shortName}</div>`;
    bg.appendChild(d);
  });
  const cl=document.getElementById('prof-certs'); cl.innerHTML='';
  if(!COMPLETED.length){ cl.innerHTML='<div style="color:var(--muted);font-size:.82rem;text-align:center;padding:1.25rem">Complete a course to earn your first certificate!</div>'; return; }
  COMPLETED.forEach(id=>{ const c=allC().find(x=>x.id===id); if(!c)return; const d=document.createElement('div'); d.className='cert-item'; d.innerHTML=`<div class="cert-icon">🎓</div><div style="flex:1"><div style="font-weight:700;font-size:.875rem;margin-bottom:.1rem">${c.title}</div><div style="font-size:.75rem;color:var(--muted)">${BRAND.name} · Completed</div></div><button class="btn btn-secondary btn-sm" onclick="openCert(${id})">Download</button>`; cl.appendChild(d); });
}
function toggleEditProf() { const c=document.getElementById('edit-prof'); c.style.display=c.style.display==='none'?'block':'none'; }
async function saveProf() {
  const n=document.getElementById('edit-name').value||U.name;
  U.name=n; U.ini=n.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  if(U.dbId) { try { await sb.update('users',{name:n},{id:U.dbId}); }catch(e){} }
  syncUI(); document.getElementById('edit-prof').style.display='none'; toast('Profile updated!','success');
}
function handleAva(e) { const f=e.target.files[0]; if(!f)return; const url=URL.createObjectURL(f); ['prof-ava','sb-ava','top-ava'].forEach(id=>{const el=document.getElementById(id);el.innerHTML=`<img src="${url}" alt="avatar">`;}); toast('Photo updated!','success'); }

// ── CERTIFICATE ──
function openCert(cid) {
  const c = allC().find(x => x.id === cid); if (!c) return;
  renderCertPreview(c.title, U.name);
  document.getElementById('cert-modal').classList.remove('hidden');
}

function renderCertPreview(courseTitle, userName) {
  const cr = BRAND.cert;
  const dateStr = 'Issued ' + new Date().toLocaleDateString('en-ZA', {year:'numeric',month:'long',day:'numeric'});
  const logoHtml = (cr.logoUrl || BRAND.logoUrl)
    ? `<img src="${cr.logoUrl || BRAND.logoUrl}" style="height:48px;object-fit:contain;margin-bottom:.75rem" alt="logo">`
    : '';
  const preview = document.getElementById('cert-preview');
  if (!preview) return;
  preview.style.background = `linear-gradient(135deg,${cr.bgFrom},${cr.bgTo})`;
  preview.style.border = `2px solid ${cr.accentColor}`;
  preview.innerHTML = `
    ${cr.showBorder ? `<div class="cert-border" style="border-color:${cr.accentColor}40"></div>` : ''}
    ${logoHtml}
    <div class="cert-logo" style="color:${cr.accentColor}">${cr.headerText}</div>
    <div class="cert-title">${cr.titleText}</div>
    <div style="font-size:.82rem;color:var(--muted);margin-bottom:1rem">${cr.bodyText}</div>
    <div class="cert-main" id="cert-name">${userName}</div>
    <div class="cert-sub">${cr.subText}</div>
    <div class="cert-course-name" id="cert-course" style="color:${cr.accentColor};border-bottom-color:${cr.accentColor}40">${courseTitle}</div>
    <div style="font-size:.8rem;color:var(--muted)">${cr.footerNote}</div>
    <div class="cert-footer">
      <div style="text-align:center">
        <div style="font-style:italic;font-size:.85rem;font-weight:600">${cr.sig1Name}</div>
        <div class="cert-sig-line"></div>
        <div>${cr.sig1Role}</div>
      </div>
      <div style="text-align:center">
        <div style="font-size:1.75rem">🏅</div>
        <div style="font-size:.7rem;color:var(--muted);margin-top:.2rem" id="cert-date">${dateStr}</div>
      </div>
      <div style="text-align:center">
        <div style="font-style:italic;font-size:.85rem;font-weight:600">${cr.sig2Name}</div>
        <div class="cert-sig-line"></div>
        <div>${cr.sig2Role}</div>
      </div>
    </div>`;
}

function closeCert() { document.getElementById('cert-modal').classList.add('hidden'); }

function dlCert() {
  const win = window.open('', '_blank');
  const cr = BRAND.cert;
  const html = document.getElementById('cert-preview').outerHTML;
  win.document.write(`<!DOCTYPE html><html><head><title>Certificate</title>
    <link href="https://fonts.googleapis.com/css2?family=${BRAND.fontFamily||'Poppins'}:wght@300;400;600;700;800&display=swap" rel="stylesheet">
    <style>
      body{margin:0;padding:2rem;font-family:'${BRAND.fontFamily||'Poppins'}',sans-serif;background:#fff}
      :root{--gold:${cr.accentColor};--muted:#6b7280;--border:#e5e3dc;--ink:#0a0a0f}
      .certificate{background:linear-gradient(135deg,${cr.bgFrom},${cr.bgTo});border:2px solid ${cr.accentColor};border-radius:12px;padding:2.5rem;text-align:center;position:relative;max-width:680px;margin:0 auto}
      .cert-border{position:absolute;inset:10px;border:1px solid ${cr.accentColor}40;border-radius:8px}
      .cert-logo{font-size:.9rem;font-weight:800;color:${cr.accentColor};text-transform:uppercase;letter-spacing:.12em;margin-bottom:1.25rem}
      .cert-title{font-size:.7rem;text-transform:uppercase;letter-spacing:.2em;color:var(--muted);margin-bottom:.4rem}
      .cert-main{font-size:1.8rem;font-weight:800;margin-bottom:.4rem}
      .cert-sub{font-size:.85rem;color:var(--muted);margin-bottom:1.25rem}
      .cert-course-name{font-size:1.25rem;font-weight:800;color:${cr.accentColor};margin-bottom:1.25rem;border-bottom:2px solid ${cr.accentColor}40;padding-bottom:.875rem}
      .cert-footer{display:flex;justify-content:space-between;align-items:flex-end;margin-top:1.75rem;padding-top:1.25rem;border-top:1px solid var(--border);font-size:.72rem;color:var(--muted)}
      .cert-sig-line{width:90px;height:1px;background:var(--ink);margin:.4rem auto .2rem}
    </style>
  </head><body>${html}<script>window.print()<\/script></body></html>`);
  win.document.close();
  toast('Certificate opened — Ctrl+P / Cmd+P to save as PDF!', 'success');
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
function renderRooms() { const list=document.getElementById('chat-rooms'); list.innerHTML=''; CHAT_ROOMS.forEach(r=>{ const d=document.createElement('div'); d.className='cri-wrap'+(r.id===ROOM?' active':''); d.innerHTML=`<div class="cri-icon">${r.icon}</div><div style="flex:1;overflow:hidden"><div class="cr-name">#${r.name}</div><div class="cr-prev">${r.prev}</div></div>`; d.onclick=()=>switchRoom(r.id); list.appendChild(d); }); }
function switchRoom(id) { ROOM=id; const r=CHAT_ROOMS.find(x=>x.id===id); document.getElementById('chat-rname').textContent='#'+r.name; document.getElementById('chat-rdesc').textContent=r.desc; document.getElementById('chat-icon').textContent=r.icon; renderRooms(); renderMsgs(); }
function renderMsgs() { const area=document.getElementById('msgs-area'); area.innerHTML=''; (CMSGS[ROOM]||[]).forEach(m=>{ const d=document.createElement('div'); d.className='msg'+(m.own?' own':''); d.innerHTML=`${!m.own?`<div class="msg-ava" style="background:${sclr(m.u)}">${m.i||m.u.slice(0,2).toUpperCase()}</div>`:''}<div>${!m.own?`<div style="font-size:.72rem;font-weight:600;margin-bottom:.15rem;color:var(--muted)">${m.u}</div>`:''}<div class="msg-bubble">${m.msg}</div><div class="msg-meta">${m.t}</div></div>${m.own?`<div class="msg-ava" style="background:var(--ink);color:#fff">${U.ini}</div>`:''}`; area.appendChild(d); }); area.scrollTop=area.scrollHeight; }
function sclr(s) { const c=['#c8a84b','#2c3e50','#8B4513','#1a3a5c','#4a1a5c','#1a5c3a','#8e44ad']; let h=0; for(let i=0;i<s.length;i++) h=s.charCodeAt(i)+((h<<5)-h); return c[Math.abs(h)%c.length]; }
function sendMsg() { const inp=document.getElementById('chat-input'); const txt=inp.value.trim(); if(!txt)return; if(!CMSGS[ROOM])CMSGS[ROOM]=[]; CMSGS[ROOM].push({u:U.name,i:U.ini,msg:txt,t:new Date().toLocaleTimeString('en-ZA',{hour:'2-digit',minute:'2-digit'}),own:true}); inp.value=''; renderMsgs(); }
function chatKey(e) { if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMsg();} }

// ── RESOURCES ──
function renderRes() { const g=document.getElementById('res-grid'); g.innerHTML=''; RESOURCES.forEach((r,i)=>{ const d=document.createElement('div'); d.className='res-card'; d.innerHTML=`<div class="res-thumb" style="background:linear-gradient(135deg,#2c3e50,#1a2a3a)">${r.emoji}</div><div class="res-body"><div class="res-type">${r.type}</div><div class="res-title">${r.title}</div><div class="res-desc">${r.desc}</div><div style="margin-top:.75rem"><a href="${r.url}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" onclick="event.stopPropagation()">Open →</a></div></div>`; g.appendChild(d); }); }

// ════════════════════════════════════════════════════════════
// ADMIN PANEL
// ════════════════════════════════════════════════════════════
function renderAdmin() { renderAC(ADMIN_TAB); }
function switchAT(tab,el) { document.querySelectorAll('.admin-tab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); ADMIN_TAB=tab; renderAC(tab); }

async function renderAC(tab) {
  const c=document.getElementById('admin-content');
  c.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;padding:3rem;color:var(--muted)"><div style="text-align:center"><div style="font-size:1.5rem;margin-bottom:.5rem">⏳</div><div>Loading…</div></div></div>`;

  // ── USERS ──
  if (tab==='users') {
    let allUsers=[], pending=[];
    try {
      allUsers = await sb.query('users', { order:'joined.asc' });
      pending  = allUsers.filter(u=>u.status==='pending');
    } catch(e) { c.innerHTML=`<div style="color:var(--red);padding:1.25rem">Error loading users: ${e.message}</div>`; return; }

    const searchVal=window._userSearch||'';
    const filterVal=window._userFilter||'all';
    let display=allUsers;
    if(searchVal) display=display.filter(u=>u.name.toLowerCase().includes(searchVal)||u.email.toLowerCase().includes(searchVal));
    if(filterVal==='pending')  display=display.filter(u=>u.status==='pending');
    if(filterVal==='active')   display=display.filter(u=>u.status==='active'&&u.role!=='admin');
    if(filterVal==='admin')    display=display.filter(u=>u.role==='admin');
    if(filterVal==='inactive') display=display.filter(u=>u.status==='inactive');

    c.innerHTML=`
      ${pending.length>0?`<div style="background:linear-gradient(135deg,#fff8e1,#fffde7);border:1px solid #f59e0b;border-radius:10px;padding:1rem 1.25rem;margin-bottom:1.25rem;display:flex;align-items:center;gap:.875rem">
        <span style="font-size:1.5rem">⏳</span>
        <div style="flex:1"><div style="font-weight:700;font-size:.875rem;color:#92400e">${pending.length} user${pending.length>1?'s':''} awaiting approval</div>
        <div style="font-size:.78rem;color:#b45309">Review and approve or reject below. Filter by "Pending Approval" to see them.</div></div>
      </div>`:''}
      <div class="section-hdr">
        <h2>User Management <span style="font-size:.8rem;font-weight:400;color:var(--muted)">(${allUsers.filter(u=>u.status==='active').length} active · ${pending.length} pending)</span></h2>
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
          <option value="all"      ${filterVal==='all'?'selected':''}>All Users</option>
          <option value="pending"  ${filterVal==='pending'?'selected':''}>Pending Approval</option>
          <option value="active"   ${filterVal==='active'?'selected':''}>Active Cadets</option>
          <option value="admin"    ${filterVal==='admin'?'selected':''}>Admins</option>
          <option value="inactive" ${filterVal==='inactive'?'selected':''}>Deactivated</option>
        </select>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Status</th><th>Enrolled</th><th>Completed</th><th>Joined</th><th>Actions</th></tr></thead>
        <tbody id="user-tbody"></tbody>
      </table></div>
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
      <div id="batch-invite-modal" style="display:none;margin-top:1.25rem" class="card">
        <div class="card-header"><h3>📧 Batch Invite by Email</h3><button class="btn btn-secondary btn-sm" onclick="document.getElementById('batch-invite-modal').style.display='none'">Cancel</button></div>
        <div class="card-body">
          <p style="font-size:.82rem;color:var(--muted);margin-bottom:1rem">Add email addresses below (one per line or comma-separated). These emails will be pre-approved — users who register with them go straight in without needing manual approval.</p>
          <div class="form-group"><label>Email Addresses</label><textarea id="invite-emails" placeholder="jane@imcs.co.za&#10;thabo@imcs.co.za&#10;sarah@imcs.co.za" style="min-height:120px;font-family:monospace;font-size:.82rem"></textarea></div>
          <button class="btn btn-primary" onclick="saveBatchInvite()">Save Pre-approved Emails</button>
        </div>
      </div>`;

    const tbody=document.getElementById('user-tbody');
    if(!display.length) { tbody.innerHTML=`<tr><td colspan="7" style="text-align:center;color:var(--muted);padding:2rem">No users found.</td></tr>`; }
    display.forEach(u=>{
      const isMe=u.email===U.email;
      const isPending=u.status==='pending';
      const tr=document.createElement('tr'); if(isPending) tr.style.background='#fffbeb';
      tr.innerHTML=`
        <td><div style="display:flex;align-items:center;gap:.65rem">
          <div class="ava" style="background:${sclr(u.name)};color:#fff">${u.name.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2)}</div>
          <div><div style="font-weight:600">${u.name}</div>${isMe?'<div style="font-size:.68rem;color:var(--gold)">← You</div>':''}</div>
        </div></td>
        <td style="color:var(--muted);font-size:.82rem">${u.email}</td>
        <td>${isMe?`<span style="font-size:.78rem;font-weight:600;color:var(--gold)">Admin</span>`:`<select onchange="changeUserRole('${u.id}',this.value)" style="padding:.3rem .5rem;border:1px solid var(--border);border-radius:6px;font-size:.75rem;background:#fff"><option value="cadet" ${u.role==='cadet'?'selected':''}>Cadet</option><option value="admin" ${u.role==='admin'?'selected':''}>Admin</option></select>`}</td>
        <td>${isPending?`<span class="sbadge pending">⏳ Pending</span>`:u.status==='inactive'?`<span class="sbadge inactive">Inactive</span>`:`<span class="sbadge active">Active</span>`}</td>
        <td>${u.enrolled||0}</td>
        <td>${u.completed||0}</td>
        <td style="color:var(--muted);font-size:.75rem">${u.joined}</td>
        <td><div style="display:flex;gap:.35rem;flex-wrap:wrap">
          ${isPending?`<button class="btn btn-sm" style="background:#dcfce7;color:#16a34a;border:1px solid #bbf7d0" onclick="approveUser('${u.id}','${u.name}')">✓ Approve</button><button class="btn btn-danger btn-sm" onclick="rejectUser('${u.id}','${u.name}')">✗ Reject</button>`:!isMe?`<button class="btn btn-sm" style="background:${u.status==='active'?'#fee2e2':'#dcfce7'};color:${u.status==='active'?'#dc2626':'#16a34a'};border:1px solid ${u.status==='active'?'#fecaca':'#bbf7d0'}" onclick="toggleUserStatus('${u.id}','${u.status}')">${u.status==='active'?'Deactivate':'Activate'}</button>`:''}
          ${!isMe&&!isPending?`<button class="btn btn-secondary btn-sm" onclick="resetUserPass('${u.id}','${u.name}')">Reset Pass</button>`:''}
        </div></td>`;
      tbody.appendChild(tr);
    });

  // ── COURSE ORDER ──
  } else if (tab==='order') {
    const courses = allC();
    c.innerHTML = `
      <div class="section-hdr">
        <h2>Course Display Order</h2>
        <div style="display:flex;gap:.5rem">
          <button class="btn btn-secondary btn-sm" onclick="resetCourseOrder()">Reset to Default</button>
          <button class="btn btn-primary btn-sm" onclick="saveCourseOrder()">Save Order</button>
        </div>
      </div>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:1.25rem">Drag and drop courses to reorder how they appear on the Learning Modules page. Click <strong>Save Order</strong> when done.</p>
      <div id="order-list" style="display:flex;flex-direction:column;gap:.5rem"></div>`;
    const list = document.getElementById('order-list');
    courses.forEach((course, idx) => {
      const d = document.createElement('div');
      d.className = 'card';
      d.draggable = true;
      d.dataset.id = course.id;
      d.style.cssText = 'cursor:grab;transition:all .15s;user-select:none';
      d.innerHTML = `
        <div class="card-body" style="display:flex;align-items:center;gap:1rem;padding:.875rem 1.1rem">
          <div style="display:flex;flex-direction:column;gap:3px;color:var(--muted);flex-shrink:0;cursor:grab">
            <div style="width:18px;height:2px;background:currentColor;border-radius:1px"></div>
            <div style="width:18px;height:2px;background:currentColor;border-radius:1px"></div>
            <div style="width:18px;height:2px;background:currentColor;border-radius:1px"></div>
          </div>
          <div style="width:36px;height:36px;background:linear-gradient(135deg,${course.color||'#2c3e50'},${course.color||'#2c3e50'}99);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">${course.emoji||'📚'}</div>
          <div style="flex:1">
            <div style="font-weight:600;font-size:.875rem">${course.title}</div>
            <div style="font-size:.72rem;color:var(--muted)">${course.cat}</div>
          </div>
          <div style="font-size:.78rem;color:var(--muted);font-weight:600">#${idx+1}</div>
        </div>`;
      // Drag events
      d.addEventListener('dragstart', e => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', course.id);
        d.style.opacity = '0.4';
      });
      d.addEventListener('dragend', () => { d.style.opacity = '1'; updateOrderNumbers(); });
      d.addEventListener('dragover', e => { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; d.style.background = '#fef9ec'; d.style.borderColor = 'var(--gold)'; });
      d.addEventListener('dragleave', () => { d.style.background = ''; d.style.borderColor = ''; });
      d.addEventListener('drop', e => {
        e.preventDefault();
        d.style.background = ''; d.style.borderColor = '';
        const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
        const draggedEl = list.querySelector(`[data-id="${draggedId}"]`);
        if (draggedEl && draggedEl !== d) {
          const allItems = [...list.children];
          const fromIdx = allItems.indexOf(draggedEl);
          const toIdx = allItems.indexOf(d);
          if (fromIdx < toIdx) list.insertBefore(draggedEl, d.nextSibling);
          else list.insertBefore(draggedEl, d);
        }
        updateOrderNumbers();
      });
      list.appendChild(d);
    });

  // ── BADGES ──
  } else if (tab==='badges') {
    const courses = allC();
    c.innerHTML = `
      <div class="section-hdr">
        <h2>Badge Editor</h2>
        <button class="btn btn-primary btn-sm" onclick="saveAllBadges()">Save All Badges</button>
      </div>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:1.25rem">Customise the emoji, colour, and label for each course badge. Changes appear on the My Profile page for all users.</p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1rem" id="badge-grid"></div>`;
    const grid = document.getElementById('badge-grid');
    courses.forEach(course => {
      const ov = BADGE_OVERRIDES[course.id] || {};
      const emoji = ov.emoji || course.emoji || '📚';
      const color = ov.color || course.color || '#c8a84b';
      const label = ov.label || course.title;
      const d = document.createElement('div');
      d.className = 'card';
      const hasOverride = !!BADGE_OVERRIDES[course.id];
      d.innerHTML = `
        <div class="card-body">
          <div style="display:flex;align-items:center;gap:.875rem;margin-bottom:.875rem">
            <div id="badge-preview-${course.id}" style="width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,${color},${color}cc);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;position:relative;transition:all .2s">
              <span>${emoji}</span>
            </div>
            <div style="flex:1;overflow:hidden">
              <div style="font-weight:700;font-size:.82rem;margin-bottom:.15rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${course.title}</div>
              <div style="font-size:.7rem;color:var(--muted)">${course.cat}</div>
            </div>
            ${hasOverride ? `<button class="btn btn-danger btn-sm" style="flex-shrink:0" onclick="deleteBadgeOverride(${course.id})">Reset</button>` : ''}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem">
            <div class="form-group" style="margin:0">
              <label style="font-size:.72rem">Badge Emoji</label>
              <input type="text" id="be-emoji-${course.id}" value="${emoji}" maxlength="4"
                style="font-size:1.2rem;text-align:center"
                oninput="document.querySelector('#badge-preview-${course.id} span').textContent=this.value||'📚'">
            </div>
            <div class="form-group" style="margin:0">
              <label style="font-size:.72rem">Badge Colour</label>
              <input type="color" id="be-color-${course.id}" value="${color}"
                style="height:38px;padding:3px 6px;width:100%;cursor:pointer"
                oninput="document.getElementById('badge-preview-${course.id}').style.background='linear-gradient(135deg,'+this.value+','+this.value+'cc)'">
            </div>
            <div class="form-group" style="grid-column:1/-1;margin:0">
              <label style="font-size:.72rem">Badge Label (shown under badge)</label>
              <input type="text" id="be-label-${course.id}" value="${label}" placeholder="${course.title}">
            </div>
          </div>
        </div>`;
      grid.appendChild(d);
    });

  // ── QUIZ EDITOR ──
  } else if (tab==='quizeditor') {
    const quizCourses = allC().filter(c => c.quiz && c.quiz.length > 0);
    c.innerHTML = `
      <div class="section-hdr">
        <h2>Quiz Editor</h2>
        <button class="btn btn-primary btn-sm" onclick="saveQuizEdits()">✓ Save Quiz</button>
      </div>
      <p style="color:var(--muted);font-size:.82rem;margin-bottom:1.25rem">Select a course to edit its quiz questions, answer options, and correct answers. Click the radio button next to an answer to mark it as correct (highlighted gold).</p>
      <div class="card" style="margin-bottom:1.25rem"><div class="card-body">
        <div class="form-group" style="margin:0">
          <label>Select Course to Edit</label>
          <select id="quiz-course-select" onchange="renderQuizEditor()"
            style="width:100%;padding:.6rem .875rem;border:1px solid var(--border);border-radius:8px;font-size:.875rem;background:#fff;outline:none">
            <option value="">— Choose a course —</option>
            ${quizCourses.map(c => `<option value="${c.id}">${c.title} (${c.quiz.length} questions)</option>`).join('')}
          </select>
        </div>
      </div></div>
      <div id="quiz-editor-body">
        <p style="color:var(--muted);padding:1rem">Select a course above to edit its quiz.</p>
      </div>`;

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
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.15rem">
              <div style="font-weight:700;font-size:.875rem">${course.title}</div>
              <div style="display:flex;gap:.35rem">
                <button class="btn btn-secondary btn-sm" onclick="openEditCourse(${course.id})">✏️ Edit</button>
                ${course.id > 1000 ? `<button class="btn btn-danger btn-sm" onclick="deleteCourse(${course.id})">🗑 Delete</button>` : ''}
              </div>
            </div>
            <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">${course.cat} · ${course.steps} step${course.steps!==1?'s':''}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${ov?'#2563eb':hasVid?'var(--success)':'#f59e0b'}">🎥 ${ov?'Custom video assigned':hasVid?'Default video loaded':'No video'}</div>
                <div class="vtab-row" id="vtabs-${course.id}">
                  <button class="vtab active" onclick="switchVT(${course.id},'file',this)">📁 Upload</button>
                  <button class="vtab" onclick="switchVT(${course.id},'gdrive',this)">🔗 Drive Link</button>
                  <button class="vtab" onclick="switchVT(${course.id},'library',this)">📺 Library</button>
                </div>
                <div id="vp-file-${course.id}"><button class="btn btn-primary btn-sm" onclick="trigVid(${course.id})">⬆ Upload Video</button><div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">MP4, MOV, WebM</div></div>
                <div id="vp-gdrive-${course.id}" style="display:none">
                  <div style="display:flex;gap:.75rem;align-items:flex-end"><div class="form-group" style="margin:0;flex:1"><input type="text" id="gdi-${course.id}" placeholder="Paste Google Drive share link…" value="${ov&&ov.type==='gdrive'?ov.url:''}"></div><button class="btn btn-primary btn-sm" onclick="saveGD(${course.id})">Save</button></div>
                  <div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">Set sharing to "Anyone with the link can view" first.</div>
                </div>
                <div id="vp-library-${course.id}" style="display:none">
                  <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Available videos:</div>
                  <div style="display:flex;flex-direction:column;gap:.35rem;max-height:180px;overflow-y:auto">${typeof EXTRA_VIDS!=='undefined'?EXTRA_VIDS.map(v=>`<button class="btn btn-secondary btn-sm" style="justify-content:flex-start;text-align:left" onclick="useLib(${course.id},'${GD(v.id)}','${v.n}')">▶ ${v.n}</button>`).join(''):''}</div>
                </div>
                ${ov?`<button class="btn btn-danger btn-sm" style="margin-top:.5rem" onclick="rmVid(${course.id})">Restore Default</button>`:''}
              </div>
              <div>
                <div style="font-size:.75rem;font-weight:600;margin-bottom:.4rem;color:${IMG_OVERRIDES[course.id]?'#2563eb':imgUrl?'var(--success)':'#f59e0b'}">🖼 ${IMG_OVERRIDES[course.id]?'Custom image':'Default image'}</div>
                ${imgUrl?`<img src="${imgUrl}" style="width:100%;height:80px;object-fit:cover;border-radius:6px;margin-bottom:.5rem" alt="thumb">`:'<div style="width:100%;height:80px;background:var(--paper);border:1px dashed var(--border);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.75rem;margin-bottom:.5rem">No image</div>'}
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
            <div class="form-group"><label>Emoji</label><input type="text" id="rf-emoji" placeholder="📄" maxlength="4"></div>
            <div class="form-group"><label>URL</label><input type="url" id="rf-url" placeholder="https://…"></div>
            <div class="form-group" style="grid-column:1/-1"><label>Description</label><textarea id="rf-desc" style="min-height:70px"></textarea></div>
          </div>
          <button class="btn btn-primary" onclick="saveResource()">Save Resource</button>
        </div>
      </div>`;
    const tbody=document.getElementById('res-tbody');
    RESOURCES.forEach((r,i)=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td style="font-size:1.3rem">${r.emoji}</td><td><strong>${r.title}</strong></td><td><span class="sbadge active">${r.type}</span></td><td><a href="${r.url}" target="_blank" style="color:var(--gold);font-size:.78rem">${r.url.length>40?r.url.slice(0,40)+'…':r.url}</a></td><td><div style="display:flex;gap:.35rem"><button class="btn btn-secondary btn-sm" onclick="editResource(${i})">Edit</button><button class="btn btn-danger btn-sm" onclick="deleteResource(${i})">Delete</button></div></td>`; tbody.appendChild(tr); });

  // ── CREATE COURSE ──
  } else if (tab==='create') {
    c.innerHTML=`
      <div class="section-hdr"><h2>Create New Course</h2></div>
      <div class="card"><div class="card-body" style="max-width:720px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div class="form-group" style="margin:0"><label>Course Title *</label><input type="text" id="nc-title" placeholder="e.g. Client Relationship Management"></div>
          <div class="form-group" style="margin:0"><label>Category *</label><select id="nc-cat"><option value="">Select category</option><option>Editorial</option><option>Sales</option><option>Digital</option><option>AI</option><option>Operations</option><option>Leadership</option></select></div>
          <div class="form-group" style="margin:0"><label>Custom Category</label><input type="text" id="nc-ccat" placeholder="e.g. Photojournalism"></div>
          <div class="form-group" style="margin:0"><label>Emoji</label><input type="text" id="nc-emoji" placeholder="📸" maxlength="4"></div>
          <div class="form-group" style="margin:0"><label>Colour</label><input type="color" id="nc-color" value="#2c3e50" style="height:38px;padding:3px 6px"></div>
          <div class="form-group" style="margin:0"><label>Duration</label><input type="text" id="nc-dur" placeholder="~2 hrs"></div>
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
      <div style="display:grid;grid-template-columns:1fr 380px;gap:1.25rem;align-items:start">

        <div style="display:flex;flex-direction:column;gap:1.25rem">

          <!-- IDENTITY -->
          <div class="card"><div class="card-header"><h3>🏷 Platform Identity</h3></div><div class="card-body">
            <div class="form-group"><label>Platform Name</label><input type="text" id="b-name" value="${BRAND.name}" oninput="bPreview()"></div>
            <div class="form-group"><label>Tagline / Subtitle</label><input type="text" id="b-tagline" value="${BRAND.tagline}" oninput="bPreview()"></div>
            <div style="height:1px;background:var(--border);margin:1rem 0"></div>
            <div style="font-size:.82rem;font-weight:700;margin-bottom:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-size:.7rem">🔐 Login Page Text</div>
            <div class="form-group"><label>Login Headline <span style="font-size:.7rem;color:var(--muted)">(HTML allowed, use &lt;em&gt; for gold italic)</span></label><input type="text" id="b-login-headline" value="${(BRAND.loginHeadline||'').replace(/"/g,'&quot;')}" placeholder="Invest in yourself.&lt;br&gt;&lt;em&gt;Grow your career.&lt;/em&gt;"></div>
            <div class="form-group"><label>Login Subtext</label><textarea id="b-login-subtext" style="min-height:70px">${BRAND.loginSubtext||''}</textarea></div>
          </div></div>

          <!-- LOGO & FAVICON -->
          <div class="card"><div class="card-header"><h3>🖼 Logo &amp; Icon</h3></div><div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
              <div>
                <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Sidebar Logo</div>
                <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">Displayed in the sidebar header. PNG or SVG, transparent background recommended.</div>
                ${BRAND.logoUrl ? `<div style="background:var(--sidebar);border-radius:8px;padding:.75rem;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center"><img src="${BRAND.logoUrl}" style="height:40px;object-fit:contain;max-width:160px" alt="logo"></div>` : '<div style="background:var(--sidebar);border-radius:8px;padding:.75rem;margin-bottom:.75rem;height:64px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.3);font-size:.78rem">No logo set</div>'}
                <div style="display:flex;gap:.5rem">
                  <button class="btn btn-secondary btn-sm" onclick="document.getElementById('logo-input').click()">⬆ Upload</button>
                  ${BRAND.logoUrl ? `<button class="btn btn-danger btn-sm" onclick="removeLogo()">Remove</button>` : ''}
                </div>
              </div>
              <div>
                <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Favicon / Tab Icon</div>
                <div style="font-size:.72rem;color:var(--muted);margin-bottom:.75rem">Shown in browser tab. PNG or ICO, 32×32 or 64×64 recommended.</div>
                ${BRAND.faviconUrl ? `<div style="background:var(--paper);border:1px solid var(--border);border-radius:8px;padding:.75rem;margin-bottom:.75rem;display:flex;align-items:center;justify-content:center"><img src="${BRAND.faviconUrl}" style="height:40px;width:40px;object-fit:contain;border-radius:6px" alt="favicon"></div>` : '<div style="background:var(--paper);border:1px dashed var(--border);border-radius:8px;padding:.75rem;margin-bottom:.75rem;height:64px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.78rem">No favicon set</div>'}
                <div style="display:flex;gap:.5rem">
                  <button class="btn btn-secondary btn-sm" onclick="document.getElementById('favicon-input').click()">⬆ Upload</button>
                  ${BRAND.faviconUrl ? `<button class="btn btn-danger btn-sm" onclick="removeFavicon()">Remove</button>` : ''}
                </div>
              </div>
            </div>
          </div></div>

          <!-- COLOURS -->
          <div class="card"><div class="card-header"><h3>🎨 Colours</h3></div><div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
              <div class="form-group" style="margin:0">
                <label>Accent / Primary Colour</label>
                <div style="font-size:.7rem;color:var(--muted);margin-bottom:.4rem">Buttons, badges, highlights, active states</div>
                <div style="display:flex;gap:.6rem;align-items:center">
                  <input type="color" id="b-color" value="${BRAND.primaryColor}" style="height:38px;padding:3px 6px;width:50px;cursor:pointer" oninput="document.getElementById('b-color-hex').value=this.value;bPreview()">
                  <input type="text" id="b-color-hex" value="${BRAND.primaryColor}" style="width:100px;font-family:monospace" oninput="if(this.value.match(/^#[0-9a-fA-F]{6}$/)){document.getElementById('b-color').value=this.value;bPreview()}" placeholder="#c8a84b">
                </div>
              </div>
              <div class="form-group" style="margin:0">
                <label>Sidebar Background</label>
                <div style="font-size:.7rem;color:var(--muted);margin-bottom:.4rem">Left navigation panel colour</div>
                <div style="display:flex;gap:.6rem;align-items:center">
                  <input type="color" id="b-sidebar" value="${BRAND.sidebarColor||'#111118'}" style="height:38px;padding:3px 6px;width:50px;cursor:pointer" oninput="document.getElementById('b-sidebar-hex').value=this.value;bPreview()">
                  <input type="text" id="b-sidebar-hex" value="${BRAND.sidebarColor||'#111118'}" style="width:100px;font-family:monospace" oninput="if(this.value.match(/^#[0-9a-fA-F]{6}$/)){document.getElementById('b-sidebar').value=this.value;bPreview()}" placeholder="#111118">
                </div>
              </div>
            </div>
            <div style="margin-top:1rem">
              <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Quick Colour Presets</div>
              <div style="display:flex;gap:.5rem;flex-wrap:wrap">
                ${[['#c8a84b','Gold (Default)'],['#2c3e50','Navy'],['#e74c3c','Red'],['#27ae60','Green'],['#8e44ad','Purple'],['#e67e22','Orange'],['#1a6bb5','Blue'],['#2c2c2c','Charcoal']].map(([col,name])=>`<button onclick="document.getElementById('b-color').value='${col}';document.getElementById('b-color-hex').value='${col}';bPreview()" title="${name}" style="width:28px;height:28px;border-radius:6px;background:${col};border:2px solid ${col===BRAND.primaryColor?'var(--ink)':'transparent'};cursor:pointer;transition:transform .15s" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform=''"></button>`).join('')}
              </div>
            </div>
          </div></div>

          <!-- TYPOGRAPHY -->
          <div class="card"><div class="card-header"><h3>✏️ Typography</h3></div><div class="card-body">
            <div class="form-group" style="margin:0">
              <label>Font Family</label>
              <select id="b-font" onchange="bPreview()" style="margin-top:.35rem">
                ${['Poppins','Inter','Roboto','Lato','Open Sans','Montserrat','Nunito','Raleway'].map(f=>`<option value="${f}" ${BRAND.fontFamily===f?'selected':''}>${f}</option>`).join('')}
              </select>
            </div>
            <p style="font-size:.72rem;color:var(--muted);margin-top:.5rem">Font change applies after clicking Apply Branding.</p>
          </div></div>

          <button class="btn btn-primary btn-lg" onclick="saveBranding()" style="justify-content:center">✓ Apply All Branding Changes</button>
        </div>

        <!-- LIVE PREVIEW -->
        <div class="card" style="position:sticky;top:70px"><div class="card-header"><h3>👁 Live Preview</h3></div><div class="card-body" style="padding:.875rem">
          <div id="brand-preview-sidebar" style="background:${BRAND.sidebarColor||'#111118'};border-radius:10px;padding:1rem;color:#fff;margin-bottom:.875rem">
            <div style="display:flex;align-items:center;gap:.75rem;padding-bottom:.75rem;margin-bottom:.75rem;border-bottom:1px solid rgba(255,255,255,.08)">
              <div id="preview-icon" style="width:34px;height:34px;background:${BRAND.primaryColor};border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden">
                ${BRAND.logoUrl ? `<img src="${BRAND.logoUrl}" style="width:22px;height:22px;object-fit:contain" alt="logo">` : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>'}
              </div>
              <div>
                <div id="preview-name" style="font-size:.9rem;font-weight:800;line-height:1.1">${BRAND.name}</div>
                <div id="preview-tag" style="font-size:.55rem;opacity:.55;text-transform:uppercase;letter-spacing:.06em;margin-top:1px">${BRAND.tagline}</div>
              </div>
            </div>
            ${[['Dashboard','▦'],['Learning Modules','📚'],['My Programs','✓'],['Member Chat','💬'],['Resources','📄']].map(([n,ic],i)=>`<div id="preview-nav-${i}" style="display:flex;align-items:center;gap:.6rem;padding:.45rem .6rem;border-radius:6px;font-size:.75rem;margin-bottom:.2rem;color:rgba(255,255,255,.55);${i===0?'background:rgba(255,255,255,.1);color:#fff;position:relative':''}">
              ${i===0?`<div style="position:absolute;left:0;top:0;bottom:0;width:3px;background:${BRAND.primaryColor};border-radius:0 2px 2px 0"></div>`:''}
              <span style="font-size:.85rem">${ic}</span>${n}
            </div>`).join('')}
          </div>
          <div style="padding:.75rem;background:var(--paper);border-radius:8px;border:1px solid var(--border);margin-bottom:.75rem">
            <div style="font-size:.7rem;color:var(--muted);margin-bottom:.5rem;font-weight:600">COMPONENTS</div>
            <div style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center">
              <button class="btn btn-sm" id="preview-btn" style="background:${BRAND.primaryColor};color:#000">Button</button>
              <span id="preview-badge" style="padding:2px 8px;border-radius:20px;font-size:.72rem;background:${BRAND.primaryColor};color:#000">Badge</span>
              <div style="width:60px;height:3px;background:${BRAND.primaryColor};border-radius:2px" id="preview-bar"></div>
            </div>
          </div>
          <div style="padding:.75rem;background:var(--paper);border-radius:8px;border:1px solid var(--border)">
            <div style="font-size:.7rem;color:var(--muted);margin-bottom:.4rem;font-weight:600">FAVICON PREVIEW</div>
            <div style="display:flex;align-items:center;gap:.5rem">
              ${BRAND.faviconUrl ? `<img id="preview-favicon" src="${BRAND.faviconUrl}" style="width:20px;height:20px;object-fit:contain;border-radius:3px" alt="favicon">` : `<div id="preview-favicon" style="width:20px;height:20px;background:var(--border);border-radius:3px"></div>`}
              <span style="font-size:.75rem;color:var(--muted)">${BRAND.name} — Tab Icon</span>
            </div>
          </div>
          <p style="font-size:.7rem;color:var(--muted);margin-top:.75rem;line-height:1.5">Preview updates live as you make changes. Click <strong>Apply All Branding Changes</strong> to save.</p>
        </div></div>
      </div>`;
    // Live preview update function
    window.bPreview = function() {
      const name    = document.getElementById('b-name')?.value || BRAND.name;
      const tagline = document.getElementById('b-tagline')?.value || BRAND.tagline;
      const color   = document.getElementById('b-color')?.value || BRAND.primaryColor;
      const sidebar = document.getElementById('b-sidebar')?.value || BRAND.sidebarColor;
      document.getElementById('preview-name').textContent = name;
      document.getElementById('preview-tag').textContent  = tagline;
      document.getElementById('preview-btn').style.background  = color;
      document.getElementById('preview-badge').style.background = color;
      document.getElementById('preview-bar').style.background   = color;
      document.getElementById('preview-icon').style.background  = color;
      document.getElementById('brand-preview-sidebar').style.background = sidebar;
      document.querySelectorAll('[id^="preview-nav-"]').forEach((el,i)=>{ if(i===0){ el.style.background='rgba(255,255,255,.1)'; const bar=el.querySelector('div[style*="position:absolute"]'); if(bar) bar.style.background=color; } });
    };

  // ── ANNOUNCEMENTS ──
  } else if (tab==='announce') {
    let anns=[];
    try { anns=await sb.query('announcements',{order:'created_at.desc'}); DB_ANNOUNCEMENTS=anns; } catch(e){}
    c.innerHTML=`
      <div class="section-hdr"><h2>Announcements</h2></div>
      <div class="card mb-2"><div class="card-header"><h3>Send Announcement</h3></div><div class="card-body">
        <div class="form-group"><label>Title</label><input type="text" id="ann-title" placeholder="e.g. New course available!"></div>
        <div class="form-group"><label>Message</label><textarea id="ann-body" placeholder="Write your announcement…" style="min-height:80px"></textarea></div>
        <button class="btn btn-primary" onclick="sendAnnouncement()">📢 Broadcast to All Users</button>
      </div></div>
      <div class="card"><div class="card-header"><h3>Previous Announcements</h3></div><div class="card-body">
        ${anns.length===0?'<div style="color:var(--muted);font-size:.82rem">No announcements yet.</div>':anns.map(a=>`
          <div style="padding:.875rem;border:1px solid var(--border);border-radius:8px;margin-bottom:.6rem;display:flex;gap:.875rem;align-items:flex-start">
            <span style="font-size:1.3rem">📢</span>
            <div style="flex:1"><div style="font-weight:700;font-size:.875rem">${a.title}</div><div style="font-size:.8rem;color:var(--muted);margin-top:.2rem">${a.body}</div><div style="font-size:.7rem;color:var(--muted);margin-top:.3rem">${new Date(a.created_at).toLocaleString('en-ZA')}</div></div>
            <button class="btn btn-danger btn-sm" onclick="deleteAnnouncement('${a.id}')">Delete</button>
          </div>`).join('')}
      </div></div>`;

  // ── CERTIFICATE EDITOR ──
  } else if (tab==='certificate') {
    const cr = BRAND.cert;
    c.innerHTML = `
      <div class="section-hdr"><h2>Certificate Editor</h2></div>
      <div style="display:grid;grid-template-columns:1fr 420px;gap:1.25rem;align-items:start">

        <div style="display:flex;flex-direction:column;gap:1.25rem">

          <!-- TEXT -->
          <div class="card"><div class="card-header"><h3>📝 Certificate Text</h3></div><div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
              <div class="form-group"><label>Header / Badge Text</label>
                <input type="text" id="cr-header" value="${cr.headerText}" placeholder="✦ IndyTrain ✦" oninput="certPreview()">
                <div style="font-size:.7rem;color:var(--muted);margin-top:.25rem">Shown at the top of the certificate (e.g. platform name with decorators)</div>
              </div>
              <div class="form-group"><label>Title</label>
                <input type="text" id="cr-title" value="${cr.titleText}" placeholder="Certificate of Completion" oninput="certPreview()">
              </div>
              <div class="form-group"><label>"This is to certify that" text</label>
                <input type="text" id="cr-body" value="${cr.bodyText}" oninput="certPreview()">
              </div>
              <div class="form-group"><label>"Has completed" text</label>
                <input type="text" id="cr-sub" value="${cr.subText}" oninput="certPreview()">
              </div>
              <div class="form-group" style="grid-column:1/-1"><label>Footer / Institution Note</label>
                <input type="text" id="cr-footer" value="${cr.footerNote}" oninput="certPreview()">
              </div>
            </div>
          </div></div>

          <!-- SIGNATURES -->
          <div class="card"><div class="card-header"><h3>✍️ Signatures</h3></div><div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem">
              <div>
                <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Left Signature</div>
                <div class="form-group"><label>Name</label><input type="text" id="cr-sig1n" value="${cr.sig1Name}" oninput="certPreview()"></div>
                <div class="form-group"><label>Title / Role</label><input type="text" id="cr-sig1r" value="${cr.sig1Role}" oninput="certPreview()"></div>
              </div>
              <div>
                <div style="font-size:.78rem;font-weight:600;margin-bottom:.5rem">Right Signature</div>
                <div class="form-group"><label>Name</label><input type="text" id="cr-sig2n" value="${cr.sig2Name}" oninput="certPreview()"></div>
                <div class="form-group"><label>Title / Role</label><input type="text" id="cr-sig2r" value="${cr.sig2Role}" oninput="certPreview()"></div>
              </div>
            </div>
          </div></div>

          <!-- DESIGN -->
          <div class="card"><div class="card-header"><h3>🎨 Design</h3></div><div class="card-body">
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem">
              <div class="form-group" style="margin:0">
                <label>Accent Colour</label>
                <div style="display:flex;gap:.5rem;align-items:center;margin-top:.35rem">
                  <input type="color" id="cr-accent" value="${cr.accentColor}" style="height:36px;width:48px;padding:3px;cursor:pointer" oninput="document.getElementById('cr-accent-hex').value=this.value;certPreview()">
                  <input type="text" id="cr-accent-hex" value="${cr.accentColor}" style="width:90px;font-family:monospace;font-size:.8rem" oninput="if(this.value.match(/^#[0-9a-fA-F]{6}$/)){document.getElementById('cr-accent').value=this.value;certPreview()}">
                </div>
              </div>
              <div class="form-group" style="margin:0">
                <label>Background Start</label>
                <div style="display:flex;gap:.5rem;align-items:center;margin-top:.35rem">
                  <input type="color" id="cr-bg1" value="${cr.bgFrom}" style="height:36px;width:48px;padding:3px;cursor:pointer" oninput="certPreview()">
                  <input type="text" value="${cr.bgFrom}" style="width:90px;font-family:monospace;font-size:.8rem" oninput="document.getElementById('cr-bg1').value=this.value;certPreview()" id="cr-bg1-hex">
                </div>
              </div>
              <div class="form-group" style="margin:0">
                <label>Background End</label>
                <div style="display:flex;gap:.5rem;align-items:center;margin-top:.35rem">
                  <input type="color" id="cr-bg2" value="${cr.bgTo}" style="height:36px;width:48px;padding:3px;cursor:pointer" oninput="certPreview()">
                  <input type="text" value="${cr.bgTo}" style="width:90px;font-family:monospace;font-size:.8rem" oninput="document.getElementById('cr-bg2').value=this.value;certPreview()" id="cr-bg2-hex">
                </div>
              </div>
            </div>
            <div style="margin-top:1rem;display:flex;gap:1.5rem;align-items:center">
              <label style="display:flex;align-items:center;gap:.5rem;font-size:.82rem;cursor:pointer">
                <input type="checkbox" id="cr-border" ${cr.showBorder?'checked':''} onchange="certPreview()" style="width:16px;height:16px">
                Show inner border frame
              </label>
            </div>
          </div></div>

          <!-- LOGO -->
          <div class="card"><div class="card-header"><h3>🖼 Certificate Logo</h3></div><div class="card-body">
            <p style="font-size:.82rem;color:var(--muted);margin-bottom:.875rem">Upload a logo to appear at the top of the certificate. Leave empty to use no logo, or it will fall back to the platform logo if set.</p>
            <div style="display:flex;gap:1.25rem;align-items:flex-start">
              <div>
                ${cr.logoUrl ? `<img src="${cr.logoUrl}" style="height:60px;object-fit:contain;background:var(--paper);border:1px solid var(--border);border-radius:8px;padding:.5rem;display:block;margin-bottom:.5rem" alt="cert logo">` : '<div style="height:60px;width:120px;background:var(--paper);border:1px dashed var(--border);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--muted);font-size:.75rem;margin-bottom:.5rem">No logo</div>'}
                <div style="display:flex;gap:.5rem">
                  <button class="btn btn-secondary btn-sm" onclick="document.getElementById('cert-logo-input').click()">⬆ Upload Logo</button>
                  ${cr.logoUrl ? '<button class="btn btn-danger btn-sm" onclick="removeCertLogo()">Remove</button>' : ''}
                </div>
              </div>
              <div style="font-size:.78rem;color:var(--muted);line-height:1.6">
                <strong>Tips:</strong><br>
                PNG with transparent background works best.<br>
                Landscape format (wider than tall) recommended.<br>
                Will appear above the header text.
              </div>
            </div>
          </div></div>

          <button class="btn btn-primary btn-lg" onclick="saveCertConfig()" style="justify-content:center">✓ Save Certificate Design</button>
        </div>

        <!-- LIVE PREVIEW -->
        <div class="card" style="position:sticky;top:70px"><div class="card-header"><h3>👁 Live Preview</h3></div><div class="card-body" style="padding:.75rem">
          <div id="cert-admin-preview" style="background:linear-gradient(135deg,${cr.bgFrom},${cr.bgTo});border:2px solid ${cr.accentColor};border-radius:10px;padding:1.5rem;text-align:center;position:relative;font-family:inherit;transform:scale(.9);transform-origin:top center">
          </div>
          <p style="font-size:.7rem;color:var(--muted);margin-top:.875rem;text-align:center">Preview updates live. This is how certificates will look for all users.</p>
          <button class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;margin-top:.5rem" onclick="previewCertFull()">🔍 Open Full Preview</button>
        </div></div>
      </div>`;

    // Render admin cert preview
    certPreview();
    // Wire up colour hex inputs
    document.getElementById('cr-bg1').oninput = function(){ document.getElementById('cr-bg1-hex').value=this.value; certPreview(); };
    document.getElementById('cr-bg2').oninput = function(){ document.getElementById('cr-bg2-hex').value=this.value; certPreview(); };

  // ── ANALYTICS ──
  } else if (tab==='analytics') {
    let allUsers=[], enrCount=0, compCount=0;
    try {
      allUsers = await sb.query('users');
      const enrs = await sb.query('enrollments');
      enrCount = enrs.length;
      compCount = enrs.filter(e=>e.completed).length;
    } catch(e){}
    const rate = enrCount>0?Math.round(compCount/enrCount*100):0;
    c.innerHTML=`
      <div class="section-hdr"><h2>Platform Analytics</h2></div>
      <div class="stats-grid" style="margin-bottom:1.75rem">
        <div class="stat-card"><div class="stat-label">Total Users</div><div class="stat-value">${allUsers.length}</div><div class="stat-change">${allUsers.filter(u=>u.status==='active').length} active</div></div>
        <div class="stat-card"><div class="stat-label">Total Courses</div><div class="stat-value">${allC().length}</div><div class="stat-change">${COURSES.filter(c=>c.cat==='Editorial').length} Editorial · ${COURSES.filter(c=>c.cat==='Sales').length} Sales</div></div>
        <div class="stat-card"><div class="stat-label">Total Enrollments</div><div class="stat-value">${enrCount}</div><div class="stat-change">Across all users</div></div>
        <div class="stat-card"><div class="stat-label">Completion Rate</div><div class="stat-value">${rate}%</div><div class="stat-change">${compCount} completions</div></div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.25rem">
        <div class="card"><div class="card-header"><h3>Courses by Category</h3></div><div class="card-body">
          ${['Editorial','Sales',...new Set(CUSTOM.map(c=>c.cat))].map(cat=>{ const count=allC().filter(c=>c.cat===cat).length; const pct=Math.round(count/allC().length*100); return `<div style="margin-bottom:.875rem"><div style="display:flex;justify-content:space-between;font-size:.82rem;margin-bottom:.3rem"><span style="font-weight:600">${cat}</span><span style="color:var(--muted)">${count} courses</span></div><div class="prog-track"><div class="prog-fill" style="width:${pct}%"></div></div></div>`; }).join('')}
        </div></div>
        <div class="card"><div class="card-header"><h3>User Overview</h3></div><div class="card-body">
          <div style="display:flex;flex-direction:column;gap:.75rem">
            ${[['Total Registered',allUsers.length],['Active Cadets',allUsers.filter(u=>u.role==='cadet'&&u.status==='active').length],['Pending Approval',allUsers.filter(u=>u.status==='pending').length],['Admins',allUsers.filter(u=>u.role==='admin').length],['Deactivated',allUsers.filter(u=>u.status==='inactive').length]].map(([l,v])=>`<div style="display:flex;justify-content:space-between;padding:.75rem;background:var(--paper);border-radius:8px"><span style="font-size:.82rem">${l}</span><strong>${v}</strong></div>`).join('')}
          </div>
        </div></div>
      </div>`;
  }
}

// ── USER MANAGEMENT ──
function showAddUserModal() { document.getElementById('add-user-modal').style.display='block'; document.getElementById('batch-invite-modal').style.display='none'; }
function showBatchInvite()  { document.getElementById('batch-invite-modal').style.display='block'; document.getElementById('add-user-modal').style.display='none'; }

async function addUser() {
  const name=document.getElementById('nu-name').value.trim();
  const email=document.getElementById('nu-email').value.trim().toLowerCase();
  const pass=document.getElementById('nu-pass').value;
  const role=document.getElementById('nu-role').value;
  if(!name||!email){ toast('Please fill in name and email','error'); return; }
  try {
    await sb.insert('users',{name,email,password:pass||'changeme',role,status:'active',enrolled:0,completed:0,joined:new Date().toISOString().slice(0,10)});
    toast('User "'+name+'" added!','success'); renderAC('users');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function approveUser(id,name) {
  try {
    await sb.update('users',{status:'active'},{id});
    updatePendingBadge();
    toast('✓ '+name+' approved!','success'); renderAC('users');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function rejectUser(id,name) {
  if(!confirm('Reject and remove "'+name+'"\'s registration request?')) return;
  try {
    await sb.delete('users',{id});
    updatePendingBadge();
    toast('Registration rejected.'); renderAC('users');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function changeUserRole(id,role) {
  try {
    await sb.update('users',{role},{id});
    toast('Role updated to '+role,'success');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function toggleUserStatus(id,currentStatus) {
  const newStatus=currentStatus==='active'?'inactive':'active';
  try {
    await sb.update('users',{status:newStatus},{id});
    renderAC('users'); toast('User '+(newStatus==='active'?'activated':'deactivated'));
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function resetUserPass(id,name) {
  const np=prompt('Set new password for '+name+':'); if(!np) return;
  try {
    await sb.update('users',{password:np},{id});
    toast('Password reset for "'+name+'"','success');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

async function saveBatchInvite() {
  const raw=document.getElementById('invite-emails').value;
  const emails=raw.split(/[\n,]+/).map(e=>e.trim().toLowerCase()).filter(e=>e.includes('@'));
  if(!emails.length){ toast('No valid emails found','error'); return; }
  let added=0;
  for(const email of emails) {
    try { await sb.upsert('invited_emails',{email}); added++; } catch(e){}
  }
  toast(added+' email'+(added!==1?'s':'')+' pre-approved!','success');
  renderAC('users');
}

// ── RESOURCE MANAGEMENT ──
let _editResIdx=null;
function showAddResource() { _editResIdx=null; document.getElementById('res-form-title').textContent='Add Resource'; ['rf-title','rf-url','rf-desc'].forEach(id=>document.getElementById(id).value=''); document.getElementById('rf-emoji').value='📄'; document.getElementById('rf-type').value='Guide'; document.getElementById('res-form').style.display='block'; }
function editResource(i) { _editResIdx=i; const r=RESOURCES[i]; document.getElementById('res-form-title').textContent='Edit Resource'; document.getElementById('rf-title').value=r.title; document.getElementById('rf-url').value=r.url; document.getElementById('rf-desc').value=r.desc; document.getElementById('rf-emoji').value=r.emoji; document.getElementById('rf-type').value=r.type; document.getElementById('res-form').style.display='block'; }
function saveResource() {
  const title=document.getElementById('rf-title').value.trim(); const url=document.getElementById('rf-url').value.trim();
  if(!title||!url){ toast('Please fill in title and URL','error'); return; }
  const r={title,url,emoji:document.getElementById('rf-emoji').value||'📄',type:document.getElementById('rf-type').value,desc:document.getElementById('rf-desc').value.trim()};
  if(_editResIdx!==null){ RESOURCES[_editResIdx]=r; toast('Resource updated!','success'); }
  else { RESOURCES.push(r); toast('Resource added!','success'); }
  renderRes(); document.getElementById('res-form').style.display='none'; renderAC('resources');
}
function deleteResource(i) { if(!confirm('Delete "'+RESOURCES[i].title+'"?')) return; RESOURCES.splice(i,1); renderRes(); renderAC('resources'); toast('Resource deleted'); }

// ── BRANDING ──
async function saveBranding() {
  BRAND.name           = document.getElementById('b-name')?.value           || BRAND.name;
  BRAND.tagline        = document.getElementById('b-tagline')?.value         || BRAND.tagline;
  BRAND.primaryColor   = document.getElementById('b-color')?.value           || BRAND.primaryColor;
  BRAND.sidebarColor   = document.getElementById('b-sidebar')?.value         || BRAND.sidebarColor;
  BRAND.fontFamily     = document.getElementById('b-font')?.value            || BRAND.fontFamily;
  BRAND.loginHeadline  = document.getElementById('b-login-headline')?.value  ?? BRAND.loginHeadline;
  BRAND.loginSubtext   = document.getElementById('b-login-subtext')?.value   ?? BRAND.loginSubtext;
  try {
    await sb.upsert('branding', {
      id: 1,
      name: BRAND.name,
      tagline: BRAND.tagline,
      primary_color: BRAND.primaryColor,
      sidebar_color: BRAND.sidebarColor,
      font_family: BRAND.fontFamily,
      logo_url: BRAND.logoUrl,
      favicon_url: BRAND.faviconUrl,
      login_headline: BRAND.loginHeadline,
      login_subtext: BRAND.loginSubtext,
    });
    applyBranding(); toast('Branding saved and applied!','success');
  } catch(e) { applyBranding(); toast('Applied locally (DB: '+e.message+')'); }
}
async function removeLogo() {
  BRAND.logoUrl=null;
  try { await sb.update('branding',{logo_url:null},{id:1}); } catch(e){}
  applyBranding(); renderAC('branding'); toast('Logo removed');
}
async function removeFavicon() {
  BRAND.faviconUrl=null;
  try { await sb.update('branding',{favicon_url:null},{id:1}); } catch(e){}
  applyBranding(); renderAC('branding'); toast('Favicon removed');
}
function handleLogoFile(e) {
  const f=e.target.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload=async evt=>{
    BRAND.logoUrl=evt.target.result;
    try{ await sb.update('branding',{logo_url:BRAND.logoUrl},{id:1}); }catch(ex){}
    applyBranding(); renderAC('branding'); toast('Logo uploaded!','success');
  };
  reader.readAsDataURL(f); e.target.value='';
}
function handleFaviconFile(e) {
  const f=e.target.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload=async evt=>{
    BRAND.faviconUrl=evt.target.result;
    try{ await sb.update('branding',{favicon_url:BRAND.faviconUrl},{id:1}); }catch(ex){}
    applyBranding(); renderAC('branding'); toast('Favicon uploaded!','success');
  };
  reader.readAsDataURL(f); e.target.value='';
}

// ── ANNOUNCEMENTS ──
async function sendAnnouncement() {
  const title=document.getElementById('ann-title').value.trim();
  const body=document.getElementById('ann-body').value.trim();
  if(!title||!body){ toast('Please enter a title and message','error'); return; }
  try {
    await sb.insert('announcements',{title,body});
    DB_ANNOUNCEMENTS = await sb.query('announcements',{order:'created_at.desc'});
    document.getElementById('ann-title').value=''; document.getElementById('ann-body').value='';
    toast('📢 Announcement sent!','success'); renderAC('announce'); renderDash();
  } catch(e){ toast('Error: '+e.message,'error'); }
}
async function deleteAnnouncement(id) {
  try {
    await sb.delete('announcements',{id});
    DB_ANNOUNCEMENTS=DB_ANNOUNCEMENTS.filter(a=>a.id!==id);
    renderAC('announce'); renderDash(); toast('Announcement deleted');
  } catch(e){ toast('Error: '+e.message,'error'); }
}

// ── VIDEO/IMAGE MANAGEMENT ──
function switchVT(cid,type,el){ document.getElementById('vtabs-'+cid).querySelectorAll('.vtab').forEach(t=>t.classList.remove('active')); el.classList.add('active'); ['file','gdrive','library'].forEach(t=>{const p=document.getElementById('vp-'+t+'-'+cid);if(p)p.style.display=t===type?'block':'none';}); }
let PVC=null;
function trigVid(cid){ PVC=cid; document.getElementById('vid-input').click(); }
function handleVidFile(e){ const f=e.target.files[0]; if(!f||!PVC)return; const url=URL.createObjectURL(f); VID_OVERRIDES[PVC]={type:'file',url}; const c=allC().find(x=>x.id===PVC); toast('Video uploaded for "'+c.title+'"!','success'); renderAC('videos'); e.target.value=''; }
async function saveGD(cid){ const url=(document.getElementById('gdi-'+cid)||{}).value; if(!url||!url.trim()){toast('Please enter a Google Drive link','error');return;} const clean=url.trim().replace('/view','/preview').replace('open?id=','file/d/').replace(/\/edit.*$/,'/preview'); VID_OVERRIDES[cid]={type:'gdrive',url:clean}; try{ await sb.upsert('video_overrides',{course_id:cid,url:clean,type:'gdrive'}); }catch(ex){} const c=allC().find(x=>x.id===cid); toast('Drive link saved for "'+c.title+'"!','success'); renderAC('videos'); }
async function useLib(cid,url,name){ VID_OVERRIDES[cid]={type:'gdrive',url}; try{ await sb.upsert('video_overrides',{course_id:cid,url,type:'gdrive'}); }catch(ex){} const c=allC().find(x=>x.id===cid); toast('"'+name+'" assigned to "'+c.title+'"!','success'); renderAC('videos'); }
async function rmVid(cid){ delete VID_OVERRIDES[cid]; try{ await sb.delete('video_overrides',{course_id:cid}); }catch(ex){} const c=allC().find(x=>x.id===cid); toast('Default video restored for "'+c.title+'"'); renderAC('videos'); }
let PIC=null;
function trigImg(cid){ PIC=cid; document.getElementById('img-input').click(); }
function handleImgFile(e){ const f=e.target.files[0]; if(!f||!PIC)return; const reader=new FileReader(); reader.onload=async evt=>{ IMG_OVERRIDES[PIC]=evt.target.result; try{ await sb.upsert('image_overrides',{course_id:PIC,url:evt.target.result}); }catch(ex){} const c=allC().find(x=>x.id===PIC); toast('Image uploaded for "'+c.title+'"!','success'); renderAC('videos'); renderCourses(); renderDash(); }; reader.readAsDataURL(f); e.target.value=''; }
async function rmImg(cid){ delete IMG_OVERRIDES[cid]; try{ await sb.delete('image_overrides',{course_id:cid}); }catch(ex){} const c=allC().find(x=>x.id===cid); toast('Image removed from "'+c.title+'"'); renderAC('videos'); renderCourses(); renderDash(); }

// ── CREATE COURSE ──
function addMod(){ const list=document.getElementById('mod-builder'); if(!list)return; const id=++MC; const d=document.createElement('div'); d.className='mbi'; d.id='mb-'+id; d.innerHTML=`<div class="mbh"><input type="text" placeholder="Module name" id="mn-${id}"><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('mb-${id}').remove()">✕</button></div><div class="sbl" id="ms-${id}"><div class="sbr"><input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button></div></div><div style="padding:.5rem .875rem;border-top:1px solid var(--border)"><button class="btn btn-secondary btn-sm" onclick="addStep(${id})">+ Add Step</button></div>`; list.appendChild(d); }
function addStep(mid){ const l=document.getElementById('ms-'+mid); if(!l)return; const d=document.createElement('div'); d.className='sbr'; d.innerHTML=`<input type="text" placeholder="Step title" class="sti"><button class="btn btn-danger btn-sm btn-icon" onclick="this.parentElement.remove()">✕</button>`; l.appendChild(d); }
function addQQ(){ const list=document.getElementById('qq-builder'); if(!list)return; const id=++QC; const d=document.createElement('div'); d.className='card mb-2'; d.id='qq-'+id; d.innerHTML=`<div class="card-header"><h3 style="font-size:.82rem">Question ${id}</h3><button class="btn btn-danger btn-sm btn-icon" onclick="document.getElementById('qq-${id}').remove()">✕</button></div><div class="card-body" style="padding:1rem"><div class="form-group"><label>Question text</label><input type="text" id="qqt-${id}" placeholder="Enter your question…"></div><div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-bottom:.75rem"><div class="form-group" style="margin:0"><label>Option A</label><input type="text" id="qqa-${id}"></div><div class="form-group" style="margin:0"><label>Option B</label><input type="text" id="qqb-${id}"></div><div class="form-group" style="margin:0"><label>Option C</label><input type="text" id="qqc-${id}"></div><div class="form-group" style="margin:0"><label>Option D</label><input type="text" id="qqd-${id}"></div></div><div class="form-group" style="margin:0"><label>Correct Answer</label><select id="qqs-${id}"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></div></div>`; list.appendChild(d); }
function createCourse(){ const title=(document.getElementById('nc-title')||{}).value||''; const cat=(document.getElementById('nc-ccat')||{}).value||(document.getElementById('nc-cat')||{}).value||''; const about=(document.getElementById('nc-about')||{}).value||''; if(!title.trim()||!cat.trim()||!about.trim()){toast('Please fill in Title, Category, and Description','error');return;} const emoji=(document.getElementById('nc-emoji')||{}).value||'📚'; const color=(document.getElementById('nc-color')||{}).value||'#2c3e50'; const dur=(document.getElementById('nc-dur')||{}).value||'~1 hr'; const modules=[]; let totalS=0; document.querySelectorAll('.mbi').forEach(mb=>{const inp=mb.querySelector('input[type="text"]'); const mname=inp?inp.value.trim():'Module'; const steps=[]; mb.querySelectorAll('.sti').forEach(i=>{if(i.value.trim())steps.push({t:i.value.trim(),d:''});}); if(steps.length){modules.push({name:mname,steps});totalS+=steps.length;}}); const quiz=[]; document.querySelectorAll('[id^="qqt-"]').forEach(el=>{const id=el.id.split('-')[1]; const q=el.value.trim(); const a=(document.getElementById('qqa-'+id)||{}).value||''; const b=(document.getElementById('qqb-'+id)||{}).value||''; const cv=(document.getElementById('qqc-'+id)||{}).value||''; const d2=(document.getElementById('qqd-'+id)||{}).value||''; const ans=parseInt((document.getElementById('qqs-'+id)||{}).value||'0'); const opts=[a,b,cv,d2].filter(Boolean); if(q&&opts.length>=2)quiz.push({q,opts,ans:Math.min(ans,opts.length-1)});}); const nid=Date.now(); CUSTOM.push({id:nid,title:title.trim(),cat:cat.trim(),emoji,color,about:about.trim(),steps:totalS||1,dur,rating:'New',badge:emoji,modules,quiz}); renderDash(); renderCourses(); if(document.getElementById('page-profile')?.classList.contains('active')) renderProfile(); toast('"'+title.trim()+'" course created!','success'); const vtab=document.querySelector('.admin-tab'); if(vtab)vtab.click(); resetForm(); }
function resetForm(){ ['nc-title','nc-about','nc-emoji','nc-dur','nc-ccat'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';}); const cat=document.getElementById('nc-cat'); if(cat)cat.value=''; const col=document.getElementById('nc-color'); if(col)col.value='#2c3e50'; const mb=document.getElementById('mod-builder'); if(mb)mb.innerHTML=''; const qb=document.getElementById('qq-builder'); if(qb)qb.innerHTML=''; MC=0; QC=0; addMod(); }

// ── COURSE EDIT / DELETE ──
function openEditCourse(id) {
  const course = allC().find(c => c.id === id);
  if (!course) return;

  // Remove existing modal if any
  const existing = document.getElementById('edit-course-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'edit-course-modal';
  modal.className = 'modal-overlay';
  modal.style.zIndex = '600';
  modal.innerHTML = `
    <div class="modal-box" style="max-width:700px">
      <div class="modal-header">
        <h3>✏️ Edit Course — ${course.title}</h3>
        <button class="modal-close" onclick="document.getElementById('edit-course-modal').remove()">✕</button>
      </div>
      <div class="modal-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem">
          <div class="form-group"><label>Course Title *</label><input type="text" id="ec-title" value="${course.title.replace(/"/g,'&quot;')}"></div>
          <div class="form-group"><label>Category</label>
            <select id="ec-cat">
              ${['Editorial','Sales','Digital','AI','Operations','Leadership'].map(cat=>`<option value="${cat}" ${course.cat===cat?'selected':''}>${cat}</option>`).join('')}
              ${!['Editorial','Sales','Digital','AI','Operations','Leadership'].includes(course.cat)?`<option value="${course.cat}" selected>${course.cat}</option>`:''}
            </select>
          </div>
          <div class="form-group"><label>Custom Category</label><input type="text" id="ec-ccat" value="" placeholder="Leave blank to use dropdown"></div>
          <div class="form-group"><label>Emoji</label><input type="text" id="ec-emoji" value="${course.emoji||'📚'}" maxlength="4"></div>
          <div class="form-group"><label>Colour</label><input type="color" id="ec-color" value="${course.color||'#2c3e50'}" style="height:38px;padding:3px 6px"></div>
          <div class="form-group"><label>Duration</label><input type="text" id="ec-dur" value="${course.dur||'~1 hr'}"></div>
        </div>
        <div class="form-group"><label>About / Description</label><textarea id="ec-about" style="min-height:100px">${course.about||''}</textarea></div>
        <div style="display:flex;gap:.75rem;margin-top:.5rem">
          <button class="btn btn-primary" onclick="saveEditCourse(${id})">Save Changes</button>
          <button class="btn btn-secondary" onclick="document.getElementById('edit-course-modal').remove()">Cancel</button>
          ${id > 1000 ? `<button class="btn btn-danger" style="margin-left:auto" onclick="deleteCourse(${id})">🗑 Delete Course</button>` : ''}
        </div>
        ${id <= 1000 ? '<p style="font-size:.72rem;color:var(--muted);margin-top:.75rem">Note: Built-in courses cannot be deleted to preserve data integrity. Only admin-created courses can be deleted.</p>' : ''}
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function saveEditCourse(id) {
  const course = allC().find(c => c.id === id);
  if (!course) return;
  const title  = document.getElementById('ec-title')?.value.trim();
  const cat    = document.getElementById('ec-ccat')?.value.trim() || document.getElementById('ec-cat')?.value;
  const emoji  = document.getElementById('ec-emoji')?.value || course.emoji;
  const color  = document.getElementById('ec-color')?.value || course.color;
  const dur    = document.getElementById('ec-dur')?.value || course.dur;
  const about  = document.getElementById('ec-about')?.value || course.about;
  if (!title) { toast('Title cannot be empty','error'); return; }
  course.title = title;
  course.cat   = cat;
  course.emoji = emoji;
  course.color = color;
  course.dur   = dur;
  course.about = about;
  document.getElementById('edit-course-modal').remove();
  renderCourses(); renderDash(); renderAC('videos');
  toast('Course "' + title + '" updated!','success');
}

function deleteCourse(id) {
  const course = allC().find(c => c.id === id);
  if (!course) return;
  if (id <= 1000) { toast('Built-in courses cannot be deleted.','error'); return; }
  if (!confirm('Delete "' + course.title + '"? This cannot be undone.')) return;
  const idx = CUSTOM.findIndex(c => c.id === id);
  if (idx > -1) CUSTOM.splice(idx, 1);
  const modal = document.getElementById('edit-course-modal');
  if (modal) modal.remove();
  renderCourses(); renderDash(); renderAC('videos');
  toast('Course deleted.','success');
}

// ── TOAST ──
function toast(msg,type='info') { const tc=document.getElementById('toasts'); const t=document.createElement('div'); t.className='toast '+type; t.innerHTML=`<span>${type==='success'?'✓':type==='error'?'✕':'ℹ'}</span><span>${msg}</span>`; tc.appendChild(t); setTimeout(()=>{t.style.animation='sIn .3s ease reverse';setTimeout(()=>t.remove(),280);},3500); }

// ── COURSE ORDER HELPERS ──
function updateOrderNumbers() {
  const list = document.getElementById('order-list');
  if (!list) return;
  [...list.children].forEach((el, i) => {
    const numEl = el.querySelector('[style*="font-weight:600"]');
    if (numEl) numEl.textContent = '#' + (i + 1);
  });
}

async function saveCourseOrder() {
  const list = document.getElementById('order-list');
  if (!list) return;
  COURSE_ORDER = [...list.children].map(el => Number(el.dataset.id));
  try {
    await sb.upsert('branding', { id:1, course_order: JSON.stringify(COURSE_ORDER) });
    toast('Course order saved!', 'success');
  } catch(e) { toast('Order saved locally (DB: ' + e.message + ')'); }
  renderCourses(); renderDash();
}

function resetCourseOrder() {
  COURSE_ORDER = [];
  const list = document.getElementById('order-list');
  if (!list) return;
  // Re-render in default order
  renderAC('order');
  toast('Order reset to default');
  renderCourses(); renderDash();
}

// ── BADGE HELPERS ──
async function saveAllBadges() {
  const courses = allC();
  courses.forEach(course => {
    const emoji = document.getElementById(`be-emoji-${course.id}`)?.value?.trim();
    const color = document.getElementById(`be-color-${course.id}`)?.value;
    const label = document.getElementById(`be-label-${course.id}`)?.value?.trim();
    if (emoji || color || label) {
      BADGE_OVERRIDES[course.id] = {
        emoji: emoji || course.emoji || '📚',
        color: color || course.color || '#c8a84b',
        label: label || course.title,
      };
    }
  });
  try {
    await sb.upsert('branding', { id:1, badge_overrides: JSON.stringify(BADGE_OVERRIDES) });
    toast('✓ All badges saved!', 'success');
  } catch(e) { toast('Badges saved locally (DB: ' + e.message + ')'); }
  // Refresh profile if open
  if (document.getElementById('page-profile')?.classList.contains('active')) renderProfile();
}

// ── BADGE DELETE ──
async function deleteBadgeOverride(cid) {
  delete BADGE_OVERRIDES[cid];
  try {
    await sb.upsert('branding', { id:1, badge_overrides: JSON.stringify(BADGE_OVERRIDES) });
    toast('Badge reset to default', 'success');
  } catch(e) { toast('Reset locally'); }
  renderAC('badges');
  if (document.getElementById('page-profile')?.classList.contains('active')) renderProfile();
}

// ── QUIZ EDITOR ──
function renderQuizEditor() {
  const sel = document.getElementById('quiz-course-select');
  if (!sel) return;
  const cid = Number(sel.value);
  const course = allC().find(c => Number(c.id) === cid);
  const container = document.getElementById('quiz-editor-body');
  if (!container) return;
  if (!course || !course.quiz || !course.quiz.length) {
    container.innerHTML = '<p style="color:var(--muted);padding:1rem">Select a course above to edit its quiz.</p>';
    return;
  }
  container.innerHTML = course.quiz.map((q, qi) => `
    <div class="card" style="margin-bottom:.875rem">
      <div class="card-body">
        <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem">
          <div style="font-size:.78rem;font-weight:700;color:var(--muted);flex-shrink:0">Q${qi+1}</div>
          <input type="text" id="qq-text-${qi}" value="${q.q.replace(/"/g,'&quot;').replace(/'/g,'&#39;')}"
            style="flex:1;font-weight:600" placeholder="Question text">
        </div>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          ${q.opts.map((opt, oi) => `
            <label style="display:flex;align-items:center;gap:.6rem;cursor:pointer;padding:.4rem .5rem;border-radius:6px;border:1px solid ${q.ans===oi?'var(--gold)':'var(--border)'};background:${q.ans===oi?'#fffbf0':'#fff'}" id="qq-opt-row-${qi}-${oi}">
              <input type="radio" name="qq-ans-${qi}" value="${oi}" ${q.ans===oi?'checked':''}
                style="accent-color:var(--gold);cursor:pointer;width:16px;height:16px;flex-shrink:0"
                onchange="highlightCorrect(${qi})">
              <span style="font-size:.72rem;font-weight:700;color:var(--muted);flex-shrink:0">${String.fromCharCode(65+oi)}</span>
              <input type="text" id="qq-opt-${qi}-${oi}" value="${opt.replace(/"/g,'&quot;').replace(/'/g,'&#39;')}"
                style="flex:1;border:none;outline:none;background:transparent;font-size:.875rem"
                placeholder="Option ${String.fromCharCode(65+oi)}">
            </label>`).join('')}
        </div>
        <div style="font-size:.7rem;color:var(--muted);margin-top:.5rem">🟡 Click a radio button to set the correct answer (highlighted in gold)</div>
      </div>
    </div>`).join('');
}

function highlightCorrect(qi) {
  const checked = document.querySelector(`input[name="qq-ans-${qi}"]:checked`);
  if (!checked) return;
  const selOi = parseInt(checked.value);
  document.querySelectorAll(`[id^="qq-opt-row-${qi}-"]`).forEach(row => {
    const oi = parseInt(row.id.split('-').pop());
    row.style.borderColor = oi === selOi ? 'var(--gold)' : 'var(--border)';
    row.style.background  = oi === selOi ? '#fffbf0' : '#fff';
  });
}

async function saveQuizEdits() {
  const sel = document.getElementById('quiz-course-select');
  if (!sel || !sel.value) { toast('Select a course first', 'error'); return; }
  const cid = Number(sel.value);
  let course = COURSES.find(c => Number(c.id) === cid) || CUSTOM.find(c => Number(c.id) === cid);
  if (!course) { toast('Course not found', 'error'); return; }
  course.quiz = course.quiz.map((q, qi) => ({
    q:    document.getElementById(`qq-text-${qi}`)?.value?.trim() || q.q,
    opts: q.opts.map((orig, oi) => document.getElementById(`qq-opt-${qi}-${oi}`)?.value?.trim() || orig),
    ans:  parseInt(document.querySelector(`input[name="qq-ans-${qi}"]:checked`)?.value ?? q.ans),
  }));
  toast('✓ Quiz saved!', 'success');
}

function certPreview() {
  const el = document.getElementById('cert-admin-preview');
  if (!el) return;
  const cr = {
    headerText:  document.getElementById('cr-header')?.value   ?? BRAND.cert.headerText,
    titleText:   document.getElementById('cr-title')?.value    ?? BRAND.cert.titleText,
    bodyText:    document.getElementById('cr-body')?.value     ?? BRAND.cert.bodyText,
    subText:     document.getElementById('cr-sub')?.value      ?? BRAND.cert.subText,
    footerNote:  document.getElementById('cr-footer')?.value   ?? BRAND.cert.footerNote,
    sig1Name:    document.getElementById('cr-sig1n')?.value    ?? BRAND.cert.sig1Name,
    sig1Role:    document.getElementById('cr-sig1r')?.value    ?? BRAND.cert.sig1Role,
    sig2Name:    document.getElementById('cr-sig2n')?.value    ?? BRAND.cert.sig2Name,
    sig2Role:    document.getElementById('cr-sig2r')?.value    ?? BRAND.cert.sig2Role,
    accentColor: document.getElementById('cr-accent')?.value   ?? BRAND.cert.accentColor,
    bgFrom:      document.getElementById('cr-bg1')?.value      ?? BRAND.cert.bgFrom,
    bgTo:        document.getElementById('cr-bg2')?.value      ?? BRAND.cert.bgTo,
    showBorder:  document.getElementById('cr-border')?.checked ?? BRAND.cert.showBorder,
    logoUrl:     BRAND.cert.logoUrl,
  };
  const logoHtml = (cr.logoUrl || BRAND.logoUrl)
    ? `<img src="${cr.logoUrl||BRAND.logoUrl}" style="height:32px;object-fit:contain;margin-bottom:.5rem" alt="logo">`
    : '';
  el.style.background = `linear-gradient(135deg,${cr.bgFrom},${cr.bgTo})`;
  el.style.borderColor = cr.accentColor;
  el.innerHTML = `
    ${cr.showBorder?`<div style="position:absolute;inset:8px;border:1px solid ${cr.accentColor}40;border-radius:7px;pointer-events:none"></div>`:''}
    ${logoHtml}
    <div style="font-size:.72rem;font-weight:800;color:${cr.accentColor};text-transform:uppercase;letter-spacing:.1em;margin-bottom:.6rem">${cr.headerText}</div>
    <div style="font-size:.55rem;text-transform:uppercase;letter-spacing:.15em;color:#6b7280;margin-bottom:.2rem">${cr.titleText}</div>
    <div style="font-size:.65rem;color:#6b7280;margin-bottom:.5rem">${cr.bodyText}</div>
    <div style="font-size:1rem;font-weight:800;margin-bottom:.2rem">Recipient Name</div>
    <div style="font-size:.65rem;color:#6b7280;margin-bottom:.5rem">${cr.subText}</div>
    <div style="font-size:.82rem;font-weight:800;color:${cr.accentColor};border-bottom:1.5px solid ${cr.accentColor}40;padding-bottom:.4rem;margin-bottom:.6rem">Course Title</div>
    <div style="font-size:.6rem;color:#6b7280;margin-bottom:.875rem">${cr.footerNote}</div>
    <div style="display:flex;justify-content:space-between;border-top:1px solid #e5e3dc;padding-top:.6rem;font-size:.55rem;color:#6b7280">
      <div style="text-align:center"><div style="font-style:italic;font-weight:600;font-size:.62rem">${cr.sig1Name}</div><div style="width:60px;height:1px;background:#0a0a0f;margin:.3rem auto .15rem"></div><div>${cr.sig1Role}</div></div>
      <div style="text-align:center"><div style="font-size:1.1rem">🏅</div><div style="margin-top:.1rem">${new Date().toLocaleDateString('en-ZA',{year:'numeric',month:'short',day:'numeric'})}</div></div>
      <div style="text-align:center"><div style="font-style:italic;font-weight:600;font-size:.62rem">${cr.sig2Name}</div><div style="width:60px;height:1px;background:#0a0a0f;margin:.3rem auto .15rem"></div><div>${cr.sig2Role}</div></div>
    </div>`;
}

async function saveCertConfig() {
  BRAND.cert = {
    headerText:  document.getElementById('cr-header')?.value   || BRAND.cert.headerText,
    titleText:   document.getElementById('cr-title')?.value    || BRAND.cert.titleText,
    bodyText:    document.getElementById('cr-body')?.value     || BRAND.cert.bodyText,
    subText:     document.getElementById('cr-sub')?.value      || BRAND.cert.subText,
    footerNote:  document.getElementById('cr-footer')?.value   || BRAND.cert.footerNote,
    sig1Name:    document.getElementById('cr-sig1n')?.value    || BRAND.cert.sig1Name,
    sig1Role:    document.getElementById('cr-sig1r')?.value    || BRAND.cert.sig1Role,
    sig2Name:    document.getElementById('cr-sig2n')?.value    || BRAND.cert.sig2Name,
    sig2Role:    document.getElementById('cr-sig2r')?.value    || BRAND.cert.sig2Role,
    accentColor: document.getElementById('cr-accent')?.value   || BRAND.cert.accentColor,
    bgFrom:      document.getElementById('cr-bg1')?.value      || BRAND.cert.bgFrom,
    bgTo:        document.getElementById('cr-bg2')?.value      || BRAND.cert.bgTo,
    showBorder:  document.getElementById('cr-border')?.checked ?? BRAND.cert.showBorder,
    logoUrl:     BRAND.cert.logoUrl,
  };
  try {
    await sb.upsert('branding', { id:1, cert_config: JSON.stringify(BRAND.cert) });
    toast('✓ Certificate design saved — all users will see this style!', 'success');
  } catch(e) {
    toast('DB Error: ' + e.message + ' — run the cert_config SQL patch in Supabase', 'error');
    console.error('saveCertConfig error:', e);
  }
}

function removeCertLogo() { BRAND.cert.logoUrl=null; renderAC('certificate'); toast('Certificate logo removed'); }

function handleCertLogoFile(e) {
  const f=e.target.files[0]; if(!f) return;
  const reader=new FileReader();
  reader.onload=evt=>{ BRAND.cert.logoUrl=evt.target.result; renderAC('certificate'); toast('Certificate logo uploaded!','success'); };
  reader.readAsDataURL(f); e.target.value='';
}

function previewCertFull() {
  const c = allC()[0];
  renderCertPreview(c ? c.title : 'Sample Course Title', U.name);
  document.getElementById('cert-modal').classList.remove('hidden');
}

// ── RESPONSIVE ──
function chkMob(){ document.getElementById('menu-btn').style.display=window.innerWidth<=768?'flex':'none'; }
window.addEventListener('resize',chkMob); chkMob();
