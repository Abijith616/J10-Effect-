import {
  Film,
  Clapperboard,
  Play,
  Sparkles,
  Users,
  Image as ImageIcon,
  Mic,
  Share2,
  Box,
  Lightbulb,
  Code2,
  Globe,
  Zap,
  Award,
  TrendingUp,
  Eye,
  type LucideIcon,
} from "lucide-react";

export const STATS = [
  { value: "150+", label: "Projects delivered" },
  { value: "50+", label: "Brands worldwide" },
  { value: "48h", label: "Average delivery" },
  { value: "98%", label: "Client satisfaction" },
];

export const CLIENTS = [
  "Mercedes-Benz",
  "Audi",
  "ElevenLabs",
  "InVideo",
  "Atlabs AI",
  "Adobe",
  "Akshaya Motors",
  "Everyday Inc.",
  "HubSpot",
  "Notion",
  "Figma",
  "Vercel",
];

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const SERVICES: Service[] = [
  {
    icon: Film,
    title: "Commercial Production",
    desc: "Broadcast-grade TV and digital commercials, generated end to end — no live crew, no compromise on craft.",
  },
  {
    icon: Clapperboard,
    title: "Brand Films",
    desc: "Narrative-driven brand films built on cinematic AI visuals that compound brand equity over time.",
  },
  {
    icon: Play,
    title: "Product Advertising",
    desc: "Photoreal product films with controlled cinematography, precise lighting, and integrated visual effects.",
  },
  {
    icon: Sparkles,
    title: "Story Advertising",
    desc: "Emotionally resonant campaigns that connect a brand to its audience through authentic storytelling.",
  },
  {
    icon: Users,
    title: "UGC at Scale",
    desc: "Authentic, scroll-stopping user-generated formats produced entirely with AI for every platform.",
  },
  {
    icon: ImageIcon,
    title: "Creative Generation",
    desc: "Campaign imagery and brand visuals at commercial resolution, generated at volume under tight art direction.",
  },
  {
    icon: Mic,
    title: "Voice & Audio",
    desc: "Multilingual AI voice synthesis paired with full-score audio production for any market or medium.",
  },
  {
    icon: Share2,
    title: "Performance Campaigns",
    desc: "Platform-native edits — cut, formatted, and captioned for Meta, YouTube, TikTok, and beyond.",
  },
  {
    icon: Box,
    title: "CGI Product Visuals",
    desc: "Photoreal 3D renders and CGI environments indistinguishable from a physical studio shoot.",
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    desc: "End-to-end concept and visual development, from the first brief to a locked storyboard.",
  },
  {
    icon: Code2,
    title: "Digital Experiences",
    desc: "Premium websites engineered for performance, clarity, and conversion that match the brand's ambition.",
  },
];

export type Project = {
  client: string;
  category: string;
  title: string;
  desc: string;
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    client: "Mercedes-Benz",
    category: "AI Commercial",
    title: "GLE — Drive the Future",
    desc: "A cinematic commercial pairing luxury automotive design language with generated future cityscapes, delivered for a flagship showroom launch.",
    tags: ["Automotive", "Commercial"],
  },
  {
    client: "Audi",
    category: "Brand Film",
    title: "e-tron — Electrified Precision",
    desc: "A premium brand film expressing Audi's electric vision through generated motion design and a tightly scripted narrative arc.",
    tags: ["Luxury Auto", "Brand Film"],
  },
  {
    client: "ElevenLabs",
    category: "Product Story",
    title: "Every Voice, Every Language",
    desc: "A product story showing how synthetic voice removes the barrier between an idea and a global audience — in sixty seconds.",
    tags: ["Technology", "Product"],
  },
  {
    client: "InVideo",
    category: "Brand Story",
    title: "Create Without Limits",
    desc: "A fast-cut tech narrative demonstrating how AI reshapes the daily workflow of millions of creators.",
    tags: ["Technology", "Brand"],
  },
];

export type Step = {
  n: string;
  label: string;
  desc: string;
};

export const STEPS: Step[] = [
  { n: "01", label: "Discover", desc: "Brand audit, audience mapping, and strategic alignment before a single frame is conceived." },
  { n: "02", label: "Strategy", desc: "Campaign architecture, messaging framework, and a channel plan built around measurable outcomes." },
  { n: "03", label: "Storyboard", desc: "Visual moodboards, shot design, and scene-by-scene planning, signed off before production." },
  { n: "04", label: "Production", desc: "Multi-model generation with human artistic oversight on every frame and every cut." },
  { n: "05", label: "Post", desc: "Color grading, motion design, audio sync, and the finishing pass that separates good from broadcast." },
  { n: "06", label: "Delivery", desc: "Format-optimized exports across every screen, platform, and resolution you operate on." },
];

export type Edge = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export const EDGE: Edge[] = [
  {
    icon: Sparkles,
    title: "Premium creativity",
    desc: "We work at the intersection of artistic vision and model capability — output that commands attention and earns a second view.",
  },
  {
    icon: Zap,
    title: "Faster turnaround",
    desc: "Generative pipelines compress delivery from weeks to days without conceding a frame of quality.",
  },
  {
    icon: Award,
    title: "Commercial-grade",
    desc: "Every output meets broadcast and premium digital standards — the bar set by luxury automotive and global tech.",
  },
  {
    icon: Globe,
    title: "Global collaboration",
    desc: "Distributed creative teams and multilingual systems make working across markets seamless.",
  },
  {
    icon: TrendingUp,
    title: "Strategy-led",
    desc: "Media and performance thinking is embedded in every creative decision, from concept to final export.",
  },
  {
    icon: Eye,
    title: "End to end",
    desc: "Single-studio accountability from brief to delivery — no handoffs, no gaps, no quality drift.",
  },
];

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  company: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "J10Effect delivered a cinematic commercial for our Mercedes-Benz showroom launch that exceeded every expectation. The quality was indistinguishable from live-action production.",
    name: "Akshay Suresh",
    role: "Chief Executive Officer",
    company: "Akshaya Motors",
  },
  {
    text: "A full brand film in under forty-eight hours. The storytelling felt genuinely human and the visuals were breathtaking — we have since signed them for six more campaigns.",
    name: "Priya Nair",
    role: "Marketing Director",
    company: "Everyday Inc.",
  },
  {
    text: "Working with J10Effect changed how we think about AI in advertising. Creative strategy combined with this production quality is unmatched in the industry.",
    name: "Rahul Mehta",
    role: "Brand Lead",
    company: "InVideo",
  },
  {
    text: "They produced a full product launch campaign in seventy-two hours. The visual quality rivals anything a traditional studio would take weeks to make.",
    name: "Sarah Chen",
    role: "Head of Growth",
    company: "Atlabs AI",
  },
];

export const NAV_LINKS = [
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const CONTACT = {
  email: "j10effect123@gmail.com",
  studio: "Elanji, Muvattupuzha · Ernakulam, Kerala",
};