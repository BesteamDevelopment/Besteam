import { injected } from "../components/wallet/connection";
import { useWeb3React } from "@web3-react/core";
import React from "react";
import styled from "styled-components";


const TestoButton = styled.p`
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  display: flex;
  letter-spacing: 0px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  opacity: 1;
`;

const ButtonConnessione = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  width: 250px;
  height: 50px;
  /* UI Properties */
  background: var(--unnamed-color-2dc653) 0% 0% no-repeat padding-box;
  background: #208b3a 0% 0% no-repeat padding-box;
  opacity: 1;
  &:hover {
    background-color: #555;
  }
`;
const ConnectionWallet = () => {
  const windowNew = window as any
  const { active, activate, deactivate, account } = useWeb3React();
  const disconnect = async () => {
    try {
      await deactivate();
    } catch (err) {
      console.log(err);
    }
  };

  const connect = async () => {
    try {
      await windowNew.ethereum.enable();
      await windowNew.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(137).toString(16)}` }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.

      await windowNew.ethereum?.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${Number(137).toString(16)}`,
            chainName: "Polygon Mainnet",
            nativeCurrency: {
              name: "MATIC",
              symbol: "MATIC",
              decimals: 18,
            },
            rpcUrls: [
              "https://polygon-mainnet.g.alchemy.com/v2/_eHaeadICkJVlxlCIzQk_RabRwDg0xZP",
            ],
            blockExplorerUrls: ["https://polygonscan.com/"],
          },
        ],
      });
    }
    await activate(injected);
    // handle other "switch" errors
  };

  return (
    <>
      {!active ? (
        <ButtonConnessione onClick={() => connect()}>
          <TestoButton style={{ fontFamily: "DinPRONormale" }}>
            CONNECT WALLET
          </TestoButton>
        </ButtonConnessione>
      ) : (
        <ButtonConnessione onClick={() => disconnect()}>
          <TestoButton>DISCONNECT</TestoButton>
        </ButtonConnessione>
      )}
       
    </>
  );
};

export default ConnectionWallet;
