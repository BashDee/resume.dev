# Resume Portfolio

A professional resume website built with Next.js, TypeScript, and Tailwind CSS, featuring PDF export functionality.

## Features

- **Modern Design**: Clean, professional layout with dark theme
- **Responsive**: Optimized for mobile and desktop viewing
- **Interactive Navigation**: Smooth transitions between sections
- **PDF Export**: Floating button with modal for customizable PDF generation
- **Professional Sections**:
  - About
  - Experience
  - Education  
  - Skills
  - Achievements
  - Projects
  - Publications

## Technology Stack

- **Frontend**: Next.js 16.2.1 with TypeScript
- **Styling**: Tailwind CSS with custom navy color palette
- **PDF Generation**: jsPDF with professional template styling
- **Icons**: Clean text-based labels for print compatibility
- **Deployment**: Static site generation ready

## PDF Export Feature

The resume includes a sophisticated PDF export system:
- **Floating Button**: Always accessible in bottom-right corner
- **Section Selection**: Modal popup to choose which sections to include
- **Professional Styling**: Clean white background optimized for printing and ATS systems
- **Smart Naming**: Auto-generated filename with date: `{Name}-CV-{YYYY-MM-DD}.pdf`
- **Print-Ready**: Proper spacing, margins, and typography for professional appearance

## Usage

1. **View Resume**: Navigate through sections using the sidebar
2. **Export PDF**: Click the floating blue button in the bottom-right corner
3. **Customize**: Select which sections to include in your PDF export
4. **Download**: Generate and download your professional CV

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit http://localhost:3000 to view the resume website.

## Development

- **Live Reload**: Development server automatically reloads on changes
- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency enforcement
- **Tailwind CSS**: Utility-first CSS framework with custom configuration

## Project Structure

```
resume.dev/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx   # Reusable button component
│   │   │   └── Card.tsx     # Card components
│   │   ├── Resume.tsx       # Main resume component
│   │   └── PDFExportButton.tsx  # Floating PDF export with modal
│   ├── data/
│   │   └── resumeData.ts    # Resume content data
│   ├── lib/
│   │   ├── utils.ts         # Utility functions
│   │   └── pdfGenerator.ts  # PDF generation logic
│   └── types/
│       └── resume.ts        # TypeScript interfaces
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production-ready static site
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Customization

### Updating Resume Content

Edit the data in `src/data/resumeData.ts`:

- **Personal Info**: Contact details and social links
- **Experience**: Work history with descriptions and technologies
- **Education**: Academic background
- **Skills**: Technical skills grouped by category
- **Achievements**: Notable accomplishments
- **Projects**: Portfolio projects with highlights

### Styling

The design uses a custom navy color palette defined in `tailwind.config.ts`. Main colors:
- Navy 950: Deep background
- Navy 900-800: Card backgrounds
- Navy 700-600: Borders and accents
- Blue 400-600: Highlights and accents

### Typography

Uses Inter font from Google Fonts for clean, professional readability.

## Deployment

This project is configured for static site generation:

```bash
npm run build
```

The `next.config.js` includes:
- Static export configuration
- Image optimization settings
- Trailing slash configuration

Deploy the `out/` directory to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with** ❤️ **using Next.js and Tailwind CSS**