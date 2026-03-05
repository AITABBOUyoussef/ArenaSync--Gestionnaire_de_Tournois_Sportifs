import React, { useState } from 'react';
import StatusBadge from './StatusBadge';
import ParticipantRow from './ParticipantRow';

const TournamentCard = ({ tournament }) => {
  const [activeTab, setActiveTab] = useState('info');

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300">
      {/* Header dyal la Card */}
      <div className="p-5 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
        <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
          {tournament.sport}
        </span>
        <StatusBadge status={tournament.status} />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-5">{tournament.title}</h3>

        {/* Tab Switcher (US4) */}
        <div className="flex bg-gray-100 p-1 rounded-xl mb-6">
          <button 
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'info' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            INFO
          </button>
          <button 
            onClick={() => setActiveTab('participants')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === 'participants' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            JOUEURS ({tournament.participants.length})
          </button>
        </div>

        {/* Dynamic Content */}
        <div className="min-h-[140px]">
          {activeTab === 'info' ? (
            <div className="space-y-4 animate-in fade-in duration-500">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="p-2 bg-blue-50 rounded-lg text-blue-600">📅</span>
                <span className="font-semibold">{tournament.date}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="p-2 bg-blue-50 rounded-lg text-blue-600">📍</span>
                <span className="font-semibold">{tournament.location}</span>
              </div>
              <p className="text-sm text-gray-500 italic leading-snug mt-2">
                "{tournament.description}"
              </p>
            </div>
          ) : (
            <div className="space-y-1 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
              {tournament.participants.map(p => (
                <ParticipantRow key={p.id} participant={p} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-0 mt-auto">
        <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition-colors shadow-md shadow-gray-200 active:scale-95">
          Gérer le tournoi
        </button>
      </div>
    </div>
  );
};

export default TournamentCard;