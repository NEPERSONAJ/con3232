import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <MessageCircle className="h-8 w-8 text-whatsapp" />
              <span className="font-raleway text-2xl font-bold">WaStatus</span>
            </div>
            <p className="text-gray-400">
              Платформа для проведения честных и прозрачных конкурсов в WhatsApp
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Продукт</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-whatsapp transition-colors">Возможности</a></li>
              <li><a href="#how-it-works" className="hover:text-whatsapp transition-colors">Как это работает</a></li>
              <li><a href="#pricing" className="hover:text-whatsapp transition-colors">Тарифы</a></li>
              <li><a href="#faq" className="hover:text-whatsapp transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-whatsapp transition-colors">О нас</a></li>
              <li><a href="/blog" className="hover:text-whatsapp transition-colors">Блог</a></li>
              <li><a href="/privacy" className="hover:text-whatsapp transition-colors">Конфиденциальность</a></li>
              <li><a href="/terms" className="hover:text-whatsapp transition-colors">Условия использования</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-whatsapp" />
                <span>support@wastatus.ru</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-whatsapp" />
                <span>+7928-7777-971</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-whatsapp" />
                <span>Хасавюрт, Россия</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 WaStatus. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-whatsapp text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/terms" className="text-gray-400 hover:text-whatsapp text-sm transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}