import { flexbox } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Container } from "../general/general";
import {
  ButtonIscrizione,
  TestoPiccolo,
} from "../Iscrizione/IscrizioneStyled";
import {
  ButtonLogo,
  CreazioneClubForm,
  InputClub,
  TestoLeftInput,
} from "./CreazioneClubStyled";
import { Height } from "@material-ui/icons";
import axios from "axios";
import HeaderBar from "../../components/HeaderBar";
import { HeaderContainerDapp } from "../HeaderDapp/HeaderDappStyled";
import createTeam from '../media/create.png'
import joinTeam from '../media/join.png'
import buyTeam from '../media/buy.png'
import { HeaderDapp } from "../HeaderDapp";
import { LeftMenu } from "../LeftMenu";
import logo1 from '../media/shapes/logo1.png';
import logo2 from '../media/shapes/logo2.png';
import logo3 from '../media/shapes/logo3.png';
import logo4 from '../media/shapes/logo4.png';
import logo5 from '../media/shapes/logo5.png';
import tank from '../media/metaverseLoghi/tank.png';
import tactic from '../media/metaverseLoghi/tactic.png';
import speed from '../media/metaverseLoghi/speed.png';
import skill from '../media/metaverseLoghi/skill.png';
import nextButton from '../media/nextButton.png'
import teamValue from './TeamValue.png'
import ColorSelect from "./ColorSelect";
import TeamInfo from "./TeamInfo";
import CreateNo from '../media/CreateNo.png'
import JoinNo from '../media/JoinNo.png'
import BuyNo from '../media/BuyNo.png'

const CreazioneClub = () => {
  const [name, setName] = useState("")
  const [twitterPage, setTwitterPage] = useState("")
  const [clubsName, setClubsName] = useState("")
  const [livePage, setLivePage] = useState("")
  const [logo, setLogo] = useState("R")
  const [abbreviation, setAbbreviation] = useState("")
  const [clubColorOne, setClubColorOne] = useState("1")
  const [clubColorTwo, setClubColorTwo] = useState("1")
  const [trainingCenterName, setTrainingCenterName] = useState("")
  const [stadiumName, setStadiumName] = useState("")
  const [metaverseZone, setMetaverseZone] = useState("")
  const [start, setStart] = useState(false)
  const [firstStep, setFirstStep] = useState(true)
  const [secondStep, setSecondstep] = useState(false)
  const [thirdStep, setThirdStep] = useState(false)



  useEffect(() => {
    console.log(clubColorOne, clubColorTwo, logo)

  }, [clubColorOne, clubColorTwo, logo])

  const createam = () => {

    axios.post('http://localhost:8080/team/create', {
      name: name,
      twitterPage: twitterPage,
      clubsName: clubsName,
      livePage: livePage,
      logo: logo,
      abbreviation: abbreviation,
      clubColorOne: clubColorOne,
      clubColorTwo: clubColorTwo,
      trainingCenterName: trainingCenterName,
      stadiumName: stadiumName,
      metaverseZone: metaverseZone
    },
      {
        headers: {

          'bt-auth-token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyV2FsbGV0Q29kZSI6ImNjY2NjY2MiLCJ1c2VyUm9sZSI6Ik1BTkFHRVIiLCJleHAiOjE3MDI2NTkzOTgsInVzZXJJZCI6MTQsInVzZXJuYW1lIjoiYXNkc2FkIn0.NqlY9MGM_dFkrzkWJhHHnooU0_TcibrdTQH5wq24Two'
        }
      })
  }

  if (!!start) return (

    <div style={{ backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <HeaderDapp />
      <LeftMenu />

      {(!!firstStep) &&
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '40.069vw', height: '37.5vw', display: 'flex', flexDirection: 'column', backgroundColor: '#141414', padding: '4.514vw' }}>
            <TestoLeftInput>Logo</TestoLeftInput>
            <div style={{ width: '31.042vw', height: '15.48vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
              <img src={`/loghiSquadre/${logo}${clubColorOne}${clubColorTwo}.png`} style={{ width: '9.375vw', height: '9.375vw' }} alt="Composed Selection" />

            </div>
            <TestoLeftInput>Shape</TestoLeftInput>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-evenly' }}>
              <div onClick={() => setLogo('R')} style={{ width: '4.661vw', height: '4.661vw', backgroundImage: `url(${logo1})`, backgroundSize: 'contain' }} />
              <div onClick={() => setLogo('C')} style={{ width: '4.661vw', height: '4.661vw', backgroundImage: `url(${logo2})`, backgroundSize: 'contain' }} />
              <div onClick={() => setLogo('O')} style={{ width: '4.661vw', height: '4.661vw', backgroundImage: `url(${logo3})`, backgroundSize: 'contain' }} />
              <div onClick={() => setLogo('S')} style={{ width: '4.661vw', height: '4.661vw', backgroundImage: `url(${logo4})`, backgroundSize: 'contain' }} />
              <div onClick={() => setLogo('B')} style={{ width: '4.661vw', height: '4.661vw', backgroundImage: `url(${logo5})`, backgroundSize: 'contain' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.519vw' }}>
                <TestoLeftInput>Main color</TestoLeftInput>
                <ColorSelect setColor={setClubColorOne} color={clubColorOne} type={1} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.519vw' }}>
                <TestoLeftInput>Secondary color</TestoLeftInput>
                <ColorSelect setColor={setClubColorTwo} color={clubColorTwo} type={2} />
              </div>
            </div>

          </div>
          <div style={{ width: '40.069vw', height: '37.5vw', display: 'flex', flexDirection: 'column', backgroundColor: '#141414', justifyContent: 'center', alignContent: 'center', alignItems: 'center', gap: '1.217vw' }}>


            <div style={{ display: 'flex', flexDirection: 'row', gap: '1.5vw', justifyContent: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.519vw' }}>
                <TestoLeftInput>Team name</TestoLeftInput>
                <InputClub style={{ width: '19.09vw' }} onChange={(e) => setName(e.target.value)} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.519vw' }}>
                <TestoLeftInput>abbreviation</TestoLeftInput>
                <InputClub style={{ width: '10.417vw' }} onChange={(e) => setAbbreviation(e.target.value)} />
              </div>

            </div>
            <div>
              <TestoLeftInput>Clubs Name</TestoLeftInput>
              <InputClub onChange={(e) => setClubsName(e.target.value)} />
            </div>

            <div>
              <TestoLeftInput>HUB Name</TestoLeftInput>
              <InputClub onChange={(e) => setStadiumName(e.target.value)} />
            </div>

            <div>
              <TestoLeftInput>Stadium Name</TestoLeftInput>
              <InputClub onChange={(e) => setTwitterPage(e.target.value)} />
            </div>

            <div>
              <TestoLeftInput>Main Social Page</TestoLeftInput>
              <InputClub onChange={(e) => setLivePage(e.target.value)} />
            </div>



            <div><TestoLeftInput>Official Live Page</TestoLeftInput>

              <InputClub onChange={(e) => setMetaverseZone(e.target.value)} />
            </div>
            <div onClick={() => { setSecondstep(true), setFirstStep(false) }}>
              <img src={nextButton} style={{width:'11.111vw',height:'3.207vw'}}/>
            </div>
        </div>
        </div>}

{
  (!!secondStep) &&
  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '83.33vw', height: '37.5vw', backgroundColor: '#141414', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
      <div>
        <div>
          <p>Metaverse Zone</p>
          <p>Qui</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', width: '41.667vw', height: '20.83vw' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div onClick={() => setMetaverseZone('skill')} style={{ width: '20.83vw', height: '10.41vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', border: metaverseZone === 'skill' ? '2px solid #2DC653' : 'none' }}>
              <img src={skill} style={{ width: '13.542vw' }}></img>
            </div>
            <div onClick={() => setMetaverseZone('tank')} style={{ width: '20.83vw', height: '10.41vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', border: metaverseZone === 'tank' ? '2px solid #2DC653' : 'none' }}>
              <img src={tank} style={{ width: '13.542vw' }}></img>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div onClick={() => setMetaverseZone('tactic')} style={{ width: '20.83vw', height: '10.41vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', border: metaverseZone === 'tactic' ? '2px solid #2DC653' : 'none' }}>
              <img src={tactic} style={{ width: '13.542vw' }}></img>
            </div>
            <div onClick={() => setMetaverseZone('speed')} style={{ width: '20.83vw', height: '10.41vw', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', border: metaverseZone === 'speed' ? '2px solid #2DC653' : 'none' }}>
              <img src={speed} style={{ width: '13.542vw' }}></img>
            </div>
          </div>


        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>Skill</p>
        <p>Lorem ipsum dolor sit amet,
          aliquip ex ea com vero.</p>



        <button onClick={() => { setThirdStep(true), setSecondstep(false) }}>Start</button>


      </div>


    </div>
  </div>
}
{
  thirdStep &&
  <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
    <div id="first-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2.083vw' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '10.417vw', height: '10.417vw', backgroundColor: '#141414' }}>
        <img src={logo1} style={{ width: '10.417vw' }}></img>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '34.375vw', height: '10.417vw', backgroundColor: '#141414' }}>
        <TeamInfo />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '15.625vw', height: '10.417vw', backgroundColor: '#141414' }}>
      </div>
    </div>
    <div id="second-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2.083vw' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '10.417vw', height: '6.71vw', backgroundColor: '#141414' }}>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '34.375vw', height: '6.71vw', backgroundColor: '#141414' }}>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '15.625vw', height: '6.71vw', backgroundColor: '#141414' }}>
        <img src={teamValue} style={{ width: '15.625vw', height: '6.71vw' }}></img>
      </div>

    </div>
    <div id="third-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '2.083vw' }}>
      <div style={{ display: 'flex', flexDirection: 'column', width: '10.417vw', height: '8.85vw', backgroundColor: '#141414' }}>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '34.375vw', height: '8.85vw', backgroundColor: '#141414' }}>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '15.625vw', height: '8.85vw', backgroundColor: '#141414' }}>
        <img src="" />
      </div>

    </div>

  </div>
}









    </div >
  );
  else return (
  <div style={{ backgroundColor: '#1C1C1C', display: 'flex', flexDirection: 'column', height: '100%' }}>

    <HeaderDapp />
    <LeftMenu />
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '4.125vw', backgroundColor: '#1C1C1C'}}>
        <div style={{ width: '28.74vw', height: '32.125vw', backgroundImage: `url(${JoinNo})`,marginTop:'40px' , marginLeft:'80px',backgroundSize: 'contain' }}>

        </div>
        <div onClick={() => setStart(true)} style={{ width: '26.396vw', height: '32.125vw', marginTop:'40px',backgroundImage: `url(${CreateNo})`, backgroundSize: 'contain' }} />
        <div onClick={() => console.log('COMPRA')} style={{ width: '14.677vw', height: '32.125vw',marginTop:'40px', backgroundImage: `url(${BuyNo})`, backgroundSize: 'contain' }}></div>

    
    </div>
  </div>
)
};

export default CreazioneClub;



/*
 <CreazioneClubForm style={{backgroundColor:'#dfe5e1'}}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

       <div>
          <p>*TWITTER PAGE</p>

          <InputClub onChange={(e)=>setTwitterPage(e.target.value)} />
        </div>
        <div>
          <p>*CLUBS NAME</p>

          <InputClub onChange={(e)=>setClubsName(e.target.value)} />
        </div>
      
        <div>
          <p>*LIVE PAGE</p>
          <InputClub onChange={(e)=>setLivePage(e.target.value)}/>
        </div>
        <div><p>*logo</p>

<InputClub onChange={(e)=>setLogo(e.target.value)} />
        </div>
        <div><p>*ABBREVATION</p>

<InputClub onChange={(e)=>setAbbreviation(e.target.value)} />
        </div>
        <div><p>*COLOR ONE</p>

<InputClub onChange={(e)=>setClubColorOne(e.target.value)} />
        </div>
        <div><p>*COLOR TWO</p>

<InputClub onChange={(e)=>setClubColorTwo(e.target.value)} />
        </div>
        <div><p>*Traing center NAME</p>

<InputClub onChange={(e)=>setTrainingCenterName(e.target.value)} />
        </div>
        <div><p>*Stadium NAME</p>

<InputClub onChange={(e)=>setStadiumName(e.target.value)} />
        </div>
        <div><p>*Metaversezone NAME</p>

<InputClub onChange={(e)=>setMetaverseZone(e.target.value)} />
        </div>
        <TestoPiccolo>*SONO CAMPI OBBLIGATORI</TestoPiccolo>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <ButtonLogo>LOGO UPLOAD</ButtonLogo>

          <ButtonIscrizione onClick={()=>{createam()}}>AVANTI</ButtonIscrizione>
        </div>
      </CreazioneClubForm>*/