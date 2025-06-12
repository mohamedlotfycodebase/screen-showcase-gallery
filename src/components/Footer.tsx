
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-teal-800 font-bold text-lg">م</span>
              </div>
              <span className="text-xl font-bold">مركز البحوث</span>
            </div>
            <p className="text-teal-200 mb-4">
              نحن نقدم خدمات استشارية متخصصة في مجال البيئة والتنمية المستدامة
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">الخدمات</h4>
            <ul className="space-y-2 text-teal-200">
              <li>الاستشارات البيئية</li>
              <li>تقييم الأثر البيئي</li>
              <li>إدارة النفايات</li>
              <li>الطاقة المتجددة</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">الشركة</h4>
            <ul className="space-y-2 text-teal-200">
              <li>من نحن</li>
              <li>المشاريع</li>
              <li>الأخبار</li>
              <li>اتصل بنا</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">معلومات التواصل</h4>
            <div className="space-y-3 text-teal-200">
              <p>123 شارع البيئة</p>
              <p>الرياض، المملكة العربية السعودية</p>
              <p>هاتف: 123-4567-890</p>
              <p>البريد: info@env-center.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-12 pt-8 text-center text-teal-200">
          <p>&copy; 2024 مركز البحوث البيئية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
