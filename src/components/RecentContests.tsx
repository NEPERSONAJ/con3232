import React from 'react';
import { Link } from 'react-router-dom';
import ContestCard from './ContestCard';

const recentContests = [
  {
    id: "1",
    title: "iPhone 15 Pro Max",
    organizer: "@techstore",
    participants: 1234,
    endDate: "2 дня",
    prize: "iPhone",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
  },
  {
    id: "2",
    title: "PlayStation 5",
    organizer: "@gameworld",
    participants: 856,
    endDate: "3 дня",
    prize: "PS5",
    imageUrl: "https://images.unsplash.com/photo-1695653422715-991ec3a9c4ef"
  },
  {
    id: "3",
    title: "MacBook Air M2",
    organizer: "@applestore",
    participants: 2341,
    endDate: "1 день",
    prize: "MacBook",
    imageUrl: "https://images.unsplash.com/photo-1695048132923-3e07300b8601"
  },
  {
    id: "4",
    title: "AirPods Pro",
    organizer: "@musicshop",
    participants: 567,
    endDate: "4 дня",
    prize: "AirPods",
    imageUrl: "https://images.unsplash.com/photo-1695048133181-5b6aa35d07c3"
  },
  {
    id: "5",
    title: "Samsung S23 Ultra",
    organizer: "@samsung",
    participants: 1567,
    endDate: "5 дней",
    prize: "Samsung",
    imageUrl: "https://images.unsplash.com/photo-1695653422520-6ca95f67c46e"
  }
];

export default function RecentContests() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold font-raleway">
            Активные <span className="gradient-text">конкурсы</span>
          </h2>
          <Link 
            to="/contests"
            className="inline-flex items-center space-x-2 text-whatsapp hover:text-whatsapp-dark 
                     font-medium transition-colors duration-300 group">
            <span>Смотреть все</span>
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {recentContests.map((contest) => (
            <ContestCard key={contest.id} {...contest} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link
            to="/contests"
            className="inline-flex items-center justify-center px-6 py-3 
                     bg-gradient-to-r from-whatsapp to-whatsapp-dark
                     text-white rounded-full font-medium hover:shadow-lg 
                     transition-all duration-300 group">
            <span>Посмотреть все конкурсы</span>
            <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}