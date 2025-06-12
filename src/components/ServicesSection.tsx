
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'الاستشارات البيئية',
      description: 'تقديم استشارات متخصصة في مجال البيئة',
      icon: '🌱'
    },
    {
      title: 'تقييم الأثر البيئي',
      description: 'دراسات شاملة لتقييم التأثير البيئي',
      icon: '📊'
    },
    {
      title: 'إدارة النفايات',
      description: 'حلول متطورة لإدارة النفايات',
      icon: '♻️'
    },
    {
      title: 'الطاقة المتجددة',
      description: 'تطوير مشاريع الطاقة النظيفة',
      icon: '⚡'
    },
    {
      title: 'مراقبة جودة الهواء',
      description: 'أنظمة مراقبة وتحليل جودة الهواء',
      icon: '🌬️'
    },
    {
      title: 'التنمية المستدامة',
      description: 'استراتيجيات التنمية المستدامة',
      icon: '🏗️'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا</h2>
          <p className="text-xl text-gray-300">
            نقدم مجموعة شاملة من الخدمات البيئية المتخصصة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
