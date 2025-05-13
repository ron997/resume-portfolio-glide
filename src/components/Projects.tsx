
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Web App",
      description: "Developed a real estate web app with a team of 3 with 5+ back-end components and 7+ front-end components implementing technologies like Flask, Firebase, Postman, AWS and Docker.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      technologies: ["Flask", "Firebase", "Postman", "AWS", "Docker", "React", "JavaScript"],
    },
    {
      title: "NLP Webpage",
      description: "Implemented 2 types of Topic Modeling and Caching using NLP from Mongo Database in a webpage using GENSIM and BERT.",
      image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6",
      technologies: ["GENSIM", "BERT", "MongoDB", "NLP", "JavaScript", "HTML", "CSS"],
    }
  ];

  return (
    <section id="projects" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Here are some of my projects showcasing my skills in full-stack development, data science, and natural language processing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
