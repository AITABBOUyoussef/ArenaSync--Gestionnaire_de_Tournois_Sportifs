import React from 'react';
import StatusBadge from './StatusBadge';

const ParticipantRow = ({ participant }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        {/* Avatar simple avec les initiales */}
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
          {participant.name.charAt(0)}
        </div>
        <span className="text-sm font-medium text-gray-700">
          {participant.name}
        </span>
      </div>
      
      {/* Utilisation du composant StatusBadge existant */}
      <StatusBadge status={participant.status} />
    </div>
  );
};

export default ParticipantRow;