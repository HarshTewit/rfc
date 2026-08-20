// All site copy, pricing, and data lives here.
// Pages import from this file — never hardcode copy in JSX.

// ─── WhatsApp ────────────────────────────────────────────────────────────────
export const wa = {
  number: "919876543210",
  messages: {
    firstSession: "Hi, I'd like to book my first free session at RFC.",
    membership: "Hi, I'm interested in an RFC membership. Can you share the details?",
    spa: "Hi, I'd like to book a recovery spa session at RFC.",
    order: (product: string) => `Hi, I'd like to order the ${product} from the RFC Store.`,
  },
};

export function waLink(msg: string) {
  return `https://wa.me/${wa.number}?text=${encodeURIComponent(msg)}`;
}

// ─── Nav / Footer ─────────────────────────────────────────────────────────────
export const nav = {
  wordmark: "RFC",
  links: [
    { label: "Home", href: "/" },
    { label: "Membership", href: "/membership" },
    { label: "Store", href: "/store" },
    { label: "Spa", href: "/spa" },
  ],
};

export const footer = {
  address: "12, Ring Road, Indiranagar, Bangalore 560038",
  phone: "+91 98765 43210",
  instagram: "@revivedfightclub",
  instagramUrl: "https://instagram.com/revivedfightclub",
  tagline: "Revived Fight Club — Bangalore's premier combat-sports gym.",
};

// ─── Home ─────────────────────────────────────────────────────────────────────
export const home = {
  hero: {
    headline: "Revived\nFight\nClub",
    sub: "Bangalore's home of boxing, Muay Thai, BJJ, and MMA.",
    cta1: { label: "Join the club", href: "/membership" },
    cta2: { label: "Book recovery", href: "/spa" },
  },
  pillars: [
    {
      key: "fight",
      label: "Fight Club",
      line: "Boxing · MMA · Muay Thai · BJJ — every level welcome.",
      href: "/membership",
      imageLabel: "FIGHT CLUB",
    },
    {
      key: "store",
      label: "Store",
      line: "Hand-picked gear for the serious athlete.",
      href: "/store",
      imageLabel: "STORE",
    },
    {
      key: "spa",
      label: "Recovery Spa",
      line: "Ice baths, massage, compression. Rest is training.",
      href: "/spa",
      imageLabel: "SPA",
    },
  ],
  disciplines: ["Boxing", "MMA", "Muay Thai", "BJJ", "Strength"],
  stats: [
    { value: "7", label: "Years running" },
    { value: "400+", label: "Active members" },
    { value: "12", label: "Coaches" },
    { value: "35+", label: "Classes / week" },
  ],
  ctaBand: {
    headline: "First session is free.",
    sub: "Show up once. You'll be back.",
    cta: "Claim your session",
  },
};

// ─── Membership ───────────────────────────────────────────────────────────────
export type ClassSlot = { time: string; name: string; coach: string; duration: string };
export type DaySchedule = { day: string; short: string; classes: ClassSlot[] };

export const membership = {
  hero: {
    headline: "Membership",
    body: "RFC runs morning, afternoon, and evening sessions six days a week. Pick a plan, show up, and let the coaches do the rest.",
  },
  schedule: [
    {
      day: "Monday",
      short: "Mon",
      classes: [
        { time: "6:00 AM", name: "Boxing Fundamentals", coach: "Rajan", duration: "60 min" },
        { time: "12:00 PM", name: "Open Mat BJJ", coach: "Priya", duration: "90 min" },
        { time: "7:00 PM", name: "MMA Conditioning", coach: "Arjun", duration: "60 min" },
      ],
    },
    {
      day: "Tuesday",
      short: "Tue",
      classes: [
        { time: "6:00 AM", name: "Muay Thai Basics", coach: "Arjun", duration: "60 min" },
        { time: "7:00 PM", name: "Strength & Power", coach: "Vikram", duration: "60 min" },
        { time: "8:15 PM", name: "BJJ Drilling", coach: "Priya", duration: "60 min" },
      ],
    },
    {
      day: "Wednesday",
      short: "Wed",
      classes: [
        { time: "6:00 AM", name: "Boxing Sparring", coach: "Rajan", duration: "90 min" },
        { time: "12:00 PM", name: "MMA Technique", coach: "Arjun", duration: "60 min" },
        { time: "7:00 PM", name: "Muay Thai Advanced", coach: "Arjun", duration: "60 min" },
      ],
    },
    {
      day: "Thursday",
      short: "Thu",
      classes: [
        { time: "6:00 AM", name: "BJJ Fundamentals", coach: "Priya", duration: "60 min" },
        { time: "7:00 PM", name: "Boxing Technique", coach: "Rajan", duration: "60 min" },
        { time: "8:15 PM", name: "Functional Strength", coach: "Vikram", duration: "45 min" },
      ],
    },
    {
      day: "Friday",
      short: "Fri",
      classes: [
        { time: "6:00 AM", name: "MMA All Levels", coach: "Arjun", duration: "90 min" },
        { time: "12:00 PM", name: "Open Mat BJJ", coach: "Priya", duration: "90 min" },
        { time: "7:00 PM", name: "Boxing Fitness", coach: "Rajan", duration: "60 min" },
      ],
    },
    {
      day: "Saturday",
      short: "Sat",
      classes: [
        { time: "7:00 AM", name: "Fight Camp (All Disciplines)", coach: "Full Roster", duration: "2 hr" },
        { time: "10:00 AM", name: "Kids Boxing", coach: "Rajan", duration: "45 min" },
        { time: "12:00 PM", name: "Strength & Conditioning", coach: "Vikram", duration: "60 min" },
      ],
    },
    {
      day: "Sunday",
      short: "Sun",
      classes: [
        { time: "8:00 AM", name: "Open Mat (all arts)", coach: "Open", duration: "2 hr" },
      ],
    },
  ] as DaySchedule[],
  plans: [
    {
      name: "Drop-in",
      price: "₹800",
      period: "per session",
      featured: false,
      features: [
        "Walk in, no commitment",
        "Access to any single class",
        "Gear hire available",
      ],
      cta: "Book a session",
    },
    {
      name: "Monthly",
      price: "₹4,500",
      period: "per month",
      featured: true,
      features: [
        "Unlimited classes",
        "Locker room access",
        "10% off store purchases",
        "One free recovery session / month",
      ],
      cta: "Join monthly",
    },
    {
      name: "Quarterly",
      price: "₹11,000",
      period: "per 3 months",
      featured: false,
      features: [
        "Unlimited classes",
        "Locker room access",
        "15% off store purchases",
        "Two free recovery sessions / month",
        "Priority class booking",
      ],
      cta: "Join quarterly",
    },
  ],
  coaches: [
    {
      name: "Rajan Pillai",
      discipline: "Boxing",
      bio: "Head coach. 12 years on the national circuit, 8 years coaching.",
      imageLabel: "RAJAN",
    },
    {
      name: "Arjun Mehta",
      discipline: "MMA & Muay Thai",
      bio: "ONE Championship veteran. Teaches clinch, striking, and fight IQ.",
      imageLabel: "ARJUN",
    },
    {
      name: "Priya Nair",
      discipline: "Brazilian Jiu-Jitsu",
      bio: "Purple belt under Draculino. First female BJJ coach in Bangalore.",
      imageLabel: "PRIYA",
    },
    {
      name: "Vikram Shetty",
      discipline: "Strength & Conditioning",
      bio: "NSCA-certified. Builds the engine every fighter needs.",
      imageLabel: "VIKRAM",
    },
  ],
  faqs: [
    {
      q: "Do I need experience to start?",
      a: "None at all. Our fundamentals classes are built for day-one beginners. You'll be paired with people at your level and the coaches keep things safe.",
    },
    {
      q: "What should I bring to my first session?",
      a: "Comfortable training gear, a water bottle, and clean indoor shoes or bare feet. We have hand wraps and gloves available to hire while you find your own.",
    },
    {
      q: "Is the first session really free?",
      a: "Yes. Book via WhatsApp, come in, train, and decide afterwards. No hard sell, no card required.",
    },
    {
      q: "How many times a week should I train?",
      a: "2–3 sessions a week is a solid start. Once your body adapts, most members train 4–5 times and add recovery spa sessions.",
    },
    {
      q: "Do you offer personal training?",
      a: "Yes — 1-on-1 sessions with any of our coaches can be booked directly via WhatsApp. Rate depends on the coach and session length.",
    },
  ],
  ctaBand: {
    headline: "First session is free.",
    sub: "No experience needed. Just show up.",
    cta: "Book on WhatsApp",
  },
};

// ─── Store ─────────────────────────────────────────────────────────────────────
export type Product = { name: string; price: string; category: string };

export const STORE_CATEGORIES = ["All", "Gloves", "Wraps", "Apparel", "Gear"] as const;
export type StoreCategory = (typeof STORE_CATEGORIES)[number];

export const store = {
  hero: {
    headline: "Store",
    sub: "Gear built for the gym floor.",
  },
  note: "Pickup at the gym or delivery across Bangalore.",
  products: [
    { name: "RFC Pro Boxing Gloves 12oz", price: "₹3,499", category: "Gloves" },
    { name: "RFC Sparring Gloves 16oz", price: "₹2,799", category: "Gloves" },
    { name: "MMA Grappling Gloves", price: "₹1,699", category: "Gloves" },
    { name: "Cotton Hand Wraps (pair)", price: "₹349", category: "Wraps" },
    { name: "Elastic Hand Wraps (pair)", price: "₹299", category: "Wraps" },
    { name: "RFC Training Tee", price: "₹999", category: "Apparel" },
    { name: "RFC Compression Shorts", price: "₹1,299", category: "Apparel" },
    { name: "Muay Thai Shin Guards", price: "₹2,199", category: "Gear" },
    { name: "Speed Skipping Rope", price: "₹499", category: "Gear" },
  ] as Product[],
};

// ─── Spa ─────────────────────────────────────────────────────────────────────
export const spa = {
  headline: "Recovery Spa",
  sub: "Rest harder. Train harder.",
  services: [] as { name: string; duration: string; price: string }[],
};
