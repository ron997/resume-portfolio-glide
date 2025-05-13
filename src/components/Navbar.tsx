
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold text-portfolio-primary">Portfolio</div>
        <div className="hidden md:flex space-x-6">
          {["about", "skills", "resume", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-700 hover:text-portfolio-primary transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="block md:hidden">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-portfolio-primary"
          >
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
