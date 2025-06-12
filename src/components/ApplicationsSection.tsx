
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ApplicationsSection = () => {
  const applications = [
    {
      title: 'تطبيق البيئة',
      description: 'تطبيق ذكي لمراقبة البيئة',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&h=200&fit=crop'
    },
    {
      title: 'نظام إدارة النفايات',
      description: 'حلول متطورة لإدارة النفايات',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop'
    },
    {
      title: 'مراقبة جودة الهواء',
      description: 'أجهزة ذكية لمراقبة الهواء',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=300&h=200&fit=crop'
    },
    {
      title: 'الطاقة المتجددة',
      description: 'حلول الطاقة النظيفة',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=300&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">التطبيقات</h2>
          <p className="text-xl text-teal-100">
            تطبيقات وحلول تقنية متطورة للبيئة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <Card key={index} className="bg-white text-gray-900 overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{app.title}</h3>
                  <p className="text-sm text-gray-600">{app.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
