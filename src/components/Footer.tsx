
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 space-x-reverse mb-6">
              <img 
                src="/lovable-uploads/edc0689d-4e58-4ced-8d47-33741ed5658c.png" 
                alt="Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-teal-200 mb-6 text-lg leading-relaxed">
              نحن نقدم خدمات استشارية متخصصة في مجال البيئة والتنمية المستدامة
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">الخدمات</h4>
            <ul className="space-y-3 text-teal-200 text-lg">
              <li><Link to="/services" className="hover:text-white transition-colors">الاستشارات البيئية</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">تقييم الأثر البيئي</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">إدارة النفايات</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">الطاقة المتجددة</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">الشركة</h4>
            <ul className="space-y-3 text-teal-200 text-lg">
              <li><Link to="/about" className="hover:text-white transition-colors">من نحن</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">المشاريع</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">الأخبار</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">اتصل بنا</Link></li>
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
          <p>&copy; 2024 جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
