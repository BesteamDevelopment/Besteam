import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import validator from "validator";
import Modalico from "./preico/Modalico";
import bordo from "../components/video/bordo2.png";

import email2 from "../components/video/emailsi.png";
import { useMediaQuery } from "react-responsive";

const NewsLetter = () => {
  const salvaEmail = async (
    email: string,
    emailsCollectionRef: any,
    setEmail: any
  ) => {
    if (validator.isEmail(email)) {
      await addDoc(emailsCollectionRef, { email: email });
      setEmail("e-mail");
      setPop(true);
      setErrorEmail(2);
    } else {
      setErrorEmail(1);
    }
  };

  const [email, setEmail] = useState("e-mail");
  const emailsCollectionRef = collection(db, "emails");
  const [errorEmail, setErrorEmail] = useState(0);
  const [pop, setPop] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      <div className="container-page">
        <p className="testo-newsletter" style={{ fontFamily: "DinPROBold" }}>
          START YOUR VIRTUAL FOOTBALL CAREER!
        </p>
        <div id="join" className="form-join">
          <TextField
            type="email"
            style={{
              width: 200,
              backgroundColor: "#ffffff",
              borderBottomColor: "#ffffff",
            }}
            hiddenLabel
            placeholder="email"
            id="inputid"
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
            onChange={(v) => {
              setEmail(v.target.value);
            }}
          />
          <Button
            onClick={() => salvaEmail(email, emailsCollectionRef, setEmail)}
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
          >
            JOIN
          </Button>
        </div>
        {errorEmail === 1 && (
          <p style={{ color: "#FF0000", fontFamily: "Bonn" }}>
            There is an error in the email. Please check and try again
          </p>
        )}
        {errorEmail === 2 && (
          <p style={{ color: "rgb(45, 198, 83)", fontFamily: "Bonn" }}>
            Well done. You have successfully sent your email!
          </p>
        )}
        <p
          style={{
            color: "#ffffff",
            fontFamily: "DinPROBold",
            borderRadius: 0,
          }}
        >
          Contact us{" "}
          <img src={email2} style={{ width: isMobile ? "20px" : "20px" }} />{" "}
          metaverse@besteam.io{" "}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", maxWidth: "100%" }}>
        <img src={bordo} style={{ width: "100%" }} />
      </div>
      <Modalico testo={3} open={pop} setopen={setPop} />
    </div>
  );
};

export default NewsLetter;
