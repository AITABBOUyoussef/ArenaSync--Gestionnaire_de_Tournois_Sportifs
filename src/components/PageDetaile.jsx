import React from 'react'

export default function PageDetaile(props) {
  return (
<div className="p-10 bg-blue-500 min-h-screen">
      {/* Bouton bach n-rej3ou lor */}
      <button 
        onClick={props.back} 
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </button>
 <div className='flex gap-4'><img src={props.match.img} alt="" className='w-14 h-14 rounded-lg m-2'/>
     <div className='flex flex-col'>
      <h2 className="font-bold text-xl mt-2">{props.match.title}</h2>
      <span className="text-xs flex justify-center items-center font-bold bg-blue-100 text-blue-800  rounded w-[40%] h-6">
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
     )
}
