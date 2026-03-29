import jsPDF from 'jspdf';
import {
  PersonalInfo,
  Experience,
  Education,
  Skill,
  Achievement,
  Project,
  Publication
} from '../types/resume';

// PDF styling constants for professional template
const PDF_CONFIG = {
  pageWidth: 210, // A4 width in mm
  pageHeight: 297, // A4 height in mm
  margin: 20,
  lineHeight: 5,
  sectionSpacing: 8,
  itemSpacing: 4,
  colors: {
    primary: '#1a365d', // Navy blue for headings
    secondary: '#2d3748', // Dark gray for subheadings
    text: '#4a5568', // Medium gray for body text
    light: '#718096' // Light gray for meta info
  },
  fonts: {
    heading: { size: 16, weight: 'bold' },
    subheading: { size: 12, weight: 'bold' },
    body: { size: 10, weight: 'normal' },
    small: { size: 9, weight: 'normal' }
  }
};

export interface SelectedSections {
  about: boolean;
  experience: boolean;
  education: boolean;
  skills: boolean;
  achievements: boolean;
  projects: boolean;
  publications: boolean;
}

interface PDFData {
  personalInfo: PersonalInfo;
  aboutText: string;
  experiences: Experience[];
  education: Education[];
  skills: Skill[];
  achievements: Achievement[];
  projects: Project[];
  publications: Publication[];
}

export class PDFGenerator {
  private pdf: jsPDF;
  private currentY: number;
  private readonly contentWidth: number;

  constructor() {
    this.pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    this.currentY = PDF_CONFIG.margin;
    this.contentWidth = PDF_CONFIG.pageWidth - (PDF_CONFIG.margin * 2);
  }

  private checkPageBreak(requiredHeight: number): void {
    if (this.currentY + requiredHeight > PDF_CONFIG.pageHeight - PDF_CONFIG.margin) {
      this.pdf.addPage();
      this.currentY = PDF_CONFIG.margin;
    }
  }

  private addText(text: string, x: number, fontSize: number, fontWeight: string = 'normal', color: string = PDF_CONFIG.colors.text): void {
    this.pdf.setFontSize(fontSize);
    this.pdf.setFont('helvetica', fontWeight);
    this.pdf.setTextColor(color);
    this.pdf.text(text, x, this.currentY);
  }

  private addWrappedText(text: string, x: number, maxWidth: number, fontSize: number, fontWeight: string = 'normal', color: string = PDF_CONFIG.colors.text): void {
    this.pdf.setFont('helvetica', fontWeight);
    this.pdf.setFontSize(fontSize);
    this.pdf.setTextColor(color);
    
    const lines = this.pdf.splitTextToSize(text, maxWidth);
    lines.forEach((line: string) => {
      this.checkPageBreak(PDF_CONFIG.lineHeight);
      this.pdf.text(line, x, this.currentY);
      this.currentY += PDF_CONFIG.lineHeight;
    });
  }

  private addSectionHeader(title: string): void {
    this.checkPageBreak(PDF_CONFIG.fonts.heading.size + PDF_CONFIG.sectionSpacing);
    this.currentY += PDF_CONFIG.sectionSpacing;
    
    this.addText(title.toUpperCase(), PDF_CONFIG.margin, PDF_CONFIG.fonts.heading.size, 'bold', PDF_CONFIG.colors.primary);
    this.currentY += PDF_CONFIG.lineHeight;
    
    // Add underline
    this.pdf.setDrawColor(PDF_CONFIG.colors.primary);
    this.pdf.setLineWidth(0.5);
    this.pdf.line(PDF_CONFIG.margin, this.currentY, PDF_CONFIG.margin + 40, this.currentY);
    this.currentY += PDF_CONFIG.sectionSpacing;
  }

  private generateHeader(personalInfo: PersonalInfo): void {
    // Name
    this.addText(personalInfo.name, PDF_CONFIG.margin, 20, 'bold', PDF_CONFIG.colors.primary);
    this.currentY += PDF_CONFIG.lineHeight + 2;
    
    // Title
    this.addText(personalInfo.title, PDF_CONFIG.margin, PDF_CONFIG.fonts.subheading.size, 'normal', PDF_CONFIG.colors.secondary);
    this.currentY += PDF_CONFIG.lineHeight + 3;
    
    // Contact information
    const contactInfo = [
      `Email: ${personalInfo.email}`,
      `Phone: ${personalInfo.phone}`,
      `Location: ${personalInfo.location}`
    ];
    
    if (personalInfo.website) {
      contactInfo.push(`Website: ${personalInfo.website}`);
    }
    
    contactInfo.forEach(contact => {
      this.addText(contact, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight - 1;
    });
    
    this.currentY += PDF_CONFIG.sectionSpacing;
  }

  private generateAboutSection(aboutText: string): void {
    this.addSectionHeader('About');
    this.addWrappedText(aboutText, PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.body.size);
  }

  private generateExperienceSection(experiences: Experience[]): void {
    this.addSectionHeader('Professional Experience');
    
    experiences.forEach((exp, index) => {
      this.checkPageBreak(20); // Ensure minimum space for each experience item
      
      // Job title on first line
      this.addText(exp.title, PDF_CONFIG.margin, PDF_CONFIG.fonts.subheading.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Company on second line  
      this.addText(`at ${exp.company}`, PDF_CONFIG.margin, PDF_CONFIG.fonts.body.size, 'normal', PDF_CONFIG.colors.text);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Duration and location on separate lines to prevent overlap
      const duration = `${exp.startDate} - ${exp.endDate}`;
      this.addText(duration, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight - 1;
      
      this.addText(exp.location, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight + 1;
      
      // Description bullets
      exp.description.forEach(bullet => {
        this.checkPageBreak(PDF_CONFIG.lineHeight);
        this.addWrappedText(`- ${bullet}`, PDF_CONFIG.margin + 5, this.contentWidth - 5, PDF_CONFIG.fonts.body.size);
        this.currentY += 1;
      });
      
      // Technologies
      if (exp.technologies.length > 0) {
        this.currentY += 2;
        this.addText('Technologies:', PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'bold', PDF_CONFIG.colors.secondary);
        this.currentY += PDF_CONFIG.lineHeight - 1;
        this.addWrappedText(exp.technologies.join(' | '), PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      }
      
      if (index < experiences.length - 1) {
        this.currentY += PDF_CONFIG.itemSpacing;
      }
    });
  }

  private generateEducationSection(education: Education[]): void {
    this.addSectionHeader('Education');
    
    education.forEach((edu, index) => {
      this.checkPageBreak(12);
      
      // Degree
      this.addText(edu.degree, PDF_CONFIG.margin, PDF_CONFIG.fonts.subheading.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Institution on second line
      this.addText(edu.institution, PDF_CONFIG.margin, PDF_CONFIG.fonts.body.size, 'normal', PDF_CONFIG.colors.text);
      this.currentY += PDF_CONFIG.lineHeight - 1;
      
      // Graduation year 
      this.addText(`Graduated: ${edu.graduatedDate}`, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight - 1;
      
      // Location and GPA on separate lines
      this.addText(edu.location, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight - 1;
      
      if (edu.gpa && edu.gpa !== '-') {
        this.addText(`GPA: ${edu.gpa}`, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
        this.currentY += PDF_CONFIG.lineHeight - 1;
      }
      
      if (index < education.length - 1) {
        this.currentY += PDF_CONFIG.itemSpacing;
      }
    });
  }

  private generateSkillsSection(skills: Skill[]): void {
    this.addSectionHeader('Technical Skills');
    
    skills.forEach(skillCategory => {
      this.checkPageBreak(8);
      
      this.addText(`${skillCategory.category}:`, PDF_CONFIG.margin, PDF_CONFIG.fonts.body.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += PDF_CONFIG.lineHeight;
      
      this.addWrappedText(skillCategory.skills.join(' | '), PDF_CONFIG.margin + 5, this.contentWidth - 5, PDF_CONFIG.fonts.body.size, 'normal', PDF_CONFIG.colors.text);
      this.currentY += 2;
    });
  }

  private generateAchievementsSection(achievements: Achievement[]): void {
    this.addSectionHeader('Key Achievements');
    
    achievements.forEach((achievement, index) => {
      this.checkPageBreak(10);
      
      // Title on first line
      this.addText(achievement.title, PDF_CONFIG.margin, PDF_CONFIG.fonts.subheading.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Date on second line
      if (achievement.date) {
        this.addText(`Date: ${achievement.date}`, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
        this.currentY += PDF_CONFIG.lineHeight - 1;
      }
      
      // Description
      this.addWrappedText(achievement.description, PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.body.size);
      
      if (index < achievements.length - 1) {
        this.currentY += PDF_CONFIG.itemSpacing;
      }
    });
  }

  private generateProjectsSection(projects: Project[]): void {
    this.addSectionHeader('Notable Projects');
    
    projects.forEach((project, index) => {
      this.checkPageBreak(12);
      
      // Project title
      this.addText(project.title, PDF_CONFIG.margin, PDF_CONFIG.fonts.subheading.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Description
      this.addWrappedText(project.description, PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.body.size);
      this.currentY += 1;
      
      // Highlights
      if (project.highlights.length > 0) {
        project.highlights.forEach(highlight => {
          this.addWrappedText(`- ${highlight}`, PDF_CONFIG.margin + 5, this.contentWidth - 5, PDF_CONFIG.fonts.body.size);
          this.currentY += 1;
        });
      }
      
      // Technologies
      if (project.technologies.length > 0) {
        this.currentY += 1;
        this.addText('Technologies:', PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'bold', PDF_CONFIG.colors.secondary);
        this.currentY += PDF_CONFIG.lineHeight - 1;
        this.addWrappedText(project.technologies.join(' | '), PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
      }
      
      if (index < projects.length - 1) {
        this.currentY += PDF_CONFIG.itemSpacing;
      }
    });
  }

  private generatePublicationsSection(publications: Publication[]): void {
    this.addSectionHeader('Publications');
    
    publications.forEach((pub, index) => {
      this.checkPageBreak(10);
      
      // Title
      this.addWrappedText(pub.title, PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.subheading.size, 'bold', PDF_CONFIG.colors.secondary);
      this.currentY += 1;
      
      // Authors
      this.addWrappedText(pub.authors.join(', '), PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.body.size, 'italic', PDF_CONFIG.colors.text);
      this.currentY += 1;
      
      // Journal/Conference and year
      const venue = pub.journal || pub.conference || 'Independent Publication';
      this.addText(`${venue} (${pub.year})`, PDF_CONFIG.margin, PDF_CONFIG.fonts.body.size, 'normal', PDF_CONFIG.colors.light);
      this.currentY += PDF_CONFIG.lineHeight;
      
      // Description
      if (pub.description) {
        this.addWrappedText(pub.description, PDF_CONFIG.margin, this.contentWidth, PDF_CONFIG.fonts.body.size);
      }
      
      // DOI
      if (pub.doi) {
        this.currentY += 1;
        this.addText(`DOI: ${pub.doi}`, PDF_CONFIG.margin, PDF_CONFIG.fonts.small.size, 'normal', PDF_CONFIG.colors.light);
        this.currentY += PDF_CONFIG.lineHeight;
      }
      
      if (index < publications.length - 1) {
        this.currentY += PDF_CONFIG.itemSpacing;
      }
    });
  }

  public generatePDF(data: PDFData, selectedSections: SelectedSections): void {
    // Generate header (always included)
    this.generateHeader(data.personalInfo);
    
    // Generate selected sections
    if (selectedSections.about) {
      this.generateAboutSection(data.aboutText);
    }
    
    if (selectedSections.experience) {
      this.generateExperienceSection(data.experiences);
    }
    
    if (selectedSections.education) {
      this.generateEducationSection(data.education);
    }
    
    if (selectedSections.skills) {
      this.generateSkillsSection(data.skills);
    }
    
    if (selectedSections.achievements) {
      this.generateAchievementsSection(data.achievements);
    }
    
    if (selectedSections.projects) {
      this.generateProjectsSection(data.projects);
    }
    
    if (selectedSections.publications) {
      this.generatePublicationsSection(data.publications);
    }
  }

  public downloadPDF(filename: string): void {
    this.pdf.save(filename);
  }
}

export function generateResumeFilename(personalInfo: PersonalInfo): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Clean the name for filename
  const cleanName = personalInfo.name.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, '-');
  
  return `${cleanName}-CV-${year}-${month}-${day}.pdf`;
}

export function exportResumePDF(data: PDFData, selectedSections: SelectedSections): void {
  const generator = new PDFGenerator();
  generator.generatePDF(data, selectedSections);
  
  const filename = generateResumeFilename(data.personalInfo);
  generator.downloadPDF(filename);
}