import React from "react";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import arrowright from "../components/video/freccia.png";
import arrowleft from "../components/video/frecciasinistra.png";
import crociprima from "../components/video/crociprima.png";
import bordo from "../components/video/bordoimmagine.png";
import uno from "../components/video/paragrafo1/1.png";
import due from "../components/video/paragrafo1/2.png";
import tre from "../components/video/paragrafo1/3.png";
import qua from "../components/video/paragrafo1/4.png";
import cin from "../components/video/paragrafo1/5.png";

import besteam from "../components/video/besteam.jpg";
import { relative } from "path";

const Paragrafo1 = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isBig = useMediaQuery({ query: `(min-width: 1441px)` });

  const customOptions = {
    prevArrow: (
      <div
        className="hoverzoom"
        style={{
          position: "absolute",
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
          position: "absolute",
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

  return (
    <>
      {!isMobile && (
        <div
          className="paragrafo1"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "cente",
          }}
        >
          <p
            className="titolo-paragrafo  "
            style={{ fontFamily: "DinPROBold" }}
          >
            WELCOME TO BESTEAM
          </p>
          <p style={{ fontFamily: "DIN-PRO" }}>
            A <span className="testo-parole-paragrafo ">NFT</span> Football
            simulation game built on{" "}
            <span className="testo-parole-paragrafo"> Polygon Blockchain </span>
            .<br />
            You will have to train to be the MVP of the most difficult matches{" "}
            <br />
            and win the most important trophies with your team.
            <br />
          </p>
          <div
            style={{
              position: "relative",
              marginTop: "5rem",
              width: "800px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={bordo}
              alt="c"
              style={{
                position: "absolute",
                left: "20rem",
                top: "-0.5rem",
              }}
              height={"8px"}
              width={"600px"}
            />

            <div style={{ width: "800px" }}>
              <Slide {...customOptions}>
                <img
                  className="immage-correzione"
                  src={uno}
                  alt="immagine1"
                  style={{ maxWidth: "800px" }}
                />
                <img
                  className="immage-correzione"
                  src={due}
                  alt="immagine1"
                  style={{ maxWidth: "800px" }}
                />
                <img
                  className="immage-correzione"
                  src={tre}
                  alt="immagine1"
                  style={{ maxWidth: "800px" }}
                />
                <img
                  className="immage-correzione"
                  src={qua}
                  alt="immagine1"
                  style={{ maxWidth: "800px" }}
                />
                <img
                  className="immage-correzione"
                  src={cin}
                  alt="immagine1"
                  style={{ maxWidth: "800px" }}
                />
              </Slide>
            </div>

            <img
              src={bordo}
              style={{
                position: "absolute",
                right: "20rem",
                top: "18.1rem",
              }}
              height={"8px"}
              width={"600px"}
            />
          </div>
          <div className="block-primo">
            <img src={crociprima} alt={""} style={{ maxWidth: "800px" }} />
          </div>
        </div>
      )}
      {isMobile && (
        <div
          className="paragrafo1"
          style={{ marginTop: "0vh", height: "400px" }}
        >
          <div className="paragrafocentrato">
            <div className="text-paragrafo1">
              <p className="titolo-paragrafo  ">WELCOME TO BESTEAM</p>
              <p className="testo-paragrafo">
                A <span className="testo-parole-paragrafo ">NFT</span> Football
                simulation game
                <br /> built on{" "}
                <span className="testo-parole-paragrafo">
                  {" "}
                  Polygon Blockchain{" "}
                </span>
                .<br />
                You will have to train to be the MVP <br />
                of the most difficult matches <br />
                and win the most important trophies with your team.
              </p>
            </div>
            <div className="fixaimmagine">
              <div
                style={{
                  marginLeft: "40%",
                  marginTop: 60,
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "-3vh",
                  width: "100vw",
                }}
              >
                <hr className="green-line-image" />
                <hr className="green2-line-image" />
                <hr className="green-line-image" />
              </div>
              <Slide {...customOptions2}>
                <img src={uno} alt="immagine1" width="100%" />
                <img src={due} alt="immagine1" width="100%" />
                <img src={tre} alt="immagine1" width="100%" />
                <img src={qua} alt="immagine1" width="100%" />
                <img src={cin} alt="immagine1" width="100%" />
              </Slide>
              <div
                style={{
                  marginLeft: "20%",
                  display: "flex",
                  flexDirection: "row",
                  marginTop: -12,
                  width: 600,
                }}
              >
                <hr className="green-line-image" />
                <hr className="green2-line-image" />
                <hr className="green-line-image" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Paragrafo1;
