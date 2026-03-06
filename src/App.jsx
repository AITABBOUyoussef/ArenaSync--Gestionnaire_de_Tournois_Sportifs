import React from 'react';
import TournamentCard from './components/TournamentCard';
import { tournaments } from './data/tournamentDB';
function App() {
  return (
  <div className='p-10 bg-gray-50 min-h-screen'>
<h1 className="text-3xl font-black mb-8 text-gray-800">ArenaSync</h1>
      
      <div className="flex gap-4 flex-wrap">
    
       <TournamentCard 
          title={tournaments[0].title} 
          img={tournaments[0].img}
          sport={tournaments[0].sport} 
          status={tournaments[0].status}
          participantsCount = {tournaments[0].participantsCount}
          format = {tournaments[0].format}
          date = {tournaments[0].date}
          location = {tournaments[0].location}
          description = {tournaments[0].description}
          type={tournaments[0].type}

        />

       <TournamentCard 
          title={tournaments[1].title} 
          sport={tournaments[1].sport} 
          status={tournaments[1].status}
          participantsCount = {tournaments[1].participantsCount}
          format = {tournaments[1].format}
          date = {tournaments[1].date}
          location = {tournaments[1].location}
          description = {tournaments[1].description}
          type={tournaments[1].type}

        />
        <TournamentCard 
          title={tournaments[2].title} 
          sport={tournaments[2].sport} 
          status={tournaments[2].status}
          participantsCount = {tournaments[2].participantsCount}
          format = {tournaments[2].format}
          date = {tournaments[2].date}
          location = {tournaments[2].location}
          description = {tournaments[2].description}
          type={tournaments[2].type}

        />
      </div>
    </div>
 
  );
}

export default App;