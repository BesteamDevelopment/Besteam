import styled from "styled-components";

const ContainerPosta = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 300px;
`;

const ContainerTitleTable = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  background-color: #0a471d;
`;

const ContainerTable = styled.div`
  background-color: #dfe5e1;
`;
const TextTable = styled.p`
  width: 800px;
  color: black;
`;

const TestoTableTitle = styled.p`
  color: white;
`;

const ButtonAccetta = styled.button`
  background-color: #2bc251;
  color: white;
`;

const ButtonRifiuta = styled.button`
  background-color: red;
  color: white;
`;

export {
  ContainerPosta,
  ContainerTable,
  TextTable,
  ContainerTitleTable,
  TestoTableTitle,
  ButtonAccetta,
  ButtonRifiuta,
};
