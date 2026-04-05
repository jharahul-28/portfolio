// ─── Types ────────────────────────────────────────────────────────────────────

export interface Experience {
  id: number;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
}

export interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Activity {
  id: number;
  organization: string;
  role: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Rahul Jha",
  title: "Full Stack Software Engineer",
  subtitle: "Spring Boot + React / React Native",
  email: "rahuljha84211@gmail.com",
  phone: "+91 8252766445",
  linkedin: "https://www.linkedin.com/in/jharahul28",
  github: "https://github.com/jharahul-28",
  location: "Bangalore, India",
  tagline:
    "Building high-impact systems at the intersection of backend precision and frontend craftsmanship.",
  roles: [
    "Spring Boot Developer",
    "React Developer",
    "React Native Developer",
    "AI Integration Engineer",
  ],
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "GlobalLogic",
    role: "Trainee Software Engineer",
    type: "Full-time",
    period: "Aug 2025 – Present",
    location: "Bangalore, India",
    highlights: [
      "Reverse-engineered 120+ legacy banking system modules, reducing delivery time by ~40%",
      "Refactored core modules using Spring Boot, improving overall system performance by 30%",
      "Identified and resolved critical inefficiencies in legacy banking workflows",
      "Awarded Spotlight of the Month for outstanding contributions",
    ],
  },
  {
    id: 2,
    company: "CricsHub",
    role: "Full Stack Intern",
    type: "Internship",
    period: "Jan 2025 – Jul 2025",
    location: "Remote",
    highlights: [
      "Built full-stack cricket tournament management platform with scheduling, scoring, and live updates",
      "Implemented real-time scoring system using WebSockets supporting concurrent match updates",
      "Developed REST APIs for tournament, team, and match management using Spring Boot",
      "Reduced manual tournament management effort by ~60% through automation",
      "Built live match tracking UI with React Native",
    ],
  },
  {
    id: 3,
    company: "HoppRyde",
    role: "Software Developer Intern",
    type: "Internship",
    period: "Mar 2024 – Jun 2024",
    location: "Remote",
    highlights: [
      "Built ride-booking web application using ReactJs with one-way, round-trip, and hourly booking flows",
      "Designed reusable frontend components improving development efficiency by ~25%",
      "Integrated APIs for booking, location services, and user data management",
      "Implemented dynamic forms and scheduling workflows for complex booking scenarios",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "ReguLens",
    subtitle: "Smart Compliance Intelligence System",
    description:
      "An AI-powered compliance intelligence platform that leverages LLMs and RAG architecture to automate regulatory document analysis, provide intelligent audit trails, and deliver accurate compliance insights at scale.",
    highlights: [
      "GPT-based RAG architecture for intelligent compliance document retrieval",
      "Full audit logging with complete traceability across all operations",
      "Scalable REST APIs with robust validation and exception handling",
      "Optimized query relevance using structured embeddings, document indexing, and vector DB",
    ],
    tech: [
      "Spring Boot",
      "Spring AI",
      "Java",
      "GPT",
      "RAG",
      "Vector DB",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/jharahul-28",
  },
  {
    id: 2,
    title: "Chauffeur",
    subtitle: "Real-time Driver Ride Management System",
    description:
      "A React Native mobile app enabling drivers to manage end-to-end ride workflows with real-time GPS tracking — built for reliability, speed, and a frictionless driver experience.",
    highlights: [
      "Engineered full ride workflow management (accept → navigate → complete), cutting driver task execution time by ~25%",
      "Integrated real-time GPS map tracking to eliminate navigation errors, reducing pickup delays by ~20%",
      "Implemented Firebase Authentication with <1s login response time and near-zero failure rate",
      "Built a reusable component library for consistent UI across screens, accelerating development speed by ~30%",
    ],
    tech: ["React Native", "Expo", "Firebase", "Google Maps", "TypeScript"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "C++"],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "Spring AI", "REST APIs"],
  },
  {
    category: "Frontend",
    skills: ["React", "React Native", "Next.js", "Expo"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "SQL"],
  },
  {
    category: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "WebSockets",
      "RAG Architecture",
    ],
  },
];

export const educationList: Education[] = [
  {
    id: 1,
    institution: "BIT Sindri",
    degree: "B.Tech in Computer Science & Engineering",
    period: "Aug 2021 – Jun 2025",
    location: "Dhanbad, Jharkhand",
    score: "7.49",
    scoreLabel: "CGPA",
  },
  {
    id: 2,
    institution: "Hill Top School",
    degree: "Senior Secondary (Class XII)",
    period: "2021",
    location: "Jamshedpur, Jharkhand",
    score: "93.5%",
    scoreLabel: "Percentage",
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    icon: "trophy",
    title: "Spotlight of the Month",
    description:
      "Awarded Spotlight of the Month at GlobalLogic for outstanding contributions in reverse-engineering and refactoring legacy banking systems.",
  },
  {
    id: 2,
    icon: "code",
    title: "CodeChef Rank 286",
    description:
      "Achieved Rank 286 in CodeChef Starters 130, placing in the top ~1% of participants globally.",
  },
  {
    id: 3,
    icon: "brain",
    title: "380+ DSA Problems Solved",
    description:
      "Consistently solved 380+ Data Structures and Algorithms problems across platforms, demonstrating strong problem-solving skills.",
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    organization: "IETE Students' Forum",
    role: "Treasurer & Sponsorship Head",
    description:
      "Led the treasury and sponsorship operations for the college's premier technical society. Spearheaded sponsorship campaigns that increased TechFest funding by 150%, enabling a significantly larger event scale.",
  },
];
