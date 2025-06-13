
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const OpinionSection = () => {
  const reviews = [
    {
      name: 'أحمد محمد',
      position: 'مدير المشاريع',
      review: 'لقد كان التعامل مع فريق الشركة تجربة رائعة. استطاعوا تقديم حلول مبتكرة وفعالة لمشروعنا البيئي، وحققوا نتائج تفوق توقعاتنا.',
      rating: 5
    },
    {
      name: 'فاطمة علي',
      position: 'مديرة البيئة والاستدامة',
      review: 'خدمة متميزة وفريق محترف. ساعدونا في تطبيق أفضل الممارسات البيئية في شركتنا وحققنا نتائج ممتازة.',
      rating: 5
    },
    {
      name: 'محمد خالد',
      position: 'مسؤول الجودة',
      review: 'استشارة دقيقة ومفصلة، والفريق على قدر عالٍ من الكفاءة والمهنية. أنصح بالتعامل معهم بشدة.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          آراء العملاء
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          ما يقوله عملاؤنا عن خدماتنا وإنجازاتنا
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-gray-50 border-none">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 italic mb-6 text-base leading-relaxed">
                  "{review.review}"
                </blockquote>
                <div className="text-gray-900 font-semibold text-lg">
                  {review.name}
                </div>
                <div className="text-gray-600 text-sm">
                  {review.position}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
            شاركنا رأيك
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpinionSection;
