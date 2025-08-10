import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";
import { withStyles } from "@mui/styles";
import CircularProgress from "@mui/material/CircularProgress";
import abiSALE from "../abiIDOBesteam.json";
import { Box } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
var Contract2 = require("web3-eth-contract");

const StyledLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#ffffff",
  },
  barColorPrimary: {
    backgroundColor: "#2DC653",
  },
})(LinearProgress);

const Progress = () => {
  /*
  const [invest, setInvest] = useState(0);
  const [percent, setPercent] = useState(0);
  const PREICO_ADDRESS = "0x9bd219F280E64701bcec868e3ac428b6D5828Dae";
  const [code, setCode] = useState(0);
  const { account } = useWeb3React();

  Contract2.setProvider(window.ethereum);
  const contract = new Contract2(abiSALE, PREICO_ADDRESS);

  const isCode = async () => {
    if (!!account) {
      const cod = await contract.methods.getCodeByAddress(account).call();
      if (cod > 0) setCode(cod);
    }
  };

  setInterval(async () => {
    isCode();
  }, 1000);

  setInterval(async () => {
    contract.methods
      .weiRaised()
      .call()
      .then(async (x: number) => {
        var y: number = 0;
        if (!!x) {
          y = x / 1000000000000000000;
          let z: number = y;

          setInvest(7825.1765);
          let perc = (7825.1765 * 100) / 50000;
          setPercent(perc);
        }
      });
  }, 5000);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "20vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          textAlign: "left",
          alignContent: "left",
          marginLeft: 25,
        }}
      >
        <p
          style={{
            fontFamily: "Bonn",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#ffffff",
            marginLeft: 3,
            marginBottom: -3,
            fontStyle: "italic",
          }}
        >
          BTEM PROGRESS ICO
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <StyledLinearProgress
            style={{ height: "4vh", width: "80%", marginLeft: 5 }}
            variant="determinate"
            value={percent}
          />

          <p
            style={{
              fontFamily: "Bonn",
              fontWeight: "bold",
              fontSize: 22,
              marginLeft: 4,
              color: "#ffffff",
            }}
          >
            7825.1765 / 50.000 MATIC
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{ marginRight: "30px", color: "white", fontWeight: "bold" }}
          >
            Your Ref Code :{" "}
          </p>
          <Box
            style={{
              backgroundColor: "#ffffff",
              width: "50vw",
              height: "5vh",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {code > 0 ? (
              <p
                style={{
                  color: "#000000",
                  fontSize: "13px",
                  textAlign: "left",
                  fontFamily: "Bonn",
                }}
              >
                {code}
              </p>
            ) : (
              <p style={{ textAlign: "center", color: "#000000" }}>Not Code</p>
            )}
          </Box>
        </div>
      </div>
    </>
  );*/
  return <p>ProgressBar</p>
};

export default Progress;
