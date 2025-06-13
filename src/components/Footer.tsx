
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img 
                src="/lovable-uploads/cf6ff528-464f-49e3-9737-e10f5c6ac5ba.png" 
                alt="شعار مركز البحوث البيئية" 
                className="w-12 h-12 bg-white p-2 rounded-full"
              />
              <span className="text-2xl font-bold">مركز البحوث</span>
            </div>
            <p className="text-teal-200 mb-6 text-lg leading-relaxed">
              نحن نقدم خدمات استشارية متخصصة في مجال البيئة والتنمية المستدامة
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">الخدمات</h4>
            <ul className="space-y-3 text-teal-200 text-lg">
              <li>الاستشارات البيئية</li>
              <li>تقييم الأثر البيئي</li>
              <li>إدارة النفايات</li>
              <li>الطاقة المتجددة</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">الشركة</h4>
            <ul className="space-y-3 text-teal-200 text-lg">
              <li>من نحن</li>
              <li>المشاريع</li>
              <li>الأخبار</li>
              <li>اتصل بنا</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">معلومات التواصل</h4>
            <div className="space-y-4 text-teal-200 text-lg">
              <p>123 شارع البيئة</p>
              <p>الرياض، المملكة العربية السعودية</p>
              <p>هاتف: 123-4567-890</p>
              <p>البريد: info@env-center.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-16 pt-10 text-center text-teal-200 text-lg">
          <p>&copy; 2024 مركز البحوث البيئية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
