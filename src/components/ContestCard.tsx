import React from 'react';
import { Users, Clock, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ContestCardProps {
  id: string;
  title: string;
  organizer: string;
  participants: number;
  endDate: string;
  prize: string;
  imageUrl: string;
}

export default function ContestCard({ 
  id,
  title, 
  organizer, 
  participants, 
  endDate, 
  prize,
  imageUrl 
}: ContestCardProps) {
  return (
    <Link to={`/contest/${id}`} className="block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <div 
          className="h-48 bg-cover bg-center" 
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">Организатор: {organizer}</p>
          
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="flex items-center space-x-1 text-sm">
              <Users className="w-4 h-4 text-whatsapp" />
              <span>{participants}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Clock className="w-4 h-4 text-whatsapp" />
              <span>{endDate}</span>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Gift className="w-4 h-4 text-whatsapp" />
              <span>{prize}</span>
            </div>
          </div>
          
          <button 
            onClick={(e) => {
              e.preventDefault();
              // Здесь будет логика участия в конкурсе
            }}
            className="w-full bg-gradient-to-r from-whatsapp to-whatsapp-dark 
                     text-white rounded-lg py-2 text-sm font-medium
                     hover:shadow-lg transition-all duration-300">
            Участвовать
          </button>
        </div>
      </div>
    </Link>
  );
}