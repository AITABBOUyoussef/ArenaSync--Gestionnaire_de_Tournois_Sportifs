import React, { useState } from 'react';
import TournamentCard from './components/TournamentCard';
import { tournaments } from './data/tournamentDB';

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTournaments = tournaments.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-700">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-200">A</div>
              <h1 className="text-4xl font-black tracking-tight text-gray-900">ArenaSync</h1>
            </div>
            <p className="text-gray-500 font-medium">Suivez et gérez vos tournois en temps réel.</p>
          </div>

          {/* Search Bar Pro */}
          <div className="group relative w-full md:w-[400px]">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 group-focus-within:text-blue-500 transition-colors">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Rechercher par titre..."
              className="block w-full pl-11 pr-4 py-4 bg-white border-none rounded-2xl shadow-sm ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Dashboard Grid */}
        <main>
          {filteredTournaments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredTournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[40px] border border-dashed border-gray-200 shadow-sm">
              <span className="text-6xl mb-4">🏜️</span>
              <h2 className="text-xl font-bold text-gray-800">Aucun tournoi trouvé</h2>
              <p className="text-gray-500">Essayez un autre mot-clé.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;