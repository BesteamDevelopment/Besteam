import React from "react";
import buildteam from "../components/video/buildteam.png";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import arrowleft from "./video/frecciasinistra.png";
import arrowright from "./video/freccia.png";
import fasciatitsinistra from "./video/fasciatitsinistra.png";
import bordo from "../components/video/bordoimmagine.png";
import crociprima from "../components/video/crociprima.png";

const Paragrafo3 = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const customOptions = {
    prevArrow: (
      <div
        className="hoverzoom"
        style={{ width: "30px", marginRight: "-35px" }}
      >
        <img src={arrowleft} width="23px" height="30px" />
      </div>
    ),
    nextArrow: (
      <div className="hoverzoom" style={{ width: "30px", marginLeft: "-35px" }}>
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
          style={{ position: "absolute", left: "20px", top: "5px" }}
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
            top: "5px",
            right: "20px",
          }}
        />{" "}
      </div>
    ),
  };

  return (
    <>
      {!isMobile && (
        <div className="paragrafo-second">
          <div className="nomobile"></div>

          <div className="text-paragrafo-second">
            <img src={fasciatitsinistra} height="10px" />
            <p className="titolo-paragrafo">.Build your TEAM</p>
            <p style={{ fontFamily: "DIN-PRO" }}>
              .You can be the{" "}
              <span className="testo-parole-paragrafo">manager </span>{" "}
              <span className="testo-grassetto">
                {" "}
                or just be a football player
              </span>
              <br />
              .Each team has a{" "}
              <span className="testo-parole-paragrafo">customizable </span> logo
              and <span className="testo-parole-paragrafo">home stadium </span>
              <br />
              ,With your teammates you can partecipate in competitions <br />
              <span className="testo-parole-paragrafo">winning prizes</span> and
              climbing rankings{" "}
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{ position: "absolute", right: "4rem", top: "-0.82rem" }}
            />

            <div
              style={{
                width: "450px",
                height: "300px",
                marginLeft: "10px",
                marginTop: "-0.5rem",
                marginBottom: "-51px",
              }}
            >
              <Slide {...customOptions}>
                <img
                  src={buildteam}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
                <img
                  src={buildteam}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
                <img
                  src={buildteam}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
              </Slide>
            </div>

            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{
                position: "absolute",
                right: "2rem",
                bottom: "-0.75rem",
              }}
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div
          className="paragrafo-first colorgrey"
          style={{ marginTop: "-1vh" }}
        >
          <div className="nomobile"></div>

          <div className="text-paragrafo-first">
            <img src={crociprima} />
            <p className="titolo-paragrafo">Build your TEAM.</p>
            <p className="testo-paragrafo">
              You can be the{" "}
              <span className="testo-parole-paragrafo">manager </span>{" "}
              <span className="testo-grassetto"> or just be a player.</span>
              <br />
              Each team has a{" "}
              <span className="testo-parole-paragrafo">customizable </span> logo
              and <span className="testo-parole-paragrafo">home stadium.</span>
              <br />
              With your teammates
              <br /> you can partecipate in competitions, <br />
              <span className="testo-parole-paragrafo">winning prizes</span> and
              climbing rankings{" "}
            </p>
          </div>

          <div className="immagine-paragrafo-5">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginBottom: -8,
              }}
            >
              <hr className="green-line-image" />
              <hr className="green2-line-image" />
              <hr className="green-line-image" />
            </div>
            <Slide {...customOptions2}>
              <img
                src={buildteam}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={buildteam}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={buildteam}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
            </Slide>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: -12 }}
            >
              <hr className="green-line-image" />
              <hr className="green2-line-image" />
              <hr className="green-line-image" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Paragrafo3;
