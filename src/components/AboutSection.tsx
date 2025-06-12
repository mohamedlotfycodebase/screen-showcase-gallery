
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              عن الشركة
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              نحن شركة رائدة في مجال الاستشارات البيئية والتنمية المستدامة، نسعى لتقديم حلول مبتكرة وفعالة للتحديات البيئية المعاصرة. فريقنا من الخبراء المتخصصين يعمل على تطوير استراتيجيات شاملة لحماية البيئة وضمان التنمية المستدامة.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              منذ تأسيسنا، نلتزم بأعلى معايير الجودة والمهنية في جميع مشاريعنا، ونهدف إلى بناء مستقبل أكثر استدامة للأجيال القادمة.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop"
              alt="عن الشركة"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
