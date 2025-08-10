import React, { useState } from "react";
import "./HamburgerMenu.css";
import Box from "@mui/material/Box";
import { MdHighlightOff } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Button } from "@mui/material";

const goToRegister = () => {
  document.body.scrollTop = 10000; // For Safari
  document.documentElement.scrollTop = 10000;
};

const HamburgerMenu = () => {
  const Links = () => {
    const [nftPress, setNftPress] = useState(false);
    const [white, setWhite] = useState(false);
    return (
      <div className="list-mobile">
        <div className="testi-menu">
          <a
            href="https://besteam.gitbook.io/besteam-whitepaper/"
            target={"_blank"}
          >
            <div className="beforeline">
              <p className="testo">WhitePaper</p>
            </div>
          </a>
        </div>
        {white && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignItems: "left",
              width: "100%",
            }}
            className="download"
          >
            <div className="testi">
              <a
                href="/WhitepaperBesteamENGV1.pdf"
                download="WhitepaperBesteamENGV1"
                target="_blank"
                className="testo"
                style={{ marginLeft: "-0.5rem" }}
              >
                White Paper Besteam ENG V1.0
              </a>
            </div>
            <div className="testi">
              <a
                style={{ marginLeft: "-0.5rem" }}
                href="/WhitepaperBesteamITAV1.pdf"
                download="WhitepaperBesteamITAV1"
                target="_blank"
                className="testo"
              >
                White Paper Besteam ITA V1.0
              </a>
            </div>
          </div>
        )}
        <div className="testi-menu">
          <div className="beforeline">
            <p className="testo coming">SupportUS</p>
          </div>
        </div>

        <div className="testi-menu">
          <a
            href="https://opensea.io/collection/besteam-collection"
            target={"_blank"}
            style={{ textDecoration: "none" }}
          >
            <div className="beforeline">
              <p className="testo">NFT</p>
            </div>
          </a>
        </div>

        {/*nftPress && (


          <div style={{display: "flex",
          flexDirection: "column",
          textAlign: "left",
          alignItems:'left',
          width:'100%',}}>
            <div >
              <a href="https://opensea.io/collection/besteam">
              <p style={{marginLeft:'1.6rem'}} className="testo" >OpenSea</p>
              </a>
            </div>
            <div>
              <p style={{marginLeft:'1.6rem'}} className="testo">Marketplace</p>
            </div>
          </div>
        )*/}
        {/*<Button
          style={{
            marginLeft: 0,
            backgroundColor: "rgb(45, 198, 83)",
            width: 130,
            height: 50,
            fontWeight: "bold",
            fontSize: 20,
            color: "#ffffff",
            fontFamily: "Bonn",
            borderRadius: 0,
          }}
          className="button-register"
          onClick={() => {
            goToRegister();
            setOpen(!open);
          }}
        >
          JOIN
        </Button>
        <hr className="hrmenu" />*/}
      </div>
    );
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className=" mobile">
        <Box style={{ width: 50, height: 50 }}>
          <IconContext.Provider value={{ color: "#ffffff", size: "40px" }}>
            {!open ? (
              <BiMenu onClick={() => setOpen(!open)} />
            ) : (
              <MdHighlightOff onClick={() => setOpen(!open)} />
            )}
          </IconContext.Provider>
        </Box>
        {open && <Links />}
      </div>
    </>
  );
};

export default HamburgerMenu;
