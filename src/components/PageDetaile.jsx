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

  // 1. GESTION DES ONGLETS (TABS)
  const [activeTab, setActiveTab] = useState("info");

  // 2. ÉTATS DU FORMULAIRE ET DES PARTICIPANTS (avec sauvegarde dans props.match)
  const [isSubscribed , setIsSubscribed] = useState(props.match.isSubscribed || false);
  const [ nom,setNom ]= useState("");
  const [equipe ,setEquipe ]= useState("");
  const [ niveau , setNiveau ]= useState("Débutant");
  const [participantsList , setParticipantsList] = useState(props.match.participants);
  
  // 3. IDENTIFIANT DU PARTICIPANT (sauvegardé dans props.match)
  const [monId, setMonId] = useState(props.match.monId || null);

  const color = isSubscribed ? 'bg-red-500'  : 'bg-blue-500' ;
  const nomRegex = /^[a-zA-Z\s]{3,}$/;
  const isNomValid = nomRegex.test(nom);

  const ajouterParticipant = ()=>{
    const newId = Date.now();
    const nouveauParticipant = {
      id: newId,
      name : nom,
      status: niveau,
      avatar: "https://ui-avatars.com/api/?name=" + nom + "&background=random"
    };
    
    props.match.participants.push(nouveauParticipant);
    
    // Sauvegarde des données dans l'objet match pour la persistance
    props.match.isSubscribed = true;
    props.match.monId = newId;

    setParticipantsList([...participantsList, nouveauParticipant]);
    setIsSubscribed(true);
    setMonId(newId);
    setNom("");
    setEquipe("");

    // Redirection automatique vers l'onglet des participants
    setActiveTab("participants");
  };

  const supprimerParticipant = () => {
    // Suppression dans l'affichage local
    const listeJdida = participantsList.filter(person => person.id !== monId);
    setParticipantsList(listeJdida);

    // Suppression dans la base de données factice (props)
    const index = props.match.participants.findIndex(person => person.id === monId);
    if(index !== -1) {
      props.match.participants.splice(index, 1);
    }

    // Réinitialisation de la sauvegarde dans le match
    props.match.isSubscribed = false;
    props.match.monId = null;

    setIsSubscribed(false);
    setMonId(null);
  };

  return (
    <div className='min-h-screen bg-gray-50 pb-10'>
      
      {/* --- EN-TÊTE ET BOUTON RETOUR --- */}
      <div className='py-4 px-4 flex items-center w-full bg-white shadow-sm mb-4'>
        <button onClick={props.back} className="hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg flex gap-2 items-center">
          <i className="fa-solid fa-arrow-left"></i> Retour
        </button>
        <p className='flex-1 text-center font-bold text-xl mr-8'>Tournoi</p>
      </div>

      {/* --- ONGLETS --- */}
      <div className="flex justify-center gap-3 my-6 px-2 flex-wrap">
        <button 
          onClick={() => setActiveTab("info")}
          className={`px-4 py-2 font-bold rounded-lg transition-colors text-sm ${activeTab === "info" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
        >Infos</button>
        <button 
          onClick={() => setActiveTab("participants")}
          className={`px-4 py-2 font-bold rounded-lg transition-colors text-sm ${activeTab === "participants" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
        >Participants ({participantsList.length})</button>
        <button 
          onClick={() => setActiveTab("inscription")}
          className={`px-4 py-2 font-bold rounded-lg transition-colors text-sm ${activeTab === "inscription" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
        >S'inscrire</button>
      </div>

      {/* --- CONTENU 1 : INFORMATIONS --- */}
      {activeTab === "info" && (
        <div className="border border-gray-300 rounded-lg shadow-sm w-[95%] mx-auto p-4 bg-blue-500/80 text-white animate-fade-in">
          <div className='flex gap-4'>
            <img src={props.match.img} alt="" className='w-14 h-14 rounded-lg m-2 bg-white object-cover'/>
            <div className='flex flex-col'>
              <h2 className="font-bold text-xl mt-2">{props.match.title}</h2>
              <span className={`text-xs flex justify-center items-center font-bold ${bgStatus} ${textStatus} rounded-4xl px-3 py-1 mt-1 w-max`}>
                {props.match.status}
              </span>
            </div>
          </div>
          <h3 className="font-light text-xl m-3 text-white/90">{props.match.description}</h3>
          <hr className='w-[90%] mx-auto border-white/30'></hr>
          <div className='flex text-white/80 m-1 mt-3 gap-3 ml-4 items-center'><i className="fa-solid fa-user-clock"></i><p>{participantsList.length} Participants / {props.match.type}</p></div>
          <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'><i className="fa-solid fa-trophy"></i><p>{props.match.format}</p></div>
          <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'><i className="fa-regular fa-calendar-days"></i> <p>{props.match.date}</p></div>
          <div className='flex text-white/80 m-1 mt-2 gap-3 ml-4 items-center'><i className="fa-solid fa-location-dot"></i><p>{props.match.location}</p></div>
        </div>
      )}

      {/* --- CONTENU 2 : LISTE DES PARTICIPANTS --- */}
      {activeTab === "participants" && (
        <div className="mt-4 px-4 animate-fade-in">
          <div className="grid grid-cols-2 gap-3 p-1 mb-8">
            {participantsList.map((person) => (
              <ParticipantCard key={person.id} name={person.name} status={person.status} image={person.avatar} />
            ))}
          </div>
        </div>
      )}

      {/* --- CONTENU 3 : FORMULAIRE D'INSCRIPTION --- */}
      {activeTab === "inscription" && (
        <div className="mt-4 animate-fade-in w-[95%] mx-auto">
          
          {!isSubscribed && (
            <div className="bg-blue-300 p-4 rounded-lg mb-6 shadow-sm border border-blue-600">
              <h4 className="font-bold text-gray-800 mb-3 flex justify-center">Rejoindre le tournoi</h4>
              <div className="flex flex-col gap-3">
                <div>
                  <input type="text" placeholder="Votre Nom (ex: Youssef)" value={nom} onChange={(e) => setNom(e.target.value)} 
                    className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${nom.length > 0 && !isNomValid ? 'border-red-500 focus:ring-red-500' : 'border-blue-600 focus:ring-blue-500'}`}
                  />
                  {nom.length > 0 && !isNomValid && <p className="text-red-500 text-xs mt-1">Le nom doit contenir au moins 3 lettres et aucun chiffre.</p>}
                </div>
                <input type="text" placeholder="Nom de l'équipe (Optionnel)" value={equipe} onChange={(e) => setEquipe(e.target.value)} className="p-2 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <select value={niveau} onChange={(e) => setNiveau(e.target.value)} className="p-2 border border-blue-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-300">
                  <option value="Débutant">Débutant</option>
                  <option value="Amateur">Amateur</option>
                  <option value="Pro">Pro</option>
                </select>
              </div>
            </div>
          )}

          {isSubscribed && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 text-center shadow-sm">
              <p className="font-bold">Vous êtes inscrit à ce tournoi !</p>
            </div>
          )}

          <div className="flex justify-center mb-10">
            <button disabled={(!isNomValid || nom === "") && !isSubscribed} className={`w-[90%] py-3 text-white font-bold rounded-lg transition-colors ${(!isNomValid || nom === "") && !isSubscribed ? 'bg-gray-400 cursor-not-allowed' : color}`}
              onClick={()=>{ if(isSubscribed) { supprimerParticipant(); } else { ajouterParticipant(); } }}
            >
              {isSubscribed ? "Se désinscrire" : "Valider l'inscription"}
            </button>
          </div>

        </div>
      )}

    </div>
  )
}