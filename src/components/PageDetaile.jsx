import React from 'react'

export default function PageDetaile(props) {
  return (
<div className="p-10 bg-white min-h-screen">
      {/* Bouton bach n-rej3ou lor */}
      <button 
        onClick={props.back} 
        className="mb-6 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
      >
        ⬅ 
      </button>

      {/* L-M3loumat dyal l-match */}
      <h1 className="text-4xl font-black text-blue-600">{props.match.title}</h1>
      <p className="text-xl text-gray-600 mt-2">Ryada: {props.match.sport}</p>
      
      <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="font-bold">L-Hala: <span className="text-green-600">{props.match.status}</span></p>
        <p className="mt-2">📅 Tarikh: {props.match.date}</p>
        <p className="mt-2">📍 Blasa: {props.match.location}</p>
        <p className="mt-4 text-gray-500 italic">"{props.match.description}"</p>
      </div>
    </div> 
     )
}
