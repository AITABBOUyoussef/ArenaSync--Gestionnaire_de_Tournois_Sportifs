import React from 'react'

export default function TournamentCard(props) {
  return (
   <div className="border border-gray-300 p-4 m-2 rounded-lg bg-white shadow-sm w-72">
<div>{props.img}</div>
      <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">
        {props.sport}
      </span>
      <h2 className="font-bold text-xl mt-3">{props.title}</h2>
      <p className="text-gray-500 font-medium mt-1">
         {props.status}
      </p>
      <h3 className="font-bold text-xl mt-3">{props.description}</h3>
      
      <p className="text-gray-500 font-medium mt-1">
         {props.participantsCount} ° {props.type}
      </p>
      <p className="text-gray-500 font-medium mt-1">
         {props.format}
      </p>
      <p className="text-gray-500 font-medium mt-1">
         {props.date}
      </p>
      <p className="text-gray-500 font-medium mt-1">
         {props.location}
      </p>
      
    </div>
  )
}
