
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              استشارات وتقييم
              <br />
              مشتير بيئي ونقيع
              <br />
              في 2030
            </h1>
            <p className="text-xl mb-8 opacity-90">
              نحن نقدم خدمات استشارية متخصصة في مجال البيئة والتنمية المستدامة
            </p>
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-lg">
              تعرف أكثر
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop"
                  alt="البيئة"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-teal-600 text-2xl font-bold">2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
