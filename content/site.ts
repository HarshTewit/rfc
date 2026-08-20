// All copy, pricing, and data lives here. Never hardcode copy in JSX.

// ─── WhatsApp ────────────────────────────────────────────────────────────────
export const wa = {
  number: "919876543210",
  messages: {
    firstSession: "Hi, I'd like to book my first free session at RFC.",
    membership: "Hi, I'm interested in an RFC membership. Can you share the details?",
    spa: "Hi, I'd like to book a recovery spa session at RFC.",
    order: (product: string, size?: string) =>
      size
        ? `Hi, I'd like to order the ${product} (${size}) from the RFC Store.`
        : `Hi, I'd like to order the ${product} from the RFC Store.`,
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
export type Pillar =
  | { key: string; label: string; line: string; href: string; solid: false; image: string; imageAlt: string }
  | { key: string; label: string; line: string; href: string; solid: true };

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
      solid: false,
      image: "/images/bagwork-kick.webp",
      imageAlt: "Athlete in red gloves landing a kick on a heavy bag at RFC",
    },
    {
      key: "store",
      label: "Store",
      line: "Hand-picked gear for the serious athlete.",
      href: "/store",
      solid: false,
      image: "/images/product-gloves.avif",
      imageAlt: "RFC Pro Boxing Gloves on a gym floor",
    },
    {
      key: "spa",
      label: "Recovery Spa",
      line: "Ice baths, massage, compression. Rest is training.",
      href: "/spa",
      solid: true,
    },
  ] as Pillar[],
  disciplines: ["Boxing", "MMA", "Muay Thai", "Kickboxing", "Strength"],
  split: {
    headline: "More than a gym.",
    body: "RFC is a training community built around combat sports. Show up once and you'll understand the difference between a franchise gym and a real one.",
    image: "/images/gym-floor-weights.webp",
    imageAlt: "RFC gym floor with weights and equipment in dark, moody lighting",
  },
  community: {
    headline: "Train with 400+ members.",
    sub: "Beginners to black belts. All welcome.",
    images: [
      { src: "/images/team-group-01.webp", alt: "RFC class group photo — full mat session" },
      { src: "/images/team-group-02.webp", alt: "RFC members after a morning sparring session" },
      { src: "/images/team-group-03.webp", alt: "RFC community group shot in the training hall" },
    ],
  },
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
    image: "/images/gloves-back.webp",
    imageAlt: "RFC athlete from behind with red boxing gloves raised, ready to train",
  },
  schedule: [
    {
      day: "Monday", short: "Mon",
      classes: [
        { time: "6:00 AM", name: "Boxing Fundamentals", coach: "Rajan", duration: "60 min" },
        { time: "12:00 PM", name: "Open Mat BJJ", coach: "Priya", duration: "90 min" },
        { time: "7:00 PM", name: "MMA Conditioning", coach: "Arjun", duration: "60 min" },
      ],
    },
    {
      day: "Tuesday", short: "Tue",
      classes: [
        { time: "6:00 AM", name: "Muay Thai Basics", coach: "Arjun", duration: "60 min" },
        { time: "7:00 PM", name: "Strength & Power", coach: "Vikram", duration: "60 min" },
        { time: "8:15 PM", name: "BJJ Drilling", coach: "Priya", duration: "60 min" },
      ],
    },
    {
      day: "Wednesday", short: "Wed",
      classes: [
        { time: "6:00 AM", name: "Boxing Sparring", coach: "Rajan", duration: "90 min" },
        { time: "12:00 PM", name: "MMA Technique", coach: "Arjun", duration: "60 min" },
        { time: "7:00 PM", name: "Muay Thai Advanced", coach: "Arjun", duration: "60 min" },
      ],
    },
    {
      day: "Thursday", short: "Thu",
      classes: [
        { time: "6:00 AM", name: "BJJ Fundamentals", coach: "Priya", duration: "60 min" },
        { time: "7:00 PM", name: "Boxing Technique", coach: "Rajan", duration: "60 min" },
        { time: "8:15 PM", name: "Functional Strength", coach: "Vikram", duration: "45 min" },
      ],
    },
    {
      day: "Friday", short: "Fri",
      classes: [
        { time: "6:00 AM", name: "MMA All Levels", coach: "Arjun", duration: "90 min" },
        { time: "12:00 PM", name: "Open Mat BJJ", coach: "Priya", duration: "90 min" },
        { time: "7:00 PM", name: "Boxing Fitness", coach: "Rajan", duration: "60 min" },
      ],
    },
    {
      day: "Saturday", short: "Sat",
      classes: [
        { time: "7:00 AM", name: "Fight Camp (All Disciplines)", coach: "Full Roster", duration: "2 hr" },
        { time: "10:00 AM", name: "Kids Boxing", coach: "Rajan", duration: "45 min" },
        { time: "12:00 PM", name: "Strength & Conditioning", coach: "Vikram", duration: "60 min" },
      ],
    },
    {
      day: "Sunday", short: "Sun",
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
      features: ["Walk in, no commitment", "Access to any single class", "Gear hire available"],
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
      line: "Head coach. 12 years on the national circuit, 8 years coaching.",
      image: "/images/coach-portrait.webp",
      imageAlt: "Rajan Pillai, RFC head boxing coach, outdoor portrait",
    },
    {
      name: "Arjun Mehta",
      discipline: "Muay Thai & MMA",
      line: "ONE Championship veteran. Teaches clinch, striking, and fight IQ.",
      image: "/images/bagwork-punch.webp",
      imageAlt: "Arjun Mehta throwing a powerful punch at a heavy bag",
    },
    {
      name: "Priya Nair",
      discipline: "Brazilian Jiu-Jitsu",
      line: "Purple belt under Draculino. First female BJJ coach in Bangalore.",
      image: "/images/fighter-pose.webp",
      imageAlt: "Priya Nair posed in the empty RFC training room",
    },
    {
      name: "Vikram Shetty",
      discipline: "Strength & Conditioning",
      line: "NSCA-certified. Builds the engine every fighter needs.",
      image: "/images/highkick.jpg",
      imageAlt: "Vikram Shetty demonstrating a high kick during training",
    },
  ],
  faqs: [
    {
      q: "Do I need experience to start?",
      a: "None at all. Our fundamentals classes are built for day-one beginners. You'll be paired with people at your level and the coaches keep things safe.",
    },
    {
      q: "What should I bring to my first session?",
      a: "Comfortable training gear, a water bottle, and clean indoor shoes or bare feet. Hand wraps and gloves are available to hire.",
    },
    {
      q: "Is the first session really free?",
      a: "Yes. Book via WhatsApp, come in, train, and decide afterwards. No hard sell, no card required.",
    },
    {
      q: "How many times a week should I train?",
      a: "2–3 sessions a week is a solid start. Once your body adapts, most members train 4–5 times and pair it with recovery spa sessions.",
    },
    {
      q: "Do you offer personal training?",
      a: "Yes — 1-on-1 sessions with any of our coaches can be booked via WhatsApp. Rate depends on the coach and session length.",
    },
  ],
  ctaBand: {
    headline: "First session is free.",
    sub: "No experience needed. Just show up.",
    cta: "Book on WhatsApp",
    image: "/images/sparring-02.webp",
    imageAlt: "Two RFC fighters sparring in the ring, wider frame",
  },
};

// ─── Store ─────────────────────────────────────────────────────────────────────
export type Product = {
  name: string;
  price: number;
  priceStr: string;
  category: string;
  image: string;
  imageAlt: string;
  sizes?: string[];
};

export const STORE_CATEGORIES = ["All", "Gloves", "Apparel"] as const;
export type StoreCategory = (typeof STORE_CATEGORIES)[number];

export const store = {
  hero: {
    headline: "RFC Store",
    sub: "Gear built for the gym floor.",
    image: "/images/rfc-logo-wall.webp",
    imageAlt: "RFC logo on the gym wall with members training in the background",
  },
  note: "Pickup at the gym or delivery across Bangalore. Pay on pickup.",
  products: [
    {
      name: "RFC Training Gloves",
      price: 3499,
      priceStr: "₹3,499",
      category: "Gloves",
      image: "/images/product-gloves.avif",
      imageAlt: "RFC Training Gloves, black leather, resting on the gym floor",
      sizes: ["8 oz", "10 oz", "12 oz", "14 oz", "16 oz"],
    },
    {
      name: "RFC Fight Trunks",
      price: 1999,
      priceStr: "₹1,999",
      category: "Apparel",
      image: "/images/product-trunks.jpg",
      imageAlt: "RFC Fight Trunks with red and black waistband detail",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      name: "RFC Tee",
      price: 999,
      priceStr: "₹999",
      category: "Apparel",
      image: "/images/product-tee.jpeg",
      imageAlt: "RFC Training Tee, clean black with minimal branding",
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ] as Product[],
};

// ─── Spa ─────────────────────────────────────────────────────────────────────
export const spa = {
  hero: {
    headline: "Recovery\nSpa",
    sub: "Rest is training. Treat it that way.",
    rule: "Sports massage · Ice bath · Sauna · Physio · Cupping",
  },
  services: [
    {
      name: "Sports Massage",
      duration: "60 min",
      price: "₹2,500",
      line: "Deep tissue and trigger-point release. Your muscles will thank you the next morning.",
    },
    {
      name: "Ice Bath",
      duration: "15 min",
      price: "₹800",
      line: "Cold immersion to cut inflammation and accelerate recovery between sessions.",
    },
    {
      name: "Infrared Sauna",
      duration: "30 min",
      price: "₹1,200",
      line: "Flush toxins, ease soreness. The oldest recovery tool, upgraded.",
    },
    {
      name: "Steam Room",
      duration: "20 min",
      price: "₹600",
      line: "Relaxes muscle tension and opens airways. Best before a massage.",
    },
    {
      name: "Physiotherapy",
      duration: "45 min",
      price: "₹3,500",
      line: "Assessment and treatment of training injuries by a certified sports physio.",
    },
    {
      name: "Cupping Therapy",
      duration: "45 min",
      price: "₹1,800",
      line: "Myofascial decompression used by combat athletes and Olympic teams worldwide.",
    },
  ],
  whyRecover: [
    {
      icon: "wave" as const,
      headline: "Less soreness",
      body: "Targeted therapy clears lactate and reduces DOMS so your next session starts clean.",
    },
    {
      icon: "shield" as const,
      headline: "Fewer injuries",
      body: "Consistent recovery keeps connective tissue healthy and the body in balance.",
    },
    {
      icon: "cycle" as const,
      headline: "Train more",
      body: "Athletes who recover properly can train 4–5 days a week instead of 2–3.",
    },
  ],
  band: {
    copy: "Recovery is the difference between a good athlete and a great one.",
  },
  cta: {
    headline: "Book your first session.",
    sub: "Recovery is training. Start now.",
    ctaLabel: "Book on WhatsApp",
  },
};
