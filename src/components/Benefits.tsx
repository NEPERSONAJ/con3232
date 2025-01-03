import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    'Уникальная страница для каждого конкурса',
    'Защита от дублирования участников',
    'Прозрачная система выбора победителей',
    'Статистика участия в реальном времени',
    'Удобный интерфейс для участников',
    'Автоматическая нумерация участников',
    'Кастомизация дизайна страницы',
    'Мониторинг активности'
  ];

  return (
    <section className="py-16 bg-whatsapp-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white font-raleway">
            Преимущества платформы
          </h2>
          <p className="text-lg text-green-100">
            Полный набор инструментов для проведения честных конкурсов
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} 
                 className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 
                           hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm leading-tight">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}