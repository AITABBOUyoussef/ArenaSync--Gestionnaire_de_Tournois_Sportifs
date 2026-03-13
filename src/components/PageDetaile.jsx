const [activeTab, setActiveTab] = useState("info"); 
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [participantsList, setParticipantsList] = useState(props.match.participants);
  
  // 1. ZDNA HADA: Bach n-3qlou 3la l-ID dyalk mni t-tsjjel
  const [monId, setMonId] = useState(null); 

  // La fonction dyal l-inscriptions
  const ajouterParticipant = (nouveauNom, nouveauNiveau) => {
    const newId = Date.now(); // K-n-sawbo ID jdid
    const nouveauParticipant = {
      id: newId,
      name: nouveauNom,
      status: nouveauNiveau,
      avatar: "https://ui-avatars.com/api/?name=" + nouveauNom + "&background=random"
    };

    props.match.participants.push(nouveauParticipant);
    props.match.participantsCount += 1; 

    setParticipantsList([...participantsList, nouveauParticipant]);
    setIsSubscribed(true);
    setMonId(newId); // K-n-khbbiw l-ID dyalk hna
    setActiveTab("participants"); 
  };

  // 2. ZDNA HADI: La fonction dyal l-khorouj (Désinscription)
  const supprimerParticipant = () => {
    // A. N-ms7ouh mn l-UI (State)
    const listeJdida = participantsList.filter(person => person.id !== monId);
    setParticipantsList(listeJdida);

    // B. N-ms7ouh mn l-props (DB l-wahmiya)
    const index = props.match.participants.findIndex(person => person.id === monId);
    if(index !== -1) {
      props.match.participants.splice(index, 1);
      props.match.participantsCount -= 1;
    }

    // C. N-rddou l-State khawi bach i-qder i-tsjjel mn jdid ila bgha
    setIsSubscribed(false);
    setMonId(null);
  };