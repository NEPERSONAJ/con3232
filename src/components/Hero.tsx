import React from 'react';
import { Trophy, Users, Lock, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-whatsapp to-white min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-raleway animate-fade-in">
            Простой способ провести честный конкурс в WhatsApp
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            Без сложных настроек и заморочек. Создайте страницу конкурса за 2 минуты
            и получите готовый инструмент для розыгрыша
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Feature text="Бесплатно для небольших конкурсов" />
            <Feature text="Работает на телефоне и компьютере" />
            <Feature text="Не нужно скачивать приложения" />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <button className="relative overflow-hidden group bg-white px-8 py-4 rounded-full font-semibold text-whatsapp transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-lg">
              <span className="relative z-10">Создать конкурс бесплатно</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white via-green-50 to-white bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="relative overflow-hidden group px-8 py-4 rounded-full font-semibold text-white border-2 border-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] text-lg">
              <span className="relative z-10">Посмотреть как это работает</span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Trophy className="w-6 h-6" />}
              title="Честный розыгрыш"
              description="Прозрачная система случайного выбора победителей без подкруток"
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Простое участие"
              description="Быстрая регистрация по ссылке без установки приложений"
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="Защита от накруток"
              description="Умная проверка участников и блокировка ботов"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
      <CheckCircle2 className="w-5 h-5 text-white" />
      <span className="text-white font-medium">{text}</span>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-r from-whatsapp/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-whatsapp/10 to-whatsapp/20 text-whatsapp">
            {icon}
          </div>
          <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}