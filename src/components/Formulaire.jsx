import React, { useState } from 'react';

export default function Formulaire(props) {
  // 1. D-dakira dyal l-formulaire wllat m-3zoula hna
  const [nom, setNom] = useState("");
  const [equipe, setEquipe] = useState("");
  const [niveau, setNiveau] = useState("Débutant");

  // 2. L-3essass (Regex)
  const nomRegex = /^[a-zA-Z\s]{3,}$/;
  const isNomValid = nomRegex.test(nom);

  // 3. L-alwan dyal l-bouton
  const color = props.isSubscribed ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700';

  // 4. Melli k-n-klickiw 3la l-bouton
  const gererClick = () => {
    if (props.isSubscribed) {
      props.setIsSubscribed(false);
    } else {
      // K-n-sifto s-smiya o l-niveau l-PageDetaile bach t-zidhom f l-lista
      props.ajouterParticipant(nom, niveau);
      setNom("");
      setEquipe("");
    }
  };

  return (
    <div className="w-[95%] mx-auto mb-10 px-4">
      {/* L-Formulaire kiy-ban ghir ila makanch m-sajjel (US6) */}
      {!props.isSubscribed && (
        <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm border border-gray-200">
          <h4 className="font-bold text-gray-800 mb-3">Rejoindre le tournoi</h4>
          <div className="flex flex-col gap-3">
            <div>
              <input 
                type="text" 
                placeholder="Votre Nom (ex: Youssef)" 
                value={nom} 
                onChange={(e) => setNom(e.target.value)} 
                className={`w-full p-2 border rounded focus:outline-none focus:ring-2 
                  ${nom.length > 0 && !isNomValid ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
              />
              {nom.length > 0 && !isNomValid && (
                <p className="text-red-500 text-xs mt-1">Le nom doit contenir au moins 3 lettres et aucun chiffre.</p>
              )}
            </div>
            <input 
              type="text" 
              placeholder="Nom de l'équipe (Optionnel)" 
              value={equipe} 
              onChange={(e) => setEquipe(e.target.value)} 
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select 
              value={niveau} 
              onChange={(e) => setNiveau(e.target.value)}
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Débutant">Débutant</option>
              <option value="Amateur">Amateur</option>
              <option value="Pro">Pro</option>
            </select>
          </div>
        </div>
      )}

      {/* L-Bouton dyal Inscription */}
      <div className="flex justify-center">
        <button 
          disabled={(!isNomValid || nom === "") && !props.isSubscribed} 
          className={`w-full py-3 text-white font-bold rounded-lg transition-colors 
            ${(!isNomValid || nom === "") && !props.isSubscribed ? 'bg-gray-400 cursor-not-allowed' : color}`} 
          onClick={gererClick}
        >
          {props.isSubscribed ? "Se désinscrire" : "Valider l'inscription"}
        </button>
      </div>
    </div>
  );
}