export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  website?: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  graduatedDate: string;
  gpa?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  highlights: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  journal?: string;
  conference?: string;
  year: string;
  doi?: string;
  url?: string;
  description: string;
  type: 'journal' | 'conference' | 'workshop' | 'preprint' | 'other';
}