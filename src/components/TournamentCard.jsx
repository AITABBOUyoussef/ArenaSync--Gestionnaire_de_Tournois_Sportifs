import React from 'react';
import StatusBadge from './StatusBadge';

const TournamentCard = ({ tournament }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3">
      {/* Header: Sport & Status */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
          {tournament.sport}
        </span>
        <StatusBadge status={tournament.status} />
      </div>

      {/* Body: Title & Info */}
      <h3 className="text-lg font-bold text-gray-800 leading-tight">
        {tournament.title}
      </h3>
      
      <div className="text-sm text-gray-500 flex flex-col gap-1">
        <p>📅 {tournament.date}</p>
        <p>📍 {tournament.location}</p>
      </div>

      {/* Footer: Participants Count */}
      <div className="mt-2 pt-3 border-t border-gray-50 flex items-center justify-between text-sm">
        <span className="text-gray-600 font-medium">
          {tournament.participantsCount} Participants
        </span>
        <button className="text-blue-600 font-bold hover:underline">
          Details →
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;