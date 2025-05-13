
import React from 'react';
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-700 mb-6">
              Hello! I'm a passionate Data Science Intern with expertise in Machine Learning, AI, and 
              data analytics. With a strong foundation in computer science and information technology, I develop 
              data-driven solutions and models for real-world problems.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              My journey in data science started during my bachelor's degree and has evolved through various 
              roles in database engineering, full-stack development, and specialized data science projects. 
              I'm constantly exploring new algorithms and techniques to stay at the cutting edge of AI and ML.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="p-4 shadow-md">
                <h3 className="font-bold text-lg mb-2">Education</h3>
                <p className="text-gray-600">MS in Computer Science, UMass Boston</p>
              </Card>
              <Card className="p-4 shadow-md">
                <h3 className="font-bold text-lg mb-2">Experience</h3>
                <p className="text-gray-600">Data Science Intern at TCG Digital</p>
              </Card>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-light">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
