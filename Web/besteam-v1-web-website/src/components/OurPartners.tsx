import React from "react";
import uno from "./video/ourpartners/1.png";
import due from "./video/ourpartners/2.png";
import tre from "./video/ourpartners/3.png";
import qua from "./video/ourpartners/4.png";
import cin from "./video/ourpartners/5.png";
import sei from "./video/ourpartners/6.png";
import sette from "./video/lazioinnova.png";
import otto from "./video/inup.png";
import nove from "./video/scale.png";
import bordo from "../components/video/bordo2.png";
import { useMediaQuery } from "react-responsive";

const OurPartners = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          marginTop: isMobile ? "20vh" : "",
        }}
      >
        <img src={bordo} style={{ width: "100%" }} />
      </div>

      <div className="container-page">
        <p className="testo-newsletter" style={{ fontFamily: "DinPROBold" }}>
          OUR PARTNERS
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.302vw",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "1.302vw" }}>
            <a href={"https://jersix.com/"}>
              <img
                src={uno}
                alt={"jersix"}
                style={{ width: isMobile ? "30vw" : "20.833vw" }}
              />
            </a>
            <a
              href={
                "https://polygonscan.com/token/0x57b308e24fa808bef391d8402d2314fdd286d52f"
              }
            >
              <img
                src={due}
                alt={"polygon"}
                style={{ width: isMobile ? "30vw" : "20.833vw" }}
              />
            </a>
            <a href={"https://www.beebad.com/it/besteam-beebad/"}>
              <img
                src={tre}
                alt={"beedbad"}
                style={{ width: isMobile ? "30vw" : "20.833vw" }}
              />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "3.906vw",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href={"https://www.lnd.it/it/esport"}>
              <img
                src={qua}
                alt="alt"
                style={{ width: isMobile ? "13vw" : "7.292vw" }}
              />
            </a>
            <a href={"https://youtu.be/KSZK3nL4AiA"}>
              <img
                src={cin}
                alt="bestcoin"
                style={{ width: isMobile ? "13vw" : "7.292vw" }}
              />
            </a>

            <a
              href={
                "https://www.lazioinnova.it/news/i-vincitori-di-multisoccer-la-startup-competition-di-social-football-summit/"
              }
              target="_blank"
            >
              <img
                src={sette}
                alt="bestcoin"
                style={{ width: isMobile ? "13vw" : "7.292vw" }}
              />
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;

/*<a href={"https://aeternadesign.com/"}>
<img
src={sei}
alt="bestcoin"
style={{ width: isMobile ? "13vw" : "7.292vw" }}
/>
</a>*/
