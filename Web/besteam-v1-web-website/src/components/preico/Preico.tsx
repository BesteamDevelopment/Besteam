import React, { useState } from "react";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import { Box } from "@mui/system";
import { Helmet } from "react-helmet";
import Progress from "./Progress";
import acquisto from "../../components/video/SchemaAcquisto.jpg";
import End from "./End";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useMediaQuery } from 'react-responsive';

import Schemavesting from '../video/Schemavesting.png'


const Preico = () => {
  
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [copied, setCopied] = useState(false);
  const [codiceRef, setCodiceRef] = useState<string>("")

  console.log('valore ref', codiceRef)
  return (
    <div>
   
   

    {(!!isMobile) && <div
        className="body-whitepaper2"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >

      <Helmet>
    
    <meta charSet="utf-8" />
    <meta property="og:title" content=" PRE-Ico | Besteam.io" />

</Helmet>
        <p style={{color:'#ffffff', fontWeight:'bold'}}>Sorry, you can't use this link with mobile! </p>
      </div>
  }

{(!isMobile) && <>
      <Helmet>
    
    <meta charSet="utf-8" />
    <meta property="og:title" content=" PRE-Ico | Besteam.io" />

</Helmet>
      <div
        className="body-whitepaper2"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            display: "flex",
            width: "90%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            padding: "20px",
          }}
        >
          <Progress />
          <Box
            style={{
              width: "100%",
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <img  src={Schemavesting} alt="schema vesting" />
            <div style={{display:'flex', flexDirection:'row', marginTop:'65px'}}>
            <FirstForm setref={setCodiceRef} />
            </div>
          </Box>
        </Box>
        <End />
        <div
          style={{
            display: "flex",
            textAlign: "left",
            flexDirection: "column",
            alignSelf: "flex-start",
            marginLeft: "7vw",
          }}
        >
          <p
            style={{
              color: "#ffffff",
              fontFamily: "Bonn",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "left",
            }}
          >
            HOW TO BUY BTEM
          </p>
          <p
            style={{
              marginTop: -13,
              color: "#ffffff",
              fontFamily: "Bonn",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "left",
            }}
          >
            Don't see your token in Metamask wallet? Import BTEM with address
            contract:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <p
              id="add"
              style={{
                marginTop: -13,
                color: "#ffffff",
                fontFamily: "Bonn",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "left",
              }}
            >
              0x28332c6AFB5100D9a9b82844FE29ff6884223c6b
              <CopyToClipboard
                text={"0x28332c6AFB5100D9a9b82844FE29ff6884223c6b"}
              >
                <button
                  style={{
                    backgroundColor: "#ffffff",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                  onClick={() => {
                    var copyText = document.getElementById("add");
                    setCopied(true);
                  }}
                >
                  <img
                    alt="copy"
                    style={{ width: 20, height: 20 }}
                    src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                  />
                  {copied && (
                    <p style={{ color: "#000000", fontSize: 10 }}>Copied!</p>
                  )}
                </button>
              </CopyToClipboard>
            </p>
          </div>
        </div>
        <img
          src={acquisto}
          alt="acquisto"
          style={{ width: "87%", marginTop: "4vh" }}
        />

        <iframe
          width="87%"
          height="315"
          src="https://www.youtube.com/embed/Ze9r6c1OOM4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>}
    </div>
  );
};

export default Preico;
