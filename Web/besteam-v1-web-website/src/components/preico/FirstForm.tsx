import { Button, InputBase } from "@mui/material";
import { Box } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import abiSALE from "../abiIDOBesteam.json";

import Modalico from "./Modalico";
var Contract2 = require("web3-eth-contract");

const FirstForm = (props: any) => {
  /*
  const { account } = useWeb3React();
  const PREICO_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiSALE, PREICO_ADDRESS);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [alertsend, setAlertSend] = useState(false);
  const [ref, setRef] = useState("");
  const icoCollectionRef = collection(db, "ico");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const sendInfo = async () => {
    if (name !== "" && surname !== "" && email !== "") {
      await addDoc(icoCollectionRef, {
        name: name,
        surname: surname,
        wallet: account,
        email: email,
        ref: ref,
      });
      setAlertSend(true);
      setOpen(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Box
        style={{
          backgroundColor: "rgb(45, 198, 83)",
          color: "#ffffff",
          fontFamily: "Bonn",
          fontSize: "20px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          width: "50vw",
        }}
      >
        <p>* FIRST NAME</p>
        <InputBase
          inputProps={{
            style: { textAlign: "center" },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let valore = e.target.value;
            setName(valore);
          }}
          style={{
            width: "40vw",
            backgroundColor: "#ffffff",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "#000000",
            fontSize: "20px",
            fontFamily: "Bonn",
          }}
        />
        <p>* SECOND NAME</p>
        <InputBase
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let valore = e.target.value;
            setSurname(valore);
          }}
          inputProps={{
            style: { textAlign: "center" },
          }}
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            width: "40vw",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "20px",
            fontFamily: "Bonn",
          }}
        />
        <p>* EMAIL</p>
        <InputBase
          inputProps={{
            style: { textAlign: "center" },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let valore = e.target.value;
            setEmail(valore);
          }}
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            textAlign: "center",
            width: "40vw",
            backgroundColor: "#ffffff",
            color: "#000000",
            fontSize: "20px",
            fontFamily: "Bonn",
          }}
        />
        <p>*WALLET</p>
        <Box
          style={{
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "#ffffff",
            width: "40vw",
            height: "5vh",
          }}
        >
          {!!account ? (
            <p
              style={{
                color: "#000000",
                display: "flex",
                alignContent: "center",
                alignItems: "center",
                fontSize: "20px",
                textAlign: "left",
                fontFamily: "Bonn",
              }}
            >
              {account}
            </p>
          ) : (
            <p style={{ textAlign: "center", color: "#000000" }}>
              Wallet not connected
            </p>
          )}
        </Box>
        <p>REFERRAL</p>
        <InputBase
          inputProps={{
            style: { textAlign: "center" },
          }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let valore = e.target.value;
            setRef(valore);
            props.setref(valore);
          }}
          style={{
            width: "40vw",
            backgroundColor: "#ffffff",
            display: "flex",
            alignContent: "center",
            alignItems: "center",
            color: "#000000",
            fontSize: "20px",
            fontFamily: "Bonn",
          }}
        />
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
          }}
        ></div>
        <Button
          onClick={() => sendInfo()}
          style={{
            marginTop: "40px",
            marginBottom: "25px",
            backgroundColor: "#1c1c1c",
            color: "#ffffff",
            fontFamily: "Bonn",
            width: "15vw",
            height: "10vh",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Send Request
        </Button>
        {!!alertsend && (
          <p
            style={{
              color: "#000000",
              fontSize: "20px",
              width: "100%",
              fontFamily: "Bonn",
            }}
          >
            Request sent!{" "}
          </p>
        )}
        {!!error && (
          <p
            style={{
              color: "red",
              fontSize: "20px",
              width: "100%",
              fontFamily: "Bonn",
            }}
          >
            Error, check the field!{" "}
          </p>
        )}
      </Box>
      <Modalico open={open} testo={1} setopen={setOpen} />
    </>*/
  return(<p>Prova</p>);
};

export default FirstForm;
