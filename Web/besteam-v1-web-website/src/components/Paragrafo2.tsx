import React from "react";
import just from "../components/video/just.png";
import { useMediaQuery } from "react-responsive";
import { Slide } from "react-slideshow-image";
import arrowleft from "./video/frecciasinistra.png";
import arrowright from "./video/freccia.png";
import fasciatitdestra from "./video/separatore2.png";
import bordo from "../components/video/bordoimmagine.png";
import crociprima from "../components/video/crociprima.png";

const Paragrafo2 = () => {
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
        <div className="paragrafo-first" style={{ backgroundColor: "#e8e8e8" }}>
          <div className="text-paragrafo-first">
            <img
              src={fasciatitdestra}
              height="10px"
              style={{ marginRight: "300px" }}
            />
            <p className="titolo-paragrafo">Just like YOU!</p>
            <p style={{ fontFamily: "DIN-PRO" }}>
              You can be yourself showing{" "}
              <span className="testo-parole-paragrafo"> your outfit </span>in
              the BestCity.
              <br />
              Your avatar is{" "}
              <span className="testo-parole-paragrafo">
                fully customizable{" "}
              </span>{" "}
              with rare and exclusive{" "}
              <span className="testo-parole-paragrafo"> NTFs </span> ;<br />
              modify your look, your hairstyle, accessories and much more ...
              <br />
              Wear your team colors and promote your personal style{" "}
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={bordo}
              height={"6px"}
              width={"450px"}
              style={{ position: "absolute", left: "4rem", top: "-0.62rem" }}
            />

            <div
              style={{
                width: "450px",
                height: "300px",
                marginLeft: "10px",
                marginTop: "-4px",
                marginBottom: "-51px",
              }}
            >
              <Slide {...customOptions}>
                <img
                  src={just}
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
                  src={just}
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
              style={{ position: "absolute", left: "2rem", bottom: "-0.75rem" }}
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div
          className="paragrafo-first"
          style={{ marginTop: "-0vh", height: "507px" }}
        >
          <div className="text-paragrafo-first">
            <img src={crociprima} />
            <p className="titolo-paragrafo">Just like YOU!</p>
            <p className="testo-paragrafo">
              You can be yourself showing{" "}
              <span className="testo-parole-paragrafo"> your outfit </span>in
              the BestCity.
              <br />
              Your avatar is{" "}
              <span className="testo-parole-paragrafo">
                fully customizable{" "}
              </span>{" "}
              with exclusive{" "}
              <span className="testo-parole-paragrafo"> NTFs </span> ;<br />
              modify your look, your hairstyle and much more ...
              <br />
              Wear your team colors and promote your personal style{" "}
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
                src={just}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={just}
                alt="immagine2"
                className="immagine-paragrafo-5"
              />
              <img
                src={just}
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

export default Paragrafo2;
