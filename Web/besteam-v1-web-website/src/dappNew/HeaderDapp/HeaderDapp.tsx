import React from "react";
import { ButtonConnessioneDapp, HeaderContainerDapp } from "./HeaderDappStyled";
import { TestoButton } from "../../Screens/btemSwap/boxIscrizione/BoxIscrizioneStyled";
import logoBe from './logoBe.png'
import support from './support.png'
import { Link } from "react-router-dom";
const HeaderDapp = () => {
  return (
    <>
      <HeaderContainerDapp>
            
      
              <img src={logoBe} alt={'logoBe'} style={{width:'5.823vw', height:'4.823vw', alignContent:'center', justifyContent:'center',alignItems:'center',position:'fixed',left:'0vw'}} />
              <div style={{display:'flex', gap:'2.431vw',fontSize:'1.823vw', fontFamily:'Bonn', color:'white', position:'fixed',right:'2vw',justifyContent:'center',alignContent:'center',alignItems:'center'}} className="testi-bottoni">
                <div style={{backgroundColor:'#2DC653', width:'10vw', height:'2.361vw', display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <div style={{fontSize:'1.389vw'}} className="text-wrapper-11">METAVERSE</div>
                </div>
                <div style={{backgroundColor:'#2DC653', width:'7.5vw',height:'2.361vw',display:'flex',justifyContent:'center', alignContent:'center',alignItems:'center'}}>
                <div style={{fontSize:'1.389vw'}} className="text-wrapper-10">NFT</div></div>
               

                <div  style={{fontSize:'1.389vw'}}className="text-wrapper-13">EVENTS</div>
                <div  style={{fontSize:'1.389vw'}} className="text-wrapper-12">MARKET</div>
                <Link to='/dapp/creaclub'>
                <div  style={{fontSize:'1.389vw'}} className="text-wrapper-15">TEAM</div>
                </Link>
                <div  style={{fontSize:'1.389vw'}} className="text-wrapper-14">PLAYER</div>
                <img src={support} alt='supporto' style={{width:'2.5vw', height:'2.5vw'}} />

              </div>

            
          
      </HeaderContainerDapp>
    </>
  );
};

export default HeaderDapp;
