import {
  SiGo,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiReact,
  SiPython,
  SiTailwindcss,
  SiFramer,
  SiVuedotjs,
  SiNuxt,
  SiPhp,
} from "react-icons/si";

export const personalInfo = {
  name: "Chandra",
  role: "Fullstack Developer",
  tagline: "I build systems that scale and interfaces that matter.",
  basedIn: "Indonesia",
  experience: "3+",
  email: "chandra@example.com", // Placeholder email, user can update
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};

export const skills = [
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "PHP", icon: SiPhp, color: "#00ADD8" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#06B6D4" },
  { name: "Nuxt", icon: SiNuxt, color: "#069be4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];

export const projects = [
  {
    id: 1,
    title: "cashplus.id",
    description:
      "A robust payment processing platform designed for scalability and security.",
    tech: ["Go", "Xendit", "PostgreSQL"],
    link: "https://cashplus.id",
    github: "#",
    image: "/projects/cashplus.jpg", // Placeholders
    featured: true,
  },
  {
    id: 2,
    title: "onetap.id",
    description:
      "Fullstack SaaS product streamlining user engagement and digital interactions.",
    tech: ["Next.js", "Node.js", "MySQL"],
    link: "https://onetap.id",
    github: "#",
    image: "/projects/onetap.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "BPJS/INACBG Integration",
    description:
      "Healthcare claims system modernization, migrating from legacy PHP to high-performance Go.",
    tech: ["Go", "PHP", "Healthcare API"],
    link: "#",
    github: "#",
    image: "/projects/bpjs.jpg",
  },
  {
    id: 4,
    title: "Internal Business Management Tool",
    description:
      "Comprehensive CRM and ERP system for campaign management and HR processes.",
    tech: ["Next.js", "MySQL", "shadcn/ui"],
    link: "#",
    github: "#",
    image: "/projects/internal.jpg",
  },
  {
    id: 5,
    title: "XAU/USD Trading Bot",
    description:
      "Automated gold trading system leveraging MT5 and Machine Learning for market analysis.",
    tech: ["Go", "Python", "MT5", "ML"],
    link: "#",
    github: "#",
    image: "/projects/trading-bot.jpg",
  },
  {
    id: 6,
    title: "MT5 Pattern Scanner",
    description:
      "Real-time candlestick pattern detection with automated Telegram alerts.",
    tech: ["Python", "MT5", "Telegram API"],
    link: "#",
    github: "#",
    image: "/projects/scanner.jpg",
  },
];

export const experiences = [
  {
    company: "Freelance / Remote",
    role: "Fullstack Developer",
    period: "2023 - Present",
    description: [
      "Building scalable web applications and automated trading systems.",
      "Specializing in Go and Next.js ecosystems.",
      "Delivering high-performance solutions for international clients.",
    ],
  },
  {
    company: "Tech Solutions Co.",
    role: "Backend Engineer",
    period: "2021 - 2023",
    description: [
      "Led the migration of legacy healthcare systems to Go.",
      "Optimized database queries and implemented caching strategies using Redis.",
      "Integrated third-party payment gateways and healthcare APIs.",
    ],
  },
  {
    company: "Digital Agency",
    role: "Junior Developer",
    period: "2020 - 2021",
    description: [
      "Developed responsive frontend interfaces using React and Tailwind CSS.",
      "Maintained and updated Node.js backend services.",
      "Collaborated with designers to implement pixel-perfect designs.",
    ],
  },
];
