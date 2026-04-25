import { PersonalInfo, Experience, Education, Skill, Achievement, Project, Publication } from '../types/resume';

export const personalInfo: PersonalInfo = {
  name: "Bashir Danjuma",
  title: "Software Developer",
  email: "",
  phone: "",
  location: "Nigeria (Open to Global Remote)",
  github: "https://github.com/BashDee",
  linkedin: "https://linkedin.com/in/bashir-danjuma",
  // website: "https://bashirdanjuma.dev"
};

export const aboutText = `I'm a Software Developer with hands-on experience building scalable backend systems for high-traffic platforms. Currently at WebMD, I develop production backend infrastructure for ASPEN CMS (serving millions of global users) using .NET, Drupal, and development tools — while pursuing my Master's in Cyber Security and Digital Forensics.

I thrive in fast-moving environments: optimizing performance, designing APIs, integrating data pipelines, and experimenting with AI tools to accelerate development.

My expertise includes building and integrating RESTful APIs, structuring complex relational data, implementing message queues, and ensuring secure, performant systems. I'm particularly passionate about purpose-driven tech that breaks barriers — from making healthcare information accessible (HIPAA compliant) to exploring emerging AI applications.

I actively use AI tools like Claude in my daily workflow for story creation, rapid prototyping, code generation, refactoring, and design ideation. I'm excited to bring this blend of production backend ownership and AI curiosity.`;

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "WebMD",
    companyUrl: "https://www.webmd.com",
    logo: "webmd-logo.jpg",
    location: "FCT-Abuja, NG",
    startDate: "Nov 2024",
    endDate: "Present",
    description: [
      "Built and optimized backend infrastructure for ASPEN CMS healthcare content platform, serving 10M+ monthly users in a lean 8-person cross-functional team",
      "Designed and integrated RESTful APIs and data processing pipelines, reducing latency by 1.2s and improving system scalability",
      "Implemented message queuing with RabbitMQ and search/indexing with Apache Solr, enabling efficient content matching and retrieval across diverse datasets",
      "Collaborated on full-stack features using C#/.NET, PHP, Drupal, Vue.js, and Docker — ensuring HIPAA compliant, high-availability systems"
    ],
    technologies: ["Drupal", "C#", ".NET", "PHP", "Vue", "FastAPI", "Apache Solr", "ELK Stack", "Node.js", "RabbitMQ", "Git", "Docker", "Linux", "API Integration"]
  },
  {
    title: "National Youth Service Corps (NYSC) Software Developer",
    company: "Startup Kano Center for Innovation and Development",
    companyUrl: "https://www.startupkano.com",
    logo: "startup-kano.jpg",
    location: "Kano, NG",
    startDate: "April 2024",
    endDate: "April 2025",
    description: [
      "Joined early-stage startup environment during mandatory national service; built and maintained full-stack features from scratch in a fast-paced, resource-constrained setting",
      "Contributed to product iteration and community management tools, shipping features quickly while adapting to evolving requirements"
    ],
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Git"]
  }
];

export const education: Education[] = [
  {
    degree: "MS Cyber Security and Digital Forensics",
    institution: "Nigerian Defence Academy",
    institutionUrl: "https://www.nda.edu.ng",
    logo: "National_Defence_Academy_NDA.png",
    location: "Kaduna, NG",
    graduatedDate: "2027",
    gpa: "-",
  },
  {
    degree: "BS Cyber Security",
    institution: "Nigerian Army University Biu",
    institutionUrl: "https://naub.edu.ng",
    logo: "nigerianArmy.png",
    location: "Biu, NG",
    graduatedDate: "2024",
    gpa: "4.53 / 5.00 (Top 10% of Faculty)",
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    skills: ["C#", "PHP", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Backend",
    skills: ["Node.js", ".NET", "Drupal", "Laravel", "FastAPI", "Express", "RESTful APIs", "Microservices"],
  },
  {
    category: "Data & Databases",
    skills: ["PostgreSQL", "MySQL", "Firestore", "Supabase", "Apache Solr", "ELK Stack (Kibana)", "Complex Relational Modeling"],
  },
  {
    category: "AI & Tools",
    skills: ["LLM Integration (Claude, prompt engineering)", "ClaudeCode", "TensorFlow", "OpenCV", "Docker", "RabbitMQ", "Git", "Postman"]
  },
  {
    category: "DevOps & Fundamentals",
    skills: ["DevOps", "Agile Scrum", "System Design", "Data Structures & Algorithms", "OOP", "Secure Architecture"]
  }
];

export const achievements: Achievement[] = [
  {
    title: "High-Traffic Platform Optimization",
    description: "Optimized External Indexer application serving 10M+ users at WebMD, achieving 35% bundle size reduction, 1.2s latency improvement with enhanced content searching capabilities",
    date: "2025"
  },
  {
    title: "Academic Excellence & Research",
    description: "Graduated with 4.53/5.00 CGPA (top 10%) and co-authored publication on Ethical Implications of AI-Driven Security Systems",
    date: "2024"
  },
  {
    title: "Google Developer Student Club Leadership",
    description: "Led GDSC chapter, organizing workshops on software development, cybersecurity, and emerging AI tools for 100+ students",
    date: "2022"
  }
];

export const projects: Project[] = [
  {
    title: "Student Course Registration Management System",
    description: "Full-stack web application for managing student courses with complex relational data, user roles, and real-time features (live in production/use)",
    technologies: ["PHP", "JavaScript", "MySQL", "HTML/CSS", "API Development"],
    github: "https://github.com/BashDee/stdmgt",
    highlights: [
      "Designed backend APIs and database schema handling many-to-many relationships between students, courses, and schedules",
      "Implemented authentication, authorization, and scalable query optimization",
      "Built responsive frontend with dynamic matching and registration logic"
    ]
  },
  {
    title: "Facial Recognition-Based Driver Identification System",
    description: "Machine learning-powered authentication system with real-time processing and deployment",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker", "Git"],
    github: "#",
    highlights: [
      "Developed computer vision pipeline and model integration for secure identification",
      "Containerized deployment for scalable, production-ready use",
      "Explored AI ethics considerations in biometric security applications"
    ]
  },
  {
    title: "Personalised Finance Management App",
    description: "Full-stack application with personalized recommendations and data processing (built with modern tools)",
    technologies: ["TypeScript", "Firebase", "Supabase", "Docker", "Git"],
    github: "https://github.com/BashDee/pers-builder.io",
    highlights: [
      "Structured user data models for personalized matching and insights",
      "Integrated backend services with potential for AI-driven recommendations"
    ]
  }
];

export const publications: Publication[] = [
  {
    title: "Ethical Implications of AI-Driven Ethical Hacking: A Systematic Review and Governance Framework",
    authors: ["Hossana Maghiri Sufficient", "Abdulazeez Murtala Mohammed", "Bashir Danjuma"],
    journal: "Journal of Cyber Security",
    year: "2025",
    description: "Established four principal ethical challenges in AI-driven security systems and proposed governance frameworks, with implications for equitable tech deployment in under-resourced settings.",
    type: "journal",
    url: "https://www.researchgate.net/publication/393667257_Ethical_Implications_of_AI-Driven_Ethical_Hacking_A_Systematic_Review_and_Governance_Framework",
    doi: "10.32604/jcs.2025.066312"
  }
];