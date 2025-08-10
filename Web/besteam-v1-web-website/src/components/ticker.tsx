import React from "react";
import Ticker from "react-ticker";
import logo from "../components/video/LogoBesteam.png";
import polygon from "../components/video/polygon.png";
import pallone from "../components/video/nftball.png";
import quadrato from "../components/video/quadrato.png";
import barranews from "../components/video/newsbu.png";
import up from "../components/video/tickernews/UP.png";
import poly from "../components/video/tickernews/Polygon.png";
import ball from "../components/video/tickernews/Pallone.png";
import avat from "../components/video/tickernews/Avatar.png";
import best from "../components/video/tickernews/Besteam.png";
import "./ticker.css";
import { useMediaQuery } from "react-responsive";
const TickerLine = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 720px)` });

  if (!isMobile)
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "90px",
            backgroundColor: "#1c1c1c",
            marginTop: "-4px",
            display: "flex",
            alignContent: "center",
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <img
            src={barranews}
            alt="barranews"
            style={{
              position: "absolute",
              right: 40,
              zIndex: 200,
              top: 4,
              height: "86px",
            }}
          />
          <Ticker speed={8} mode={"chain"}>
            {({ index }) => (
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: isMobile ? "30px" : "70px",
                  justifyContent: "space-between",
                  alignContent: "center",
                  alignItems: "center",
                  fontFamily: "DINProCondensedBlack",
                }}
              >
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    fontSize: "70px",
                    marginLeft: "60px",
                  }}
                >
                  PLAY FOOTBALL TO EARN
                </p>
                <img
                  src={up}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "40px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                  }}
                >
                  POLYGON BLOCKCHAIN
                </p>
                <img
                  src={poly}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  PLAY 11VS11
                </p>
                <div style={{ width: "100%" }}></div>
                <img
                  src={best}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  BECOME A VIRTUAL FOOTBALLER
                </p>
                <img
                  src={avat}
                  style={{
                    marginLeft: "20px",
                    height: "50px",
                    marginBottom: "-12px",
                  }}
                />

                <p
                  style={{
                    color: "#2DC653",
                    marginTop: "80px",
                    marginLeft: "60px",
                    fontSize: "70px",
                  }}
                >
                  JOIN FOOTBALL METAVERSE
                </p>
                <img
                  src={ball}
                  style={{
                    height: "50px",
                    marginBottom: "-12px",
                    marginLeft: "20px",
                  }}
                />
              </div>
            )}
          </Ticker>
        </div>
      </>
    );
  else
    return (
      <div
        style={{
          width: "100vw",
          height: "3.5vh",
          backgroundColor: "#1c1c1c",
          display: "flex",
          alignContent: "center",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <img
          src={barranews}
          alt="barranews"
          style={{
            position: "absolute",
            right: 15,
            top: 0,
            zIndex: 200,
            height: "3.5vh",
            width: "85px",
          }}
        />
        <Ticker speed={8} mode={"chain"}>
          {({ index }) => (
            <div
              style={{
                display: "flex",
                fontWeight: "bold",
                fontSize: "30px",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                fontFamily: "DINProCondensedBlack",
              }}
            >
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
              <p
                style={{
                  color: "#2DC653",

                  fontSize: "30px",
                  marginLeft: "20px",
                }}
              >
                PLAY FOOTBALL TO EARN
              </p>
              <img
                src={up}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                }}
              >
                POLYGON BLOCKCHAIN
              </p>
              <img
                src={poly}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                PLAY 11VS11
              </p>
              <div style={{ width: "100%" }}></div>
              <img
                src={best}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                BECOME A VIRTUAL FOOTBALLER
              </p>
              <img
                src={avat}
                style={{
                  marginLeft: "20px",
                  height: "20px",
                }}
              />

              <p
                style={{
                  color: "#2DC653",

                  marginLeft: "20px",
                  fontSize: "30px",
                }}
              >
                JOIN FOOTBALL METAVERSE
              </p>
              <img
                src={ball}
                style={{
                  height: "20px",

                  marginLeft: "20px",
                }}
              />
            </div>
          )}
        </Ticker>
      </div>
    );
};

export default TickerLine;
