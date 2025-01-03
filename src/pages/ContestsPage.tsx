import React, { useState } from 'react';
import ContestCard from '../components/ContestCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const allContests = [
  {
    title: "iPhone 15 Pro Max",
    organizer: "@techstore",
    participants: 1234,
    endDate: "2 дня",
    prize: "iPhone",
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484d2569"
  },
  {
    title: "PlayStation 5",
    organizer: "@gameworld",
    participants: 856,
    endDate: "3 дня",
    prize: "PS5",
    imageUrl: "https://images.unsplash.com/photo-1695653422715-991ec3a9c4ef"
  },
  {
    title: "MacBook Air M2",
    organizer: "@applestore",
    participants: 2341,
    endDate: "1 день",
    prize: "MacBook",
    imageUrl: "https://images.unsplash.com/photo-1695048132923-3e07300b8601"
  },
  // ... добавьте больше конкурсов
];

export default function ContestsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold font-raleway mb-8">
          Все <span className="gradient-text">конкурсы</span>
        </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Поиск конкурсов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 
                       focus:ring-2 focus:ring-whatsapp focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg 
                         border border-gray-200 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Фильтры</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allContests
            .filter(contest => 
              contest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              contest.organizer.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((contest, index) => (
              <ContestCard key={index} {...contest} />
            ))}
        </div>
      </div>
    </div>
  );
}