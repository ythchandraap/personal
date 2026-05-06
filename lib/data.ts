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
  SiVuedotjs,
  SiPhp,
  SiNestjs,
  SiNuxt,
} from "react-icons/si";

export const personalInfo = {
  name: "Chandra Adam Pratama",
  role: "Full Stack Engineer",
  tagline:
    "Crafting scalable backends and seamless user experiences — from hospital systems to fintech platforms.",
  basedIn: "Yogyakarta, Indonesia",
  experience: "3+",
  email: "chandraadampratama@gmail.com",
  phone: "+62 857 0038 3103",
  github: "https://github.com/ythchandraap",
  linkedin: "https://www.linkedin.com/in/ythchandraap",
  whatsapp: "https://wa.me/6285700383103",
  test: null,
};

export const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Nuxt", icon: SiNuxt, color: "#00DC82" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];
export const projects = [
  {
    id: 1,
    title: "cashplus.id",
    description:
      "Fintech partner platform enabling businesses to sell pulsa, token listrik, and e-tickets at scale. Contributed as Front End Developer, building responsive and performant interfaces using Next.js that handle high-frequency transaction flows.",
    tech: ["Next.js", "React", "TypeScript", "REST API"],
    link: "https://cashplus.id",
    github: null,
    image: "/projects/cashplus.png",
    featured: true,
  },
  {
    id: 2,
    title: "Campaign Ads Manager",
    description:
      "A fintech payment platform serving thousands of users across Indonesia. Built responsive, high-performance interfaces integrated with real-time transaction flows.",
    tech: ["Next.js", "React", "TypeScript", "REST API"],
    link: "https://pandora.kuwakuwi.id",
    github: null,
    image: "/projects/campaign_ads.png",
    featured: true,
  },
  {
    id: 3,
    title: "Hospital Information System — RSUD Prambanan",
    description:
      "End-to-end web application for a government hospital, covering patient management, medical records, and internal reporting. Handles daily operational data for hundreds of medical staff.",
    tech: ["Next.js", "PHP", "CodeIgniter", "MySQL"],
    link: "#",
    github: null,
    image: "/projects/rsud.png",
    featured: true,
  },
  {
    id: 4,
    title: "onetap.id",
    description:
      "A digital marketplace platform that bridges creators and entrepreneurs to sell their digital products seamlessly. Engineered the backend infrastructure in Go, backed by PostgreSQL and Redis, to handle product distribution, transactions, and real-time data with high reliability.",
    tech: ["Go", "PostgreSQL", "Redis", "REST API"],
    link: "https://onetap.id",
    github: null,
    image: "/projects/onetap.png",
    featured: false,
  },
  {
    id: 5,
    title: "IoT Room Temperature Monitoring",
    description:
      "Web application for real-time room temperature monitoring, delivered with client-side demos, installation, and onboarding for enterprise clients.",
    tech: ["PHP", "MySQL", "IoT"],
    link: "#",
    github: null,
    image:
      "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000",
    featured: false,
  },
];

export const experiences = [
  {
    company: "RSUD Prambanan",
    location: "Yogyakarta, Indonesia",
    role: "Full Stack Engineer",
    period: "Sep 2023 – Present",
    description: [
      "Architected and developed both front-end and back-end of a hospital web application serving daily operational needs of medical and administrative staff.",
      "Performed data analysis to refine system data models, improving reliability and performance of clinical workflows.",
      "Maintained and enhanced legacy information systems built on CodeIgniter (PHP), ensuring continuity of hospital operations.",
    ],
  },
  {
    company: "PT Global Indo Multimedia (cashplus.id)",
    location: "Bekasi, Indonesia",
    role: "Front End Developer",
    period: "Jun 2022 – Aug 2023",
    description: [
      "Built responsive, high-performance web interfaces using Next.js for a fintech platform serving partner businesses in pulsa, token listrik, and e-ticket transactions.",
      "Delivered new product features enabling partners to seamlessly manage and operate their sales channels.",
      "Managed periodic maintenance and performance optimization of the cashplus.id platform.",
    ],
  },
  {
    company: "CV Sahabat",
    location: "Yogyakarta, Indonesia",
    role: "IT Support & Junior Developer",
    period: "Aug 2019 – May 2022",
    description: [
      "Contributed to building a web application for IoT-based room temperature monitoring services.",
      "Conducted product demonstrations, software installations, and database setup for enterprise clients.",
      "Bridged technical and non-technical communication during client onboarding processes.",
    ],
  },
];

export const education = [
  {
    institution: "SMK N 2 Depok Sleman",
    degree: "Teknik Komputer dan Jaringan",
    period: "Jun 2015 – Jun 2019",
  },
];
