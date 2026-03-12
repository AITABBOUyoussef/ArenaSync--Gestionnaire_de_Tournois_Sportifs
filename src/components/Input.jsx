import React from 'react'
import React, { useState } from 'react';
import TournamentCard from './TournamentCard';


  export default function Input() {

    const [search, setSearch] = useState('');
     const matchFiler = tournaments.filter((match) =>
    match.title.toLowerCase().includes(search.toLowerCase())
  );
  if(){
     return (
    <div>
         <input 
    type="text" 
    placeholder="Rechercher un tournoi..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
    className="flex-1 bg-transparent border-none outline-none text-gray-800 placeholder-gray-500  text-base"
  />
    </div>
  )
  }
 else if ( matchFiler.length !== 0 ){
return( matchFiler.map((match) => (
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
              click={() => setDet(match)}
            />
          )))
 }else{
 <p className="text-gray-500 ml-5 font-bold">not find "{search}" </p>
} }
