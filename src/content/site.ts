/* =========================================================================
   FORTIVEX CRM — SITE CONTENT
   -------------------------------------------------------------------------
   Everything a non-developer needs to change lives in this one file:
   company details, stats, pricing, testimonials, FAQs, links.
   ⚠️  PLACEHOLDER values are marked with  // TODO  — swap in real numbers
       before going live.
   ========================================================================= */

/* ---------------------------------------------------------------------
   URLs come from environment variables so the same build works in dev,
   staging and production. Set them in .env.local (see .env.example):

     NEXT_PUBLIC_SITE_URL   where THIS marketing site is served
     NEXT_PUBLIC_APP_URL    where the CRM app is served (login / signup)

   Fallbacks below are used when the variables are not set.
   --------------------------------------------------------------------- */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://fortivex.ai").replace(/\/$/, "");
const APP_URL = (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3002").replace(/\/$/, "");

/** Bare host of the CRM app, e.g. "app.fortivex.ai" — shown in product mockups. */
export const appHost = APP_URL.replace(/^https?:\/\//, "");

export const company = {
  name: "Fortivex.AI",
  product: "Fortivex CRM",
  tagline: "Intelligence. Automated. Empowered.",
  // TODO: replace with your real contact details
  email: "hello@fortivex.ai",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address: "Bengaluru, Karnataka, India",
  siteUrl: SITE_URL,
  appUrl: APP_URL,
  appHost,
  loginUrl: `${APP_URL}/login`,
  signupUrl: `${APP_URL}/signup`,
  social: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const announcement = {
  text: "Fortivex AI Counsellor is live — auto-qualify every enquiry in under 60 seconds.",
  linkLabel: "See what's new",
  href: "#platform",
};

export const nav = [
  { label: "Platform", href: "#platform" },
  { label: "Lifecycle", href: "#lifecycle" },
  { label: "Modules", href: "#modules" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Admissions & Student Lifecycle CRM",
  headline: ["Every enquiry, from", "first call to final placement."],
  sub: "Fortivex CRM unifies lead capture, counsellor follow-ups, applications, admissions, batches, fees and placements in one AI-assisted platform — built for institutes that refuse to lose a single enquiry.",
  primaryCta: "Book a live demo",
  secondaryCta: "Explore the platform",
  microProof: "Free 14-day trial · No credit card · Onboarding in 48 hours",
};

// TODO: replace with audited numbers before publishing
export const stats = [
  { value: "700+", label: "Institutes & academies" },
  { value: "6,000+", label: "Counsellors on platform" },
  { value: "2.5L", label: "Enquiries handled daily" },
  { value: "31%", label: "Average lift in admissions" },
];

export const problem = {
  eyebrow: "The leak",
  headline: "Enquiries don't go cold. They get dropped.",
  sub: "Most institutes run admissions on five disconnected tools. Fortivex replaces all of them with one system of record.",
  before: [
    "Enquiries buried in WhatsApp, IndiaMART and spreadsheets",
    "Counsellors chasing follow-ups from memory and sticky notes",
    "No owner visibility until the monthly review meeting",
    "Fee collection and batch allocation living in separate files",
    "Placement and alumni data lost the day a student graduates",
  ],
  after: [
    "Every enquiry auto-captured, deduped and routed in seconds",
    "AI-scheduled follow-ups with call, WhatsApp and email in one thread",
    "Live pipeline, targets and team performance on one dashboard",
    "Applications, admissions, batches and fees on a single timeline",
    "Placement tracking and alumni records that compound year on year",
  ],
};

export const lifecycle = [
  { step: "01", title: "Enquiry", desc: "Auto-capture from web forms, WhatsApp, IndiaMART, JustDial, walk-ins and bulk uploads. Deduped and assigned instantly." },
  { step: "02", title: "Engagement", desc: "Calls, WhatsApp, email and visits logged on one timeline. AI drafts the next best message for the counsellor." },
  { step: "03", title: "Application", desc: "Draft, submitted, under review, documents pending, approved — every stage tracked with SLA timers." },
  { step: "04", title: "Admission", desc: "Convert to student, allocate batch and trainer, and trigger the fee schedule in a single action." },
  { step: "05", title: "Delivery", desc: "Attendance, assessments, certificates and internships tracked against every enrolled student." },
  { step: "06", title: "Placement", desc: "Placement pipeline, offers and alumni records — the outcome data that sells your next batch." },
];

export const features = [
  {
    icon: "Radar",
    title: "Lead intelligence",
    desc: "Multi-source capture with automatic dedupe, distribution rules, segments and Do-Not-Track compliance built in.",
    points: ["Auto-capture & dedupe", "Round-robin distribution", "Segments & smart lists", "Bulk upload with mapping"],
  },
  {
    icon: "MessagesSquare",
    title: "Unified conversations",
    desc: "Team inbox, lead inbox, broadcasts, tickets and an AI chatbot that qualifies enquiries while your team sleeps.",
    points: ["Team & lead inbox", "WhatsApp broadcasts", "AI chatbot qualification", "Auto-messaging sequences"],
  },
  {
    icon: "PhoneCall",
    title: "Calling & engagement",
    desc: "Every call, video call, message and campus visit recorded against the lead with duration, outcome and recording.",
    points: ["Call logging & recordings", "Video call scheduling", "Visit tracking", "Engagement timeline"],
  },
  {
    icon: "GraduationCap",
    title: "Admissions & students",
    desc: "Applications through to alumni: batch allocation, attendance, assessments, certificates, internships and placements.",
    points: ["Application stages", "Batch & trainer allocation", "Attendance & assessments", "Placement & alumni"],
  },
  {
    icon: "Wallet",
    title: "Fees & revenue",
    desc: "Deals, quotes, payment schedules and collection reporting so finance and admissions finally see the same number.",
    points: ["Fee schedules", "Payments & quotes", "Collection reports", "Revenue analytics"],
  },
  {
    icon: "Sparkles",
    title: "AI & automation",
    desc: "Workflow automation, AI summaries and next-best-action nudges that keep counsellors on the enquiries most likely to close.",
    points: ["Workflow automation", "AI lead scoring", "Smart follow-up nudges", "Auto reminders & SLAs"],
  },
];

export const modules = [
  { group: "Acquire", items: ["Leads", "Follow-ups", "Distribution", "Segments & Lists", "Uploads", "Campaigns", "Social"] },
  { group: "Engage", items: ["Team Inbox", "Lead Inbox", "AI Chatbot", "Broadcasts", "Auto Messaging", "Tickets", "Email Hub", "WhatsApp Hub", "Calls", "Video Calls", "Visits"] },
  { group: "Convert", items: ["Applications", "Opportunities", "Deals", "Quotes", "Payments", "Targets", "Pipeline"] },
  { group: "Deliver", items: ["Students", "Admissions", "Batch Allocation", "Attendance", "Assessments", "Certificates", "Internship", "Placement Tracking", "Alumni"] },
  { group: "Operate", items: ["Tasks & Reminders", "Calendar", "Documents", "Automation", "Roles & Permissions", "Custom Properties", "Organization"] },
  { group: "Measure", items: ["Dashboard Analytics", "Lead Reports", "Admission Reports", "Student Reports", "Payment Reports", "Attendance Reports", "Trainer Reports", "Placement Reports", "Revenue Reports", "Custom Reports"] },
];

export const roles = [
  {
    name: "Admin",
    title: "See the whole organisation",
    desc: "Org-wide analytics, user management, roles, permissions and customisation — every campus on one screen.",
    metrics: ["Org-wide pipeline", "Team performance", "Revenue & collections"],
  },
  {
    name: "Counsellor",
    title: "Work one focused list",
    desc: "A daily worklist instead of a dashboard: my leads, today's follow-ups, my calendar and my admissions.",
    metrics: ["My leads", "Today's follow-ups", "My admissions"],
  },
  {
    name: "Sales Manager",
    title: "Coach on real activity",
    desc: "Team pipeline, targets and lead distribution, backed by counsellor-level call and follow-up metrics.",
    metrics: ["Team pipeline", "Targets vs actual", "Activity metrics"],
  },
  {
    name: "Marketing",
    title: "Prove which channel pays",
    desc: "Source performance, campaign ROI, broadcasts and lead quality — measured to admission, not to click.",
    metrics: ["Source report", "Campaign ROI", "Lead quality by source"],
  },
];

export const integrations = [
  "WhatsApp Business", "Meta Lead Ads", "Google Ads", "IndiaMART", "JustDial", "Website Forms",
  "Gmail", "Outlook", "Google Calendar", "Razorpay", "Tally", "Zoom", "Google Sheets",
  "Truecaller", "SMS Gateways", "Zapier", "REST API & Webhooks",
];

// TODO: replace with real, attributable customer quotes
export const testimonials = [
  {
    quote: "We were losing a third of our enquiries between the ad click and the first call. Fortivex closed that gap in a fortnight — first response is now under two minutes.",
    name: "Priya Menon",
    role: "Director of Admissions",
    org: "Skillbridge Academy, Kochi",
  },
  {
    quote: "The counsellors stopped arguing about who owns which lead. Distribution rules did it. Our admission conversion moved from 11% to 17% in one intake cycle.",
    name: "Rahul Deshpande",
    role: "Head of Growth",
    org: "NextGen Institute, Pune",
  },
  {
    quote: "Fees, batches and placement records finally live in the same place as the enquiry. Month-end reporting went from four days to one afternoon.",
    name: "Anitha Rao",
    role: "Operations Lead",
    org: "Vertex Training Group, Hyderabad",
  },
];

// TODO: confirm final pricing with your commercial team
export const pricing = {
  note: "Prices in INR, per user per month. Annual billing shown — monthly billing is 20% higher.",
  plans: [
    {
      name: "Starter",
      priceMonthly: 1249,
      priceAnnual: 999,
      blurb: "For single-centre institutes getting admissions off spreadsheets.",
      features: [
        "Up to 5 users",
        "Lead capture, follow-ups & pipeline",
        "WhatsApp & email inbox",
        "Applications & admissions",
        "Standard reports",
        "Email support",
      ],
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Growth",
      priceMonthly: 2499,
      priceAnnual: 1999,
      blurb: "For multi-counsellor teams running targets and campaigns.",
      features: [
        "Up to 50 users",
        "Everything in Starter",
        "Call logging & recordings",
        "Broadcasts, campaigns & automation",
        "Batches, attendance & fees",
        "Targets, team performance & custom reports",
        "Priority support + onboarding",
      ],
      cta: "Start free trial",
      featured: true,
    },
    {
      name: "Enterprise",
      priceMonthly: null,
      priceAnnual: null,
      blurb: "For groups and multi-campus networks with custom governance.",
      features: [
        "Unlimited users & campuses",
        "Everything in Growth",
        "AI chatbot & advanced automation",
        "Custom roles, properties & workflows",
        "Placement, internship & alumni suite",
        "API access, SSO & audit logs",
        "Dedicated success manager & SLA",
      ],
      cta: "Talk to sales",
      featured: false,
    },
  ],
};

export const faqs = [
  {
    q: "Is Fortivex built specifically for education?",
    a: "Yes. Fortivex is an admissions-first CRM. The data model understands enquiries, applications, admissions, batches, trainers, fee schedules, attendance, placements and alumni out of the box — you are not bending a generic sales CRM into shape.",
  },
  {
    q: "How long does implementation take?",
    a: "Most single-campus institutes are live within 48 hours: import your existing leads, map your enquiry sources, set up counsellor roles and distribution rules. Multi-campus rollouts with custom workflows typically take two to three weeks.",
  },
  {
    q: "Can we migrate our existing data?",
    a: "Yes. Bulk upload with column mapping handles leads, students and fee records from spreadsheets or your current CRM. Our team runs the first import with you and validates the results before go-live.",
  },
  {
    q: "Does it work with WhatsApp?",
    a: "Fortivex includes a WhatsApp hub with a shared team inbox, broadcasts, template messages and auto-messaging sequences. Conversations are logged against the lead so nothing lives on a personal phone.",
  },
  {
    q: "How do roles and permissions work?",
    a: "Every user gets a role-shaped workspace — Admin, Counsellor, Sales Manager, Marketing or Member — with granular permissions on modules, fields and records. Counsellors see their worklist; owners see everything.",
  },
  {
    q: "Where is our data stored?",
    a: "Data is stored in encrypted form with role-based access control, full audit logging and configurable Do-Not-Track handling for compliance with Indian telecom and data-protection requirements.",
  },
];

export const footer = {
  columns: [
    {
      title: "Platform",
      links: [
        { label: "Lead intelligence", href: "#platform" },
        { label: "Conversations", href: "#platform" },
        { label: "Admissions", href: "#lifecycle" },
        { label: "Fees & revenue", href: "#platform" },
        { label: "Reports & analytics", href: "#modules" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Coaching institutes", href: "#lifecycle" },
        { label: "Skill & IT training", href: "#lifecycle" },
        { label: "Colleges & universities", href: "#lifecycle" },
        { label: "Ed-tech companies", href: "#lifecycle" },
        { label: "Multi-campus groups", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Book a demo", href: "#demo" },
        { label: "Contact", href: "#demo" },
      ],
    },
  ],
  legal: ["Privacy Policy", "Terms of Service", "Data Processing", "Security"],
};
