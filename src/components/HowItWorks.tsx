import React from 'react';
import { Smartphone, Users, Trophy, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Smartphone className="w-12 h-12 text-whatsapp" />,
      title: 'Создайте страницу',
      description: 'Зарегистрируйтесь и получите личную страницу конкурса с уникальным адресом'
    },
    {
      icon: <Users className="w-12 h-12 text-whatsapp" />,
      title: 'Настройте условия',
      description: 'Выберите шаблон и настройте правила участия в конкурсе'
    },
    {
      icon: <Trophy className="w-12 h-12 text-whatsapp" />,
      title: 'Запустите конкурс',
      description: 'Отправьте ссылку участникам и следите за процессом в реальном времени'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 font-raleway">
          Как это <span className="gradient-text">работает</span>
        </h2>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block" />
          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center relative z-10">
                  <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-8 h-8 text-whatsapp -translate-y-1/2 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}