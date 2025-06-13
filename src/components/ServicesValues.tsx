
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesValues = () => {
  const services = [
    {
      title: 'توريد معدات وتجهيزات متقدمة',
      description: 'نقدم أحدث المعدات والتجهيزات التقنية المتطورة',
      icon: '🏗️'
    },
    {
      title: 'إنشاء وتشغيل مختبرات ووحدات متنقلة',
      description: 'تصميم وتشغيل مختبرات متخصصة ووحدات متنقلة',
      icon: '🚛'
    },
    {
      title: 'تقديم الاستشارات التقنية والإدارية',
      description: 'خدمات استشارية شاملة في المجالات التقنية والإدارية',
      icon: '⚙️'
    },
    {
      title: 'تطوير المنصات والأنظمة الرقمية',
      description: 'تطوير حلول رقمية متطورة ومنصات تقنية حديثة',
      icon: '💻'
    },
    {
      title: 'إعداد الدراسات والأبحاث',
      description: 'إجراء دراسات علمية متخصصة وأبحاث تطبيقية',
      icon: '📊'
    },
    {
      title: 'الاستشارات الإدارية والفنية',
      description: 'تقديم استشارات متخصصة في المجالين الإداري والفني',
      icon: '🤝'
    }
  ];

  const values = [
    {
      title: 'الجودة والاحترافية',
      description: 'تقديم حلول إبداعية قائمة على الدراسات العلمية والتقنيات الحديثة',
      icon: '🎯'
    },
    {
      title: 'الابتكار المستدام',
      description: 'تقديم حلول إبداعية قائمة على الدراسات العلمية والتقنيات الحديثة',
      icon: '💡'
    },
    {
      title: 'الاستدامة',
      description: 'تقديم حلول إبداعية قائمة على الدراسات العلمية والتقنيات الحديثة',
      icon: '🌱'
    },
    {
      title: 'الشفافية والمسؤولية',
      description: 'تقديم حلول إبداعية قائمة على الدراسات العلمية والتقنيات الحديثة',
      icon: '✅'
    },
    {
      title: 'الشراكة',
      description: 'تقديم حلول إبداعية قائمة على الدراسات العلمية والتقنيات الحديثة',
      icon: '🤝'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600 hover:bg-gray-750 transition-colors">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-center">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-600">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="text-3xl">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logo Section */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-6xl font-bold text-white">قيمنا</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesValues;
