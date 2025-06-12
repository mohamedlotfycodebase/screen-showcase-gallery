
import React from 'react';
import { Button } from '@/components/ui/button';

const OpinionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          آراء العملاء
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          ما يقوله عملاؤنا عن خدماتنا وإنجازاتنا
        </p>
        
        <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="flex text-yellow-400 text-2xl">
              ⭐⭐⭐⭐⭐
            </div>
          </div>
          <blockquote className="text-xl text-gray-700 italic mb-6">
            "لقد كان التعامل مع فريق الشركة تجربة رائعة. استطاعوا تقديم حلول مبتكرة وفعالة لمشروعنا البيئي، وحققوا نتائج تفوق توقعاتنا."
          </blockquote>
          <div className="text-gray-900 font-semibold">
            أحمد محمد - مدير المشاريع
          </div>
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
