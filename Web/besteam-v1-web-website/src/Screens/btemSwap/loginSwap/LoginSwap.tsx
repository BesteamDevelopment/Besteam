import React, { useState } from "react";
import styled from "styled-components";
import SfondoSupport from "../../../components/video/sfondoSupport.jpg";
import bordo from "../../../components/video/bordo2.png";
import { LastFooter } from "../../../components/LastFooter";
import separatore from "../../btemSwap/assets/img/separatore.png";
import { BoxIscrizione } from "../boxIscrizione";
import { BoxDescrizione } from "../boxDescrizione";
import freccia2 from "../../../components/video/freccia2.png";
import { JsxElement, isJsxElement } from "typescript";
import {
  ButtonSignUp,
  TestoButton,
} from "../boxIscrizione/BoxIscrizioneStyled";
import { Button, Input, TextField } from "@mui/material";

const BoxSupport = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${SfondoSupport}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: -0.6vw;
`;
const LoginSwap = () => {
  const [attivo, setAttivo] = useState(false);
  const [password, setPassword] = useState("");
  const [attivo2, setAttivo2] = useState(false);
  const [accesso, setAccesso] = useState(true);
  const [error, setError] = useState(false);

  window.onscroll = function () {
    scrollFunction();
    scrollFunction2();
  };
  const apriPagina = () => {
    console.log("ciao");
    if (password === "Besteam1") {
      setAccesso(false);
      topFunction();
    } else {
      setError(true);
    }
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
  if (!!accesso)
    return (
      <>
        <BoxSupport>
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "8.30vh",
              color: "#31c652",
              marginTop: "12vh",
            }}
          >
            if You are here
          </p>
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "11.86vh",
              color: "white",
              marginTop: "-10vh",
              lineHeight: "12vh",
            }}
          >
            YOU ARE A TRUE FAN OF <br />
            VIRTUAL FOOTBALL 11vs11
          </p>
          <p
            style={{
              fontFamily: "DinProMediumItalic",
              fontSize: "7.11vh",
              color: "white",
              marginTop: "-13vh",
            }}
          >
            support us build it!
          </p>
          <img src={separatore} style={{ marginTop: "4vh", width: "40%" }} />
          <p
            style={{
              fontFamily: "DinPROBold",
              fontSize: "5.43vh",
              color: "#31c652",
              margin: "2vh",
            }}
          >
            If You are Interested
          </p>
          <p
            style={{
              fontFamily: "DinPRONormale",
              fontSize: "4.15vh",
              color: "white",
              margin: "-3vh",
            }}
          >
            Join our{" "}
            <span
              style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}
            >
              {" "}
              <a
                href="https://discordapp.com/users/besteamenricocoviello"
                target="_blank"
              >
                Discord
              </a>{" "}
            </span>
            or our
            <span
              style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}
            >
              {" "}
              <a href="http://t.me/@Enrico_Coviello" target="_blank">
                Telegram
              </a>{" "}
            </span>
            <br /> then enter{" "}
            <span style={{ fontFamily: "DinPROBold" }}>
              your pass to the future of virtual football
            </span>
            :
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                marginTop: "5vh",
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignContent: "center",
                alignItems: "center",
              }}
            >
              <div id="join" className="form-join">
                <input
                  type="password"
                  style={{
                    textAlign: "center",
                    width: 200,
                    height: 40,
                    backgroundColor: "#ffffff",
                    borderBottomColor: "#ffffff",
                    border: "none",
                  }}
                  maxLength={8}
                  placeholder="password"
                  id="inputid"
                  onChange={(v) => {
                    setPassword(v.target.value);
                  }}
                />
                <Button
                  style={{
                    backgroundColor: "#2dc653",
                    width: 200,
                    height: 40,
                    color: "#ffffff",
                    fontSize: 28,
                    fontWeight: "bold",
                    marginLeft: -3,
                    fontFamily: "Bonn",
                    borderRadius: 0,
                  }}
                  variant="contained"
                  onClick={() => apriPagina()}
                >
                  OK
                </Button>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>Wrong Password</p>}
          </div>
          <br />
          <br /> <br />
        </BoxSupport>
        <img src={bordo} style={{ width: "100%" }} />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1C1C1C",
            color: "white",
            height: "100px",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-2.1vh",
          }}
        >
          <p>
            Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
            Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
            besteamgamesrl@legalmail.it
          </p>
        </div>
        <div style={{}}>
          <LastFooter />
        </div>
      </>
    );
  else
    return (
      <>
        <BoxIscrizione />
        <BoxDescrizione />
        <button
          className={attivo ? " button-up" : "button-no"}
          onClick={topFunction}
        >
          <img className="button-image" src={freccia2} alt="arrow" />
        </button>
      </>
    );
};

export default LoginSwap;
