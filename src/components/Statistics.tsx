import React from 'react';
import { TrendingUp, Award, Users, Calendar } from 'lucide-react';

export default function Statistics() {
  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "50,000+",
      label: "Участников",
      description: "приняли участие в конкурсах"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "1,000+",
      label: "Призов",
      description: "разыграно через платформу"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: "98%",
      label: "Успешных",
      description: "конкурсов проведено"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: "24/7",
      label: "Поддержка",
      description: "для организаторов"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md 
                                      transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-2 rounded-lg bg-whatsapp/10 text-whatsapp mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}