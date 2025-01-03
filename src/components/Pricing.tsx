import React from 'react';
import { Check, Star, Crown } from 'lucide-react';

export default function Pricing() {
  const tiers = [
    {
      name: "Базовый",
      price: "0₽",
      period: "навсегда",
      icon: <Star className="w-5 h-5" />,
      features: [
        "Неограниченное количество участников",
        "Базовые шаблоны конкурсов",
        "Прозрачная система розыгрыша",
        "Автоматическая нумерация",
      ],
      conditions: [
        "Сохранение номера организатора",
        "Сохранение номера сервиса",
      ],
      popular: false,
    },
    {
      name: "Премиум",
      price: "999₽",
      period: "1 конкурс",
      icon: <Crown className="w-5 h-5" />,
      features: [
        "Все функции базового тарифа",
        "Премиум шаблоны",
        "Расширенная статистика",
        "Уведомления в Telegram",
        "ИИ помощник",
      ],
      conditions: [
        "Только номер организатора",
        "Без рекламы сервиса",
      ],
      popular: true,
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-raleway mb-4">
            Простые <span className="gradient-text">тарифы</span>
          </h2>
          <p className="text-gray-600">Начните бесплатно, без скрытых платежей</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name} 
                 className={`relative bg-white rounded-xl transition-all duration-300
                   ${tier.popular ? 'shadow-lg' : 'shadow-sm'}
                   hover:shadow-xl hover:-translate-y-1`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 
                               bg-gradient-to-r from-whatsapp to-accent 
                               text-white px-4 py-1 rounded-full text-sm font-medium">
                  Популярный выбор
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{tier.name}</h3>
                    <div className="flex items-baseline mt-2">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-gray-500 ml-2">/ {tier.period}</span>
                    </div>
                  </div>
                  <div className={`p-2 rounded-lg ${
                    tier.popular ? 'bg-whatsapp text-white' : 'bg-gray-100'
                  }`}>
                    {tier.icon}
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Возможности</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 mb-2">Условия участия</p>
                    <ul className="space-y-2">
                      {tier.conditions.map((condition) => (
                        <li key={condition} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                          <span>{condition}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className={`w-full py-2 rounded-lg text-sm font-medium 
                  transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-whatsapp to-accent text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}>
                  {tier.popular ? 'Купить' : 'Начать бесплатно'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}