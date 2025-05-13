
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Resume = () => {
  // In a real application, you would replace these with your actual information
  const workExperience = [
    {
      title: "Senior Front-end Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Lead front-end development for client projects using React, TypeScript, and modern CSS frameworks. Collaborated with UX designers to implement responsive designs and interactive features.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      title: "Web Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      description: "Developed and maintained client websites, implementing responsive designs and ensuring cross-browser compatibility. Worked closely with the design team to create engaging user experiences.",
      skills: ["JavaScript", "HTML/CSS", "WordPress", "jQuery"]
    },
    {
      title: "Junior Developer",
      company: "StartUp Solutions",
      period: "2016 - 2018",
      description: "Assisted in the development of web applications and websites. Responsible for bug fixes, feature implementations, and maintaining code quality.",
      skills: ["JavaScript", "HTML/CSS", "Bootstrap"]
    }
  ];
  
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2012 - 2016",
      description: "Focused on web technologies and user interface design. Graduated with honors.",
      courses: ["Web Development", "User Interface Design", "Database Systems", "Algorithms"]
    },
    {
      degree: "Frontend Development Certificate",
      institution: "Online Tech Academy",
      period: "2015",
      description: "Intensive program covering modern frontend technologies and frameworks.",
      courses: ["React", "JavaScript Advanced", "Responsive Design"]
    }
  ];
  
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
        </div>
        
        <div className="mb-8 text-center">
          <Button className="bg-portfolio-primary hover:bg-portfolio-secondary">
            <ArrowDown className="mr-2 h-4 w-4" /> Download Resume
          </Button>
        </div>
        
        <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 w-full mb-8">
            <TabsTrigger value="experience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="experience" className="space-y-6">
            {workExperience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-primary">{job.title}</h3>
                      <p className="text-gray-700">{job.company}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{job.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-portfolio-primary">{edu.degree}</h3>
                      <p className="text-gray-700">{edu.institution}</p>
                    </div>
                    <span className="text-gray-500 mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <Badge key={i} variant="secondary">{course}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;
