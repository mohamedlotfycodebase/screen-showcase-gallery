
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
    },
    {
      question: 'ما هي مدة تنفيذ المشاريع؟',
      answer: 'تختلف مدة التنفيذ حسب حجم ونوع المشروع، لكننا نلتزم بالمواعيد المتفق عليها مع العملاء.'
    },
    {
      question: 'هل تقدمون استشارات مجانية؟',
      answer: 'نعم، نقدم استشارة أولية مجانية لتقييم احتياجاتكم وتقديم الحلول المناسبة.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600">
            الأسئلة الشائعة وإجاباتها
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-right hover:no-underline text-lg font-semibold text-gray-900 py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-gray-600 pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
