import { PersonalInfo, Experience, Education, Skill, Achievement, Project, Publication } from '../types/resume';

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

export const aboutText = `I'm a Software Engineer at WebMD with a unique blend of practical development experience and academic research expertise. Currently pursuing my Master's degree in Cyber Security and Digital Forensics at Nigerian Defence Academy, I bring a security-first mindset to software development while building scalable healthcare platforms.

With a stellar academic background (4.53/5.00 CGPA, top 10% of faculty), I've successfully transitioned from cybersecurity research to full-stack development. At WebMD, I collaborate with an 8-person team building healthcare platforms ASPEN CMS, using Drupal and .NET, serving millions of users globally.

My technical expertise spans the full development stack: C#/.NET and PHP for backend systems, Vue.js for modern frontend experiences, and cloud technologies including Docker, Apache Solr, and ELK Stack. I'm passionate about the intersection of cybersecurity and software engineering, ensuring applications are both performant and secure.

As a published researcher in AI ethics and cybersecurity, I bring academic rigor to practical problem-solving. My recent publication in the Journal of Cyber Security explores the ethical implications of AI-driven security systems, reflecting my commitment to responsible technology development.

I thrive on building robust, scalable solutions that make healthcare information more accessible while maintaining the highest security standards (HIPAA, GDPR, etc). When I'm not coding, you'll find me exploring emerging technologies in AI and cybersecurity, contributing to open-source projects, or mentoring fellow developers in the intersection of security and software engineering.`;

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "WebMD",
    companyUrl: "https://www.webmd.com",
    location: "FCT-Abuja, NG",
    startDate: "Nov 2024",
    endDate: "till date",
    description: [
      "Building healthcare content platform with regionally diverse team of engineers, product managers, and QA specialists",
      "Optimized performance and implemented scalable architectures"
    ],
    technologies: ["Drupal","C#", "PHP",".NET", "Vue", "FastAPI", "Apache Solr", "ELK Stack", "Node.js", "RabbitMQ", "Git", "Docker","Linux"]
  }
];

export const education: Education[] = [
  {
    degree: "MS Cyber Security and Digital Forensics",
    institution: "Nigerian Defence Academy",
    institutionUrl: "https://www.nda.edu.ng",
    location: "Kaduna, NG",
    graduatedDate: "2027",
    gpa: "-",
  },
  {
    degree: "BS Cyber Security",
    institution: "Nigerian Army University Biu",
    institutionUrl: "https://naub.edu.ng",
    location: "Biu, NG",
    graduatedDate: "2024",
    gpa: "4.53",
  }
];

export const skills: Skill[] = [
  {
    category: "Languages",
    skills: ["c#", "PHP", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Framework", 
    skills: ["Node.js", "Vue", "Next.js", "dotnet", "FastAPI"],
  },
  {
    category: "Database",
    skills: ["Firestore", "Supabase", "PostgreSQL", "Apache Solr"],
  },
  {
    category: "Developer Tools",
    skills: ["Postman", "Git", "Docker", "VSCode", "Visual Studio", "ClaudeCode", "Asterix", "Builder.io", "RabbitMQ"]
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
    date: "2025"
  },
  {
    title: "Academic Excellence",
    description: "Graduated with 4.53/5.00 CGPA in Bachelor's Cyber Security program at Nigerian Army University Biu, ranking in the top 10% of the faculty",
    date: "2024"
  }
];

export const projects: Project[] = [
  {
    title: "Student Course Registration Management System",
    description: "Designed and implemented a Python-based system for managing student courses",
    technologies: ["PHP Vanilla", "HTML", "JavaScript", "SQL"],
    github: "https://github.com/BashDee/stdmgt",
    highlights: [
      "Full-stack web application for course management",
      "User authentication and role-based access control",
      "Database design for student and course relationships",
      "Responsive UI design for mobile and desktop"
    ]
  },
  {
    title: "Development of Facial Recognition-Based Driver Identification",
    description: "Leveraged machine learning algorithms to build a robust driver authentication system",
    technologies: ["Python", "TensorFlow", "OpenCV", "Git", "Docker"],
    github: "#",
    highlights: [
      "Real-time face detection and recognition system",
      "Machine learning model training and optimization",
      "Computer vision preprocessing pipeline",
      "Dockerized deployment for scalability"
    ]
  },
    {
    title: "Personalised Finance Management App",
    description: "",
    technologies: ["TypeScript", "SupaBase", "OpenCV", "Git", "Docker"],
    github: "https://github.com/BashDee/pers-builder.io",
    highlights: [

    ]
  }
];

export const publications: Publication[] = [
  {
    title: "Ethical Implications of AI-Driven Ethical Hacking: A Systematic Review and Governance Framework",
    authors: ["Hossana Maghiri Sufficient", "Abdulazeez Murtala Mohammed", "Bashir Danjuma"],
    journal: "Journal of Cyber Security",
    year: "2025",
    description: "We established four principal ethical challenges: algorithmic bias, privacy-preserving tensions, accountability gaps, and the dual-use dilemma, and demonstrated how AI’s efficiency gains can nonetheless amplify inequities in under-resourced settings such as rural clinics and small enterprises.",
    type: "journal",
    url: "https://example.com/publication1",
    doi: "10.32604/jcs.2025.066312"
  }
];