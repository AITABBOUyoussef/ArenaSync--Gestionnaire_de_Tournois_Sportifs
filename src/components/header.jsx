import React from 'react';
import React, { useState } from 'react';
export default function Header() {
   const [search, setSearch] = useState(''); // Declare search state variable and its setter

  return (
    <div className='bg-blue-500 w-[95%] p-3 rounded-t-3xl flex flex-col gap-2'>
      <div className='flex  justify-between  '>
        <h1 className='w-45  text-xl font-bold text-white '>Good Morning, Samuel Walker!</h1>
        <div className='flex gap-4 items-center mt-2'><div className='rounded-full bg-white/50 w-12 h-12 flex justify-center items-center ml-2'><i class="fa-regular fa-bell" ></i></div>
        <img className='w-12 h-12 rounded-full mr-4' src="https://images.pexels.com/photos/36184064/pexels-photo-36184064.jpeg?_gl=1*r5z7xl*_ga*MTkyNDkzMjI0MS4xNzcyNzk1NTUw*_ga_8JE65Q40S6*czE3NzI3OTc2NjAkbzIkZzEkdDE3NzI3OTkzNjckajQwJGwwJGgw" alt="" />
      </div></div>
      <div class="flex items-center bg-white p-1 rounded-full shadow-sm max-w-md w-[96%] border border-gray-100 ml-2 mt-2">
  
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
    </div>
  )
}
