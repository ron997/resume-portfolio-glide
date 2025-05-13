
import React from 'react';
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 95 },
    { name: "Scikit-Learn", level: 90 },
    { name: "TensorFlow/PyTorch", level: 85 },
    { name: "Data Analysis (Pandas/NumPy)", level: 90 },
    { name: "MongoDB/SQL", level: 85 },
    { name: "Flask API/AWS", level: 80 },
    { name: "OpenCV/NLP", level: 75 }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Research", level: 90 },
    { name: "Project Management", level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-portfolio-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            I've developed expertise in data science, machine learning, and software development throughout my career. Here's an overview of my technical proficiencies and soft skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Technical Skills</h3>
            <div className="space-y-8">
              {technicalSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Slider 
                    defaultValue={[skill.level]} 
                    max={100} 
                    step={1} 
                    disabled
                    className="cursor-default"
                  />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-portfolio-primary">Soft Skills</h3>
            <div className="space-y-8">
              {softSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-portfolio-primary font-semibold">{skill.level}%</span>
                  </div>
                  <Slider 
                    defaultValue={[skill.level]} 
                    max={100} 
                    step={1} 
                    disabled
                    className="cursor-default"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
