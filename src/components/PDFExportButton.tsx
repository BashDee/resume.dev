'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { SelectedSections, exportResumePDF } from '../lib/pdfGenerator';
import {
  personalInfo,
  aboutText,
  experiences,
  education,
  skills,
  achievements,
  projects,
  publications
} from '../data/resumeData';

const SECTION_LABELS = {
  about: 'About',
  experience: 'Professional Experience',
  education: 'Education',
  skills: 'Technical Skills',
  achievements: 'Key Achievements',
  projects: 'Notable Projects',
  publications: 'Publications'
};

export const PDFExportButton: React.FC = () => {
  const [selectedSections, setSelectedSections] = useState<SelectedSections>({
    about: true,
    experience: true,
    education: true,
    skills: true,
    achievements: true,
    projects: true,
    publications: true
  });
  
  const [isExporting, setIsExporting] = useState(false);

  const handleSectionToggle = (section: keyof SelectedSections) => {
    setSelectedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleSelectAll = () => {
    const allSelected = Object.values(selectedSections).every(Boolean);
    const newState = !allSelected;
    
    setSelectedSections({
      about: newState,
      experience: newState,
      education: newState,
      skills: newState,
      achievements: newState,
      projects: newState,
      publications: newState
    });
  };

  const handleExport = async () => {
    // Check if at least one section is selected
    const hasSelectedSections = Object.values(selectedSections).some(Boolean);
    if (!hasSelectedSections) {
      alert('Please select at least one section to export.');
      return;
    }

    setIsExporting(true);
    
    try {
      // Prepare the data
      const resumeData = {
        personalInfo,
        aboutText,
        experiences,
        education,
        skills,
        achievements,
        projects,
        publications
      };
      
      // Generate and download PDF
      exportResumePDF(resumeData, selectedSections);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const getSelectedCount = () => {
    return Object.values(selectedSections).filter(Boolean).length;
  };

  return (
    <section id="pdf-export" className="mt-12">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-white">Export CV as PDF</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Customize Your PDF Export</CardTitle>
          <p className="text-gray-300 mt-2">
            Select which sections to include in your professional CV. The PDF will use a clean, 
            printer-friendly format optimized for hiring managers and ATS systems.
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            {/* Select All Toggle */}
            <div className="flex items-center justify-between pb-4 border-b border-navy-700/50">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="select-all"
                  checked={Object.values(selectedSections).every(Boolean)}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-blue-600 bg-navy-700 border-navy-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="select-all" className="text-white font-medium cursor-pointer">
                  Select All Sections
                </label>
              </div>
              <span className="text-sm text-gray-400">
                {getSelectedCount()} of {Object.keys(selectedSections).length} selected
              </span>
            </div>
            
            {/* Individual Section Checkboxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(SECTION_LABELS).map(([key, label]) => {
                const sectionKey = key as keyof SelectedSections;
                return (
                  <div key={key} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={`section-${key}`}
                      checked={selectedSections[sectionKey]}
                      onChange={() => handleSectionToggle(sectionKey)}
                      className="w-4 h-4 text-blue-600 bg-navy-700 border-navy-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label 
                      htmlFor={`section-${key}`} 
                      className="text-gray-300 cursor-pointer hover:text-white transition-colors"
                    >
                      {label}
                    </label>
                  </div>
                );
              })}
            </div>
            
            {/* Export Info */}
            <div className="bg-navy-900/50 rounded-lg p-4 mt-6">
              <h4 className="text-white font-medium mb-2">📄 PDF Details</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• Professional template with clean typography</li>
                <li>• White background optimized for printing</li>
                <li>• Automatic filename: {personalInfo.name.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, '-')}-CV-{new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}.pdf</li>
                <li>• A4 format with proper margins and spacing</li>
              </ul>
            </div>
            
            {/* Export Button */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={handleExport}
                variant="primary"
                size="lg"
                className={`px-8 ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isExporting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating PDF...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download CV as PDF
                  </span>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};