import React from 'react';
import TournamentCard from './components/TournamentCard';
import { tournaments } from './data/tournamentDB';
function App() {
  return (
  <div className='p-10 bg-gray-50 min-h-screen'>
<h1 className="text-3xl font-black mb-8 text-gray-800">ArenaSync</h1>
      
      <div className="flex gap-4 flex-wrap">
        {/* 2. K-n-khdmo b .map() bach n-douzo 3la l-matchat dyalk wahed b wahed */}
       <TournamentCard 
          title={tournaments[0].title} 
          sport={tournaments[0].sport} 
          status={tournaments[0].status}
          participantsCount = {tournaments[0].participantsCount}
          format = {tournaments[0].format}
          date = {tournaments[0].date}
          location = {tournaments[0].location}

        />

        {/* L-Match T-Tani (Ra9m 1) */}
        <TournamentCard 
          title={tournaments[1].title} 
          sport={tournaments[1].sport} 
          status={tournaments[1].status}
        />

        {/* L-Match T-Talt (Ra9m 2) */}
        <TournamentCard 
          title={tournaments[2].title} 
          sport={tournaments[2].sport} 
          status={tournaments[2].status}
        />
      </div>
    </div>
 
  );
}

export default App;