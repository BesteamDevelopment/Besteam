import React, { useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import {
  BoxRefCode,
  ContainerDescrizione,
  TestoGrassetto,
  TestoParagrafo,
  TitoloDescrizione,
} from "./BoxDescrizioneStyled";
import schemaRef from "../assets/img/schemaRef.png";
import separatore from "../assets/img/separatore.png";
import { useWeb3React } from "@web3-react/core";
import abiBTEM from "../../../components/BtemSaleAbi.json";
import bordo from "../../../components/video/bordo2.png";

import CopyToClipboard from "react-copy-to-clipboard";
import { LastFooter } from "../../../components/LastFooter";
import { Hidden } from "@mui/material";
var Contract2 = require("web3-eth-contract");

const BoxDescrizione = () => {
  /*
  const [copied, setCopied] = useState(false);
  const [copied2, setCopied2] = useState(false);
  const [refCodeNew, setRefCodeNew] = useState("");
  const { account } = useWeb3React();
  const SWAP_ADDRESS = "0x63c86851A467Bc113b1896813A62F860409996d8";
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiBTEM, SWAP_ADDRESS);
  useEffect(() => {
    console.log(contract);
    console.log(account);

    
    if (!!account) {
      getCodeAsync();
    }
  }, [account]);

  const getCodeAsync = async () => {
    let address = account;
    let x = await contract.methods.getCodeByAddr(address).call();
    console.log(x);
    setRefCodeNew(x);
  };
  return (
    <>
      <ContainerDescrizione id="refcode">
        <br />
        <br />
        <br />
        <br />

        <TitoloDescrizione>1. REFERRAL CODE</TitoloDescrizione>
        <TestoGrassetto>
          Invite a friends to EARN more BTEM with your ref code:
        </TestoGrassetto>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BoxRefCode id="refcode">{refCodeNew}</BoxRefCode>
          <CopyToClipboard text={refCodeNew}>
            <button
              style={{
                border: "none",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                background: "none",
              }}
              onClick={() => {
                var copyTextRefCode = document.getElementById("refcode");
                setCopied(true);
              }}
            >
              <img
                alt="copy"
                style={{ width: 20, height: 20 }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nGNgGDZA52igt87RoCe6x4L/k4MZCFsQ/Jhcw3WJsYBoheQCulugQ2ac6ICC+niwJxEWUBAnR4MfEbSA3CDTxaVv1AIYGA0igmA0iAgCmpeuuoPGAh1qF3boAFTkkmXJ0eBHescCPTAMHLIAAAAcga4mAxLxAAAAAElFTkSuQmCC"
              ></img>

              {copied && (
                <p style={{ color: "white", fontSize: 10 }}>Copied!</p>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <TestoParagrafo>
          Depending on the amount of BTEM swapped by your friend
          <br /> we will give you a different % of BTEM as a gift.
        </TestoParagrafo>
        <img src={schemaRef} style={{ width: "26vw" }} />
        <img src={separatore} style={{ width: "54vw", marginTop: "5vh" }} />
        <TitoloDescrizione>2. TUTORIAL</TitoloDescrizione>
        <TestoParagrafo style={{ marginTop: "-10px" }}>
          Don't see the BTEM on your wallet Metamask?
        </TestoParagrafo>
        <TestoGrassetto style={{ marginTop: "-1.5vw" }}>
          {" "}
          Import token with this contract address:
        </TestoGrassetto>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <BoxRefCode>0x57b308E24Fa808BeF391D8402d2314fDD286d52f </BoxRefCode>
          <CopyToClipboard text={"0x57b308E24Fa808BeF391D8402d2314fDD286d52f"}>
            <button
              style={{
                border: "none",
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                background: "none",
              }}
              onClick={() => {
                var copyText = document.getElementById("add");
                setCopied2(true);
              }}
            >
              <img
                alt="copy"
                style={{ width: 20, height: 20 }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcklEQVR4nGNgGDZA52igt87RoCe6x4L/k4MZCFsQ/Jhcw3WJsYBoheQCulugQ2ac6ICC+niwJxEWUBAnR4MfEbSA3CDTxaVv1AIYGA0igmA0iAgCmpeuuoPGAh1qF3boAFTkkmXJ0eBHescCPTAMHLIAAAAcga4mAxLxAAAAAElFTkSuQmCC"
              ></img>

              {copied2 && (
                <p style={{ color: "white", fontSize: 10 }}>Copied!</p>
              )}
            </button>
          </CopyToClipboard>
        </div>
        <TestoParagrafo>
          If you need help you can contact us <br />
          <a
            href="https://discord.gg/Besteam"
            target="_blank"
            style={{ fontFamily: "DinProMediumItalic", color: "#31c652" }}
          >
            JOIN OUR DISCORD
          </a>
        </TestoParagrafo>
        <img
          src={separatore}
          style={{ width: "54vw", marginTop: "5vh", marginBottom: "5vh" }}
        />
        <iframe
          style={{
            width: "52vw",
            height: "28vw",
          }}
          src="https://www.youtube.com/embed/TiDQrpRmcmg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "100%",
            marginTop: "100px",
          }}
        ></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
          }}
        >
          <p>
            Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
            Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
            besteamgamesrl@legalmail.it
          </p>
        </div>
      </ContainerDescrizione>

      <LastFooter />
    </>
  );*/
  return(<p>Prova</p>)
};

export default BoxDescrizione;
