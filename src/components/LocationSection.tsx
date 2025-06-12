
import React from 'react';

const LocationSection = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              كيف نصل إلى أفق جديد
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              نحن نؤمن بأن التغيير الحقيقي يبدأ من الاستثمار في التكنولوجيا المتقدمة والابتكار المستمر. فريقنا يعمل على تطوير حلول مبتكرة تساهم في حماية البيئة وتحقيق التنمية المستدامة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              من خلال شراكاتنا الاستراتيجية وخبرتنا الواسعة، نسعى لتحقيق رؤية 2030 وبناء مستقبل أكثر استدامة للجميع.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-teal-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-teal-600 text-4xl">🌍</span>
                </div>
                <h3 className="text-white text-2xl font-bold">رؤية 2030</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
