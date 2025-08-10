import React from "react";
import esports from "../components/video/esports.jpg";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import arrowleft from "./video/frecciasinistra.png";
import arrowright from "./video/freccia.png";
import fasciatitsinistra from "./video/fasciatitsinistra.png";
import bordo from "../components/video/bordoimmagine.png";
import just from "../components/video/just.png";
import crociprima from "../components/video/crociprima.png";

const Paragrafo5 = () => {
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
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {!isMobile && (
        <div className="paragrafo-second ">
          <div className="text-paragrafo-second">
            <img src={fasciatitsinistra} height="10px" />
            <p className="titolo-paragrafo">.eSports Events</p>

            <p style={{ fontFamily: "DIN-PRO" }}>
              .The first 11vs11 esport football <br />
              .Play{" "}
              <span className="testo-parole-paragrafo">
                competitive virtual soccer{" "}
              </span>{" "}
              against other teams
              <br />
              .In this event there are referees, specialized casters <br />
              and they are broadcast on the main{" "}
              <span className="testo-parole-paragrafo">streaming </span>{" "}
              platforms
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{ position: "absolute", left: "4rem", top: "-0.60rem" }}
            />

            <div
              style={{
                width: "450px",
                height: "300px",
                marginLeft: "10px",
                marginTop: "-4px",
                marginBottom: "-52px",
              }}
            >
              <Slide {...customOptions}>
                <img
                  src={esports}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
                <img
                  src={just}
                  alt="immagine2"
                  width={"100%"}
                  height={"99.5%"}
                />
                <img
                  src={esports}
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
                right: "4rem",
                bottom: "-0.8rem",
              }}
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="paragrafo-first colorgrey " style={{ height: "437px" }}>
          <div className="text-paragrafo-first" style={{ marginTop: "15vh" }}>
            <img src={crociprima} />
            <p className="titolo-paragrafo">eSports Events.</p>

            <p className="testo-paragrafo">
              The first 11vs 11 football esport sector.
              <br />
              Play{" "}
              <span className="testo-parole-paragrafo">
                competitive virtual soccer{" "}
              </span>{" "}
              against other teams.
              <br />
              In this event there are referees, specialized casters. <br />
              and they are broadcast on the main{" "}
              <span className="testo-parole-paragrafo">streaming </span>{" "}
              platforms
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
                src={esports}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={just}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />

              <img
                src={esports}
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

export default Paragrafo5;
