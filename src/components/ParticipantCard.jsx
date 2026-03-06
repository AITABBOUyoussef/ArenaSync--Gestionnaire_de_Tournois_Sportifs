import React from 'react';

function ParticipantCard(props) {
  const isConfirmed = props.status === 'Confirmed';
  
 
  const bgColor = isConfirmed ? 'bg-green-100/50' : 'bg-orange-50';
  const textColor = isConfirmed ? 'text-green-600' : 'text-orange-500';
  const icon = isConfirmed ? 'fa-solid fa-circle-check' : 'fa-regular fa-clock';

  return (
    <div className={`flex items-center p-3 rounded-2xl ${bgColor}`}>
     
      <img 
        src={props.image} 
        alt={props.name} 
        className="w-10 h-10 rounded-full object-cover mr-3 bg-white"
      />
      
      
      <div>
        <h4 className="font-bold text-sm text-gray-900">{props.name}</h4>
        <p className={`text-xs font-bold mt-0.5 flex items-center gap-1 ${textColor}`}>
          <span>
            <i className={`${icon}`}></i></span> {props.status}
        </p>
      </div>
    </div>
  );
}

export default ParticipantCard;