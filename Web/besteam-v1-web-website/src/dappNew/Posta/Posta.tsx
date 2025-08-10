import React from "react";
import {
  ButtonAccetta,
  ButtonRifiuta,
  ContainerPosta,
  ContainerTable,
  ContainerTitleTable,
  TestoTableTitle,
  TextTable,
} from "./PostaStyled";

import { ReactComponent as Email } from "../media/email.svg";

const Posta = () => {
  return (
    <ContainerPosta>
      <Email style={{ width: "200px", color: "#ffffff" }} />
      <ContainerTitleTable>
        <TestoTableTitle style={{ width: "600px" }}>Message</TestoTableTitle>
        <TestoTableTitle style={{ width: "200px" }}>Status</TestoTableTitle>
        <TestoTableTitle style={{ width: "200px" }}>Date</TestoTableTitle>
      </ContainerTitleTable>
      <ContainerTable>
        <TextTable>
          Nulla auctor nisl in enim posuere, commodo faucibus est scelerisque.
          Mauris commodo gravida suscipit. In pretium nisl finibus ipsum mattis,
          a lacinia ligula ultricies. Sed rhoncus facilisis enim ac fringilla.
          Vestibulum vel neque lorem. Mauris imperdiet est turpis, non euismod
          sem aliquet a. Duis eget ante purus. In tempor ornare viverra.
        </TextTable>
        <ButtonAccetta>Accetta</ButtonAccetta>
        <ButtonRifiuta>Rifiut</ButtonRifiuta>
      </ContainerTable>
      <ContainerTable>
        <TextTable>
          Nulla auctor nisl in enim posuere, commodo faucibus est scelerisque.
          Mauris commodo gravida suscipit. In pretium nisl finibus ipsum mattis,
          a lacinia ligula ultricies. Sed rhoncus facilisis enim ac fringilla.
          Vestibulum vel neque lorem. Mauris imperdiet est turpis, non euismod
          sem aliquet a. Duis eget ante purus. In tempor ornare viverra.
        </TextTable>
      </ContainerTable>
    </ContainerPosta>
  );
};

export default Posta;
