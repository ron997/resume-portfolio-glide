
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">yourname@example.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+1 (123) 456-7890</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-600">San Francisco, CA, USA</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Follow Me</h3>
              <div className="flex space-x-4">
                {/* Note: In a real implementation, replace these with actual social media icons */}
                <Button variant="outline" size="icon">
                  LinkedIn
                </Button>
                <Button variant="outline" size="icon">
                  GitHub
                </Button>
                <Button variant="outline" size="icon">
                  Twitter
                </Button>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button className="w-full bg-portfolio-primary hover:bg-portfolio-secondary" type="button">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
