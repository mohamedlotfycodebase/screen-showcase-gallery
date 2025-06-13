
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: 'مشروع الطاقة المتجددة',
      description: 'تطوير حلول الطاقة النظيفة والمستدامة',
      fullDescription: 'مشروع شامل لتطوير أنظمة الطاقة الشمسية وطاقة الرياح بهدف تقليل الانبعاثات الكربونية وتوفير طاقة نظيفة ومستدامة للمجتمعات المحلية.',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&h=400&fit=crop',
      duration: '18 شهر',
      client: 'وزارة البيئة',
      status: 'مكتمل'
    },
    {
      id: 2,
      title: 'إدارة النفايات الذكية',
      description: 'نظام متطور لإدارة النفايات والتدوير',
      fullDescription: 'تطوير نظام ذكي لإدارة النفايات يتضمن تقنيات متقدمة للفرز والتدوير وتقليل النفايات، مما يساهم في حماية البيئة وتعزيز الاقتصاد الدائري.',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=600&h=400&fit=crop',
      duration: '12 شهر',
      client: 'بلدية الرياض',
      status: 'قيد التنفيذ'
    },
    {
      id: 3,
      title: 'حماية البيئة البحرية',
      description: 'مشاريع حماية النظم البيئية البحرية',
      fullDescription: 'برنامج شامل لحماية وإعادة تأهيل البيئة البحرية يشمل مراقبة جودة المياه وحماية الشعاب المرجانية والحياة البحرية.',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=600&h=400&fit=crop',
      duration: '24 شهر',
      client: 'هيئة البيئة',
      status: 'مكتمل'
    },
    {
      id: 4,
      title: 'الزراعة المستدامة',
      description: 'تطوير أنظمة الزراعة المستدامة والعضوية',
      fullDescription: 'مشروع لتطوير تقنيات الزراعة المستدامة والعضوية التي تحافظ على خصوبة التربة وتقلل من استخدام المبيدات الكيماوية.',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
      duration: '15 شهر',
      client: 'وزارة الزراعة',
      status: 'قيد التنفيذ'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            مشاريعنا
          </h1>
          <p className="text-xl opacity-90">
            نفخر بإنجازاتنا في مجال البيئة والتنمية المستدامة
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  <p className="text-gray-600 mb-4">{project.fullDescription}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold">المدة:</span>
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">العميل:</span>
                      <span>{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">الحالة:</span>
                      <span className={project.status === 'مكتمل' ? 'text-green-600' : 'text-blue-600'}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="mt-4 w-full bg-teal-600 hover:bg-teal-700">
                    <Link to={`/project/${project.id}`}>
                      عرض التفاصيل
                    </Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
