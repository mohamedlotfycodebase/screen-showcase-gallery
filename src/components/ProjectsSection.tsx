
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'مشروع الطاقة المتجددة',
      description: 'تطوير حلول الطاقة النظيفة',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'إدارة النفايات الذكية',
      description: 'نظام متطور لإدارة النفايات',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'حماية البيئة البحرية',
      description: 'مشاريع حماية النظم البيئية البحرية',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مشاريعنا
          </h2>
          <p className="text-xl text-gray-600">
            نفخر بإنجازاتنا في مجال البيئة والاستدامة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
