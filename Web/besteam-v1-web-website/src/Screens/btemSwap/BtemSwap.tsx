import { Box } from "@mui/material";
import React, { useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import { BoxDescrizione } from "./boxDescrizione";
import { BoxIscrizione } from "./boxIscrizione";
import freccia2 from "../../components/video/freccia2.png";
import LoginSwap from "./loginSwap/LoginSwap";
import { useMediaQuery } from "react-responsive";

const BtemSwap = () => {
  const [attivo, setAttivo] = useState(false);
  const [attivo2, setAttivo2] = useState(false);
  window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
  };

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

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <>
    { isMobile ? ( <p style={{color:'white', fontWeight:'bold', fontSize:'30px'}}> Only from Desktop </p>) : ( <LoginSwap />)}
    </>
  );
};

export default BtemSwap;

/*  <BoxIscrizione />
      <BoxDescrizione />
      <button
        className={attivo ? " button-up" : "button-no"}
        onClick={topFunction}
      >
        <img className="button-image" src={freccia2} alt="arrow" />
      </button>*/
