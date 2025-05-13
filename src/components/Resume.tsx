
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Resume = () => {
  const workExperience = [
    {
      title: "Data Science Intern",
      company: "TCG Digital",
      period: "Sep 2023 - Present",
      description: "Streamlining and enhancing the image data pipeline for ML algorithms, resulting in improved accuracy of dent and scratch detection in vehicles. Reducing data processing time by over 30% and enhancing the dataset quality. Collaborating with cross-functional teams to implement computer vision solutions across multiple business domains.",
      skills: ["Python", "TensorFlow", "Computer Vision", "Data Pipeline", "Machine Learning", "OpenCV"]
    },
    {
      title: "Project Assistant",
      company: "University of Massachusetts Boston",
      period: "Feb 2023 - Jul 2023",
      description: "Developed and implemented gaze tracking algorithms achieving 90% accuracy in eye detection. Processed over 10GB of video data to extract user behavior patterns using deep learning and computer vision techniques. Created optimized data pipelines for multi-modal machine learning models.",
      skills: ["PyTorch", "OpenCV", "Python", "Deep Learning", "Computer Vision", "Data Analysis"]
    },
    {
      title: "Database Engineer Intern",
      company: "Lynchval Systems",
      period: "Aug 2022 - May 2023",
      description: "Enhanced database performance by optimizing SQL queries, reducing execution time by 25%. Developed and maintained ETL pipelines for financial applications ensuring data integrity and consistency. Created and documented database schemas and procedures for team-wide use.",
      skills: ["MongoDB", "SQL", "Python", "ETL", "Data Pipelines", "Database Design"]
    },
    {
      title: "Full-Stack Developer",
      company: "Curved Pixel LLP",
      period: "Dec 2020 - Sep 2022",
      description: "Led the development of multiple client-facing web applications from concept to deployment. Improved API performance by 40% through code optimization and implementing efficient caching strategies. Designed and integrated database schemas, resulting in improved data management and retrieval efficiency.",
      skills: ["JavaScript", "Node.js", "React", "MongoDB", "REST APIs", "Express.js"]
    }
  ];
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Massachusetts, Boston",
      period: "2022 - 2024",
      description: "GPA: 3.9/4.0. Focus on machine learning, artificial intelligence, and data analytics.",
      courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Big Data Analytics"]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kalyani University, India",
      period: "2016 - 2020",
      description: "GPA: 9.02/10.0. Focus on programming, algorithms, and data structures.",
      courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "Software Engineering"]
    }
  ];

  const handleDownloadResume = () => {
    // In a real implementation, this would be a direct link to your resume file
    toast({
      title: "Resume download",
      description: "Your resume would start downloading now.",
    });
  };
  
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
        </div>
        
        <div className="mb-8 text-center">
          <Button 
            className="bg-portfolio-primary hover:bg-portfolio-secondary"
            onClick={handleDownloadResume}
          >
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
