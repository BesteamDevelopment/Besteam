import React, { useState } from "react";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import SecondHeader from "../components/SecondHeader";
import Paragrafo5 from "../components/Paragrafo5";
import Paragrafo4 from "../components/Paragrafo4";
import Paragrafo3 from "../components/Paragrafo3";
import Paragrafo2 from "../components/Paragrafo2";
import Paragrafo1 from "../components/Paragrafo1";
import up from "../components/video/freccia.jpg";
import freccia2 from "../components/video/freccia2.png";
import { FaInstagram, FaDiscord, FaTelegram, FaTwitter, FaTiktok } from "react-icons/fa";
//import OurTeam from "../components/OurTeam";
import gifPallone from "../components/video/bb.gif";
import OurPartners from "../components/OurPartners";
import OurTeam from "../components/OurTeam";
import { LastFooter } from "../components/LastFooter";
import Squadre from "../components/video/fasciasquadre.png";
import Nft from "../components/video/fasciasimboli1.png";
import styled, { keyframes } from "styled-components";
import { NFTTicker1, NFTTicker2 } from "../components/NFTTicker";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  const [attivo, setAttivo] = useState(false);
  const [attivo2, setAttivo2] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState<string>('')
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [apriTesto, setApriTesto] = useState(false);
  window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
  };



  const bgScrollLeft = keyframes`

    from {
      background-position: 0 0;
    }
    to {
      background-position: -120px 0;
    }`;
  const BackgrounNFT = styled.div`
    background: url(${Nft});
    background-repeat: repeat-x;
    width: 100%;
    padding: 0.5rem;
    background-size: cover;
    background-color: #e8e8e8;

    height: 70px;
    animation: ${bgScrollLeft} 5s linear infinite;
  `;
  const BackgrounNFT2 = styled.div`
    background: url(${Squadre});
    background-color: #e8e8e8;
    background-size: cover;
    background-repeat: repeat-x;
    width: 100%;
    padding: 0.5rem;

    height: 70px;
    animation: ${bgScrollLeft} 5s linear infinite;
  `;

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setAttivo(true);
    } else {
      setAttivo(false);
    }
  }
  function scrollFunction2() {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setAttivo2(true);
    } else {
      setAttivo2(false);
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      <div className="container-totale">
        <SecondHeader />
        <Paragrafo1 />
        <Paragrafo2 />
        <Paragrafo3 />
        <NFTTicker2 /> <Paragrafo4 />
        <NFTTicker1 />
        <Paragrafo5 />
        <OurTeam />
        <OurPartners />
        <NewsLetter />
        <Footer />
        {!isMobile && (
          <>
            <div
              className="socialio"
              style={{ display: attivo2 ? "block" : "none" }}
            >
              <img
                src={gifPallone}
                alt="vario"
                height={"50px"}
                width={"50px"}
                style={{
                  marginRight: "5px",
                  marginBottom: "5px",
                  position: "absolute",
                  top: -50,
                  left: -12.5,
                }}
              />
              <div className={"social-up"}>
                <a href="https://www.instagram.com/besteam.io/">
                  <div className="colore">
                    <FaInstagram style={{ width: "20px", height: "20px" }} />
                  </div>
                </a>
                <a href="https://discord.com/invite/besteam">
                  {" "}
                  <div className="colore">
                    {" "}
                    <FaDiscord style={{ width: "20px", height: "20px" }} />
                  </div>
                </a>
                <a href="https://t.me/besteam_io">
                  <div className="colore">
                    <FaTelegram style={{ width: "20px", height: "20px" }} />
                  </div>
                </a>
                <a href="https://twitter.com/BesTeam_io">
                  <div className="colore">
                    <FaTwitter style={{ width: "20px", height: "20px" }} />
                  </div>
                </a>
                <a href="/tiktokagency" style={{ display: 'flex', flexDirection: 'row',width:'200px' , height:'30px', justifyItems:'center', alignContent:'center', alignItems:'center' }}>
                  <div className="colore"  onMouseEnter={() =>  setApriTesto(!apriTesto)}       onMouseLeave={() => setApriTesto(!apriTesto)}>
                    <FaTiktok style={{ width: "20px", height: "20px" }} />
                  </div>
                  {apriTesto && (
                    <div   onMouseOver={() => setApriTesto(true)}
                    onMouseOut={() => setApriTesto(false)} style={{ width: '114px', height: '30px', backgroundColor: '#000000' , display:'flex', alignContent:'center', alignItems:'center'}}>
                      <p style={{fontSize:'15px', fontWeight:'500', marginLeft:'5px'}}>  TikTok Agency</p>
                    </div>
                  )}

                </a>
              </div>
            </div>
            <button
              className={attivo ? " button-up" : "button-no"}
              onClick={topFunction}
            >
              <img className="button-image" src={freccia2} alt="arrow" />
            </button>
          </>
        )}
      </div>
      <LastFooter />
    </>
  );
};

export default HomePage;
