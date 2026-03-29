# Resume Portfolio Project

Professional resume website built with Next.js, TypeScript, and Tailwind CSS.

## Project Checklist

- [x] Verify that the copilot-instructions.md file in the .github directory is created.

- [x] Clarify Project Requirements

- [x] Scaffold the Project

- [x] Customize the Project

- [x] Install Required Extensions

- [x] Compile the Project

- [x] Create and Run Task

- [x] Launch the Project

- [x] Ensure Documentation is Complete

- [x] Implement PDF Export Feature

## Project Summary

This is a modern, responsive resume website featuring:

- **Modern Design**: Professional dark theme with navy blue color palette
- **Interactive Navigation**: Collapsible sidebar with smooth section transitions  
- **Comprehensive Sections**: About, Experience, Education, Skills, Achievements, Projects, Publications
- **PDF Export**: Floating button with modal popup for customizable PDF generation
- **Technology Stack**: Next.js 16.2.1, TypeScript, Tailwind CSS, jsPDF
- **Development Ready**: Live development server, task automation, and build optimization

## PDF Export Implementation

The website now includes a comprehensive PDF export system:
- **Floating Action Button**: Always accessible blue circular button in bottom-right corner
- **Modal Interface**: Clean popup with section selection checkboxes
- **Professional Template**: White background, clean typography, optimized for ATS systems
- **Customizable Export**: Users can select which sections to include in the PDF
- **Smart File Naming**: Auto-generated filename with date: `{Name}-CV-{YYYY-MM-DD}.pdf`
- **Print Optimization**: Proper spacing, margins, and text formatting for professional appearance

## Quick Start

```bash
npm run dev    # Start development server
npm audit        # Check for vulnerabilities
npm run build  # Build for production  
npm run start  # Start production server
```

The project is live at http://localhost:3000

## Architecture

- **Frontend**: Next.js with App Router and TypeScript
- **Styling**: Tailwind CSS with custom component library
- **Data**: Centralized resume data with TypeScript interfaces
- **Components**: Modular UI components with consistent styling
- **PDF Generation**: Client-side PDF creation using jsPDF with professional styling