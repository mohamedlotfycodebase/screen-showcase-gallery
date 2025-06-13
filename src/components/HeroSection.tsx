
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20 min-h-[700px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-right">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              استشارات وتقييم
              <br />
              مشاريع بيئية ونظيفة
              <br />
              في 2030
            </h1>
            <p className="text-2xl md:text-3xl mb-10 opacity-90 leading-relaxed">
              نحن نقدم خدمات استشارية متخصصة في مجال البيئة والتنمية المستدامة
            </p>
            <Button 
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-6 text-xl font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              تعرف أكثر
            </Button>
          </div>

          {/* Image/Visual Content */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-96 lg:w-[450px] lg:h-[450px] overflow-hidden shadow-2xl rounded-lg">
                <img
                  src="/lovable-uploads/48b50aa9-9206-4557-b149-eacb60348bbd.png"
                  alt="البيئة والاستدامة"
                  className="w-full h-full object-contain"
                />
              </div>
              {/* 2030 Badge */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
                <span className="text-teal-600 text-3xl font-bold">2030</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
