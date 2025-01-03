import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-whatsapp-dark to-whatsapp p-4">
      <nav className="container mx-auto flex items-center justify-between" aria-label="Главное меню">
        <Link to="/" className="flex items-center space-x-2">
          <MessageCircle className="h-8 w-8 text-white" aria-hidden="true" />
          <span className="font-raleway text-2xl font-bold text-white">WaStatus</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-white hover:text-green-200 transition-colors">
            Возможности
          </Link>
          <Link to="/pricing" className="text-white hover:text-green-200 transition-colors">
            Тарифы
          </Link>
          <Link to="/contests" className="text-white hover:text-green-200 transition-colors">
            Конкурсы
          </Link>
          <Link to="/how-it-works" className="text-white hover:text-green-200 transition-colors">
            Как это работает
          </Link>
        </div>
        <button 
          className="bg-white text-whatsapp px-6 py-2 rounded-full font-semibold hover:bg-green-50 transition-colors"
          aria-label="Войти в личный кабинет">
          Войти
        </button>
      </nav>
    </header>
  );
}