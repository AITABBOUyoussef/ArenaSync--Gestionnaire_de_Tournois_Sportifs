import React, { useState } from 'react';
import TournamentCard from './TournamentCard';

import { tournaments } from '../data/tournamentDB'; 

export default function Input(props) {
  const [search, setSearch] = useState('');
  
  const matchFiler = tournaments.filter((match) =>
    match.title.toLowerCase().includes(search.toLowerCase())
  );

 
  return (
    <div>
      
      <dir>
          <div class="flex  ml-4 bg-white p-2 rounded-full shadow-sm  w-[90%] border border-gray-100 ">
  
  <span class=" text-gray-500 text-lg  p-1 ml-2">
    <i class="fa-solid fa-magnifying-glass"></i>
  </span>

  <input 
    type="text" 
    placeholder="Rechercher un tournoi..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
    className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500  text-base"
  />

  <button class="bg-[#6151f9] hover:bg-[#4f41d3] p-2 mr-2 text-white w-12 h-10 rounded-xl flex items-center justify-center ">
    <i class="fa-solid fa-sliders"></i>
  </button>

</div>
      </dir>

     
      <div className="flex gap-4 flex-wrap mt-4">
        {matchFiler.length > 0 ? (
          // IF: 
          matchFiler.map((match) => (
            <TournamentCard 
              key={match.id}
              title={match.title} 
              img={match.img}
              sport={match.sport} 
              status={match.status}
              participantsCount={match.participantsCount}
              format={match.format}
              date={match.date}
              location={match.location}
              description={match.description}
              type={match.type}
              click={() => props.setDet(match)} 
            />
          ))
        ) : (
          // ELSE:
          <p className="text-gray-500 ml-5 font-bold">not find "{search}" </p>
        )}
      </div>
    </div>
  );
}