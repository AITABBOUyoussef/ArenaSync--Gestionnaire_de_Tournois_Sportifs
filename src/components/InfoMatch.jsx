import React from 'react';

export default function InfoMatch({ match, participantsCount }) {
   let bgStatus = "bg-red-100";
   let textStatus = "";
  
  if(match.status === "On Going"){
    bgStatus = 'bg-green-500';
    textStatus = 'text-green-900';
  } else if(match.status === "Upcoming"){
    bgStatus = "bg-blue-800/40";
    textStatus = 'text-blue-900';
  } else {
    bgStatus = 'bg-orange-500';
    textStatus = 'text-orange-900';
  }

  return (
    <div className="border border-gray-300 rounded-lg shadow-sm w-[95%] mx-auto p-4 bg-blue-500/80 mt-4 text-white">
      <div className='flex gap-4'>
        <img src={match.img} alt="" className='w-14 h-14 rounded-lg m-2 bg-white object-cover'/>
        <div className='flex flex-col'>
          <h2 className="font-bold text-xl mt-2">{match.title}</h2>
          <span className={`text-xs flex justify-center items-center font-bold ${bgStatus} ${textStatus} rounded-4xl px-3 py-1 mt-1 w-max`}>
            {match.status}
          </span>
        </div>
      </div>
      
      <h3 className="font-light text-xl m-3 text-white/90">{match.description}</h3>
      <hr className='w-[90%] mx-auto border-white/30'></hr>
      
      {/* L-M3loumat */}
      <div className='flex text-white/80 m-1 mt-3 gap-3 ml-4 items-center'>
        <i className="fa-solid fa-user-clock"></i>
        <p>{participantsCount} Participants / {match.type}</p>
      </div>

      <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'>
        <i className="fa-solid fa-trophy"></i>
        <p>{match.format}</p>
      </div>
      
      <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'>
        <i className="fa-regular fa-calendar-days"></i> 
        <p>{match.date}</p>
      </div>
      
      <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'>
        <i className="fa-solid fa-location-dot"></i>
        <p>{match.location}</p>
      </div>
    </div>
  );
}