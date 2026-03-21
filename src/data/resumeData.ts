import { PersonalInfo, Experience, Education, Skill, Achievement, Project } from '../types/resume';

export const personalInfo: PersonalInfo = {
  name: "Bashir Danjuma",
  title: "Software Developer",
  email: "danjumabashir58@gmail.com",
  phone: "+234 (081) 2020-7805",
  location: "Nigeria",
  github: "https://github.com/BashDee",
  linkedin: "https://linkedin.com/in/bashir-danjuma",
  website: "https://bashirdanjuma.dev"
};

export const aboutText = `I'm a Software Developer with a Master's degree in Cyber Security and Digital Forensics from Nigerian Defence Academy. I specialize in building scalable web applications using modern JavaScript frameworks and cloud platforms. I enjoy working at the intersection of design and engineering, creating intuitive user experiences backed by robust, clean code.

My expertise spans frontend development with React and Vue.js, backend systems with Node.js and Express, and cloud deployments on platforms like Google Cloud Platform. I've worked on high-traffic applications serving millions of users, optimizing performance and implementing scalable architectures.

Currently exploring and expanding my skills in Generative AI, Machine Learning, and AWS Cloud Architecture. I'm eager to apply these emerging technologies to build intelligent, cloud-native solutions that solve real-world problems and deliver exceptional user experiences.

Actively seeking SDE internships from May 2026 to December 2026. Currently building accessible, pixel-perfect digital experiences and contributing to open-source projects. When I'm not coding, you can find me exploring new technologies, contributing to the developer community, or working on side projects that push my boundaries.`;

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "WebMD",
    location: "FCT-Abuja, NG",
    startDate: "Nov 2024",
    endDate: "till date",
    description: [
      "Built healthcare platform with 8-person team; created reusable Vue.js component library",
      "Optimized performance and implemented scalable architectures"
    ],
    technologies: ["Drupal", "Vue", "FastAPI", "Apache Solr", "ELK Stack", "Node.js"]
  }
];

export const education: Education[] = [
  {
    degree: "MS Cyber Security and Digital Forensics",
    institution: "Nigerian Defence Academy Kaduna",
    location: "Kaduna, NG",
    graduatedDate: "2027",
    gpa: "-",
  },
  {
    degree: "BS Cyber Security",
    institution: "Nigerian Army University Biu",
    location: "Biu, NG",
    graduatedDate: "2024",
    gpa: "4.53",
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    // skills: ["React", "Vue", "TypeScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    skills: ["c#", "PHP", "Python"]
  },
  {
    category: "Framework", 
    skills: ["Node.js", "Vue", "Next.js", "dotnet", "FastAPI"],
    // skills: ["Node.js", "PHP", "Python", "C#", "RESTful APIs", "Apache Solr", "RabbitMQ"]
  },
  {
    category: "Database",
    skills: ["Firestore", "Supabase", "PostgreSQL", "Apache Solr"],
    // skills: ["AWS", "Google Cloud Platform", "Docker", "Git", "Linux"]
  },
  {
    category: "Developer Tools",
    skills: ["Git", "Docker", "VSCode", "Visual Studio", "ClaudeCode", "Asterix", "Builder.io", "RabbitMQ"]
  },
  {
    category: "CS Fundamentals",
    skills: ["Data Structure and Algorithm", "System Design", "Microservice Architecture", "OOP"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "High-Traffic Application Optimization",
    description: "Successfully optimized External Indexer application serving 10M+ users, achieving 35% bundle size reduction and 1.2s latency improvement",
    date: "2023"
  },
  {
    title: "Academic Excellence",
    description: "Maintaining 4.0 GPA in Master's Computer Science program at Northeastern University",
    date: "2019-2024"
  }
];

export const projects: Project[] = [
  {
    title: "Medscape.com Migration",
    description: "Led complete frontend migration of high-traffic healthcare platform",
    technologies: ["Vue 3", "JavaScript", "SSR", "Performance Optimization"],
    highlights: [
      "Reduced bundle size by 35%",
      "Improved page load latency by 1.2 seconds", 
      "Served 10M+ monthly users",
      "Implemented modern CSS-in-JS architecture"
    ]
  },
  {
    title: "Reusable Component Library",
    description: "Built comprehensive Vue.js component library for healthcare platform",
    technologies: ["Vue.js", "TypeScript", "Storybook", "Jest"],
    highlights: [
      "8-person development team",
      "Improved development efficiency",
      "Comprehensive testing coverage",
      "Scalable architecture design"
    ]
  }
];