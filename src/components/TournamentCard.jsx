import React from 'react'

export default function TournamentCard() {
  return (
   <div className="border border-gray-300 p-4 m-2 rounded-lg bg-white shadow-sm">
      {/* K-n-jbdou s-smiya o naw3 dyal l-ryada mn l-props */}
      <h2 className="font-bold text-xl text-blue-600">{props.titre}</h2>
      <p className="text-gray-500 font-medium">{props.sport}</p> </div>
  )
}
