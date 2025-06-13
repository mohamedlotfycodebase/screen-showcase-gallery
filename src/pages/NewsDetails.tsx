
import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const NewsDetails = () => {
  const { id } = useParams();

  const newsData = {
    1: {
      title: 'إطلاق مشروع جديد للطاقة المتجددة',
      date: '15 مارس 2024',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=800&h=400&fit=crop',
      content: 'أعلنت الشركة عن إطلاق مشروع جديد للطاقة الشمسية في منطقة الرياض، والذي يهدف إلى توليد 100 ميجاوات من الطاقة النظيفة. يأتي هذا المشروع ضمن استراتيجية الشركة لدعم رؤية المملكة 2030 في مجال الطاقة المتجددة. سيساهم المشروع في تقليل الانبعاثات الكربونية بنسبة 25% وتوفير فرص عمل جديدة للمواطنين.',
      author: 'فريق الأخبار'
    },
    2: {
      title: 'توقيع اتفاقية شراكة استراتيجية',
      date: '12 مارس 2024',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=800&h=400&fit=crop',
      content: 'وقعت الشركة اتفاقية شراكة مع إحدى الجهات الحكومية الرائدة لتطوير حلول بيئية مبتكرة. تهدف هذه الشراكة إلى تعزيز التعاون في مجال البحث والتطوير وتبادل الخبرات التقنية. ستشمل الاتفاقية تنفيذ عدة مشاريع تجريبية في مجال إدارة النفايات والطاقة المتجددة.',
      author: 'إدارة العلاقات العامة'
    },
    3: {
      title: 'جائزة التميز البيئي لعام 2024',
      date: '10 مارس 2024',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=800&h=400&fit=crop',
      content: 'حصلت الشركة على جائزة التميز البيئي تقديراً لجهودها المتميزة في مجال حماية البيئة والتنمية المستدامة. تم منح الجائزة خلال المؤتمر السنوي للبيئة والاستدامة، حيث تم تكريم الشركة لمساهمتها في تطوير تقنيات صديقة للبيئة وتحقيق أهداف التنمية المستدامة.',
      author: 'قسم التطوير المستدام'
    }
  };

  const news = newsData[id as keyof typeof newsData];

  if (!news) {
    return (
      <div className="min-h-screen bg-background" dir="rtl">
        <Navigation />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">الخبر غير موجود</h1>
          <p className="text-xl text-gray-600">لم يتم العثور على الخبر المطلوب</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowRight className="mr-2 h-4 w-4" />
              العودة
            </Button>
          </div>

          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {news.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-6">
                <span className="ml-4">{news.date}</span>
                <span>بواسطة: {news.author}</span>
              </div>
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </header>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-xl">
                {news.content}
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetails;
