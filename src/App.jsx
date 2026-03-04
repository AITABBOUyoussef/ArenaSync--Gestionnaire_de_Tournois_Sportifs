import React from 'react';
import TournamentCard from './components/TournamentCard';
import { tournaments } from './data/tournamentDB';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Header de l'application */}
      <header className="mb-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">ArenaSync</h1>
        <p className="text-gray-500 mt-1">Tableau de bord des tournois sportifs</p>
      </header>

      {/* Grille des tournois (US1) */}
      <main className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;