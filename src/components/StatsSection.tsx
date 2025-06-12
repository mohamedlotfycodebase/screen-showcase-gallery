
import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '2005+', label: 'سنة خبرة' },
    { number: '238+', label: 'مشروع مكتمل' },
    { number: '238', label: 'عميل راضي' },
    { number: '300+', label: 'استشاري' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
