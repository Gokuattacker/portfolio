export const siteConfig = {
  name: "Abhigyan",
  title: "Full Stack Developer",
  tagline: "I build fast, accessible web experiences that solve real problems.",
  email: "abhigyangoswami0@gmail.com",
  location: "India",
  github: "https://github.com/Gokuattacker",
  linkedin: "https://linkedin.com/in/abhigyan-goswami",
  twitter: "https://twitter.com",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "JavaScript", "Python", "Java", "SQL"],
  },
  {
    category: "Frontend & Backend",
    items: ["React", "Next.js", "FastAPI", "Node.js", "Express.js"],
  },
  {
    category: "Databases & Tools",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker", "GitHub Actions"],
  },
];

export const projects = [
  {
    title: "CodeTeach – a coding platform",
    description:
      "A full-stack coding platform supporting 4 programming languages and interactive code execution with Monaco Editor and Judge0 CE.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker",
    image: "/codeteach.jpg",
    featured: true,
  },
  {
    title: "Quiz Platform System",
    description:
      "Full-stack quiz platform supporting timed quiz sessions and 100+ concurrent participants with automated scoring and Redis leaderboards.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker",
    image: "/quiz.jpg",
    featured: true,
  },
  {
    title: "GoFarm Predictive Analytics",
    description:
      "Agriculture predictive analytics web app, processing 500MB+ datasets using Pandas and serving 1,000+ users.",
    tags: ["React.js", "FastAPI", "Pandas", "Axios"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker",
    image: "/gofarm.jpg",
    featured: false,
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "Everlabs Freelance",
    period: "Nov '24 — Jan '25",
    description:
      "Developed responsive web pages using Next.js and React. Integrated REST APIs, Redux, and Fitbit API with Supabase. Optimized application performance using SSR, ISR, and dynamic routing.",
  },
];
