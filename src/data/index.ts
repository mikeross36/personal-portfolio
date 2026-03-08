import {
  Palette,
  Layout,
  Smartphone,
  Globe,
  PenTool,
  Monitor,
  DiamondPlus,
  Lightbulb,
  Users,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", to: "hero" },
  { name: "Services", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "About", to: "about" },
  { name: "Testimonials", to: "testimonials" },
  { name: "Contact", to: "contact" },
];

export const PROJECTS = [
  {
    id: crypto.randomUUID(),
    title: "Neon Finance",
    category: "Fintech Dashboard",
    image:
      "https://cdn.dribbble.com/userupload/43715836/file/original-1a15e3213748d72d9f7028f63fc641ac.webp?resize=1024x768&vertical=center", // Placeholder
    tags: ["React", "Tailwind", "D3.js"],
  },
  {
    id: crypto.randomUUID(),
    title: "Cyber Commerce",
    category: "E-commerce Platform",
    image:
      "https://cdn.dribbble.com/userupload/43465205/file/original-883af2d02dbbc4e3ef9bb641026fa6bf.png?resize=1024x768&vertical=center",
    tags: ["Next.js", "Stripe", "Framer Motion"],
  },
  {
    id: crypto.randomUUID(),
    title: "Ark Realty",
    category: "Real Estate App",
    image:
      "https://cdn.dribbble.com/userupload/2760110/file/original-cf06aecba3b2ba81eac1612d66734c6e.png?resize=1024x768&vertical=center",
    tags: ["TypeScript", "Mapbox", "Supabase"],
  },
];

export const SERVICES = [
  {
    id: crypto.randomUUID(),
    icon: Palette,
    title: "Brand Identity",
    description:
      "Crafting unique visual identities that resonate with your audience and leave a lasting impression.",
  },
  {
    id: crypto.randomUUID(),
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Designing intuitive and engaging user interfaces that prioritize user experience and usability.",
  },
  {
    id: crypto.randomUUID(),
    icon: Globe,
    title: "Web Development",
    description:
      "Refined code and stunning visuals for modern web applications.",
  },
  {
    id: crypto.randomUUID(),
    icon: Smartphone,
    title: "Mobile Design",
    description:
      "Optimized mobile-first designs for best-in-class accessibility.",
  },
  {
    id: crypto.randomUUID(),
    icon: PenTool,
    title: "Illustration",
    description: "Custom assets to give your project a unique artistic flair.",
  },
  {
    id: crypto.randomUUID(),
    icon: Monitor,
    title: "Design Systems",
    description: "Scalable systems for consistent product design.",
  },
];

export const TESTIMONIALS = [
  {
    id: crypto.randomUUID(),
    text: "Laura transformed our vision into a stunning digital reality. Her attention to detail and ability to blend aesthetics with functionality is unmatched.",
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: crypto.randomUUID(),
    text: "Working with Laura was a game-changer for our startup. The new design system she implemented increased our user engagement by 40%.",
    name: "Michael Chen",
    role: "Product Lead, Apex",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: crypto.randomUUID(),
    text: "Professional, creative, and technical. Laura brings a unique perspective that elevates every project she touches. Highly recommended.",
    name: "Emily Davis",
    role: "Marketing Director, Aura",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export const ABOUT_ITEMS = [
  { Icon: DiamondPlus, title: "Precision", desc: "Pixel-perfect execution." },
  { Icon: Lightbulb, title: "Innovation", desc: "Always modern." },
  { Icon: Users, title: "User-Centric", desc: "Empathy first." },
];
