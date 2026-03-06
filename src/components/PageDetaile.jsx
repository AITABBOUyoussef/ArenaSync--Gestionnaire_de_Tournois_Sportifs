import React from 'react'

export default function PageDetaile(props) {
  return (
    <div className='min-h-screen'>
<div className="border border-gray-300  rounded-lg ml-2 shadow-sm w-[95%] p-3 bg-blue-500 ">
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
      <span className="text-xs flex justify-center items-center font-bold bg-blue-100 text-blue-800  rounded-4xl w-[40%] h-6">
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
    <div>
        <h4>Participants</h4>
        <div>
            <p>Participants List</p>
            <div className='grid grid-cols-12 gap-1.5'>
                <div className='grid col-span-6 bg-amber-200 m-2 p-1' ></div>
                <div className='grid col-span-6 bg-amber-200 m-2 p-1'>e</div>
            </div>
        </div>
    </div>
    
     </div>
     )
}
