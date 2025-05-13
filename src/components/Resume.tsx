
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Resume = () => {
  const workExperience = [
    {
      title: "Data Science Intern",
      company: "TCG Digital",
      period: "Sep 2023 - Present",
      description: "Working on data science and machine learning projects, developing AI models, and performing advanced data analytics for clients across various industries.",
      skills: ["Python", "TensorFlow", "Scikit-Learn", "Data Analysis", "Machine Learning"]
    },
    {
      title: "Project Assistant",
      company: "University of Massachusetts Boston",
      period: "Feb 2023 - May 2023",
      description: "Implemented gaze tracking algorithms for multi-modal deep learning project using PyTorch and OpenCV, achieving over 90% accuracy in eye detection and gaze prediction.",
      skills: ["PyTorch", "OpenCV", "Python", "Research", "Deep Learning"]
    },
    {
      title: "Database Engineer Intern",
      company: "Lynchval Systems",
      period: "May 2023 - Aug 2023",
      description: "Developed and maintained database systems, created ETL processes, and built data pipelines for financial applications. Optimized database performance and ensured data integrity.",
      skills: ["MongoDB", "SQL", "Python", "ETL", "Data Pipelines"]
    },
    {
      title: "Full-Stack Developer",
      company: "Curved Pixel LLP",
      period: "Dec 2020 - Sep 2022",
      description: "Designed and developed web applications with focus on front-end UI/UX and back-end functionality. Worked with RESTful APIs, database design, and application deployment.",
      skills: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs"]
    }
  ];
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Massachusetts, Boston",
      period: "2022 - 2024",
      description: "Focused on machine learning, artificial intelligence, and data analytics. Graduated with distinction.",
      courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kalyani University, India",
      period: "2016 - 2020",
      description: "Studied information technology with focus on programming, algorithms, and data structures.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development"]
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
