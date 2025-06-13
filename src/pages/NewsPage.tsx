
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const allNews = [
    {
      id: 1,
      title: 'إطلاق مشروع جديد للطاقة المتجددة',
      date: '15 مارس 2024',
      excerpt: 'أعلنت الشركة عن إطلاق مشروع جديد للطاقة الشمسية...',
      content: 'أعلنت شركة مركز البحوث البيئية عن إطلاق مشروع جديد للطاقة الشمسية في المنطقة الشرقية، والذي يهدف إلى توليد 100 ميجاوات من الطاقة النظيفة. يأتي هذا المشروع ضمن رؤية المملكة 2030 للتحول نحو الطاقة المتجددة.',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=600&h=400&fit=crop',
      category: 'طاقة متجددة'
    },
    {
      id: 2,
      title: 'توقيع اتفاقية شراكة استراتيجية',
      date: '12 مارس 2024',
      excerpt: 'وقعت الشركة اتفاقية شراكة مع إحدى الجهات الحكومية...',
      content: 'وقعت شركة مركز البحوث البيئية اتفاقية شراكة استراتيجية مع هيئة البيئة لتطوير برامج الحماية البيئية وتقييم الأثر البيئي للمشاريع التنموية الكبرى في المملكة.',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=600&h=400&fit=crop',
      category: 'شراكات'
    },
    {
      id: 3,
      title: 'جائزة التميز البيئي لعام 2024',
      date: '10 مارس 2024',
      excerpt: 'حصلت الشركة على جائزة التميز البيئي تقديراً لجهودها...',
      content: 'حصلت شركة مركز البحوث البيئية على جائزة التميز البيئي لعام 2024 تقديراً لجهودها المتميزة في مجال حماية البيئة والتنمية المستدامة وإسهاماتها في تحقيق أهداف رؤية المملكة 2030.',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=600&h=400&fit=crop',
      category: 'جوائز'
    },
    {
      id: 4,
      title: 'إطلاق برنامج التدريب البيئي',
      date: '8 مارس 2024',
      excerpt: 'تم إطلاق برنامج تدريبي متخصص في مجال البيئة...',
      content: 'أطلقت الشركة برنامجاً تدريبياً متخصصاً في مجال البيئة والاستدامة يستهدف الخريجين الجدد والمهتمين بالمجال البيئي، ويشمل التدريب النظري والعملي على أحدث التقنيات.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop',
      category: 'تدريب'
    },
    {
      id: 5,
      title: 'مشاركة في المؤتمر الدولي للبيئة',
      date: '5 مارس 2024',
      excerpt: 'شاركت الشركة في المؤتمر الدولي للبيئة والتنمية المستدامة...',
      content: 'شاركت شركة مركز البحوث البيئية في المؤتمر الدولي للبيئة والتنمية المستدامة المقام في دبي، حيث قدمت أوراق عمل حول أحدث التقنيات في مجال إدارة النفايات والطاقة المتجددة.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop',
      category: 'مؤتمرات'
    },
    {
      id: 6,
      title: 'إنجاز مشروع تنظيف الشواطئ',
      date: '1 مارس 2024',
      excerpt: 'تم الانتهاء بنجاح من مشروع تنظيف الشواطئ...',
      content: 'أنجزت الشركة بنجاح مشروع تنظيف وإعادة تأهيل الشواطئ على الساحل الشرقي، والذي استمر لمدة 6 أشهر وشمل إزالة الملوثات وزراعة النباتات البحرية وتركيب أنظمة مراقبة.',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop',
      category: 'مشاريع'
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            الأخبار
          </h1>
          <p className="text-xl opacity-90">
            آخر الأخبار والتطورات في مجال البيئة والاستدامة
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      <Link to={`/news/${article.id}`}>
                        قراءة المزيد
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
