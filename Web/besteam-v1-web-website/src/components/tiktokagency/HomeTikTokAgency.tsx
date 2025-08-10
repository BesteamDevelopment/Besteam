import React, { useEffect, useState } from 'react'
import './TikTokAgency.modules.css'
import TikTokAgencyLogo from './media/TikTokAgency.png'
import freccia from './media/Freccia.png'
import frecciaSu from './media/Frecciasu.png'
import frecciaRight from './media/frecciaright.png'
import bordo from "./media/bordo2.png";
import CardStaff from './components/CardStaff/CardStaff';
import { Staff } from './const/Staff'
import { creators } from './const/Creator';
import { StaffType } from './const/StaffType';
import { CreatorType } from './const/CreatorType';
import CardCreator from './components/CardCreator/CardCreator';
import discord from './media/discord 2.png'
import mail from './media/Frame 99.png'
import whatsapp from './media/—Pngtree—white whatsapp icon png_3562063 (1) 1.png'
import { Box, Button, Checkbox, FormControlLabel, Icon, Popover, Typography } from '@mui/material'


import balliecoreografie from './media/categories/Balli.png'
import commedia from './media/categories/MaskHappy.png'
import beauty from './media/categories/HighlighterCircle.png'
import moda from './media/categories/HighHeel.png'
import fitnessEBenessere from './media/categories/Barbell.png'
import cucina from './media/categories/Coffee.png'
import gaming from './media/categories/GameController.png'
import musicaecanto from './media/categories/Headphones.png'
import educazione from './media/categories/Book.png'
import viaggi from './media/categories/Handbag.png'
import daay from './media/categories/PaintBrush.png'
import recensioni from './media/categories/Gift.png'
import lifehacks from './media/categories/Handshake.png'
import vlog from './media/categories/UserSquare.png'
import animali from './media/categories/Dog.png'
import sport from './media/categories/Football.png'
import intrattenimento from './media/categories/FilmSlate.png'
import letteratura from './media/categories/Books.png'
import fotografia from './media/categories/Image_02.png'
import startup from './media/categories/UsersThree.png'
import ecologia from './media/categories/Leaf.png'
import relazioni from './media/categories/Heart_01.png'
import nuovetecnologie from './media/categories/VirtualReality.png'
import altro from './media/categories/Altro.png'
import { useMediaQuery } from 'react-responsive'





const HomeTikTok = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 425px)` });
  const itemsPerPage = 16;
  const [totalPages, setTotalPages] = useState(0);  // Stato per il numero totale di pagine

  var startIndex = 0
  const [activeCardId, setActiveCardId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState(null);
  const [paginatedCreators, setPaginatedCreators] = useState<CreatorType[]>([]);
  const [filtriAttivi, setFiltriAttivi] = useState<boolean>(false);



  const handleScrollToCreators = () => {
    const creatorsSection = document.getElementById('ourCreators');
    if (creatorsSection) {
      creatorsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickFiltri = () => {
    setFiltriAttivi(!filtriAttivi);

  }
  const [currentPage, setCurrentPage] = useState(0);
  // Stato per i creator paginati




  const [selectedFilters, setSelectedFilters] = useState({
    balliecoreografie: false,
    commedia: false,
    beautyemakeup: false,
    moda: false,
    fitness: false,
    cucina: false,
    gaming: false,
    musica: false,
    educazione: false,
    viaggi: false,
    diy: false,
    recensioni: false,
    lifehacks: false,
    vlog: false,
    animali: false,
    sport: false,
    intrattenimento: false,
    letteratura: false,
    fotografia: false,
    startup: false,
    ecologia: false,
    relazioni: false,
    nuovetecnologie: false,
    altro: false,
    shopping: false,
  });

  const handleCardClick = (id: number) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);

  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;

    // Convertiamo il nome del filtro in minuscolo per uniformare la gestione dei nomi
    const lowerCaseName = name.toLowerCase().replace(/ /g, '');

    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [lowerCaseName]: checked,
    }));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = creator.Username.toLowerCase().includes(searchTerm.toLowerCase());

    // Trova tutte le categorie che sono state selezionate
    const selectedCategories = Object.keys(selectedFilters)
      .filter((key) => selectedFilters[key]);

    // Verifica se il creator appartiene a una delle categorie selezionate
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.some((category) =>
      creator.Categoria.map(c => c.toLowerCase()).includes(category)
    );
    console.log(selectedCategories)

    return matchesSearch && matchesCategory;
  });
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Aggiorna i creator da visualizzare in base alla pagina corrente
    setPaginatedCreators(filteredCreators.slice(startIndex, endIndex).map(creator => ({
      id: creator.id,
      nome: creator.Username, // Assumiamo che "Username" sia equivalente a "nome"
      Username: creator.Username,
      URL: creator.URL,
      categorie: creator.Categoria, // Assumiamo che "Categoria" sia equivalente a "categorie"
      src: creator.src,
      tiktok: creator.URL, // Se non hai un campo "tiktok", assegna un valore predefinito
    })));

    // Calcola il numero totale di pagine
    setTotalPages(Math.ceil(filteredCreators.length / itemsPerPage));
  }, [filteredCreators, currentPage]);
  return (
    <>
      <div className={'topLanding'}>
        <img className={'tiktoklogo'} src={TikTokAgencyLogo} />
        <p className='testoGrandeLanding'>
          WELCOME IN <br />
          BESTEAM TikTok Agency</p>
        <p className='testoPiccoloLanding'>meet our CREATORS and discover our CONTENT!</p>
        <img className='frecciaImmagine' src={freccia} onClick={handleScrollToCreators} />
      </div>
      <div className={'secondaParte'}>
        <p className='ourStaff'>OUR STAFF</p>
        <div className='listaCard'>
          {Staff.map((userStaff: StaffType) => {
            return (
              <CardStaff key={userStaff.id}
                userStaff={userStaff}
                isActive={userStaff.id === activeCardId}
                onClick={() => handleCardClick(userStaff.id)} />
            )

          })}

        </div>
        <p className='ourStaff' id='ourCreators'>OUR CREATORS</p>
        {!isMobile &&(
            <>
             <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '640px', justifyContent: 'center', marginBottom: '30px' }}>
         
         <div className='search-container'>
           <input placeholder='Search creators here..' className='inputStyle' onChange={(x) => setSearchTerm(x.target.value)}>

           </input>
           <div className="search-icon">
             <svg
               width="32"
               height="32"
               viewBox="0 0 32 32"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                 d="M20 20L28 28M13.3333 22.6667C8.17868 22.6667 4 18.488 4 13.3333C4 8.17868 8.17868 4 13.3333 4C18.488 4 22.6667 8.17868 22.6667 13.3333C22.6667 18.488 18.488 22.6667 13.3333 22.6667Z"
                 stroke="#8E8E8E"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               />
             </svg>
           </div>
         </div>
         <div style={{ position: 'relative' }}>
           {filtriAttivi && (<button aria-describedby={id} style={{
             width: '200px',
             height: '90px',
             padding: '24px',
             justifyContent: 'space-between',
             alignItems: 'center',
             background: '#192C1E',
             border: '1px solid #2DC653',
             color: '#2DC653',
             fontSize: '20px',
             fontWeight: '700',
           }} onClick={(event) => {
             handleFilterClick(event);
             handleClickFiltri();
           }}>
             SAVE
           </button>
           )}
           {!filtriAttivi && (
             <button aria-describedby={id} style={{
               width: '200px',
               height: '90px',
               padding: '24px',
               justifyContent: 'space-between',
               alignItems: 'center',
               background: '#4E4E4E',
               color: '#A1A1A1',
               fontSize: '20px',
               fontWeight: '700',
             }} onClick={(event) => {
               handleFilterClick(event);
               handleClickFiltri();
             }}>
               + FILTERS
             </button>
           )}
           {filtriAttivi && (
             <Popover
               id={id}
               open={open}
               onClose={handleFilterClose}
               anchorEl={null} // Non ancorarlo a un elemento
               sx={{
                 position: 'fixed',  // Posizionamento fisso
                 top: '89%',         // Posizione fissa verticale
                 left: '70%',        // Posizione fissa orizzontale
                 transform: 'translate(-50%, -50%)', // Centrato rispetto alla pagina
                 width: '1000px',
                 height: '800px',
               }}


             >


               <Box
                 sx={{
                   p: 2,
                   backgroundColor: '#292929',
                   color: 'white',
                   minWidth: '800px',
                   maxWidth: '800px',
                   height: '410px', // Altezza fissa
                   overflowY: 'auto',
                   overflowX: 'hidden',
                   display: 'flex',
                   flexDirection: 'column', // Mantieni la direzione normale della colonna
                   justifyContent: 'space-between', // Assicura che il contenuto sia allineato
                 }}
               >


                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={balliecoreografie} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Balli e Coreografie</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.balliecoreografie}
                       onChange={handleFilterChange}
                       name="Balli e Coreografie"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={commedia} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Commedia</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.commedia}
                       onChange={handleFilterChange}
                       name="Commedia"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={beauty} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Beauty e MakeUp</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.beautyemakeup}
                       onChange={handleFilterChange}
                       name="Beauty e Makeup"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={moda} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Moda (incluso Cucito e Moda DIY)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.moda}
                       onChange={handleFilterChange}
                       name="Moda"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={fitnessEBenessere} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Fitness e Benessere (incluso Spiritualità e Benessere Mentale)</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.fitness}
                       onChange={handleFilterChange}
                       name="Fitness"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={cucina} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Cucina</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.cucina}
                       onChange={handleFilterChange}
                       name="Cucina"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={gaming} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Gaming</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.gaming}
                       onChange={handleFilterChange}
                       name="Gaming"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={musicaecanto} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Musica e Canto</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.musica}
                       onChange={handleFilterChange}
                       name="Musica"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={educazione} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Educazione e Informazione (incluso Lingue e Traduzioni)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.educazione}
                       onChange={handleFilterChange}
                       name="Educazione"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={viaggi} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>  Viaggi e Avventure</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.viaggi}
                       onChange={handleFilterChange}
                       name="Viaggi"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={daay} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>DIY e Crafting (incluso Arte e Disegno)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.diy}
                       onChange={handleFilterChange}
                       name="DIY"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={recensioni} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Recensioni e Unboxing (incluso Tecnologia e Gadget)</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.recensioni}
                       onChange={handleFilterChange}
                       name="Recensioni"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={lifehacks} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Life hacks</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.lifehacks}
                       onChange={handleFilterChange}
                       name="Life Hacks"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={vlog} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Vlog Personali (incluso Lifestyle e Routine Quotidiana)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.vlog}
                       onChange={handleFilterChange}
                       name="Vlog"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={animali} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Animali</span>
                   </Box>}


                   control={
                     <Checkbox
                       checked={selectedFilters.animali}
                       onChange={handleFilterChange}
                       name="Animali"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={sport} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Sport (incluso Calcio)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.sport}
                       onChange={handleFilterChange}
                       name="Sport"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={intrattenimento} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Intrattenimento (incluso Cinema, TV e Cultura Pop)</span>
                   </Box>}


                   control={
                     <Checkbox
                       checked={selectedFilters.intrattenimento}
                       onChange={handleFilterChange}
                       name="Intrattenimento"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"

                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={letteratura} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Letteratura e Libri</span>
                   </Box>}
                   control={
                     <Checkbox
                       checked={selectedFilters.letteratura}
                       onChange={handleFilterChange}
                       name="Letteratura"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={fotografia} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Fotografia e Video Editing</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.fotografia}
                       onChange={handleFilterChange}
                       name="Fotografia"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={startup} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Startup e Imprenditoria</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.startup}
                       onChange={handleFilterChange}
                       name="Startup"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={ecologia} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Ecologia e Sostenibilità (incluso Giardinaggio e Piante)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.ecologia}
                       onChange={handleFilterChange}
                       name="Ecologia"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={relazioni} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Relazioni e Consigli di Coppia</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.relazioni}
                       onChange={handleFilterChange}
                       name="Relazioni"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={nuovetecnologie} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}>Nuove Tecnologie (incluso Realtà Virtuale, Aumentata, Metaverso e Intelligenza Artificiale)</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.nuovetecnologie}
                       onChange={handleFilterChange}
                       name="Nuove Tecnologie"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
                 <FormControlLabel
                   labelPlacement="start"
                   label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                     <img src={altro} ></img> {/* Sostituisci 'brush' con l'icona desiderata */}
                     <span style={{ marginLeft: '5px' }}> Altro</span>
                   </Box>}

                   control={
                     <Checkbox
                       checked={selectedFilters.altro}
                       onChange={handleFilterChange}
                       name="Altro"
                       sx={{
                         padding: '0 8px',
                         color: 'white',
                         '& .MuiSvgIcon-root': {
                           fill: 'none',
                           stroke: '#B0B0B0',
                           strokeWidth: 1.5,
                           borderRadius: '4px',
                           width: '20px',
                           height: '20px',
                         },
                         '&.Mui-checked .MuiSvgIcon-root': {
                           fill: '#1F8F42',
                           stroke: 'black',
                           strokeWidth: 2,
                         },
                         '&:hover': {
                           '& .MuiSvgIcon-root': {
                             stroke: '#1F8F42',
                           },
                         },
                       }}
                     />
                   }
                   sx={{
                     color: 'white',
                     display: 'flex',
                     justifyContent: 'space-between',
                     width: '100%',
                     padding: '5px 0',
                   }}
                 />
               </Box>
             </Popover>
           )}
         </div>
       </div>
            </>
          ) }
          {isMobile &&(<p></p>)}
       


        <div className='cardCreatorContainer'>
          {paginatedCreators.map((userCreator: CreatorType) => (
            <CardCreator
              key={userCreator.id}
              userCreator={userCreator}
              isActive={userCreator.id === activeCardId}
              onClick={() => handleCardClick(userCreator.id)}
            />
          ))}
        </div>
        <div className="paginationControls">

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageClick(i)}
              style={{ fontWeight: '500', color: currentPage === i ? '#2DC653' : 'white', fontFamily: 'DinPRO', fontSize: '24px' }}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
            <img src={frecciaRight} style={{ width: '18px', height: '25px' }}></img>
          </button>
        </div>

        <img style={{ marginTop: '91px', height: '40px', width: '40px', alignSelf: 'center' }} src={frecciaSu} onClick={handleScrollToCreators} />
        <p className='ourStaff'>CONTACT US</p>
        <div className="sectionContactUs">
          <div className='riga'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Communication / Mail">
                <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>

            <p className='testoContactUs2'> agency@besteam.io</p>
          </div>
          <a className='riga' href='https://discord.gg/besteam'>
            <img src={discord} style={{ height: '26px', width: '25px' }} />
            <p className='testoContactUs2'> https://discord.gg/besteam</p>
          </a>
          <a className='riga' href=' https://chat.whatsapp.com/DVEsaNrgU8JKH45c53DMbO'>


            <img src={whatsapp} style={{ width: '32px', height: '32px' }} />
            <p className='testoContactUs2'>Community WhatsApp</p>
          </a>



        </div>
        <br />
        <br /> <br />
        <br /> <br />
        <br />

      </div>
      <img src={bordo} style={{ width: "100%", marginTop: '-30px' }} />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1C1C1C",
          color: "white",
          height: "100px",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-2.1vh",
        }}
      >
        <p>
          Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
          Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
          besteamgamesrl@legalmail.it
        </p>
      </div>
    </>)
}


export default HomeTikTok