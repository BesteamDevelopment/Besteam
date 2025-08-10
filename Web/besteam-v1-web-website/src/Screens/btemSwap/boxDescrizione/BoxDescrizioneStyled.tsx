import styled from "styled-components";
import SfondoDescrizione from "../assets/img/sfondoDescrizione.jpg";

const TitoloDescrizione = styled.p`
  font-size: 2.3vw;
  font-family: DinPROBold;
  text-align: center;
  letter-spacing: 0px;
  color: #2dc653;
  opacity: 1;
`;

const TestoGrassetto = styled.p`
  margin-top: -10px;
  font-size: 1.7vw;
  font-family: DinPROBold;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;
const TestoParagrafo = styled.p`
  font-size: 1.7vw;
  font-family: Dinproregular;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
`;

const ContainerDescrizione = styled.div`
  //height: 200vh;
  background: url(${SfondoDescrizione}) no-repeat center;
  background-size: cover;
  //background-repeat: no-repeat;
  /* UI Properties */
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const BoxRefCode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 2vw;
  width: 31vw;
  border-radius: 19px;
  opacity: 1;
  font-family: DinPRO;
  text-align: center;
  letter-spacing: 0.38px;
  color: #7c7c7c;
  opacity: 1;
`;

const ImgCopy = styled.img`
  width: 1.25vw;
  height: 1.25vw;
`;
export {
  TitoloDescrizione,
  TestoGrassetto,
  TestoParagrafo,
  ContainerDescrizione,
  BoxRefCode,
  ImgCopy,
};
