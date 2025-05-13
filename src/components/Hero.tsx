
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-portfolio-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-portfolio-primary">Hello, I'm</span>
            <div className="mt-2">Your Name</div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Front-end Developer & UX Designer creating beautiful, functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-portfolio-primary hover:bg-portfolio-secondary"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                const resumeSection = document.getElementById('resume');
                if (resumeSection) {
                  resumeSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Resume
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" onClick={scrollToAbout}>
          <ArrowDown className="h-6 w-6 text-portfolio-primary" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
