import { height } from "@mui/system";
import { url } from "inspector";
import React from "react";
import styled from "styled-components";
import photoTeam from "../components/video/fototeam.png";
import arrowright from "../components/video/freccia.png";
import arrowleft from "../components/video/frecciasinistra.png";
import team1 from "./video/team/marco.png";
import team2 from "./video/team/filippo.png";
import team3 from "./video/team/enrico.png";
import verde from "./video/simboloverde.jpg";
import aranc from "./video/simboloarancione.jpg";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import enrico from '../components/video/enrico.webp'
import marco from '../components/video/immaginiOurTeam/Card Marco.webp'
import filippo from '../components/video/immaginiOurTeam/Card Filippo.webp'
import giulietta from '../components/video/immaginiOurTeam/Card Giulietta.webp'
import edoardo from '../components/video/immaginiOurTeam/Card Edoardo.webp'
import ornella from '../components/video/immaginiOurTeam/Card Ornella.webp'
import eduardo from '../components/video/immaginiOurTeam/Card Eduardo.webp'
import giovanni from '../components/video/immaginiOurTeam/Card Giovanni.webp'
import rocco from '../components/video/immaginiOurTeam/Card Rocco.webp'
import jacopo from '../components/video/immaginiOurTeam/Card Jacopo.webp'
import eros from '../components/video/immaginiOurTeam/Card Eros.webp'
import aminul from '../components/video/immaginiOurTeam/Card Aminul.webp'
import giacomo from '../components/video/immaginiOurTeam/Card Giacomo.webp'
import mauro from '../components/video/immaginiOurTeam/Card Mauro.webp'
import gaetano from '../components/video/immaginiOurTeam/Card Gaetano.webp'
import ale from '../components/video/ale.webp'
import giuseppe from '../components/video/immaginiOurTeam/Card Giuseppe.webp'
import emanuele from '../components/video/immaginiOurTeam/Card Emanuele.webp'
import vinenzo from '../components/video/immaginiOurTeam/Cad Enzo.webp'
import lorena  from '../components/video/immaginiOurTeam/Card Lorena.webp'
import mattia from '../components/video/immaginiOurTeam/Card Mattia.webp'
import riccardo from '../components/video/immaginiOurTeam/Card Riccardo.webp'
const customOptions = {

  prevArrow: (
    <div
      className="hoverzoom"
      style={{
        left: "1rem",
        top: "8rem",
        display: "block",
      }}
    >
      <img src={arrowleft} width="23px" height="30px" />
    </div>
  ),
  nextArrow: (
    <div
      className="hoverzoom"
      style={{
        right: "1rem",
        top: "8rem",
        display: "block",
      }}
    >
      <img src={arrowright} width="23px" height="30px" />{" "}
    </div>
  ),
};
const customOptions2 = {
  prevArrow: (
    <div
      className="hoverzoom"
      style={{ width: "20px", marginRight: "-20px" }}
    >
      <img
        src={arrowleft}
        width="20x!important"
        height="20px"
        style={{ position: "absolute", left: "20px", top: "-10px" }}
      />
    </div>
  ),
  nextArrow: (
    <div className="hoverzoom" style={{ width: "20px", marginLeft: "-20px" }}>
      <img
        src={arrowright}
        width="20px"
        height="20px"
        style={{
          position: "absolute",
          top: "-10px",

          right: "20px",
        }}
      />{" "}
    </div>
  ),
};

const ContainerPersone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const SinglePerson = styled.div`
  display: flex;
  flex-direction: column;
`;

const containerOurPartner = styled.div`
  background-image: url(${photoTeam});
  background-size: cover;
`;

const TestoLink = styled.p`
text-align: left;
                 font-family: "DINPro";
                      font-size: 1.4vw;
                      color: #9B9B9B;
                      margin-top:-1.5vw;

                      `
const BoxImageTeam = styled.div`
  display: flex;
  flex-direction: column;
  border: 6px solid #2DC653;
border-radius:1.4541666666666667vw;
z-index:10000;
opacity: 1;
width:15.22vw;
height:26.04vw;
margin-left:4.5vw;
  `
const BoxInfoTeam = styled.div
`
  display: flex;
  flex-direction: column;
  padding:1rem;
  justify-content: center;
align-content: center;
  `

  
const TestoRuolo = styled.p`
font-family: 'DINPro';
color: #2DC653;
font-size: 1.406vw;
text-align: left;
margin-top:-1.5vw

`

const TestoNome = styled.p`
font-family: 'DINProBold';
color: white;
font-size: 1.7vw;
text-align: left;
margin-top:0px
`

const OurTeam = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <div id="team">
        <div className="container-page">
          <p
            className="testo-newsletter"
            style={{ fontFamily: "DinPROBold", marginTop: "13vh" }}
          >
            OUR TEAM
          </p>
          <div style={{ width: "80%", display:'flex',  flexDirection:'column',alignContent:'center',justifyContent:'center'}}>
          <Slide slidesToShow={3} {...customOptions}>

        

<BoxImageTeam > 
  <img src={enrico} style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
      Enrico Coviello
  </TestoNome>
  <TestoRuolo>CEO, Co-founder</TestoRuolo>
  <TestoLink>  <a href="https://twitter.com/Enrico_Coviello" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={marco}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
      Marco Tedesco
  </TestoNome>
  <TestoRuolo>COO, Co-founder</TestoRuolo>
  <TestoLink>  <a href="https://twitter.com/Tedarco96" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={filippo}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
  Filippo  Ballarini  </TestoNome>
  <TestoRuolo>CMO</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giulietta}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
      Giulietta Minucci
  </TestoNome>
  <TestoRuolo>CLO</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuliettaminucci/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={edoardo}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
     Edoardo Grassi
  </TestoNome>
  <TestoRuolo>Lead 3D</TestoRuolo>
  <TestoLink> 
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={ornella} style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
    Ornella Lacovara
  </TestoNome>
  <TestoRuolo>Texturing</TestoRuolo>
  <TestoLink> 
                    <a
                      href="https://www.linkedin.com/in/ornella-lacovara-654a80214"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={eduardo}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
Eduardo Rizzo  </TestoNome>
  <TestoRuolo>Lighting</TestoRuolo>
  <TestoLink> 
                    <a
                      href="http://linkedin.com/in/eduardo-rizzo90"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giovanni}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
Giovanni Liotti  </TestoNome>
  <TestoRuolo>3D Animator</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giovanni-liotti/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 

<BoxImageTeam> 
  <img src={rocco}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
Rocco Caricola  </TestoNome>
  <TestoRuolo>Front-End developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/roccocaricola/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={jacopo}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
  Jacopo Gornati
  </TestoNome>
  <TestoRuolo>Back-end developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/jacopo-gornati-91955868/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={eros}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
  Eros Tringali
  </TestoNome>
  <TestoRuolo>Back-end developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/eros-tringali/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={aminul}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
  Aminul Hossain
  </TestoNome>
  <TestoRuolo>Lead Blockchain</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/aminul-hossain-185a30163/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giacomo} style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
      Giacomo Colella
  </TestoNome>
  <TestoRuolo>Blockchain Dev</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giacomocolella/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={eduardo}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
  Filippo Vetro
  </TestoNome>
  <TestoRuolo>Character designer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="http://linkedin.com/in/filippovetro3d"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam > 
  <img src={eduardo} style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome >
  Francesco D'Urso
    </TestoNome>
  <br/>
  <TestoRuolo>Character designer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/francesco-d-urso-686035235/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giuseppe}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome >
  Giuseppe Albertini
  </TestoNome>
  <br/>
  <TestoRuolo>PM</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={emanuele}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome >
      Emanuele Paparella
  </TestoNome>
  <br/>
  <TestoRuolo>Sound Producer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/emanuele-paparella-9a86b024b/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={vinenzo} style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome >
  Vincenzo Lupo Cosimo  </TestoNome>
  <br/>
  <TestoRuolo>Esport Supervisor</TestoRuolo>
  <TestoLink> 
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={lorena}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}}/>
  <BoxInfoTeam>
  <TestoNome>
     Lorena Rusu
  </TestoNome>
  <TestoRuolo>Esport Caster</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/lorena-rusu-9123471b1/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={mattia}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
Mattia Meo  </TestoNome>
  <TestoRuolo>Esport Caster</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuseppe-mattia-meo-4999041ba/?originalSubdomain=it"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={ale}  style={{zIndex:'-100', width:'102%',alignSelf:'center'}} />
  <BoxInfoTeam>
  <TestoNome>
  Alessio Di Iorio </TestoNome>
  <TestoRuolo>Game Developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/di-iorio-alessio/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 




          
              </Slide>
{/*
          <div
            style={{
              marginTop: "-3.5rem",
              display: "flex",
              flexDirection: "row",
              padding: "3rem",
              gap: "1rem",
              maxWidth: "100%",
              justifyContent: "center",
              marginBottom: "5vh",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img src={team3} alt="team1" style={{ width: "15vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Enrico Coviello
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    CEO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    <a
                      href="https://twitter.com/Enrico_Coviello"
                      target="_blank"
                    >
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team1} alt="team1" style={{ width: "15vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Marco Tedesco
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    COO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href="https://twitter.com/Tedarco96" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team2} alt="team1" style={{ width: "15vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      marginBottom: 0,
                    }}
                  >
                    Filippo Ballarini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    CMO
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
                marginTop: "-1vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Giacomo Colella
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Blockchain Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    <a
                      href="https://www.linkedin.com/in/giacomocolella/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Rocco Caricola
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Website Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/roccocaricola/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Jep Albertini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    PM
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href="https://twitter.com/jep27pr" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Emanuele
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Paparella
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ADMIN
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Riccardo
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Ricci
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ADMIN
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
                marginTop: "-1vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Matteo De Nuzzo
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Game Designer
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/matteo-de-nuzzo-93b836197/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={verde}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Edoardo Grassi
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Lead 3D
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Game Developer
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Lead Esport
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <img
                  src={aranc}
                  alt="verde"
                  style={{ width: "5vw", height: "5vw" }}
                />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    ...
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#F78B21",
                      fontSize: "1.7vw",
                      textAlign: "left",
                      margin: 0,
                    }}
                  >
                    Backend Dev
                  </p>
                  <p
                    style={{
                      textAlign: "left",
                      fontFamily: "DINProCondReg",
                      fontSize: "1.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    {" "}
                    we want you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          */}
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

       </div>
      </div>
    );
  else
    return (
      <div id="team">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div
          className="container-page"
          style={{ height: "400px", marginTop: "15vh" }}
        >
          <p
            className="testo-newsletter"
            style={{ fontFamily: "DinPROBold", marginTop: "15vh" }}
          >
            OUR TEAM
          </p>
          {/*
          <div style={{ width: "80%", display:'flex',  flexDirection:'column'}}>
          <Slide slidesToShow={3} {...customOptions}>

        

<BoxImageTeam> 
  <img src={enrico} />
  <BoxInfoTeam>
  <TestoNome>
      Enrico Coviello
  </TestoNome>
  <TestoRuolo>CEO, Co-founder</TestoRuolo>
  <TestoLink>  <a href="https://twitter.com/" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={marco} />
  <BoxInfoTeam>
  <TestoNome>
      Marco Tedesco
  </TestoNome>
  <TestoRuolo>COO, Co-founder</TestoRuolo>
  <TestoLink>  <a href="https://twitter.com/Tedarco96" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={filippo} />
  <BoxInfoTeam>
  <TestoNome>
  Filippo  Ballarini  </TestoNome>
  <TestoRuolo>CMO</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giulietta} />
  <BoxInfoTeam>
  <TestoNome>
      Giulietta Minucci
  </TestoNome>
  <TestoRuolo>CLO</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuliettaminucci/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={edoardo} />
  <BoxInfoTeam>
  <TestoNome>
     Edoardo Grassi
  </TestoNome>
  <TestoRuolo>Lead 3D</TestoRuolo>
  <TestoLink> 
                    <a
                      href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={ornella} />
  <BoxInfoTeam>
  <TestoNome>
    Ornella Lacovara
  </TestoNome>
  <TestoRuolo>Texturing</TestoRuolo>
  <TestoLink> 
                    <a
                      href="https://www.linkedin.com/in/ornella-lacovara-654a80214"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={eduardo} />
  <BoxInfoTeam>
  <TestoNome>
Eduardo Rizzo  </TestoNome>
  <TestoRuolo>Lighting</TestoRuolo>
  <TestoLink> 
                    <a
                      href="http://linkedin.com/in/eduardo-rizzo90"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giovanni} />
  <BoxInfoTeam>
  <TestoNome>
Giovanni Liotti  </TestoNome>
  <TestoRuolo>3D Animator</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giovanni-liotti/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 

<BoxImageTeam> 
  <img src={rocco} />
  <BoxInfoTeam>
  <TestoNome>
Rocco Caricola  </TestoNome>
  <TestoRuolo>Front-End developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/roccocaricola/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={jacopo} />
  <BoxInfoTeam>
  <TestoNome>
  Jacopo Gornati
  </TestoNome>
  <TestoRuolo>Back-end developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/jacopo-gornati-91955868/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={eros} />
  <BoxInfoTeam>
  <TestoNome>
  Eros Tringali
  </TestoNome>
  <TestoRuolo>Back-end developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/eros-tringali/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={aminul} />
  <BoxInfoTeam>
  <TestoNome>
  Aminul Hossain
  </TestoNome>
  <TestoRuolo>Lead Blockchain</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/aminul-hossain-185a30163/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giacomo} />
  <BoxInfoTeam>
  <TestoNome>
      Giacomo Colella
  </TestoNome>
  <TestoRuolo>Blockchain Developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giacomocolella/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={mauro} />
  <BoxInfoTeam>
  <TestoNome>
  Mauro Gampieri
  </TestoNome>
  <TestoRuolo>Game Developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/maurogiampieri/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={gaetano} />
  <BoxInfoTeam>
  <TestoNome>
     Gaetano De Pasquale
  </TestoNome>
  <TestoRuolo>Game Developer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/gaetano-de-pasquale/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={giuseppe} />
  <BoxInfoTeam>
  <TestoNome>
  Giuseppe Albertini
  </TestoNome>
  <TestoRuolo>PM</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={emanuele} />
  <BoxInfoTeam>
  <TestoNome>
      Emanuele Paparella
  </TestoNome>
  <TestoRuolo>Sound Producer</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/emanuele-paparella-9a86b024b/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={vinenzo} />
  <BoxInfoTeam>
  <TestoNome>
  Vincenzo Lupo Cosimo  </TestoNome>
  <TestoRuolo>Esport Supervisor</TestoRuolo>
  <TestoLink> 
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={lorena} />
  <BoxInfoTeam>
  <TestoNome>
     Lorena Rusu
  </TestoNome>
  <TestoRuolo>Esport Caster</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/lorena-rusu-9123471b1/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 
<BoxImageTeam> 
  <img src={mattia} />
  <BoxInfoTeam>
  <TestoNome>
Mattia Meo  </TestoNome>
  <TestoRuolo>Esport Caster</TestoRuolo>
  <TestoLink>  
                    <a
                      href="https://www.linkedin.com/in/giuseppe-mattia-meo-4999041ba/?originalSubdomain=it"
                      target="_blank"
                    >
                      Linkedin
                    </a>
    </TestoLink>
  </BoxInfoTeam>
</BoxImageTeam> 



          
              </Slide>
              </div>
    */}
          <div
            style={{
              marginTop: "-3.5rem",
              display: "flex",
              flexDirection: "row",
              padding: "3rem",
              gap: "1rem",
              maxWidth: "100%",
              justifyContent: "center",
              marginBottom: "5vh",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img src={team3} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Enrico Coviello
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    CEO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",

                      margin: 0,
                    }}
                  >
                    {" "}
                    <a
                      href="https://twitter.com/Enrico_Coviello"
                      target="_blank"
                    >
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/enrico-coviello-352a39225/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team1} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Marco Tedesco
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    COO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a href="https://twitter.com/Tedarco96" target="_blank">
                      Twitter{" "}
                    </a>
                    -{" "}
                    <a
                      href="https://www.linkedin.com/in/marco-tedesco-a54914227/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img src={team2} alt="team1" style={{ width: "25vw" }} />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "white",
                      fontSize: "3.7vw",
                      textAlign: "center",
                      marginBottom: 0,
                    }}
                  >
                    Filippo Ballarini
                  </p>
                  <p
                    style={{
                      fontFamily: "DINProCondBold",
                      color: "#2DC653",
                      fontSize: "4.7vw",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    CMO
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "DINProCondReg",
                      fontSize: "2.7vw",
                      color: "#9B9B9B",
                      margin: 0,
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/filippo-ballarini-78363597/"
                      target="_blank"
                    >
                      Linkedin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
              marginTop: "-7vh",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Giulietta Minucci
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  CLO
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/giuliettaminucci/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Edoardo Grassi
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Lead 3D
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/edoardo-grassi-278331162/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Ornella Lacovara
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Texturing
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/ornella-lacovara-654a80214"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Eduardo Rizzo
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Lighting
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="http://linkedin.com/in/eduardo-rizzo90"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Aminul Hossain
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Lead BlockChain
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/aminul-hossain-185a30163/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Giacomo Colella
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Blockchain Dev
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/giacomocolella/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Giovanni Liotti
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  3D Animator
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/giovanni-liotti/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Filippo Vetro
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                 Character
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="http://linkedin.com/in/filippovetro3d"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.2vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >Francesco D'Urso
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                Character
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/francesco-d-urso-686035235/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                Eros Tringali
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Backend Dev
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/eros-tringali/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                 Jacopo Gornati
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Backend Dev
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/jacopo-gornati-91955868/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                 Rocco Caricola
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Frontend Dev
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/roccocaricola/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                JEP
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  PM
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/giuseppe-albertini-734a3244/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.3vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                 Emax
                </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Sound Producer
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/emanuele-paparella-9a86b024b/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
Vincenzo Lupo

</p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
Esport Supervisor

</p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                 
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.3rem",
            }}
          >
              <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
Lorena Rusu              </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Esport Caster
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/lorena-rusu-9123471b1/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
Mattia Meo          </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Esport Caster
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/giuseppe-mattia-meo-4999041ba/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
              
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                gap: "0.5rem",
                width: "100px",
              }}
            >
              <img
                src={verde}
                alt="verde"
                style={{ width: "7vw", height: "7vw" }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "white",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
Alessio Di Iorio         </p>
                <p
                  style={{
                    fontFamily: "DINProCondBold",
                    color: "#2DC653",
                    fontSize: "2.5vw",
                    textAlign: "left",
                    margin: 0,
                  }}
                >
                  Game Developer
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontFamily: "DINProCondReg",
                    fontSize: "2.5vw",
                    color: "#9B9B9B",
                    margin: 0,
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/di-iorio-alessio/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </p>
              </div>
              
            </div>
         
          </div>


          
        </div>
      </div>
    );
};

export default OurTeam;
