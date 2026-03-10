import React, { useState } from 'react';
import TournamentCard from './components/TournamentCard';
import { tournaments } from './data/tournamentDB';
import Header from './components/header';
import PageDetaile from './components/PageDetaile';
function App() {
  const [det, setDet ]= useState(null);
  // const [search , setSearch]=useState("");
  if(det !== null){
    return(
      <PageDetaile match={det} 
      back={()=> setDet(null)}/>
    );
  }
  const matchFiler = tournaments.filter((match)=>
  match.title.toLowerCase().includes(search.toLowerCase()));
  return (
  <div className='p-10 bg-gray-50 min-h-screen'>

       <Header />
      <div className="flex gap-4 flex-wrap">
    
       {/* <TournamentCard 
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
          click={()=> setDet(tournaments[0])}

        />

       <TournamentCard 
          title={tournaments[1].title}
          img={tournaments[1].img}
          sport={tournaments[1].sport} 
          status={tournaments[1].status}
          participantsCount = {tournaments[1].participantsCount}
          format = {tournaments[1].format}
          date = {tournaments[1].date}
          location = {tournaments[1].location}
          description = {tournaments[1].description}
          type={tournaments[1].type}
          click={()=> setDet(tournaments[1])}

        />
        <TournamentCard 
          title={tournaments[2].title} 
           img={tournaments[2].img}
          sport={tournaments[2].sport} 
          status={tournaments[2].status}
          participantsCount = {tournaments[2].participantsCount}
          format = {tournaments[2].format}
          date = {tournaments[2].date}
          location = {tournaments[2].location}
          description = {tournaments[2].description}
          type={tournaments[2].type}
          click={()=> setDet(tournaments[2])}


        /> */}
        {matchFiler.length > 0 ? (
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
              click={()=> setDet(match)}
            />
          ))
        ) : (
          // Ila ma lqa hta match b dik s-smiya
          <p className="text-gray-500 ml-5 font-bold">Makin hta match b had s-smiya "{searchQuery}" 🏜️</p>
        )}
      </div>
    </div>
 
  );
}

export default App;