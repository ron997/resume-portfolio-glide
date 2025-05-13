
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Linkedin, Github, Twitter } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a backend
    console.log("Form submitted:", formState);
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const scheduleCall = () => {
    // In a real implementation, this would redirect to a scheduling tool
    window.open('https://calendly.com', '_blank');
    toast({
      title: "Scheduling a call",
      description: "Redirecting you to my calendar to schedule a meeting.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or interested in my data science expertise? Let's connect and discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">rounak42.rb@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+1 (857) 395-9721</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-600">Boston, MA, USA</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Follow Me</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="h-10 w-10 p-2" onClick={() => window.open('https://linkedin.com/in/rounak-burman', '_blank')}>
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10 p-2" onClick={() => window.open('https://github.com', '_blank')}>
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10 p-2" onClick={() => window.open('https://twitter.com', '_blank')}>
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </div>
            </div>

            <div className="mt-10">
              <Button 
                className="bg-portfolio-primary hover:bg-portfolio-secondary" 
                onClick={scheduleCall}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Button>
            </div>
          </div>

          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input 
                  id="name" 
                  placeholder="Your Name" 
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com" 
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="What is this regarding?" 
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message..." 
                  rows={5} 
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                className="w-full bg-portfolio-primary hover:bg-portfolio-secondary" 
                type="submit"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
