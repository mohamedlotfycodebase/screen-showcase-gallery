
import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: 'شريك 1', logo: '🏢' },
    { name: 'شريك 2', logo: '🏭' },
    { name: 'شريك 3', logo: '🏛️' },
    { name: 'شريك 4', logo: '🏪' },
    { name: 'شريك 5', logo: '🏬' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">شركاؤنا</h2>
          <p className="text-gray-600">نفخر بشراكاتنا مع أفضل المؤسسات</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-2">{partner.logo}</div>
              <div className="text-gray-600">{partner.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
