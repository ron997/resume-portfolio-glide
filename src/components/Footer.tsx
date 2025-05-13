
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Rounak Burman</h3>
          <p className="text-gray-300 mb-4">Data Science Intern at TCG Digital</p>
          
          <div className="flex justify-center space-x-4 mb-6">
            {/* Social media links would go here */}
            <a href="#" className="hover:text-portfolio-accent transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-portfolio-accent transition-colors">GitHub</a>
            <a href="#" className="hover:text-portfolio-accent transition-colors">Twitter</a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Rounak Burman. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
