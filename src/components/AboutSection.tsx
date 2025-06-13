
import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              عن الشركة
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-8">
              نحن شركة رائدة في مجال الاستشارات البيئية والتنمية المستدامة، نسعى لتقديم حلول مبتكرة وفعالة للتحديات البيئية المعاصرة. فريقنا من الخبراء المتخصصين يعمل على تطوير استراتيجيات شاملة لحماية البيئة وضمان التنمية المستدامة.
            </p>
            <p className="text-gray-600 text-xl leading-relaxed">
              منذ تأسيسنا، نلتزم بأعلى معايير الجودة والمهنية في جميع مشاريعنا، ونهدف إلى بناء مستقبل أكثر استدامة للأجيال القادمة.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src="/lovable-uploads/7bee46f2-c17b-4f69-b29b-5a4a22175d19.png"
                alt="النمو المستدام"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/lovable-uploads/6bd1c9c3-0f4d-4fa3-b31a-3799b901d1ab.png"
                alt="التكنولوجيا البيئية"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
            <div className="space-y-6 mt-8">
              <img
                src="/lovable-uploads/7cd747f0-d0dd-478c-8ffb-1a8d32210b07.png"
                alt="البيئة المستدامة"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/lovable-uploads/06cd649e-99c7-4a6e-a307-a7e2a3f35dea.png"
                alt="التقنيات الذكية"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
