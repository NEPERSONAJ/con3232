import React from 'react';
import { Smartphone, Share2, Gift, Users, Clock, Save } from 'lucide-react';

export default function ExampleContest() {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 font-raleway">
            Пример <span className="gradient-text">конкурса</span>
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <div className="bg-gradient-to-r from-whatsapp to-whatsapp-dark p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Розыгрыш iPhone 15 Pro</h3>
                  <p className="text-green-100 text-sm">Организатор: @example_store</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <div className="text-sm font-medium">До конца</div>
                  <div className="text-xl font-bold">2 дня</div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center">
                      <Gift className="w-5 h-5 text-whatsapp mr-2" />
                      Условия участия
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center text-sm bg-gray-50 rounded-lg p-3">
                        <Smartphone className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                        <span>Сохранить номера: +79287777971, +79285344624</span>
                      </li>
                      <li className="flex items-center text-sm bg-gray-50 rounded-lg p-3">
                        <Save className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                        <span>Сохранить под указанным названием: WaStatus.ru</span>
                      </li>
                      <li className="flex items-center text-sm bg-gray-50 rounded-lg p-3">
                        <Share2 className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                        <span>Поставить на статус: текст или медиа-файл с текстом.</span>
                      </li>
                      <li className="flex items-center text-sm bg-gray-50 rounded-lg p-3">
                        <Users className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                        <span>Получить номерок нажав здесь</span>
                      </li>
                      <li className="flex items-center text-sm bg-gray-50 rounded-lg p-3">
                        <Clock className="w-4 h-4 text-whatsapp mr-2 flex-shrink-0" />
                        <span>Дождаться розыгрыша</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-b from-gray-50 to-white p-6 rounded-xl">
                  <div className="text-center space-y-4">
                    <div className="inline-flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                      <Users className="w-5 h-5 text-whatsapp" />
                      <div className="text-2xl font-bold text-gray-900">247</div>
                      <div className="text-sm text-gray-500">участников</div>
                    </div>
                    
                    <div className="space-y-2">
                      <button className="w-full bg-gradient-to-r from-whatsapp to-whatsapp-dark 
                                     text-white px-6 py-3 rounded-xl font-semibold 
                                     hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        Участвовать
                      </button>
                      <p className="text-xs text-gray-500">
                        Нажимая кнопку, вы соглашаетесь с правилами конкурса
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}