import React from 'react';
import { Link, Award, Shield, Users } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Честный розыгрыш призов",
      description: "Прозрачная система случайного выбора победителей"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Простое участие",
      description: "Регистрация в один клик по ссылке"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Защита от дублей",
      description: "Проверка уникальности каждого участника"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-raleway mb-4">
            Почему <span className="gradient-text">выбирают нас</span>
          </h2>
          <p className="text-gray-600">Создавайте честные конкурсы без сложностей</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} 
                 className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md 
                           transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-2 rounded-lg bg-whatsapp/10 text-whatsapp 
                              group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}