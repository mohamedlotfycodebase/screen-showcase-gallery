
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ProjectDetails = () => {
  const { id } = useParams();

  const projectData = {
    1: {
      title: 'مشروع الطاقة المتجددة',
      description: 'تطوير حلول الطاقة النظيفة والمستدامة',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=400&fit=crop',
      details: 'هذا المشروع يهدف إلى تطوير حلول الطاقة المتجددة المتقدمة باستخدام أحدث التقنيات في مجال الطاقة الشمسية وطاقة الرياح. يشمل المشروع تصميم وتنفيذ أنظمة طاقة متكاملة تساهم في تقليل البصمة الكربونية وتحقيق الاستدامة البيئية.',
      duration: '18 شهر',
      client: 'وزارة الطاقة'
    },
    2: {
      title: 'إدارة النفايات الذكية',
      description: 'نظام متطور لإدارة النفايات',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=800&h=400&fit=crop',
      details: 'مشروع شامل لتطوير نظام ذكي لإدارة النفايات يستخدم تقنيات الذكاء الاصطناعي وإنترنت الأشياء لتحسين عمليات جمع ومعالجة النفايات. يهدف النظام إلى تقليل التكاليف وزيادة الكفاءة في إدارة النفايات.',
      duration: '12 شهر',
      client: 'أمانة المدينة'
    },
    3: {
      title: 'حماية البيئة البحرية',
      description: 'مشاريع حماية النظم البيئية البحرية',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=800&h=400&fit=crop',
      details: 'برنامج متكامل لحماية البيئة البحرية يشمل مراقبة جودة المياه، وحماية الشعاب المرجانية، وإعادة تأهيل النظم البيئية البحرية. يتضمن المشروع استخدام تقنيات متقدمة للمراقبة والتحليل البيئي.',
      duration: '24 شهر',
      client: 'الهيئة العامة للبيئة'
    }
  };

  const project = projectData[id as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">المشروع غير موجود</h1>
          <p className="text-xl text-gray-600">لم يتم العثور على المشروع المطلوب</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowRight className="mr-2 h-4 w-4" />
              العودة
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {project.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">تفاصيل المشروع</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.details}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">مدة التنفيذ</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">العميل</h4>
                    <p className="text-gray-600">{project.client}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
