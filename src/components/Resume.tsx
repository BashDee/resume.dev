'use client';

import React, { useState } from 'react';
import { personalInfo, aboutText, experiences, education, skills, achievements, projects } from '@/data/resumeData';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'projects', label: 'Projects' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'experience':
        return (
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={`exp-${exp.company}-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-blue-400">{exp.title}</CardTitle>
                      <p className="text-lg font-medium text-gray-300 mt-1">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-blue-400">{exp.startDate} - {exp.endDate}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={`desc-${i}-${desc.substring(0,20)}`} className="text-gray-300 text-sm leading-relaxed flex">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={`tech-${tech}-${i}`} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            {/* Timeline Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={`edu-${edu.institution}-${index}`} className="relative flex items-start">
                  {/* Timeline Icon */}
                  <div className="absolute left-4 flex items-center justify-center w-4 h-4 bg-blue-500 rounded-full border-4 border-navy-900 z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="border-l-4 border-l-blue-500">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <CardTitle className="text-blue-400 text-xl">{edu.degree}</CardTitle>
                            <p className="text-lg font-medium text-white mt-1">{edu.institution}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-blue-400">
                            {edu.graduatedDate 
                                ? new Date(edu.graduatedDate) > new Date() 
                                ? `Expected Graduation: ${edu.graduatedDate}`
                                : `Graduated: ${edu.graduatedDate}`
                                : 'Graduation Date N/A'
                            }                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-sm text-gray-400">{edu.location}</p>
                          {edu.gpa && edu.gpa !== '-' && (
                            <p className="text-sm font-medium text-gray-300">GPA: {edu.gpa}</p>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            {skills.map((skillGroup, index) => (
              <Card key={`skill-${skillGroup.category}-${index}`}>
                <CardHeader>
                  <CardTitle className="text-blue-400">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={`skill-${skill}-${i}`} className="px-3 py-1 bg-navy-700/50 text-gray-300 text-sm rounded-full border border-navy-600/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'achievements':
        return (
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={`achievement-${achievement.title}-${index}`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-blue-400">{achievement.title}</CardTitle>
                    {achievement.date && (
                      <p className="text-sm font-medium text-blue-400">{achievement.date}</p>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={`project-${project.title}-${index}`}>
                <CardHeader>
                  <CardTitle className="text-blue-400">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <li key={`highlight-${i}-${highlight.substring(0,15)}`} className="text-gray-300 text-sm flex">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={`proj-tech-${tech}-${i}`} className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-gray-300 leading-relaxed text-sm">
                  {aboutText}
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 to-navy-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 min-h-screen bg-navy-800/30 backdrop-blur-sm border-r border-navy-700/50 p-6">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h1>
            <p className="text-lg text-blue-400 mb-4">{personalInfo.title}</p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-left">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">📧</span>
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">📱</span>
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">🌍</span>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">🔗</span>
                <a href={personalInfo.github} className="text-blue-400 hover:text-blue-300 transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">💼</span>
                <a href={personalInfo.linkedin} className="text-blue-400 hover:text-blue-300 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <button
              onClick={() => setActiveSection('about')}
              className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                activeSection === 'about'
                  ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:bg-navy-700/50 hover:text-white'
              }`}
            >
              About
            </button>
            
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:bg-navy-700/50 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-white capitalize">{activeSection}</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
            </div>
            
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;