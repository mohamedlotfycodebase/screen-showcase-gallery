
import React from 'react';
import Navigation from '../components/Navigation';
import Services from '../components/Services';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ServicesPage = () => {
  const serviceDetails = [
    {
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive evaluation of environmental effects for development projects',
      features: [
        'Site analysis and surveys',
        'Impact prediction and modeling',
        'Mitigation strategy development',
        'Regulatory compliance support'
      ],
      price: 'From $5,000'
    },
    {
      title: 'Sustainability Consulting',
      description: 'Strategic guidance for implementing sustainable business practices',
      features: [
        'Sustainability audits',
        'Green certification assistance',
        'Carbon footprint analysis',
        'Waste reduction strategies'
      ],
      price: 'From $3,000'
    },
    {
      title: 'Environmental Monitoring',
      description: 'Ongoing monitoring and reporting of environmental conditions',
      features: [
        'Air and water quality monitoring',
        'Soil contamination assessment',
        'Biodiversity surveys',
        'Compliance reporting'
      ],
      price: 'From $2,000/month'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Comprehensive environmental solutions designed to meet your specific needs and regulatory requirements
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <Services />

      {/* Detailed Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              Choose from our comprehensive service packages tailored to different project needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceDetails.map((service, index) => (
              <Card 
                key={service.title} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
              We follow a systematic approach to ensure the best outcomes for your environmental projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Initial site evaluation and requirement analysis'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Develop comprehensive project strategy and timeline'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Execute the plan with regular monitoring and updates'
              },
              {
                step: '04',
                title: 'Reporting',
                description: 'Deliver detailed reports and ongoing support'
              }
            ].map((process, index) => (
              <div 
                key={process.step} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
