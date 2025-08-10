import React from "react";
import { HeaderDapp } from "../HeaderDapp";
import { LeftMenu } from "../LeftMenu";
import Posta from "../Posta/Posta";
import { ContainerHome } from "./HomeStyled";

const Home = () => {
  return (
    <>
      <HeaderDapp />
      <LeftMenu />
      <ContainerHome>
        <Posta />
      </ContainerHome>
    </>
  );
};

export default Home;
