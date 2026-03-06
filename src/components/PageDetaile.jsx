import React from 'react'
import ParticipantCard from './ParticipantCard';
// import { tournaments } from './data/tournamentDB';
import { tournaments } from '../data/tournamentDB';
// import TournamentCard from './TournamentCard';
export default function PageDetaile(props) {

   let bgStatus = "bg-red-100" ;
   let textStatus = "";
if(props.match.status ==="On Going"){
  bgStatus ='bg-green-500';
  textStatus ='text-green-900';
}else if(props.match.status ==="Upcoming"){
  bgStatus = "bg-blue-800/40";
  textStatus ='text-blue-900';
}else{
  bgStatus = 'bg-orange-500';
  textStatus ='text-orange-900';
}

  return (
    <div className='min-h-screen'>
<div className="border border-gray-300  rounded-lg ml-2 shadow-sm w-[95%] p-3 bg-blue-500/80 ">
      <div className='mb-6  py-2 px-4 flex justify-around  w-full'>
      <button 
        onClick={props.back} 
        className=" hover:bg-gray-100/30  text-gray-800 font-bold w-[10%] py-2 rounded"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
     
      <p className='flex justify-center items-center text-center font-bold text-2xl'>Tournament</p>
      <div className='w-[10%]'></div>
      </div>
 <div className='flex gap-4'><img src={props.match.img} alt="" className='w-14 h-14 rounded-lg m-2'/>
     <div className='flex flex-col'>
      <h2 className="font-bold text-xl mt-2">{props.match.title}</h2>
      <span className={`text-xs flex justify-center items-center font-bold ${bgStatus} ${textStatus}  rounded-4xl w-[40%] h-6`}>
         {props.match.status}
      </span></div></div>
      
      <h3 className="font-light text-xl m-3">{props.match.description}</h3>
      <hr className='w-[90%] ml-5'></hr>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-user-clock"></i><p className="">
         {props.match.participantsCount} Participants / {props.match.type}
      </p></div>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-trophy"></i><p className="">
         {props.match.format}
      </p></div>
     <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-regular fa-calendar-days"></i> <p className=" ">
         {props.match.date}
      </p></div>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-location-dot"></i><p className="">
         {props.match.location}
      </p></div>
      
    </div>
  
    <div className="mt-8">
        <h3 className="font-bold text-lg mb-4 text-gray-800">
          Participants List ({props.match.participants.length})
        </h3>
        
       
        <div className="grid grid-cols-2 gap-3 p-1 m-3">
          {props.match.participants.map((person) => (
            <ParticipantCard 
              key={person.id}
              name={person.name}
              status={person.status}
              image={person.avatar}
            />
          ))}
        </div>
      </div>
    
     </div>
     )
}
