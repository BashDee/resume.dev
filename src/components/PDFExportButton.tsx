'use client';

import React, { useState } from 'react';
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(false); // Close modal after successful export
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
    <>
      {/* Floating Export Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        title="Export CV as PDF"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div 
              className="fixed inset-0 transition-opacity bg-black bg-opacity-50" 
              onClick={() => setIsModalOpen(false)}
            ></div>

            {/* Modal container */}
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-navy-800 border border-navy-700 shadow-xl rounded-2xl">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Export CV as PDF</h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm">
                  Select which sections to include in your professional CV.
                </p>

                {/* Select All Toggle */}
                <div className="flex items-center justify-between pb-3 border-b border-navy-700">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="select-all-modal"
                      checked={Object.values(selectedSections).every(Boolean)}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 bg-navy-700 border-navy-600 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="select-all-modal" className="text-white font-medium cursor-pointer">
                      Select All
                    </label>
                  </div>
                  <span className="text-sm text-gray-400">
                    {getSelectedCount()}/{Object.keys(selectedSections).length}
                  </span>
                </div>

                {/* Individual Section Checkboxes */}
                <div className="space-y-2">
                  {Object.entries(SECTION_LABELS).map(([key, label]) => {
                    const sectionKey = key as keyof SelectedSections;
                    return (
                      <div key={key} className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          id={`modal-section-${key}`}
                          checked={selectedSections[sectionKey]}
                          onChange={() => handleSectionToggle(sectionKey)}
                          className="w-4 h-4 text-blue-600 bg-navy-700 border-navy-600 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label 
                          htmlFor={`modal-section-${key}`} 
                          className="text-gray-300 cursor-pointer hover:text-white transition-colors text-sm"
                        >
                          {label}
                        </label>
                      </div>
                    );
                  })}
                </div>

                {/* Export Info */}
                <div className="bg-navy-900/50 rounded-lg p-3 mt-4">
                  <h4 className="text-white font-medium text-sm mb-2">📄 PDF Details</h4>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li>• Professional template with clean typography</li>
                    <li>• White background optimized for printing</li>
                    <li>• Filename: {personalInfo.name.replace(/[^a-zA-Z\s]/g, '').replace(/\s+/g, '-')}-CV-{new Date().getFullYear()}-{String(new Date().getMonth() + 1).padStart(2, '0')}-{String(new Date().getDate()).padStart(2, '0')}.pdf</li>
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button
                    onClick={() => setIsModalOpen(false)}
                    variant="secondary"
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleExport}
                    variant="primary"
                    className={`flex-1 ${isExporting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isExporting}
                  >
                    {isExporting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Generating...
                      </span>
                    ) : (
                      'Download PDF'
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};