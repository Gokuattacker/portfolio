export const siteConfig = {
  name: "Abhigyan",
  title: "Full Stack Developer",
  tagline: "Passionate about building real world problem solving application",
  email: "abhigyangoswami0@gmail.com",
  location: "Guwahati,Assam,India",
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
    items: ["MongoDB", "MySQL", "PostgreSQL", "Git", "Docker", "GitHub"],
  },
];

export const projects = [
  {
    title: "CodeTeach – a coding platform",
    description:
      "A full-stack coding platform supporting 4 programming languages and interactive code execution with Monaco Editor and Judge0 CE.",
    tags: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/CodeTeach-Full",
    image: "/codeteach.png",
    featured: true,
  },
  {
    title: "Quiz Platform System",
    description:
      "Full-stack quiz platform supporting timed quiz sessions and 100+ concurrent participants with automated scoring and Redis leaderboards.",
    tags: ["Node.js", "Express.js", "MongoDB", "Redis"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/Quiz-Platform",
    image: "/quiz.png",
    featured: true,
  },
  {
    title: "GoFarm Predictive Analytics",
    description:
      "Agriculture predictive analytics web app, processing 500MB+ datasets using Pandas and serving 1,000+ users.",
    tags: ["React.js", "FastAPI", "Pandas", "Axios"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker",
    featured: false,
  },
  {
    title: "AI-Based Sentiment Analyzer",
    description:
      "NLP-powered sentiment analysis tool that classifies text into positive, negative, or neutral sentiments using machine learning models. Built with a clean web interface for real-time analysis.",
    tags: ["Python", "NLP", "Machine Learning", "scikit-learn", "Flask"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/Ai-based-sentient-analyzer",
    featured: false,
  },
  {
    title: "Automated Resume Parser",
    description:
      "Automated pipeline that extracts structured information — skills, education, experience, and contact details — from PDF/HTML resumes using NLP techniques.",
    tags: ["Python", "NLP", "HTML", "PDF Parsing", "regex"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/Automated-Resume-Parser",
    featured: false,
  },
  {
    title: "Data Extraction & Text Analysis",
    description:
      "Web scraping and text analysis toolkit that extracts content from URLs, computes readability metrics, sentiment scores, and linguistic features, outputting structured data for downstream use.",
    tags: ["Python", "BeautifulSoup", "NLP", "Pandas", "Text Mining"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/Data-Extraction-and-Text-Analysis",
    featured: false,
  },
  {
    title: "BhasaSetu-Ai based Language Accessibility Tool",
    description:
      "A multilingual bridge application enabling seamless communication across Indian languages using translation and transliteration APIs, promoting linguistic inclusivity.",
    tags: ["React", "Node.js", "Translation API", "i18n", "Express.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/Gokuattacker/BhasaSetu-All",
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
