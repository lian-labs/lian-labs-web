import { type Region, SITE_REGION } from "./regions";

/**
 * Everything that differs between the global and the Ethiopia edition lives
 * here, so the page components stay identical and only the copy changes.
 */

export type ServiceItem = {
  tag: string;
  title: string;
  body: string;
  points: readonly string[];
};

export type Edition = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    first: string;
    second: string;
    lead: string;
    metrics: readonly { value: string; label: string }[];
  };
  services: {
    meta: string;
    first: string;
    second: string;
    lead: string;
    items: readonly ServiceItem[];
  };
  reach: { first: string; second: string; lead: string };
  why: readonly { title: string; body: string }[];
  process: readonly { title: string; when: string; body: string }[];
  statement: string;
  faq: readonly { question: string; answer: string }[];
  cta: { first: string; second: string; lead: string; fine: string };
};

const PROCESS = [
  {
    title: "Discovery",
    when: "Week 1",
    body: "We learn the business problem, the users and the constraints, then agree on scope, milestones and a fixed plan.",
  },
  {
    title: "Design",
    when: "Weeks 1–3",
    body: "Flows, wireframes and a clickable prototype, so you see the product before a line of production code is written.",
  },
  {
    title: "Build",
    when: "Every sprint",
    body: "Two-week sprints with a working demo at the end of each one. You see progress, not status reports.",
  },
  {
    title: "Launch & support",
    when: "After go-live",
    body: "We deploy, monitor and hand over documentation, then stay on for support, fixes and the next version.",
  },
] as const;

const world: Edition = {
  meta: {
    title: "Lian Labs | Software Studio from Ethiopia for the World",
    description:
      "Lian Labs designs and builds web platforms, mobile apps and AI products for startups and companies worldwide, from our engineering base in Addis Ababa.",
  },
  hero: {
    eyebrow: "Software studio · Addis Ababa → worldwide",
    first: "We design and build software",
    second: "for teams around the world.",
    lead: "Lian Labs is a product engineering studio based in Ethiopia. We take ideas from first sketch to production: web platforms, mobile apps and AI-powered products, built by a senior team that works your hours.",
    metrics: [
      { value: "18+", label: "Projects delivered" },
      { value: "5+", label: "Countries served" },
      { value: "UTC+3", label: "Overlap with Europe & US East" },
    ],
  },
  services: {
    meta: "What we do",
    first: "End-to-end product engineering.",
    second: "One team, idea to launch.",
    lead: "Bring us a product to build, a platform to rebuild or a team to extend. We cover design, engineering and delivery.",
    items: [
      {
        tag: "Build",
        title: "Custom software & SaaS",
        body: "Web platforms, SaaS products, dashboards and internal tools, built to scale from the first user.",
        points: ["Next.js, React, Node.js, Python", "Multi-tenant SaaS & billing"],
      },
      {
        tag: "Mobile",
        title: "Mobile app development",
        body: "Native-feeling iOS and Android apps from one codebase, shipped to the App Store and Google Play.",
        points: ["Flutter & React Native", "Offline-first, push, payments"],
      },
      {
        tag: "AI",
        title: "AI integration",
        body: "Assistants, document processing, search and automation built on modern LLMs and wired into your product.",
        points: ["LLM features & agents", "RAG over your own data"],
      },
      {
        tag: "Design",
        title: "Product & UX design",
        body: "Research, flows, wireframes and polished interfaces, designed together with the people who build them.",
        points: ["Prototypes in week one", "Design systems"],
      },
      {
        tag: "Cloud",
        title: "Cloud & DevOps",
        body: "Infrastructure, CI/CD, monitoring and cost control on AWS, GCP and Vercel, so releases stay boring.",
        points: ["Infrastructure as code", "Automated deploys & alerts"],
      },
      {
        tag: "Teams",
        title: "Dedicated developers",
        body: "Need hands rather than a project? Add pre-vetted senior engineers to your own team, inside your tools.",
        points: ["Shortlist in 48 hours", "14-day risk-free trial"],
      },
    ],
  },
  reach: {
    first: "Built in Addis Ababa.",
    second: "Shipped across continents.",
    lead: "We have delivered software for startups, agencies and companies in North America, Europe and Africa.",
  },
  why: [
    {
      title: "Senior team, no hand-offs",
      body: "The engineers who scope your project are the ones who build it. No bait-and-switch, no junior back office.",
    },
    {
      title: "You own everything",
      body: "Code lives in your repository from day one. 100% of the IP is yours, with no licensing fees or lock-in.",
    },
    {
      title: "Weekly visibility",
      body: "A working demo every sprint and a shared board you can check any day. You always know where things stand.",
    },
    {
      title: "Partners after launch",
      body: "We stay for support, monitoring and the next release. Most of our clients come back for version two.",
    },
  ],
  process: PROCESS,
  statement:
    "World-class software, *built in Ethiopia*, for *teams everywhere*.",
  faq: [
    {
      question: "What kind of projects do you take on?",
      answer:
        "Web platforms, SaaS products, mobile apps, AI features and internal tools. We work with early-stage startups building a first version as well as established companies extending an existing product.",
    },
    {
      question: "How do you work with clients outside Ethiopia?",
      answer:
        "Remotely, in your tools. Ethiopia is UTC+3, which gives a full working-day overlap with Europe and a morning overlap with the US East Coast. We join your Slack, GitHub and planning tools and demo progress every sprint.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "A focused MVP usually takes 6 to 12 weeks. Larger platforms are planned in milestones, each with a working release. We agree on scope and timeline before work starts.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. Everything is built in your repositories and accounts, and all intellectual property is assigned to you. We sign an NDA before you share anything confidential.",
    },
    {
      question: "Do you offer support after launch?",
      answer:
        "Yes. Every project includes a warranty period for fixes, and most clients keep us on a monthly support and improvement plan after launch.",
    },
    {
      question: "Can we just hire developers for our own team?",
      answer:
        "Yes. Alongside project work we place dedicated senior developers inside client teams on flexible monthly terms, with a 14-day risk-free trial.",
    },
  ],
  cta: {
    first: "Have a product in mind?",
    second: "Let's build it together.",
    lead: "Tell us what you are building. We will reply within one business day with questions, an approach and a rough plan.",
    fine: "A free 30-minute consultation with no obligation.",
  },
};

const et: Edition = {
  meta: {
    title: "Lian Labs Ethiopia | Software Development Company in Addis Ababa",
    description:
      "Lian Labs builds business software, websites, mobile apps and payment integrations for Ethiopian companies, schools and organisations, to the standard we deliver for international clients.",
  },
  hero: {
    eyebrow: "Software company · Addis Ababa",
    first: "Software for Ethiopian businesses,",
    second: "built to a global standard.",
    lead: "Lian Labs builds the systems that run your organisation: business software, websites, mobile apps and integrations with Telebirr, Chapa and local banks. The same team that ships products for clients in the US and Europe, right here in Addis.",
    metrics: [
      { value: "18+", label: "Projects delivered" },
      { value: "5+", label: "Countries served" },
      { value: "Local", label: "Team & support in Addis Ababa" },
    ],
  },
  services: {
    meta: "What we do",
    first: "Digital systems for",
    second: "how Ethiopia does business.",
    lead: "From a company website to a full operations platform, we design, build, host and support software that fits local payments, local workflows and local users.",
    items: [
      {
        tag: "Business",
        title: "Custom business software",
        body: "Inventory, sales, HR, finance and operations systems shaped around how your company actually works.",
        points: ["Replace spreadsheets & paper", "Reports for management"],
      },
      {
        tag: "Web",
        title: "Websites & web platforms",
        body: "Fast, professional websites and portals for companies, NGOs and government programs, ready for search and mobile.",
        points: ["Corporate sites & portals", "Booking & e-commerce"],
      },
      {
        tag: "Mobile",
        title: "Mobile apps",
        body: "Android and iOS apps for your customers or field teams, designed for local networks and devices.",
        points: ["Works on low bandwidth", "English & Amharic ready"],
      },
      {
        tag: "Payments",
        title: "Payment & SMS integration",
        body: "Accept payments and reach customers through the channels Ethiopians use every day.",
        points: ["Telebirr, Chapa, bank APIs", "SMS notifications & OTP"],
      },
      {
        tag: "Education",
        title: "School management",
        body: "Lian SMS runs admissions, attendance, grades and parent communication for schools, hosted and supported locally.",
        points: ["Set up in weeks", "Training for staff"],
      },
      {
        tag: "AI",
        title: "AI & automation",
        body: "Chatbots, document processing and workflow automation, plus practical AI training for your team.",
        points: ["Customer service bots", "Staff AI workshops"],
      },
    ],
  },
  reach: {
    first: "Proven with international clients.",
    second: "Now building for home.",
    lead: "We have shipped software for companies in the United States, Europe and beyond. Ethiopian organisations get the same engineering standard, with a team they can meet in person.",
  },
  why: [
    {
      title: "International standard",
      body: "Our engineers build for clients abroad every day. You get the same code quality, security and process.",
    },
    {
      title: "Built for local realities",
      body: "Local payment rails, Amharic interfaces, variable connectivity and the way Ethiopian teams work.",
    },
    {
      title: "Support you can reach",
      body: "A team in Addis Ababa that answers the phone, visits your office and trains your staff.",
    },
    {
      title: "Yours to keep",
      body: "You own the system and the data. No hidden licence fees, and full documentation at handover.",
    },
  ],
  process: PROCESS,
  statement:
    "Ethiopian businesses deserve *world-class software*. We build it *right here in Addis*.",
  faq: [
    {
      question: "What kinds of organisations do you work with?",
      answer:
        "Private companies, schools, NGOs, startups and public-sector programs. If your organisation runs on paper, spreadsheets or disconnected tools, we can help.",
    },
    {
      question: "Can you integrate with Telebirr, Chapa or local banks?",
      answer:
        "Yes. We integrate local payment gateways and bank APIs into websites, apps and business systems, along with SMS notifications and one-time passwords.",
    },
    {
      question: "Do you support Amharic?",
      answer:
        "Yes. The apps and systems we build can support Amharic and other local languages alongside English, including Ethiopic text input and display.",
    },
    {
      question: "Do you host and maintain the system after launch?",
      answer:
        "We can. We offer hosting, backups, monitoring and monthly support plans, or we hand everything over to your IT team with full documentation and training.",
    },
    {
      question: "How is pricing structured?",
      answer:
        "Projects are quoted in Birr after a free discovery session, as a fixed price for agreed scope or in phased milestones. Support plans are billed monthly.",
    },
  ],
  cta: {
    first: "Ready to digitise",
    second: "your organisation?",
    lead: "Book a free consultation. We will visit or call, understand how you work today and propose a practical plan.",
    fine: "Free consultation, in person in Addis Ababa or online.",
  },
};

export const EDITIONS: Record<Region, Edition> = { world, et };

/** The edition this site serves. */
export const EDITION = EDITIONS[SITE_REGION];
