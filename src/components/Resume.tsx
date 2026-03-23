'use client';

import React, { useState, useEffect } from 'react';
import { personalInfo, aboutText, experiences, education, skills, achievements, projects, publications } from '@/data/resumeData';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/Card';

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.5],
        rootMargin: '-100px 0px -50% 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'publications', label: 'Publications' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 to-navy-900">
      <div className="flex">
        {/* Fixed Sidebar */}
        <div className="w-80 min-h-screen bg-navy-800/30 backdrop-blur-sm border-r border-navy-700/50 p-6 fixed">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <img 
              src="profile.jpg" 
              alt={personalInfo.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500 shadow-lg shadow-blue-500/20"
            />
            <h1 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h1>
            <p className="text-lg text-blue-400 mb-4">{personalInfo.title}</p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-left">
              <div className="flex items-center text-sm text-gray-300">
                <span className="w-4 mr-2">📧</span>
                <span className="break-all">{personalInfo.email}</span>
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

          {/* Quick Navigation */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Jump</h3>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-600/20 text-blue-400 border-l-4 border-blue-400'
                    : 'text-gray-300 hover:bg-navy-700/50 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 ml-80 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* About Section */}
            <section id="about">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">About</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {aboutText}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Experience</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={`exp-${exp.company}-${index}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          {exp.logo && (
                            <img 
                              src={exp.logo} 
                              alt={`${exp.company} logo`}
                              className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
                            />
                          )}
                          <div>
                            <CardTitle className="text-blue-400">{exp.title}</CardTitle>
                            <p className="text-lg font-medium text-gray-300 mt-1">
                              {exp.companyUrl ? (
                                <a 
                                  href={exp.companyUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer" 
                                  className="text-gray-300 hover:text-blue-400 transition-colors hover:underline"
                                >
                                  {exp.company}
                                </a>
                              ) : (
                                exp.company
                              )}
                            </p>
                            <p className="text-sm text-gray-400">{exp.location}</p>
                          </div>
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
            </section>

            {/* Education Section */}
            <section id="education">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
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
                            <div className="flex items-start justify-between">
                              <div className="flex items-start gap-4">
                                {edu.logo && (
                                  <img 
                                    src={edu.logo} 
                                    alt={`${edu.institution} logo`}
                                    
                                    className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
                                  />
                                )}
                                  
                              </div>
                              <div className="flex-1">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <CardTitle className="text-blue-400 text-xl">{edu.degree}</CardTitle>
                                      <p className="text-lg font-medium text-white mt-1">
                                        {edu.institutionUrl ? (
                                          <a 
                                            href={edu.institutionUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-white hover:text-blue-400 transition-colors hover:underline"
                                          >
                                            {edu.institution}
                                          </a>
                                        ) : (
                                          edu.institution
                                        )}
                                      </p>
                                    </div>
                                    <div className="text-right">
                                      <p className="text-sm font-medium text-blue-400">
                                      {edu.graduatedDate 
                                          ? new Date(edu.graduatedDate) > new Date() 
                                          ? `Expected Graduation: ${edu.graduatedDate}`
                                          : `Graduated: ${edu.graduatedDate}`
                                          : 'Graduation Date N/A'
                                      }
                                      </p>
                                    </div>
                                  </div>
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
            </section>

            {/* Skills Section */}
            <section id="skills">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Skills</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
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
            </section>

            {/* Achievements Section */}
            <section id="achievements">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Achievements</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
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
            </section>

            {/* Publications Section */}
            <section id="publications">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Publications</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
              <div className="space-y-6">
                {publications.map((publication, index) => (
                  <Card key={`publication-${publication.title.substring(0,20)}-${index}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-blue-400 text-lg leading-tight mb-2">
                            {publication.url ? (
                              <a href={publication.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                                {publication.title}
                              </a>
                            ) : (
                              publication.title
                            )}
                          </CardTitle>
                          <div className="text-gray-300 text-sm mb-1">
                            <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {publication.journal && (
                              <span>{publication.journal} • </span>
                            )}
                            {publication.conference && (
                              <span>{publication.conference} • </span>
                            )}
                            <span>{publication.year}</span>
                            {publication.doi && (
                              <span> • DOI: <a 
                                href={`https://doi.org/${publication.doi}`} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                              >
                                {publication.doi}
                              </a></span>
                            )}
                          </div>
                        </div>
                        <div className="ml-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            publication.type === 'journal' ? 'bg-green-600/20 text-green-300' :
                            publication.type === 'conference' ? 'bg-purple-600/20 text-purple-300' :
                            publication.type === 'workshop' ? 'bg-orange-600/20 text-orange-300' :
                            publication.type === 'preprint' ? 'bg-yellow-600/20 text-yellow-300' :
                            'bg-gray-600/20 text-gray-300'
                          }`}>
                            {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm leading-relaxed">{publication.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-white">Projects</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-2"></div>
              </div>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <Card key={`project-${project.title}-${index}`}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-blue-400 flex-1">
                          {project.github ? (
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-blue-300 transition-colors flex items-center gap-2 group"
                            >
                              <span>{project.title}</span>
                              <svg 
                                className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                              </svg>
                            </a>
                          ) : (
                            project.title
                          )}
                        </CardTitle>
                      </div>
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
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;