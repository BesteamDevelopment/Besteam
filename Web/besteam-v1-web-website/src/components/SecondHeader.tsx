import { Button } from "@mui/material";
import React, { useState } from "react";
import copertina from "../components/video/copertina.jpg";
import { useMediaQuery } from "react-responsive";
import TickerLine from "./ticker";
import { Link } from "react-router-dom";
import Preico from "./Preico";
import PreicoDesktop from "./PreicoDesktop";
import "./secondheader.css";
import { Slide } from "react-slideshow-image";
import { FaTheRedYeti } from "react-icons/fa";
import copertina1 from "../components/video/CopertinaSitoOpenSea.jpg";
import copertina2 from "../components/video/CopertinasitoPolygon.jpg";
import PlayButton from "../components/video/Bottone Play.png";
import styled from "styled-components";
import Sfondocalciatore from "../components/video/sfondocalciatore.png";
import testoplay from "./video/sub.png";
import frecciaecentro from "./video/cer.png";
import sfondolandingvuoto from "./video/sfondolandingvuoto.png";
import avatarsfuma from "./video/avatarsfuma.png";
import cursore from "./video/cursore2.png";
import $ from "jquery";
import Modalico from "./preico/Modalico";
import mobileimmagine from "./video/imgmobilesfondo.jpg";

const goToRegister = () => {
  document.body.scrollTop = 10000; // For Safari
  document.documentElement.scrollTop = 10000;
};
const proprietaslide = {
  duration: 5000,
  infinite: true,
  prevArrow: <div style={{ width: "30px", marginRight: "-30px" }}></div>,
  nextArrow: <div style={{ width: "30px", marginLeft: "-30px" }}></div>,
};

const ImmagineIniziale = styled.div`
  overflow: hidden;
  width: 100%;
  background-size: cover;
  height: 95vh;
  position: relative;
  /* UI Properties */
  opacity: 1;
  background-image: url("${sfondolandingvuoto}");
  background-size: contain;
  margin-top: -2rem;
  z-index: 3;
  cursor: url("cursore2.png"), auto;
`;

const ButtonPlayNew = styled.div`
  &:hover {
    background-color: #555;
  }
  width: 20.313vw;
  height: 5.469vw;
  background-color: #2dc653;
  position: absolute;
  top: 31.5vw;
  left: 13vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 3;
`;

const ButtonPlayNewMobile = styled.div`
  &:hover {
    background-color: #555;
  }
  width: 70.313vw;
  height: 15.469vw;
  background-color: #2dc653;
  position: absolute;
  top: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  z-index: 3;
`;

const TestoLeft = styled.p`
  z-index: 3;
  position: absolute;
  font-size: 5.25vw;
  font-weight: 900;
  font-style: italic;
  /* Layout Properties */
  top: 3vw;
  left: 13vw;
  max-width: 670px;
  max-height: 250px;
  /* UI Properties */
  text-align: left;
  letter-spacing: -0.6px;
  line-height: 5.25vw;
  color: #ffffff;
  opacity: 1;
  font-family: "DINProBlackItalic";
`;

const TestoLeftMobile = styled.p`
  z-index: 3;
  position: absolute;
  top: -20vh;
  font-size: 6vh !important;
  font-weight: 900;
  font-style: italic;
  /* Layout Properties */
  text-align: right;
  /* UI Properties */
  letter-spacing: -0.2px;
  line-height: 5vh;
  color: #ffffff;
  opacity: 1;
  font-family: "DINProBlackItalic";
`;
const BoxText = styled.div`
  position: absolute;
  /* Layout Properties */
  top: 24vw;
  left: 13vw;
  font-size: 2.57vw;
  color: white;
  /* UI Properties */
  text-align: left;
  letter-spacing: 0px;
  font-weight: bold;
  opacity: 1;
  z-index: 3;
`;

const BoxTextMobile = styled.div`
  /* Layout Properties */
  position: absolute;
  top: 3vh;
  font-size: 2.5vh;
  margin-top: 1vw;
  color: white;
  /* UI Properties */
  text-align: right;
  letter-spacing: 0px;
  font-weight: bold;
  opacity: 1;
  z-index: 3;
`;
const ButtonPlay = styled.div`
  background-image: url("${PlayButton}");
  position: absolute;
  top: 64vh;
  left: 15vw;
  width: 250px;
  height: 90px;
  max-width: 250px;
  max-height: 90px;
  object-fit: contain;
  background-size: contain;

  /* UI Properties */
`;

const SecondHeader = () => {
  const [open, setOpen] = useState(false);
  let box: any = document.querySelector(".box");
  if (!!box) {
    let boxBoundingRect = box.getBoundingClientRect();
    let boxCenter = {
      x: boxBoundingRect.left + boxBoundingRect.width / 2,
      y: boxBoundingRect.top + boxBoundingRect.height / 2,
    };

    document.addEventListener("mousemove", (e) => {
      let angle =
        Math.atan2(e.pageX - boxCenter.x, -(e.pageY - boxCenter.y)) *
        (180 / Math.PI);
      box.style.transform = `rotate(${angle + 180}deg)`;
    });
  }
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  if (!isMobile)
    return (
      <>
        <ImmagineIniziale id="home">
          <img
            className="avatar"
            src={avatarsfuma}
            alt="avatar"
            style={{
              position: "absolute",
              left: "-3vw",
              height: "100%",
              width: "auto",
              zIndex: "3",
            }}
          />
          <img
            className="box"
            src={frecciaecentro}
            alt="frecciacentro"
            style={{
              position: "absolute",
              right: "-45vw",
              bottom: "-105vh",
              height: "300vh",
              zIndex: "1",
              overflow: "hidden",
            }}
          ></img>
          <TestoLeft style={{ fontFamily: "DinPROBlackItalic" }}>
            VIRTUAL.
            <br />
            FOOTBALL.
            <br />
            METAVERSE.
          </TestoLeft>
          <BoxText style={{ fontFamily: "DinPROBold" }}>
            play{" "}
            <span style={{ fontStyle: "italic", color: "#2DC653" }}>
              11VS11
            </span>
            ,
            <br />
            and <span style={{ fontStyle: "italic" }}>be the first!</span>
          </BoxText>
          <ButtonPlayNew onClick={() => setOpen(true)} >
            <img style={{ width: "70%" }} src={testoplay} alt="testoplay" />
          </ButtonPlayNew>
      
        </ImmagineIniziale>

        {/*old style
      <Slide {...proprietaslide}>
        <img src={copertina} alt="copertina " className="img-header" />
        <img src={copertina1} alt="copertina " className="img-header" />
        <img src={copertina2} alt="copertina " className="img-header" />
      </Slide>
      */}
        <TickerLine />
        {/*
      <div className="content-second-header">
        <div>
          <p>
            "The{" "}
            <span className="testo-parole-paragrafo">
              VIRTUAL FOOTBALL METAVERSE{" "}
            </span>
            <br />
            play 11vs11, and <span className="testo-parole-paragrafo">BE </span>
            the fir<span className="testo-parole-paragrafo">ST </span>"
          </p>

          <div className="block-button">
            {!isMobile && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  flexDirection: "column",
                }}
              >
                {/* <PreicoDesktop />*/}
        {/*
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <Button
                    onClick={() => goToRegister()}
                    style={{
                      backgroundColor: "#2dc653",
                      width: 200,
                      height: 40,
                      color: "#ffffff",
                      margin: 10,
                      fontSize: 20,
                      fontWeight: "bold",
                      fontFamily: "Bonn",
                      borderRadius: 0,
                    }}
                  >
                    JOIN
                  </Button>{" "}
                  <p>or</p>{" "}
                  <a
                    href="https://besteam-game.gitbook.io/besteam-whitepaper/"
                    style={{ textDecoration: "none" }}
                  >
                    {" "}
                    <Button
                      style={{
                        backgroundColor: "#ffffff",
                        width: 200,
                        height: 40,
                        color: "#1a7431",
                        fontSize: 20,
                        margin: 10,
                        fontWeight: "bold",
                        fontFamily: "Bonn",
                        borderRadius: 0,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </a>
                </div>
              </div>
            )}
            {isMobile && (
              <>
                {/*<Preico />*/}
        {/*
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    onClick={() => goToRegister()}
                    style={{
                      backgroundColor: "#2dc653",
                      width: 200,
                      height: 40,
                      color: "#ffffff",
                      margin: 10,
                      fontSize: 16,
                      fontWeight: "bold",
                      fontFamily: "Bonn",
                      borderRadius: 0,
                    }}
                  >
                    JOIN
                  </Button>{" "}
                  <p>or</p>{" "}
                  <a
                    href="https://besteam-game.gitbook.io/besteam-whitepaper/"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      style={{
                        backgroundColor: "#ffffff",
                        width: 200,
                        height: 40,
                        color: "#1a7431",
                        fontSize: 16,
                        margin: 10,
                        fontWeight: "bold",
                        fontFamily: "Bonn",
                        borderRadius: 0,
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      LEARN MORE
                    </Button>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      */}
        <Modalico open={open} registra={true} setopen={setOpen} />
      </>
    );
  else
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
        }}
      >
        <div
          style={{
            height: "95vh",
            position: "relative",
            backgroundImage: `url("${mobileimmagine}")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            style={{
              width: "100%",
              position: "absolute",
              top: "60vh",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <TestoLeftMobile
              style={{
                fontFamily: "DinPROBlackItalic",
              }}
            >
              VIRTUAL.
              <br />
              FOOTBALL.
              <br />
              METAVERSE.
            </TestoLeftMobile>

            <BoxTextMobile
              style={{
                fontFamily: "DinPROBold",
              }}
            >
              play{" "}
              <span style={{ fontStyle: "italic", color: "#2DC653" }}>
                11VS11
              </span>
              , and <span style={{ fontStyle: "italic" }}>be the first!</span>
            </BoxTextMobile>

            <ButtonPlayNewMobile
              style={{
                fontFamily: "DinPROBold",
                position: isMobile ? "relative" : "absolute",
              }}
              onClick={() => setOpen(true)}
            >
              <img style={{ width: "70%" }} src={testoplay} alt="testoplay" />
            </ButtonPlayNewMobile>
          </div>
        </div>
        <TickerLine />
        <Modalico open={open} registra={true} setopen={setOpen} />
      </div>
    );
};

export default SecondHeader;
