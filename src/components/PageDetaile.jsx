import React, { useState } from 'react';
import ParticipantCard from './ParticipantCard';
import Formulaire from './Formulaire';
import InfoMatch from './InfoMatch'; // Jibna l-composant jdid

export default function PageDetaile(props) {
  // 1. D-Dakira dyal l-Onglets (Tabs)
  const [activeTab, setActiveTab] = useState("info"); // f lowel katban 'info'

  // States l-qdam dyal participants
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [participantsList, setParticipantsList] = useState(props.match.participants);

  // La fonction dyal l-inscriptions
  const ajouterParticipant = (nouveauNom, nouveauNiveau) => {
    const nouveauParticipant = {
      id: Date.now(),
      name: nouveauNom,
      status: nouveauNiveau,
      avatar: "https://ui-avatars.com/api/?name=" + nouveauNom + "&background=random"
    };

    props.match.participants.push(nouveauParticipant);
    props.match.participantsCount += 1; 

    setParticipantsList([...participantsList, nouveauParticipant]);
    setIsSubscribed(true);
  };

  return (
    <div className='min-h-screen pb-10 bg-gray-50'>
      
      {/* --- L-HEADER & BOUTON RETOUR --- */}
      <div className='py-4 px-4 flex items-center w-full bg-white shadow-sm'>
        <button 
          onClick={props.back} 
          className="hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-lg flex gap-2 items-center"
        >
          <i className="fa-solid fa-arrow-left"></i> Retour
        </button>
        <p className='flex-1 text-center font-bold text-xl mr-8'>Tournoi</p>
      </div>

      {/* --- L-ONGLETS (TABS) --- */}
      <div className="flex justify-center gap-4 my-6">
        <button 
          onClick={() => setActiveTab("info")}
          className={`px-6 py-2 font-bold rounded-lg transition-colors 
            ${activeTab === "info" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
        >
          Informations
        </button>
        
        <button 
          onClick={() => setActiveTab("participants")}
          className={`px-6 py-2 font-bold rounded-lg transition-colors 
            ${activeTab === "participants" ? "bg-blue-600 text-white shadow-md" : "bg-gray-200 text-gray-500 hover:bg-gray-300"}`}
        >
          Participants ({participantsList.length})
        </button>
      </div>

      {/* --- L-ECRAN LI K-Y-BAN 3LA HSAB L-ONGLET --- */}
      {activeTab === "info" ? (
        
        // Ila klicka 3la Info, biyn Composant InfoMatch
        <InfoMatch match={props.match} participantsCount={participantsList.length} />
        
      ) : (
        
        // Ila klicka 3la Participants, biyn l-Lista o l-Formulaire
        <div className="mt-4 px-4 animate-fade-in">
          <div className="grid grid-cols-2 gap-3 p-1 mb-8">
            {participantsList.map((person) => (
              <ParticipantCard 
                key={person.id}
                name={person.name}
                status={person.status}
                image={person.avatar}
              />
            ))}
          </div>

          <Formulaire 
            isSubscribed={isSubscribed} 
            setIsSubscribed={setIsSubscribed} 
            ajouterParticipant={ajouterParticipant} 
          />
        </div>
      )}

    </div>
  )
}