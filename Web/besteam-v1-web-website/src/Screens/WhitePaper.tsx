import { Button } from "@mui/material";
import React, { useState } from "react";
import "./whitepaper.css";
import {Helmet} from "react-helmet";
import overview from "../components/video/overview.jpg";
import avatar from "../components/video/avatar.jpg";
import avatar2 from "../components/video/avatar2.png";
import team from "../components/video/team.png";
import team2 from "../components/video/team2.png";
import outfit from "../components/video/outfit.png";
import outfit2 from "../components/video/outfit2.jpg";
import building from "../components/video/building.jpg";
import stadium from "../components/video/stadium.jpg";
import others from "../components/video/others.jpg";
import gamemode from "../components/video/gamemode.png";
import esports from "../components/video/esports.jpg";
import awards from "../components/video/awards.png";
import gamearch from "../components/video/gamearch.png";
import token from "../components/video/token.png";
import token2 from "../components/video/token2.png";
import ico from "../components/video/ico.png";
import preico from "../components/video/preico.png";
import trans from "../components/video/trans.png";
import avatarchiaro from '../components/video/avatarchiaro.jpg'
import avatarscuro from '../components/video/avatarscuro.jpg'
import up from '../components/video/up.png'




import { Box } from "@mui/system";

const WhitePaper = () => {
  const [attivo, setAttivo ] = useState(false)
  window.onscroll = function() {scrollFunction()};

  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setAttivo(true)
    }else{
      setAttivo(false)
    }
  }
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

  const DownloadWhitePaper = () => {


    return(
      <>
      <div style={{display: "flex", flexDirection: "row" , position: "relative",left:(-10),top:'10%', textAlign:'left', alignItems:'left'}}>
        <a href="/WhitepaperBesteamENGV1.pdf" download="WhitepaperBesteamENGV1" target='_blank' >
      <button style={{backgroundColor:'#ffffff', width:90, height:50, color:'#1a7431', border:'none',fontSize:14, margin:10,fontWeight:'bold', fontFamily:'Bonn', borderRadius:0, display:'flex', justifyContent:'center' ,alignItems:'center', flexDirection:'row'}}>ENGLISH</button>
      </a>
      <a href="/WhitepaperBesteamITAV1.pdf" download="WhitepaperBesteamITAV1" target='_blank'>
      <button style={{backgroundColor:'#ffffff', width:90, height:50, color:'#1a7431', border:'none',fontSize:14, margin:10,fontWeight:'bold', fontFamily:'Bonn', borderRadius:0, display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'row'}}>ITALIANO</button>
      </a>
      </div>
      </>
    )
  }
  const GameOverview = () => {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">1. GAME OVERVIEW </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p className="sottotitolo-whitepaper"> 1.1 </p>{" "}
          <p className="secondo-sottotitolo-whitepaper">Intro</p>
          <hr className="linea-grigia" />
          <p className="piucolore">+</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div style={{ marginBottom: 30 }}>
            Besteam è un{" "}
            <span className="testo-parole-paragrafo">
              {" "}
              videogame gratuito di simulazione calcistica
            </span>
            , costruito sulla blockchain di Polygon con il proprio token (BTEM), basato sugli NFT.
            <br />
            In game ogni singolo utente ha un proprio avatar (completamente
            personalizzabile) con il quale
            <br /> esplorare un grande parco sportivo ricco di attività, situato
            al centro della città nel metaverso.
          </div>
        </div>
        <img className="immagine-overview" src={overview} alt="overview" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper"> 1.2 </p>{" "}
            <p className="secondo-sottotitolo-whitepaper">Environment</p>
            <hr className="linea-grigia" />
            <p className="piucolore">+</p>
          </div>
          <div>
            Sei al centro di{" "}
            <span className="testo-parole-paragrafo">BestCity </span>, ricco di
            spazi verdi e sportivi, sei nel parco più grande della città e{" "}
            <br />
            vuoi{" "}
            <span className="testo-parole-paragrafo">
              diventare il calciatore più forte{" "}
            </span>
            e conosciuto del gioco.
            <br /> Di fronte puoi ammirare lo stadio che ha ospitato le partite
            più importanti degli ultimi anni, <br /> che sovrasta i campi da
            calcetto e le palestre dove puoi allenarti con i{" "}
            <span className="testo-parole-paragrafo">compagni di squadra</span>
            <br /> Se possiedi BTEM puoi anche giocare al casinò, fare acquisti
            nel BestMall o <br />
            nel Museo NFT della città. <br />
            Alzando lo sguardo, noti lo skyline definito da grattacieli e
            appartamenti spaziosi... <br />
            sogni un giorno di averne uno.
          </div>
        </div>
      </div>
    );
  };

  const ExecutiveSummary = () => {
    return (
      <div className="exsum">
        <p className="titolo-whitepaper">0. Executive Summary </p>
        <div>
          Besteam è un{" "}
          <span className="testo-parole-paragrafo">
            gioco di simulazione calcistica “Free-to-play” e “Play-to-Earn”{" "}
          </span>
          , costruito sulla blockchain Polygon, con il proprio token (BTEM) e
          basato su NFT.
          <br /> Ogni singolo utente è un calciatore virtuale con un{" "}
          <span className="testo-parole-paragrafo">
            avatar completamente personalizzabile{" "}
          </span>{" "}
          e con delle caratteristiche uniche per ricoprire un ruolo specifico in
          campo.
          <br />
          Ha la possibilità di
          <span className="testo-parole-paragrafo">
            creare un proprio team{" "}
          </span>
          o entrare in una squadra già formata e dunque competere nella modalità
          principale del metaverso: “Football” nella quale sfidare altri 11
          players con l’unico scopo di diventare Campione.
        </div>
        <div style={{ marginTop: 30 }}>
          Ogni squadra ha un proprio stadio,{" "}
          <span className="testo-parole-paragrafo">
            personalizzabile con NFT{" "}
          </span>
          dal manto erboso alla copertura e si trova al centro di BestCity in un
          grande parco perimetrato da moderni grattacieli e appartamenti da
          acquistare.
          <br />
          Ci sono poi palestre, negozi, musei e tanto altro per un’esperienza
          extra-campo tutt’altro che noiosa nella quale{" "}
          <span className="testo-parole-paragrafo">sfruttare i BTEM.</span>{" "}
          <br /> Ci sono obbiettivi da raggiungere e speciali ricompense per gli
          utenti più attivi e gli holders più affezionati che potranno aiutarci
          nello sviluppo del gioco.
        </div>
        <div style={{ marginTop: 30 }}>
          Besteam è un ambiente inclusivo nel quale socializzare, divertirsi,
          guadagnare e competere a livello esportivo organizzato e
          professionistico; si tratta di un viaggio ricco di attività e
          possibilità per ogni utente, per ogni team e per lo sviluppo del gioco
          stesso che verte su una{" "}
          <span className="testo-parole-paragrafo">“Road Map”</span> a lungo
          termine che parte dalla promozione del progetto e arriva alla
          realizzazione del gioco.
        </div>
      </div>
    );
  };

  const Avatar = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p className="titolo-whitepaper">2. AVATAR </p>
        <div className="avatar-class">
          <img className="image-avatar" src={avatar} alt="avatar" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="text-avatar">
              Puoi scegliere di essere un uomo o una donna, 
              puoi essere te stesso o quello che vorresti senza
              ripercussioni sul gameplay ma con il solo scopo di essere
              unico.
              <br />{" "}
              <span className="testo-parole-paragrafo">
                Sei il protagonista del gioco{" "}
              </span>
              . Hai la possibilità di incrementare la tua fama sia per i
              risultati
              ottenuti sia per l’inventario NFT. <br /> Puoi definire il tuo
              look, la tua acconciatura, ituoi accessori e molto altro.<br/>{" "}
               Puoi addirittura sfoggiare esclusivi tatuaggi,
               conferendogli un significato profondo.
              <br />
              La{" "}
              <span className="testo-parole-paragrafo">
                {" "}
                personalizzazione{" "}
              </span>{" "}
              è completa e soprattutto 
              esclusiva grazie a{" "}
              <span className="testo-parole-paragrafo">NFT rari </span> e di
              ogni tipo.
              <br /> Mostra al metaverso Besteam{" "}
              <span className="testo-parole-paragrafo">il tuo outfit </span>distinguendoti con i colori del tuo team e promu-
              ovendo uno stile personale.
            </div>
          </div>
        </div>
        <img className="image-avatar2" src={avatar2} alt="avatar2" />
      </div>
    );
  };

  const Team = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p className="titolo-whitepaper">3. TEAM </p>
        <div>
          Come sai,{" "}
          <span className="testo-parole-paragrafo">
            il calcio è un gioco di squadra
          </span>
          .Per questo in Besteam hai la possibilità di far parte di un team, o
          crearne uno ed esserne il Manager e proprietario. Far parte di un team
          significa che puoi partecipare a competizioni di ogni tipologia,
          condividere attività e premi insieme ai tuoi compagni. La rosa può
          essere composta da un minimo di 5 fino ad un massimo di 15 players;
          per ampliare gli slot bisogna acquistare con BTEM una “Spilla
          Allenatore”. Ogni team ha un proprio logo che lo identifica e ne
          rappresenta i valori.
          <br />
          <img style={{ width: "100%" }} src={team} alt="team" />
          Il design della divisa e i colori rappresentativi sono scelti dal
          proprietario, così come lo stadio che è la casa della squadra, dove si
          decidono le sorti della stagione tra vittorie e sconfitte nella
          modalità più importante del gioco “Calcio”.
          <br />
          Inoltre,{" "}
          <span className="testo-parole-paragrafo">
            è completamente personalizzabile{" "}
          </span>
          , dal manto erboso sino alla copertura.
          <br /> Per Besteam le squadre sono fondamentali; la volontà è quella
          di interagire con esse e promuoverle.
          <br /> La loro evoluzione determina una crescita del gioco stesso ed
          incoraggia gli utenti a creare delle concrete realtà virtuali, attive
          sui social e con la propria fanbase. <br />
          L’obiettivo ultimo di ciascuna squadra è diventare il “Besteam”,
          ovvero essere riconosciuti come il{" "}
          <span className="testo-parole-paragrafo">
            team più forte del metaverso
          </span>
          .
          <img
            style={{ width: "100%", marginTop: 10 }}
            src={team2}
            alt="team2"
          />
        </div>
      </div>
    );
  };

  const NFTBesteam = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <p className="titolo-whitepaper">4. NFT BESTEAM </p>
        <div>
          La città è popolata di assets che hanno valenze estetiche o
          “funzionali”.
          <br /> Puoi acquistarli nel{" "}
          <span className="testo-parole-paragrafo">
            Marketplace “OpenSea” (chain Polygon)&nbsp;
          </span>
           nel marketplace interno. <br /> Costruisci il tuo inventario
          selezionando gli NFT preferiti da un lungo elenco di macro-categorie
          già precedentemente citate. <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <p className="sottotitolo-whitepaper">4.1</p>
                <p className="secondo-sottotitolo-whitepaper"> Outfit</p>
                <hr className="linea-grigia lunghezza" />
                <p className="piucolore">+</p>
              </div>
              Se oltre ad essere un abile player, sei un fanatico di moda,
              <br /> segui le occasioni di mercato per{" "}
              <span className="testo-parole-paragrafo">
                {" "}
                acquistare esclusivi abbigliamenti.
              </span>
              <br />
              Sfoggia il tuo outfit con maglie casual, pantaloni trend o scarpe
              dal design raffinato. <br />
              Se curi molto il tuo aspetto, segui le nuove capigliature,
              accessori, tatuaggi o oggetti di una particolare firma.
            </div>
            <img style={{ width:'64%' , height:'auto'}} src={outfit} alt="outfit" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "center",
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <div>
              Non dimenticare che la tua{" "}
              <span className="testo-parole-paragrafo">scheda profilo</span> può
              essere personalizzata con colori e design accattivanti;
              <br /> porterai sempre con te un{" "}
              <span className="testo-parole-paragrafo">pallone </span>, in giro
              per la città,
              <br /> che puoi personalizzare con i tuoi BTEM acquistando nuove
              tipologie o colori.
            </div>
            <img
              src={outfit2}
              alt="outfit2"
              style={{ width: "50%", marginRight: 25 }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper">4.2</p>
            <p className="secondo-sottotitolo-whitepaper"> Building </p>
            <hr className="linea-grigia" />
            <p className="piucolore">+</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src={building}
              alt="build"
              style={{ width: "20%", marginRight: 30 }}
            />
            <div>
              Sei un calciatore, hai bisogno di una tua casa dove riposare e
              mostrare il tuo{" "}
              <span className="testo-parole-paragrafo">inventario NFT.</span>{" "}
              <br />
              Quando compri un appartamento ottieni uno spazio espositivo aperto
              al pubblico e la possibilità di recuperare le energie più
              velocemente rispetto al normale.
              <br /> Non è obbligatorio possederne uno, ma se vuoi vantarti del
              tuo armadietto virtuale è un’occasione imperdibile.
              <br />
              La città e il metaverso sono in continua espansione, di
              conseguenza i grattacieli centrali sono quelli più prestigiosi.
              <br /> Non lasciarti scappare l’opportunità di essere un
              proprietario di molteplici appartamenti di valore.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper">4.3</p>
            <p className="secondo-sottotitolo-whitepaper"> Stadium </p>
            <hr className="linea-grigia" />
            <p className="piucolore">+</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>
              Lo stadio di casa racchiude i valori della squadra e puoi
              caratterizzarlo con NFT. Si dividono in due categorie: <br />•
              <span className="testo-parole-paragrafo">quella estetica </span>{" "}
              manto erboso, colore pali delle porte, tipologia e colore della
              rete, colore linee del campo, tipologia e colore della copertura,
              colore dei seggiolini, tipologia cori, colori striscioni,
              coreografie. <br />•{" "}
              <span className="testo-parole-paragrafo">quella funzionale </span>{" "}
              spogliatoio, tribune, tabelloni pubblicitari.
            </div>
            <img src={stadium} alt="stadium" style={{ width: "30%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper">4.4</p>
            <p className="secondo-sottotitolo-whitepaper"> Others </p>
            <hr className="linea-grigia" />
            <p className="piucolore">+</p>
          </div>
          <div></div>
          <div>
            Puoi vincere trofei personali o di squadra, ottenere ricompense in
            BTEM raggiungendo gli obiettivi stagionali o arrivando in alto nelle
            classifiche. <br />
            In base ai risultati del tuo team, ricevi esclusive medaglie e
            coppe, che potrai vendere o mostrare nella tua bacheca.
            <br /> Se ami scommettere prova a vincere particolari NFT
            acquistando un ticket nel Casinò. <br />
            Come capitano, potrai decidere di ampliare la tua rosa massima
            acquistando una spilla tra quelle disponibili.
          </div>
          <img
            src={others}
            alt="others"
            style={{ width: "100%", marginTop: 30 }}
          />
        </div>
      </div>
    );
  };

  const GameMode = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">5. GAME MODE </p>
        </div>
        <div>
          <div>
            Il fulcro del gioco sono le innumerevoli modalità disponibili,
            competitive e non; <br />
            tra queste troviamo la modalità più rilevante “CALCIO”, “CALCETTO”,
            “TRAINING”, e “TRYOUT”. <br />
            Tali modalità si svolgono nelle rispettive aree di gioco, ovvero
            nello Stadio, nei campetti e nei campi d’allenamento.
            <br /> Lo spirito in tutte le modalità è{" "}
            <span className="testo-parole-paragrafo">
              {" "}
              divertirsi, fare gruppo ed ambire ai traguardi più importanti.{" "}
            </span>
            <br />
          </div>
          <div style={{ marginTop: 30 }}>
            Per partecipare alla modalità “CALCIO” devi essere membro di un
            team, per le altre devi aver creato il tuo Avatar ed essere
            registrato come Player.
            <br />
          </div>
        </div>
        <img src={gamemode} alt="gamemode" style={{ width: "80%" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p className="sottotitolo-whitepaper">5.1</p>
          <p className="secondo-sottotitolo-whitepaper"> Football </p>
          <hr className="linea-grigia" />
          <p className="piucolore">+</p>
        </div>
        <div>
          La modalità più importante si svolge 11vs11 ed è aperta esclusivamente
          ai Team. <br />
          Si divide in 3 categorie: “Amichevole”, “Classificata”, “Evento”.{" "}
          <br />• Con “Amichevole” si intende la possibilità di sfidare dei team
          specifici per confrontarsi con realtà più o meno affermate e per
          testare le tattiche provate in modalità allenamento. <br />• Con
          “Classificata” si intende la possibilità di sfidare dei team casuali
          per scalare le classifiche e guadagnare l’accesso agli eventi.
          <br /> • Con “Evento” si intende la possibilità di sfidare{" "}
          <span className="testo-parole-paragrafo">
            i team più forti del metaverso
          </span>{" "}
          e di vincere esclusivi premi.
          <br />
          Tali eventi saranno trasmessi sulle maggiori piattaforme streaming e
          sponsorizzati.
        </div>
      </div>
    );
  };

  const Esports = () => {
    return (
      <div
        style={{ display: "flex", textAlign: "left", flexDirection: "column" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">6. ESPORTS &amp;	PLAY TO EARN </p>
        </div>
        <div>
          <div>
            Con Besteam il calcio virtuale raggiunge un valore nuovo,
            l'obiettivo principale è per la prima volta creare un{" "}
            <span className="testo-parole-paragrafo">settore esportivo </span>
            completamente incentrato{" "}
            <span className="testo-parole-paragrafo">sul calcio 11vs11</span> in
            cui tu sei il protagonista e insieme al tuo team punti a diventare
            il migliore, la squadra più forte e riconosciuta nel metaverso
            calcistico.
            <br /> Un ambiente{" "}
            <span className="testo-parole-paragrafo">inclusivo </span>nel quale
            socializzare,{" "}
            <span className="testo-parole-paragrafo">
              divertirsi e guadagnare
            </span>
            , indipendentemente dal genere e dalle abilità.
            <br /> Potrai giocare a calcio virtuale a livello competitivo
            organizzato e professionistico scontrandoti con altri player e team
            che condividono i tuoi stessi obiettivi. <br />
          </div>
          <div style={{ marginTop: 30 }}>
            Tutti gli eventi organizzati all’interno di Besteam sono molto
            simili a quelli reali: ci sono arbitri, caster specializzati e tutte
            le figure utili per la gestione e l’organizzazione. <br />
            Sono trasmessi sulle principali piattaforme di streaming, per
            pubblicizzare e promuovere i team partecipanti al grande pubblico.{" "}
            <br /> La fanbase è co-protagonista della crescita di un team esport
            e può influenzare lo sviluppo del gioco stesso se possiede i BTEM
            necessari ad entrare nel sistema di{" "}
            <span className="testo-parole-paragrafo">governance </span>e
            partecipazione attiva all’ecosistema BesTeam.
          </div>
        </div>
        <img
          src={esports}
          alt="esports"
          style={{ width: "100%", marginTop: 30 }}
        />
      </div>
    );
  };
  const Activities = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">7. ACTIVITIES </p>
        </div>
        <div>
          <div>
            L’esperienza da calciatore è molto più ampia a differenza di altri
            titoli, intraprenderai un viaggio in un metaverso ricco di attività
            extra-campo utili a incrementare il tuo valore, aumentare la
            visibilità ed essere protagonista nell’ecosistema Besteam. <br />
            Puoi incrementare la tua forza andando in palestra, recuperare la
            stamina più velocemente nel tuo appartamento, mostrare tutte le tue
            ricchezze NFT nel guardaroba, vedere dei match e scommettere sugli
            eventi insieme ai tuoi compagni.
          </div>
          <br />{" "}
          <div style={{ marginTop: 10 }}>
            {" "}
            I tuoi progressi mensili in queste attività, ti aiuteranno a sbloccare
            particolari attributi tra cui le “Ability”, “Skills” e “Artefice”,
            oltre a speciali NFT mensili per i{" "}
            <span className="testo-parole-paragrafo">
              player più attivi
            </span>. <br />
            Il mondo Besteam è tutto da esplorare e in continuo aggiornamento...
            non smetterà di stupirti.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p className="sottotitolo-whitepaper">7.1</p>
          <p className="secondo-sottotitolo-whitepaper"> Awards </p>
          <hr className="linea-grigia" />
          <p className="piucolore">+</p>
        </div>

        <div>
          Giocando durante il mese avrai la possibilità di sbloccare fantastici
          assets da equipaggiare al tuo Avatar, tra questi:
          <br /> le “ Ability” che migliorano specifiche stats, le “Skills” che
          conferiscono particolari movenze all’Avatar e gli “Artefice”
          attivabili durante la partita per abilità estemporanee. <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 30,
              alignItems: "center",
            }}
          >
            <img src={awards} alt="awards" style={{ width: "50%" }} />
            Potrai ricevere BTEM scalando le numerose classifiche nella modalità
            “CALCIO - Classificata” (goal, assist, parate, tackle,
            contrasti...).
            <br /> Vincendo “Eventi” potrai ottenere rarissimi ed esclusivi NFT
            che potranno essere esposti nel BestMuseum.
          </div>
        </div>
      </div>
    );
  };

  const Tokec = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">8. TOKENOMICS </p>
        </div>
        <div>
          <div style={{ marginBottom: 50 }}>
            Il “Besteam coin” (BTEM) è il token di riferimento dell’ecosistema,
            il suo percorso di sviluppo è ampio.
            <br />
          </div>{" "}
          <p style={{ fontSize: 21, fontFamily: "Bonn", fontWeight: "bold" }}>
            ● UTILITY
          </p>
          E’ un utility token costruito sulla blockchain Polygon, e ha
          molteplici funzioni:
          <br /> • acquisti di NFTs funzionali ed altri nel Marketplace di
          Besteam;
          <br /> • rewards ottenuti tramite specifici obiettivi;
          <br /> • Governance DAO: puoi partecipare ad alcune decisioni sulla
          roadmap e sullo sviluppo del game;
          <br /> • interscambiabilità con altri token.
          <img src={token} alt="token" style={{ width: "100%" }} />
          <p style={{ fontSize: 21, fontFamily: "Bonn", fontWeight: "bold" }}>
            ● ALLOCATION
          </p>
          La total supply è di 100.000.000 BTEM ed è suddivisa in:
          <img src={token2} alt="token2" style={{ width: "100%" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper"> 8.1 </p>{" "}
            <p className="secondo-sottotitolo-whitepaper">Token RoadMap</p>
            <hr className="linea-grigia" />
            <p className="piucolore">+</p>
          </div>
          <div>
            <p style={{ fontSize: 21, fontFamily: "Bonn", fontWeight: "bold" }}>
              ● PRE-ICO, December 2021
            </p>
            <div>
              In fase di Pre-ICO (Initial coin offering) vengono distribuiti
              3.000.000 di BTEM, ovvero il 3% dell’intera supply.
              <br />
              Le operazioni sono gestite privatamente su{" "}
              <span className="testo-parole-paragrafo"> besteam.io </span>
              <br />
              Il valore del BTEM in rapporto al MATIC (blockchain di
              riferimento) è: 1 MATIC = 60 BTEM Con un Hardcap pari a 50.000
              MATIC suddiviso in:
            </div>
            <img src={preico} alt="preico" style={{ width: "70%" }} />
            <div>
              Il minimo contributo corrisponde a 250 MATIC.
              <br />
              Il massimo contributo corrisponde a 3000 MATIC.
            </div>
          </div>
          <div>
            <p style={{ fontSize: 21, fontFamily: "Bonn", fontWeight: "bold" }}>
              ● ICO, February 2022
            </p>
            <div>
              In fase di ICO vengono distribuiti 1.500.000 BTEM, ovvero 1,5%
              dell’intera supply.
              <br />
              Le operazioni sono gestite con{" "}
              <span className="testo-parole-paragrafo"> dxsale.app</span>
              <br />
              Il valore del BTEM in rapporto al MATIC è: 1 MATIC = 30 BTEM{" "}
              <br />
              Con un Hardcap pari a 50.000 MATIC suddiviso in:
            </div>
            <img src={ico} alt="ico" style={{ width: "70%" }} />
            <div>
              Il minimo contributo corrisponde a 20 MATIC.
              <br />
              Il massimo contributo corrisponde a 1500 MATIC.
            </div>
          </div>
          <div>
            <p style={{ fontSize: 21, fontFamily: "Bonn", fontWeight: "bold" }}>
              ● LISTING, March 2022
            </p>
            <div>
              Per le “Users transaction” vengono destinati 60.0000.000 BTEM,
              ovvero il 60% dell’intera supply.
              <br />
              In questa fase il BTEM è liberamente acquistabile e/o scambiabile.
              <br />
              Il valore del BTEM è determinato dal mercato e rapportato al
              MATIC.
            </div>
            <div style={{ marginTop: 30 }}>Ogni transazione è così divisa:</div>
            <img src={trans} alt="trans" style={{ width: "70%" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <p className="sottotitolo-whitepaper">8.2</p>
            <p className="secondo-sottotitolo-whitepaper">
              Token for development, marketing e DAO{" "}
            </p>
            <hr className="linea-grigia extralinea" />
            <p className="piucolore">+</p>
          </div>
          <div>
            Il BTEM rappresenta per Besteam una fonte indispensabile per lo
            sviluppo del gioco, per la sua promozione in ogni forma e il
            principale mezzo di  <span className="testo-parole-paragrafo">progettazione partecipata </span>utile nelle decisioni
            e nelle strategie future dell’intero ecosistema.<br/> 
            </div>
            <div style={{marginTop:30}}>Ogni holder, ogni
            utente, ogni transazione aiuta il  <span className="testo-parole-paragrafo">team di sviluppo</span> a migliorare
            l’architettura del gioco in modo da garantire la migliore esperienza
            in game possibile; aiuta il team di marketing nell’elaborazione di
            contenuti sempre più convincenti e qualitativamente accattivanti in
            modo da ampliare la  <span className="testo-parole-paragrafo">community</span> e attrarre nuovi investitori e
            appassionati.
          </div>
          <div style={{ marginTop: 30 }}>Con il BTEM sei parte attiva del progetto Besteam, avere una stake più o meno grande ti consentirà di ricevere premi e allo stesso tempo aiutare l’ecosistema.

          </div>
        </div>
      </div>
    );
  };

  const GameArch = () => {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">9. GAME ARCHITECTURE </p>
        </div>

        <div style={{ marginBottom: 50 }}>
          La “game architecture” è la struttura del gioco. Finora abbiamo
          parlato di BTEM, NFT, personalizzazione e di cosa offre il metaverso
          Besteam, ma ora ci concentriamo su come funziona tutto questo insieme.
        </div>
        <img src={gamearch} style={{ width: "100%" }} alt="gamearch" />
      </div>
    );
  };

  const RoadMap = () => {
    return (
    <div style={{display: "flex", flexDirection: "column", textAlign: "left"}}>
       <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">10. ROAD MAP </p>
        </div>
    <div>
    • December 2021<br/>
Pre-ICO BTEM
</div>
<div style={{marginTop:10}}>
• January 2022, second half<br/>
AVATAR V1.0
</div>
<div style={{marginTop:10}}>
• February 1 2022<br/>
NFT marketplace "Open Sea"
First NFT Look drop
</div>
<div style={{marginTop:10}}>
• February 10-15 2022<br/>
Second NFT Look drop
</div>
<div style={{marginTop:10}}>
•  February 2022<br/>
ICO BTEM
Avatar upgrade
</div>
<div style={{marginTop:10}}>
• March 2022<br/>
Listing BTEM
<a href="https://polygonscan.com/token/0x28332c6afb5100d9a9b82844fe29ff6884223c6b">https://polygonscan.com/token/0x28332c6afb5100d9a9b82844fe29ff6884223c6b</a>
</div>
<div style={{marginTop:10}}>
• March 2022 , second half<br/>
NFT marketplace "besteam.io"
First NFT Able drop
</div>
<div style={{marginTop:10}}>
• March - April 2022<br/>
Third NFT Look drop
</div>
<div style={{marginTop:10}}>
• April - May 2022<br/>
Second NFT Able drop
</div>
<div style={{marginTop:10}}>
• 2022, second half<br/>
Game development
</div>
<div style={{marginTop:10}}>
• 2023, second half<br/>
First Beta
</div>
    </div>
    )
    ;
  };
  const OurTeam = () => {
    return (
      <>
      <div style={{display: "flex", flexDirection: "column" }}> 
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="titolo-whitepaper">11. OUR TEAM </p>
        </div>
           <div style={{display: "flex", flexDirection: "row" }}>
           <div>
             <Box style={{height:250, width:400, backgroundColor:'rgb(45, 198, 83)', margin:10}}>
             <img src={avatarchiaro} alt="avatarchiaro" style={{width:'100%'}} />
             </Box>
             <p style={{fontWeight:'bold'}}>Enrico Coviello </p>
             <p style={{marginTop:(-20)}}>Co-Founder</p>
           </div>
           <div>
              <Box style={{height:250, width:400, backgroundColor:'#1a7431', margin:10}}>
                <img src={avatarscuro} alt="avatarchiaro" style={{width:'100%'}} />
              </Box>
              <p style={{fontWeight:'bold'}}>Marco Tedesco</p>
              <p style={{marginTop:(-20)}}>Co-Founder</p>

           </div>
           </div>

      <div style={{display: "flex", flexDirection: "row" }}>
        <div>
          
      <Box style={{height:250, width:400, backgroundColor:'#1a7431', margin:10}}>
      <img src={avatarscuro} alt="avatarchiaro" style={{width:'100%'}} />

      </Box>
      <p style={{fontWeight:'bold'}}>Rocco Caricola</p>
      <p style={{marginTop:(-20)}}>Web developer</p>
      </div>
      <div>
  <Box style={{height:250, width:400, backgroundColor:'rgb(45, 198, 83)', margin:10}}>
  <img src={avatarchiaro} alt="avatarchiaro" style={{width:'100%'}} />

  </Box>
  <p style={{fontWeight:'bold'}}>Giacomo Colella </p>
  <p style={{marginTop:(-20)}}>Smart Contract Developer</p>
  </div>
      </div>
      </div>
      </>
    )
  };

  const Patners = () => {
    return (
      <>
      <div style={{display: "flex", flexDirection: "column"}}>
      <div style={{ display: "flex", flexDirection: "row" }}>
      <p className="titolo-whitepaper">12. PARTNERS </p>
    </div>
    <div>Coming Soon...</div>
    </div>
    </>)
  };
  const WorkInProgress = () => {
    return <div>Work In Progress</div>;
  };

  const [ren, setRen] = useState(GameOverview());
  const [downloadWhitepaper, setDownloadWhitepaper] = useState(false)

  console.log(WorkInProgress());
  return (
    <div className="body-whitepaper">
      <Helmet>
    
                <meta charSet="utf-8" />
                <title>WhitePaper | Besteam.io</title>
            
        </Helmet>
      <nav className="navbarstyle">
        <header style={{marginTop:10, marginBottom:20}} className="titolo-paragrafo">TABLE OF CONTENTS</header>

        <a
          onClick={() => setRen(ExecutiveSummary())}
          href="#GameOverview"
          className=" testo-parole-paragrafo"
        >
          0. Executive Summary
        </a>
        <a
          onClick={() => setRen(GameOverview())}
          href="#GameOverview"
          className="testo-parole-paragrafo"
        >
          1. Game Overview
        </a>
        <a
          onClick={() => setRen(Avatar())}
          href="#Avatar"
          className=" testo-parole-paragrafo"
        >
          2. Avatar
        </a>
        <a
          onClick={() => setRen(Team())}
          href="#Team"
          className=" testo-parole-paragrafo"
        >
          3. Team
        </a>
        <a
          onClick={() => setRen(NFTBesteam())}
          href="#GameMode"
          className="testo-parole-paragrafo"
        >
          4. NFT Besteam
        </a>
        <a
          onClick={() => setRen(GameMode())}
          href="#Activities"
          className="testo-parole-paragrafo"
        >
          5. Game Mode
        </a>
        <a
          onClick={() => setRen(Esports())}
          href="#SmartContract"
          className=" testo-parole-paragrafo"
        >
          6. Esports &amp;	 Play To Earn
        </a>
        <a
          onClick={() => setRen(Activities())}
          href="#GameArchiteture"
          className="testo-parole-paragrafo"
        >
          7. Activities
        </a>
        <a
          onClick={() => setRen(Tokec())}
          href="#TokenEconomy"
          className="testo-parole-paragrafo"
        >
          8. Tokenomics{" "}
        </a>
        <a
          onClick={() => setRen(GameArch())}
          href="#RoadMap"
          className="testo-parole-paragrafo"
        >
          9. Game Architeture
        </a>

        <a
          onClick={() => setRen(RoadMap())}
          href="#Partners"
          className="testo-parole-paragrafo"
        >
          10. Road map
        </a>
        <a
          onClick={() => setRen(OurTeam())}
          href="#Partners"
          className=" testo-parole-paragrafo"
        >
          11. Our team
        </a>
        <a
          onClick={() => setRen(Patners())}
          href="#Partners"
          className="testo-parole-paragrafo"
        >
          12. Partners
        </a>
        <div className="download-whitepaper">
          <Button
          onClick={()=>setDownloadWhitepaper(!downloadWhitepaper)}
            style={{
              backgroundColor: "#2dc653",
              width: 150,
              height: 40,
              color: "#ffffff",
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "Bonn",
              borderRadius: 0,
            }}
            className="whitepaper-button"
          >
            DOWNLOAD
          </Button>

          <p className="download-text">WhitePaper v1.0</p>
          {downloadWhitepaper && DownloadWhitePaper()}
        </div>
      </nav>

      <span className="line-right"></span>

      <div className="content-class">{ren}</div>
      <button className={attivo ? " button-up": "button-no"} onClick={topFunction}><img className="button-image" src={up} alt="arrow"/></button>

    </div>
  );
};

export default WhitePaper;
