import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      author: "Александр",
      role: "Владелец магазина",
      content: "Провели уже 5 конкурсов через сервис. Участники довольны прозрачностью, а мы - простотой использования.",
      rating: 5
    },
    {
      author: "Мария",
      role: "Блогер",
      content: "Отличный способ провести честный розыгрыш. Больше никаких вопросов о честности выбора победителей.",
      rating: 5
    },
    {
      author: "Дмитрий",
      role: "Предприниматель",
      content: "Автоматизация процесса экономит кучу времени. Особенно удобны уведомления в Telegram о новых участниках.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-whatsapp-dark/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white font-raleway mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-green-100">
            Что говорят организаторы конкурсов о нашем сервисе
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 
                                      border border-white/10 hover:bg-white/10 
                                      transition-all duration-300">
              <Quote className="w-8 h-8 text-white/20 mb-4" />
              <p className="text-white mb-4 text-sm leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-green-100 text-sm">{testimonial.role}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}