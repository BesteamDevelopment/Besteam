import abiSALE from "../../components/abiIDOBesteam.json";
import React, { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Button, InputBase } from "@mui/material";
var Contract2 = require("web3-eth-contract");

const Dashboard = () => {
  /*
  const [newAddress, setNewAddress] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  const [invest, setInvest] = useState(0);
  const [indirizzoNewCode, setIndirizzoNewCode] = useState("");
  const PREICO_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiSALE, PREICO_ADDRESS);
  const preIcoCollectionRef = collection(db, "preIco");
  const { account } = useWeb3React();

  useEffect(() => {
    getDocs(preIcoCollectionRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {});
    });

    setInterval(async () => {
      contract.methods
        .weiRaised()
        .call()
        .then((x: number) => {
          setInvest(x);
        });
    }, 5000);
  });

  const createCode = async () => {
    const addcode = await contract.methods
      .createManualReferral(indirizzoNewCode)
      .send({ from: account });
  };
  const aggiungiWhite = async (wallet: string) => {
    const agg = await contract.methods
      .addWhitelisted(wallet)
      .send({ from: account });

    console.log(agg);
  };

  const riavvia = async () => {
    const riavv = await contract.methods.unpauseSale().send({ from: account });

    console.log(riavv);
  };

  const pausa = async () => {
    const paus = await contract.methods.pauseSale().send({ from: account });

    console.log(paus);
  };

  const removeWhite = async (wallet: string) => {
    const rem = await contract.methods
      .removeWhitelisted(wallet)
      .send({ from: account });

    console.log(rem);
  };

  return (
    <>
      {!login && (
        <>
          <InputBase
            style={{ backgroundColor: "#ffffff" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              let x = e.target.value;
              setPass(x);
            }}
          />
          <Button
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
            onClick={() => {
              if (pass === "Besteam2021!@") setLogin(true);
            }}
          >
            Login
          </Button>
        </>
      )}
      {login && (
        <>
          {" "}
          <p>Dashboard</p>
          <div
            style={{ display: "flex", marginLeft: 30, flexDirection: "column" }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: "400px",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>Wallet Proprietario</p>
                <p>0x0e17979Ee4003047Ca605Bc346C6825cCB856516</p>
              </div>

              <div
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>Tasso di vendita</p>
                <p>1 MATIC / 15 BTEM</p>
              </div>
              <div
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>TOKEN</p>
                <p>BTEM COIN</p>
              </div>
              <div
                style={{
                  margin: 4,
                  display: "flex",
                  flexDirection: "column",
                  width: "250px",
                  backgroundColor: "#ffffff",
                }}
              >
                <p>Quantita disponibili</p>
                <p>1 500 000 BTEM</p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Add wallet in whitelist</p>
                <InputBase
                  style={{ backgroundColor: "#ffffff" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    let x = e.target.value;
                    setNewAddress(x);
                  }}
                />
                <Button
                  onClick={() => {
                    aggiungiWhite(newAddress);
                  }}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                >
                  Add
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <p>Create manual code</p>
                <InputBase
                  style={{ backgroundColor: "#ffffff" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    let x = e.target.value;
                    setIndirizzoNewCode(x);
                  }}
                />
                <Button
                  onClick={() => {
                    createCode();
                  }}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                >
                  Add
                </Button>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", margin: 30 }}
              >
                <p>Remove wallet from whitelist</p>
                <InputBase
                  style={{ backgroundColor: "#ffffff" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    let x = e.target.value;
                    setNewAddress(x);
                  }}
                />
                <Button
                  onClick={() => {
                    removeWhite(newAddress);
                  }}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                >
                  Remove
                </Button>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 30,
                      flexDirection: "column",
                    }}
                  >
                    <p>Data Inizio </p>
                    <p>27/02/2022</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 30,
                      flexDirection: "column",
                    }}
                  >
                    <p>Data Fine </p>
                    <p>27/03/2022</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: 30,
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      onClick={() => {
                        pausa();
                      }}
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      Pausa
                    </Button>
                    <Button
                      onClick={() => {
                        riavvia();
                      }}
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      Riavvia
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex ", flexDirection: "row" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Capitale Raccolto</p>
                <p>{invest}/50.000 MATIC</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );*/
  return(
    <p>Dashboard</p>
  )
};

export default Dashboard;
