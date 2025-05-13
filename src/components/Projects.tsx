
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Web Application",
      description: "A complete real estate platform with property listings, search functionality, and user authentication. Integrated interactive maps and property filtering.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Google Maps API"],
      liveLink: "#",
      sourceLink: "https://github.com",
      achievements: "Improved search performance by 40% through database indexing and query optimization techniques."
    },
    {
      title: "NLP-Based Web Content Generator",
      description: "Developed an intelligent web content generator using NLP techniques to create coherent and contextually relevant articles based on user prompts.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6",
      technologies: ["Python", "Flask", "Hugging Face Transformers", "NLTK", "React"],
      liveLink: "#",
      sourceLink: "https://github.com",
      achievements: "Implemented advanced text generation models with over 85% coherence rating in user tests."
    },
    {
      title: "Vehicle Damage Assessment System",
      description: "Computer vision system to automatically detect and classify vehicle damage from images, streamlining the insurance claim process.",
      image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask API", "Docker"],
      liveLink: "#",
      sourceLink: "https://github.com",
      achievements: "Achieved 92% accuracy in damage detection and reduced manual assessment time by 60%."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in data science, machine learning, and web development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-portfolio-primary">{project.title}</CardTitle>
                <CardDescription>{project.achievements}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" onClick={() => window.open(project.sourceLink, '_blank')}>
                  <Github className="h-4 w-4 mr-2" /> Code
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.open(project.liveLink, '_blank')}>
                  <ExternalLink className="h-4 w-4 mr-2" /> Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
