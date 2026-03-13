import React, { useState } from 'react'
import ParticipantCard from './ParticipantCard';
import { tournaments } from '../data/tournamentDB';
export default function PageDetaile(props) {

   let bgStatus = "bg-red-100" ;
   let textStatus = "";
  
if(props.match.status ==="On Going"){
  bgStatus ='bg-green-500';
  textStatus ='text-green-900';
}else if(props.match.status ==="Upcoming"){
  bgStatus = "bg-blue-800/40";
  textStatus ='text-blue-900';
}else{
  bgStatus = 'bg-orange-500';
  textStatus ='text-orange-900';
}
const [isSubscribed , setIsSubscribed] = useState(false);
const [ nom,setNom ]= useState("");
const [equipe ,setEquipe ]= useState("");
const [ niveau , setNiveau ]= useState("Débutant");
const [participantsList , setParticipantsList] = useState(props.match.participants)
 const color = isSubscribed ? 'bg-red-500'  : 'bg-blue-500' ;
const totalParticipants =  isSubscribed ? props.match.participants.length + 1 : props.match.participants.length;
const nomRegex = /^[a-zA-Z\s]{3,}$/;
const isNomValid = nomRegex.test(nom);

const ajouterParticipant = ()=>{
  const nouveauParticipant = {
    id: Date.now(),
    name : nom,
    status: niveau,
    avatar: "https://ui-avatars.com/api/?name=" + nom + "&background=random"
  };
  setParticipantsList([...participantsList,nouveauParticipant]);
  setIsSubscribed(true);
  setNom("");
  setEquipe("");
};

  return (
    <div className='min-h-screen'>
<div className="border border-gray-300  rounded-lg ml-2 shadow-sm w-[95%] p-3 bg-blue-500/80 ">
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
      <span className={`text-xs flex justify-center items-center font-bold ${bgStatus} ${textStatus}  rounded-4xl w-[40%] h-6`}>
         {props.match.status}
      </span></div></div>
      
      <h3 className="font-light text-xl m-3">{props.match.description}</h3>
      <hr className='w-[90%] ml-5'></hr>
      <div className='flex text-gray-500 m-1 mt-2 gap-2'><i class="fa-solid fa-user-clock"></i><p className="">
         {totalParticipants}  Participants / {props.match.type}
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
  
    <div className="mt-8">
        <h3 className="font-bold text-lg mb-4 text-gray-800">
          Participants List ({participantsList.length})
        </h3>
        
       
        <div className="grid grid-cols-2 gap-3 p-1 m-3">
          {/* {props.match.participants.map((person) => (     nbdloha b participantsList.map*/}
          {participantsList.map((person) => (
            <ParticipantCard 
              key={person.id}
              name={person.name}
              status={person.status}
              image={person.avatar}
              
            />
          ))}
        </div>
       
        
        {/* ---------- FORMULAIRE ---------- */}
        <div className="bg-blue-300 p-4 rounded-lg mb-6 w-[95%] mx-auto shadow-sm border border-blue-600">
          <h4 className="font-bold text-gray-800 mb-3 flex justify-center">Rejoindre le tournoi</h4>
          
          <div className="flex flex-col gap-3">
           
           <div>
             <input 
              type="text" 
              placeholder="Votre Nom (ex: Youssef)" 
              value={nom} 
              onChange={(e) => setNom(e.target.value)} 
             className={`w-full p-2 border rounded focus:outline-none focus:ring-2 
                  ${nom.length > 0 && !isNomValid ? 'border-red-500 focus:ring-red-500' : 'border-blue-600 focus:ring-blue-500'}`}
                  />
                      {nom.length > 0 && !isNomValid && (
                        <p className="text-red-500 text-xs mt-1">Le nom doit contenir au moins 3 lettres et aucun chiffre/symbole.</p>
                      )}
           </div>
          
            <input 
              type="text" 
              placeholder="Nom de l'équipe (Optionnel)" 
              value={equipe} 
              onChange={(e) => setEquipe(e.target.value)} 
              className="p-2 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

             
            <select 
              value={niveau} 
              onChange={(e) => setNiveau(e.target.value)}
              className="p-2 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-300"
            >
              <option value="Débutant">Débutant</option>
              <option value="Amateur">Amateur</option>
              <option value="Pro">Pro</option>
            </select>
          </div>
        </div>
        {/* ----------------------------------------------- */}

       
        <div className="flex justify-center mb-10">
          {/* -------------------- lbtn ----------------- */}
        <button 
          disabled={!isNomValid || nom === ""}
        className={`w-[90%] py-3 text-white font-bold rounded-lg transition-colors 
              ${(!isNomValid || nom === "") ? 'bg-gray-400 cursor-not-allowed' : color}`}

               onClick={()=>{
               if(isSubscribed){setIsSubscribed(false);
                  }else{ajouterParticipant();}
               }}
               >{isSubscribed?"Se désinscrire" :"Valider l'inscription"}</button>
        </div>
      </div>
    
     </div>
     )
}
