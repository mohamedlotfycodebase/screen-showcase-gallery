
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QuestionsSection = () => {
  const questions = [
    {
      question: 'ما هي الخدمات التي تقدمونها؟',
      answer: 'نقدم مجموعة شاملة من الخدمات البيئية بما في ذلك الاستشارات البيئية وتقييم الأثر البيئي وإدارة النفايات.'
    },
    {
      question: 'كيف يمكنني التواصل معكم؟',
      answer: 'يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني أو زيارة مكاتبنا.'
    },
    {
      question: 'هل تقدمون خدمات للقطاع الخاص؟',
      answer: 'نعم، نقدم خدماتنا لكل من القطاع الحكومي والخاص والمؤسسات غير الربحية.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الأسئلة
          </h2>
          <p className="text-xl text-gray-600">
            الأسئلة الشائعة وإجاباتها
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((item, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-teal-600">
                  {item.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
