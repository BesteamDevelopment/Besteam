import React from "react";
import { Container } from "../general/general";
import {
  BoxCrea,
  BoxSesso,
  ButtonSesso,
  TestoPiccoloSesso,
  TextSesso,
} from "./SessoStyled";

const Sesso = () => {
  return (
    <Container
      style={{ padding: "3rem", flexDirection: "column", gap: "2rem" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "3rem",
          justifyContent: "space-between",
        }}
      >
        <BoxSesso>
          <TextSesso>MASCHIO</TextSesso>
        </BoxSesso>
        <BoxSesso>
          <TextSesso>FEMMINA</TextSesso>
        </BoxSesso>
      </div>

      <BoxCrea>
        <TestoPiccoloSesso>
          * LA SCELTA DEL SESSO E' OBBLIGATORIA
        </TestoPiccoloSesso>
        <ButtonSesso>Crea</ButtonSesso>
      </BoxCrea>
    </Container>
  );
};

export default Sesso;
