import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import Modalico from "./Modalico";
import btem from "../../components/video/BS.png";
import matic from "../../components/video/MaticPolygon.png";
import abiSALE from "../abiIDOBesteam.json";
var Contract2 = require("web3-eth-contract");

const SecondForm = (props: any) => {
/*
  const [investMatic, setInvestMatic] = useState(0);
  const { account, library } = useWeb3React();
  const PREICO_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  const [isWhite, setIsWhite] = useState(false);
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiSALE, PREICO_ADDRESS);
  const [open, setOpen] = useState(false);
  const [code, setCode] = useState<number>();
  const [aperto, setAperto] = useState(false);
  const refCode = localStorage.getItem("ref");
  console.log(refCode);
  const acquistaToken = async () => {
    console.log(typeof props.refer);
    console.log(props.refer);

    if (props.refer === "") {
      console.log("senza ref");

      const x = await contract.methods.buyTokensWithoutCode(account).send({
        from: account,
        value: library.utils.toWei(`${investMatic}`, "ether"),
      });
    } else {
      console.log("con ref");

      const x = await contract.methods

        .buyTokensWithCode(account, props.refer)
        .send({
          from: account,
          value: library.utils.toWei(`${investMatic}`, "ether"),
        });
    }
  };

  const verificaWhite = async () => {
    if (!!account) {
      const x = await contract.methods.isWhitelisted(account).call();
      contract.methods
        .isWhitelisted("0x15d2beF36D59676Ad8D3C3D6598785513E11c8bF")
        .call()
        .then((x: any) => console.log(x));
      setIsWhite(x);
    }
  };

  useEffect(() => {
    setInterval(async () => {
      verificaBuonFine();
    }, 1000);
  }, []);
  const verificaBuonFine = async () => {
    if (!!account) {
      const cod = await contract.methods.getCodeByAddress(account).call();

      if (cod > 0 && aperto === false) {
        setCode(cod);
        setAperto(true);
        setOpen(true);
      }
    }
  };

  verificaWhite();
  verificaBuonFine();

  return (
    <>
      {!isWhite && (
        <Box
          style={{
            marginLeft: "30px",
            backgroundColor: "rgb(45, 198, 83, 0.5)",
            color: "#ffffff",
            fontFamily: "Bonn",
            fontSize: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "40vw",
            justifyContent: "center",
          }}
        >
          <p>
            {" "}
            if you have already connected your wallet and made the request, wait
            for it to be enabled for purchase.{" "}
          </p>
        </Box>
      )}
      {!!isWhite && (
        <Box
          style={{
            marginLeft: "30px",
            backgroundColor: "rgb(45, 198, 83)",
            color: "#ffffff",
            fontFamily: "Bonn",
            fontSize: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "40vw",
            justifyContent: "center",
          }}
        >
          <Box style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "20vw",
              }}
            >
              <p>MATIC</p>
              <img style={{ width: 40, height: 40 }} src={matic} alt="matic" />

              <Input
                inputProps={{
                  style: { textAlign: "center" },
                }}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const valore = e.target.value;

                  setInvestMatic(Number(valore));
                }}
                style={{
                  fontSize: "20px",
                  backgroundColor: "#ffffff",
                  fontFamily: "Bonn",
                  width: "8vw",
                  height: "3vw",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "20vw",
              }}
            >
              <p>BTEM</p>
              <img style={{ width: 40, height: 40 }} src={btem} alt="btem" />

              <Box
                style={{
                  backgroundColor: "#ffffff",
                  width: "8vw",
                  height: "3vw",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {investMatic === 0 && <p style={{ color: "#000000" }}></p>}
                {investMatic > 0 && (
                  <p
                    style={{
                      color: "#000000",
                      fontSize: "20px",
                      textAlign: "left",
                    }}
                  >
                    {" "}
                    {investMatic * 30}
                  </p>
                )}
              </Box>
            </div>
          </Box>
          <Button
            onClick={() => acquistaToken()}
            style={{
              marginTop: "10px",
              backgroundColor: "#1c1c1c",
              color: "#ffffff",
              fontFamily: "Bonn",
              width: "15vw",
              height: "10vh",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            BUY
          </Button>
          <Modalico
            open={open}
            setAperto={setAperto}
            testo={2}
            code={code}
            setopen={setOpen}
          />
        </Box>
      )}
    </>
  );*/
  <p>Second Form</p>
};

export default SecondForm;
