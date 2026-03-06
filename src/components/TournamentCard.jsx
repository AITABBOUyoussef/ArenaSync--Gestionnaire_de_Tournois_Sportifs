import React from 'react'

export default function TournamentCard(props) {
  return (
   <div className="border border-gray-300  rounded-lg bg-white shadow-sm w-[95%] p-3">

     <div className='flex gap-4'><img src={props.img} alt="" className='w-14 h-14 rounded-lg m-2'/>
     <div className='flex flex-col'>
      <h2 className="font-bold text-xl mt-2">{props.title}</h2>
      <span className="text-xs font-bold bg-blue-100 text-blue-800 rounded w-[40%] h-6">
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
      
    </div>
  )
}
