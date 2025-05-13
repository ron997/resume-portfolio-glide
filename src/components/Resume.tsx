
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
      period: "Sep 2024 - Present",
      description: "Implemented computer vision and fine-tuned ML models for corrosion detection in metal pipelines with an accuracy of over 90%. Applied computer vision to detect litter and spillage in real time footage using deepsort and YOLO with an accuracy of over 90%. Applied Whisper API and IndicParler TTS to effectively translate soccer commentary from English to Hindi and 3+ computer vision models like YOLOv8 and YOLOv8x-pose to perform pose estimation, keypoint detection and object tracking. Applied an embedding model (Google BERT) and to compare entries in two tables of patient data and set custom weightage scores on the fields to perform data deduplication and store them in a master table with an accuracy of 95%. Extracted and encoded pictogram data from pdf files of two versions and created a new pdf file with new entries using Mistral OCR with an accuracy of over 98%.",
      skills: ["Python", "TensorFlow", "Computer Vision", "Machine Learning", "YOLO", "BERT", "OCR", "Whisper API"]
    },
    {
      title: "Project Assistant, Full-Stack Development Projects",
      company: "UMass Boston",
      period: "Feb 2024 - May 2024",
      description: "Automated the extraction and summarization of medical research articles in a web app using Tensorflow, Gensim and BERT, increasing content accessibility for healthcare professionals by 25%. Developed a desktop app for labeling VAS Data using PyQt5 leading to 15% more accuracy in labeling.",
      skills: ["TensorFlow", "Gensim", "BERT", "PyQt5", "Web Development", "NLP"]
    },
    {
      title: "Database Engineer Intern",
      company: "Lynchval Systems",
      period: "May 2023 - Aug 2025",
      description: "Enhanced Predictive analytics by optimizing SQL database queries, reducing data interval times by 15%.",
      skills: ["SQL", "Database Optimization", "Predictive Analytics"]
    },
    {
      title: "Full-Stack Developer",
      company: "Curved Pixel LLP",
      period: "Dec 2020 - Sep 2022",
      description: "Led the development of 5+ dynamic web pages and 3 complex APIs using Python, React, Javascript, HTML, CSS, MUI, and Flask, enhancing overall system efficiency and user engagement. Improved site response time by 20% through optimized JavaScript and CSS code.",
      skills: ["JavaScript", "React", "Python", "Flask", "HTML", "CSS", "MUI", "API Development"]
    }
  ];
  
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Massachusetts, Boston",
      period: "2022 - 2024",
      description: "Graduation Date: May 2024",
      courses: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Big Data Analytics"]
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kalyani University, India",
      period: "2016 - 2020",
      description: "Graduation Date: Oct 2020",
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
