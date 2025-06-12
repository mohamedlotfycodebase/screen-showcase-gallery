
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Droplets, Wind, Recycle, TreePine, Sun } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Leaf,
      title: 'Environmental Consulting',
      description: 'Expert guidance on environmental impact assessments and sustainability planning for your projects.'
    },
    {
      icon: Droplets,
      title: 'Water Management',
      description: 'Comprehensive water resource management solutions including conservation and quality monitoring.'
    },
    {
      icon: Wind,
      title: 'Air Quality Control',
      description: 'Advanced air quality monitoring and pollution control systems for cleaner environments.'
    },
    {
      icon: Recycle,
      title: 'Waste Management',
      description: 'Innovative waste reduction, recycling, and disposal solutions for sustainable operations.'
    },
    {
      icon: TreePine,
      title: 'Ecosystem Restoration',
      description: 'Restoration and conservation of natural habitats and biodiversity preservation programs.'
    },
    {
      icon: Sun,
      title: 'Renewable Energy',
      description: 'Solar, wind, and other renewable energy solutions for sustainable power generation.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Comprehensive environmental solutions tailored to meet your specific needs and challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
