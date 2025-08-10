import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import telegram from "../video/logotelegram.png";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { flexbox } from "@mui/system";
import freccia from "../../components/video/freccia.png";
import frecciasinistra from "../../components/video/frecciasinistra.png";
import { useMediaQuery } from "react-responsive";
import uno from "../video/ourpartners/1.png";
import due from "../video/ourpartners/2.png";
import tre from "../video/ourpartners/3.png";
import qua from "../video/ourpartners/4.png";
import cin from "../video/ourpartners/5.png";
import sei from "../video/ourpartners/6.png";
import { TextField } from "@mui/material";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import validator from "validator";
import bordo from "../video/bordo2.png";

import email2 from "../video/emailsi.png";
const Modalico = (props: any) => {
  const salvaEmail = async (
    email: string,
    emailsCollectionRef: any,
    setEmail: any
  ) => {
    if(!!checked){
    if (validator.isEmail(email)) {
      await addDoc(emailsCollectionRef, { email: email });
      setEmail("e-mail");
      setPop(true);
      setErrorEmail(2);
    } else {
      setErrorEmail(1);
    }}
    else{
      setErrorEmail(3);
    }
  };
  const [checked, setChecked] = useState(false);

  const [email, setEmail] = useState("e-mail");
  const emailsCollectionRef = collection(db, "emails");
  const [errorEmail, setErrorEmail] = useState(0);
  const [pop, setPop] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const handleChange = (event) => {
    setChecked(event.target.checked);
    // Utilizza il valore di checked come necessario
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: 500,
    p: 4,
  };

  const [copied, setCopied] = useState(false);
  if (props.registra)
    return (
      <>
        <Modal
          onBackdropClick={() => props.setopen(false)}
          open={props.open}
          BackdropProps={{
            style: {
              outline: "none",
              backgroundColor: "#000000",
              opacity: "0.8",
            },
          }}
        >
          <Box
            sx={style}
            style={{
              borderColor: "black",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
              outline: "none",
            }}
          >
            <p
              className="testo-newsletter"
              style={{ fontFamily: "DinPROBold", textAlign: "center" }}
            >
              START YOUR VIRTUAL FOOTBALL CAREER!
            </p>
            <div
              id="join"
              className="form-join"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <TextField
                type="email"
                style={{
                  width: 300,
                  height: 40,
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
                  width: 300,
                  height: 40,
                  color: "#ffffff",
                  fontSize: 28,
                  fontWeight: "bold",

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
            {errorEmail ===3 && (
              <p style={{ color: "rgb(45, 198, 83)", fontFamily: "Bonn" }}>
                You must check policy privacy
              </p>
            )}
            <p
              style={{
                fontSize: "24px",
                fontFamily: "Bonn",
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              Sign up for the newsletter and receive a welcome NFT when our
              metaverse is released.
            </p>
            <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            color: 'white', // Colore di default per il bordo non selezionato
            '&.Mui-checked': {
              color: 'green', // Cambia il colore quando la checkbox è selezionata
            },
            '&:hover': {
              bgcolor: 'transparent', // Mantiene lo sfondo trasparente al passaggio del mouse
            },
          }}
        />
      }
      label={
        <span>
         <p
              style={{
                fontSize: "24px",
                fontFamily: "Bonn",
                color: "#ffffff",
                textAlign: "center",
              }}
            > I have read the  <a href="" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '4px', textDecoration: 'none', color: '#007bff' }}>privacy policy  </a> and I want to subscribe to the newsletter.   </p>      
        </span>
      }
    />
            <Modalico
              testo={3}
              open={pop}
              setopen={setPop}
              setAperto={props.setopen}
            />
          </Box>
        </Modal>
      </>
    );
  else
    return (
      <>
        <Modal
          open={props.open}
          onBackdropClick={() => {
            props.setopen(false);
            props.setAperto(false);
          }}
          BackdropProps={{
            style: {
              backgroundColor: "#000000",
              opacity: "0.95",
            },
          }}
        >
          <Box
            sx={style}
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            {props.testo === 1 && (
              <p
                style={{
                  fontSize: "45px",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Your request was successful.
                <br />
                Wait a few minutes to be accepted in the whitelist and proceed
                to buy.
              </p>
            )}
            {props.testo === 2 && (
              <>
                <p
                  style={{
                    fontSize: "45px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Waiting for the transaction to be processed, you can join the
                  telegram group of holders.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={freccia}
                    style={{ height: "50px", marginRight: "50px" }}
                    alt="freccia"
                  />
                  <a href="https://t.me/+hcImrN9sS1JjMjc8">
                    <img
                      src={telegram}
                      height={"80px"}
                      width={"80px"}
                      style={{ marginTop: "30px" }}
                    />
                  </a>
                  <img
                    src={frecciasinistra}
                    style={{ height: "50px", marginLeft: "50px" }}
                    alt="frecciasinistra"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p
                    style={{
                      marginTop: "50px",
                      color: "#ffffff",
                      fontFamily: "Bonn",
                      fontWeight: "bold",
                      fontSize: 20,
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "row",
                      marginRight: "30px",
                    }}
                  >
                    Your Code:{" "}
                  </p>
                  <p
                    id="code"
                    style={{
                      marginTop: "50px",
                      color: "#ffffff",
                      fontFamily: "Bonn",
                      fontWeight: "bold",
                      fontSize: 20,
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {props.code}
                    <CopyToClipboard text={props.code}>
                      <button
                        style={{
                          backgroundColor: "#ffffff",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          alignContent: "center",
                        }}
                        onClick={() => {
                          var copyText = document.getElementById("code");
                          setCopied(true);
                        }}
                      >
                        <img
                          alt="copy"
                          style={{ width: 20, height: 20 }}
                          src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                        />
                        {copied && (
                          <p style={{ color: "#000000", fontSize: 10 }}>
                            Copied!
                          </p>
                        )}
                      </button>
                    </CopyToClipboard>
                  </p>
                </div>
              </>
            )}

            {props.testo === 3 && (
              <>
                <p
                  style={{
                    fontSize: isMobile ? "24px" : "40px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Your request was successful.
                  <br />
                  Your journey it's beginning!
                </p>
                <p
                  style={{
                    fontSize: isMobile ? "24px" : "40px",
                    fontFamily: "Bonn",
                    color: "#ffffff",
                    textAlign: "center",
                  }}
                >
                  Now you can receive news about Besteam on your email.
                </p>
                <p
                  style={{
                    fontSize: isMobile ? "24px" : "40px",
                    fontWeight: "bold",
                    fontFamily: "Bonn",
                    color: "rgb(45, 198, 83)",
                    fontStyle: "italic",
                  }}
                >
                  #BEtheFIRST!
                </p>
              </>
            )}
            {props.testo === 4 && (
              <>
                <p
                  style={{
                    fontSize: isMobile ? "24px" : "40px",
                    color: "#ffffff",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  First Step Completed!
                  <br /> Now You can support the future of virtual football
                  11vs11. <br />
                  <span
                    style={{
                      fontFamily: "DinPRONormale",
                      fontSize: isMobile ? "22px" : "30px",
                    }}
                  >
                    Clicking on "OK" you declare that you have read the Privacy
                    Policy.
                  </span>
                  <br />
                </p>
              </>
            )}
            {props.testo === 5 && (
              <p
                style={{
                  fontSize: "45px",
                  color: "#ffffff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Thanks for your support,
                <br /> let's build virtual football together! <br />
                <span
                  style={{
                    fontFamily: "DinPRONormale",
                    fontSize: isMobile ? "22px" : "30px",
                  }}
                >
                  Clicking on "OK" you declare to accept Terms and Conditions
                </span>
              </p>
            )}
            {props.testo === 5 && (
              <Button
                onClick={() => {
                  props.setopen(false);
                  props.compra();
                }}
                style={{
                  backgroundColor: "#2dc653",
                  width: isMobile ? 120 : 220,
                  height: 100,
                  color: "#ffffff",
                  fontSize: 40,
                  fontWeight: "bold",
                  fontFamily: "Bonn",
                  borderRadius: 0,
                }}
                variant="contained"
              >
                OK!
              </Button>
            )}
            {props.testo === 4 && (
              <Button
                onClick={() => {
                  props.setopen(false);
                }}
                style={{
                  backgroundColor: "#2dc653",
                  width: isMobile ? 120 : 220,
                  height: 100,
                  color: "#ffffff",
                  fontSize: 40,
                  fontWeight: "bold",
                  fontFamily: "Bonn",
                  borderRadius: 0,
                }}
                variant="contained"
              >
                OK!
              </Button>
            )}

            {props.testo !== 5 && props.testo !== 4 && (
              <Button
                onClick={() => {
                  props.setopen(false);
                  props.aperto(false);
                }}
                style={{
                  backgroundColor: "#2dc653",
                  width: isMobile ? 120 : 220,
                  height: 100,
                  color: "#ffffff",
                  fontSize: 40,
                  fontWeight: "bold",
                  fontFamily: "Bonn",
                  borderRadius: 0,
                }}
                variant="contained"
              >
                OK!
              </Button>
            )}
          </Box>
        </Modal>
      </>
    );
};

export default Modalico;
