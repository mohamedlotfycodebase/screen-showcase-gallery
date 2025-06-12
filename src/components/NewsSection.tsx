
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NewsSection = () => {
  const news = [
    {
      title: 'إطلاق مشروع جديد للطاقة المتجددة',
      date: '15 مارس 2024',
      excerpt: 'أعلنت الشركة عن إطلاق مشروع جديد للطاقة الشمسية...',
      image: 'https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=250&fit=crop'
    },
    {
      title: 'توقيع اتفاقية شراكة استراتيجية',
      date: '12 مارس 2024',
      excerpt: 'وقعت الشركة اتفاقية شراكة مع إحدى الجهات الحكومية...',
      image: 'https://images.unsplash.com/photo-1569163139723-de8aa0a48c7a?w=400&h=250&fit=crop'
    },
    {
      title: 'جائزة التميز البيئي لعام 2024',
      date: '10 مارس 2024',
      excerpt: 'حصلت الشركة على جائزة التميز البيئي تقديراً لجهودها...',
      image: 'https://images.unsplash.com/photo-1574263867128-a3d5c1b1decc?w=400&h=250&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الأخبار
          </h2>
          <p className="text-xl text-gray-600">
            آخر الأخبار والتطورات في مجال البيئة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </CardContent>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <p className="text-gray-600">{article.excerpt}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
