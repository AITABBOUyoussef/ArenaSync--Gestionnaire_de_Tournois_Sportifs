import React from 'react'

export default function Header() {
  return (
    <div className='bg-blue-500'>
      <div className='flex  justify-between p-2'>
        <h1 className='w-40  text-xl font-bold text-white '>Good Morning, Samuel Walker!</h1>
        <div className='flex gap-4'><div className='rounded-full bg-white/50 w-14 h-12 flex justify-center items-center'><i class="fa-regular fa-bell" ></i></div>
        <img className='w-14 h-12 rounded-full' src="https://images.pexels.com/photos/36184064/pexels-photo-36184064.jpeg?_gl=1*r5z7xl*_ga*MTkyNDkzMjI0MS4xNzcyNzk1NTUw*_ga_8JE65Q40S6*czE3NzI3OTc2NjAkbzIkZzEkdDE3NzI3OTkzNjckajQwJGwwJGgw" alt="" />
      </div></div>
      <div>
        <input type="text" />
      </div>
    </div>
  )
}
