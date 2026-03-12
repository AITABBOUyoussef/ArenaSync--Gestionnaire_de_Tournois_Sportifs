import React from 'react'
import { tournaments } from '../data/tournamentDB';

export default function TournamentCard(props) {
   let bgStatus = "bg-red-100" ;
   let textStatus = "";
if(props.status ==="On Going"){
  bgStatus ='bg-green-500/60';
  textStatus ='text-green-900';
}else if(props.status ==="Upcoming"){
  bgStatus = "bg-blue-500/60";
  textStatus ='text-blue-900';
}else{
  bgStatus = 'bg-orange-500/60';
  textStatus ='text-orange-900';
}
  return (
   <div onClick={props.click} className="border border-gray-300  rounded-lg bg-white shadow-sm w-[95%] p-3">

     <div className='flex gap-4'><img src={props.img} alt="" className='w-14 h-14 rounded-lg m-2'/>
     <div className='flex flex-col'>
      <h2 className="font-bold text-xl mt-2">{props.title}</h2>
      <span className={`text-xs flex justify-center items-center font-bold ${bgStatus} ${textStatus}   rounded w-[40%] h-6`}>
         {props.status}
      </span></div></div>
      
      <h3 className="font-light text-xl m-3">{props.description}</h3>
      <hr className='w-[90%] ml-5'></hr>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-user-clock"></i><p className="">
         {props.participantsCount} Participants / {props.type}
      </p></div>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-trophy"></i><p className="">
         {props.format}
      </p></div>
     <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-regular fa-calendar-days"></i> <p className=" ">
         {props.date}
      </p></div>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-location-dot"></i><p className="">
         {props.location}
      </p></div>
      <div className='flex justify-between mx-5'><button><i className="fa-solid fa-plus" ></i> </button>
      <button className='bg-green-400 rounded-4xl p-1  '> m'inscrire/me désinscrire</button>
      </div>
      
    </div>
  )
}
