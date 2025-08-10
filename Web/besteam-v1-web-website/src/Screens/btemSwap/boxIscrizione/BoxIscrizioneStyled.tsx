import styled from "styled-components";
import topImage from "../assets/img/topImage.jpg";

const BoxTop = styled.div`
  height: 91vh;
  width: 100%;
  background-image: url(${topImage});
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const ContainerIscrizione = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  align-items: center;
`;
const BoxSinistra = styled.div`
  width: 30vw;
  height: 33vw;
  // mix-blend-mode: overlay;
  border: 8px solid #ffffff;
  background: #e8e8e8 0% 0% no-repeat padding-box;
  opacity: 1;
  padding: 1rem;
  position: relative;

  // opacity: 0.35;
`;

const BoxDestra = styled.div`
  position: relative;
  width: 30vw;
  height: 33vw;
  // mix-blend-mode: overlay;

  background: #e8e8e8 0% 0% no-repeat padding-box;
  opacity: 1;

  // opacity: 0.35;
`;

const BoxDestraScuro = styled.div`
  width: 30vw;
  height: 33vw;
  // mix-blend-mode: overlay;
  border: 8px solid #ffffff;
  background: #010101 0% 0% no-repeat padding-box;
  opacity: 1;
`;

const TestoForm = styled.div`
  font-family: Bonn;
  text-align: center;
  letter-spacing: 0px;
  color: #10451d;
  opacity: 1;
  font-size: 1.7vw;
`;

const InputFormRegistrazione = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 26vw;
  height: 1.719vw;
  border: none;
  font-family: DinPRO;
  font-size: 1.05vw;
  text-align: center;
  letter-spacing: 0px;
  color: #7c7c7c;
`;

const ButtonSignUp = styled.button`
  background: #2dc653 0% 0% no-repeat padding-box;
  cursor: url("cursore2.png"), auto;
  &:hover {
    background-color: #555;
  }
  opacity: 1;
  width: 12.1vw;
  height: 2.6vw;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  border: none;
`;

const TestoButton = styled.p`
  font-family: DinPROBlack2;
  font-size: 2.08vw;
  color: white;
`;

const TestoSwap = styled.p`
  text-align: center;

  color: #2dc653;
  opacity: 1;
  font-size: 4.2vw;
  font-family: DinPROBold;
`;

const InputCoin = styled.input`
  width: 21vw;
  height: 5.34vw;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0px;
  color: #7c7c7c;
  opacity: 1;
  border: none;
  font-size: 3vw;
  padding-left: 11vw;
  font-family: Dinproregular;
  &:invalid {
    border: 1px solid red;
  }
`;

const TestoSupporto = styled.p`
  font-family: DinPRO;
  color: white;
  font-size: 1.45vw;
`;

const FrecciaBasso = styled.img`
  width: 1.56vw;
  height: 1.14vw;
  margin-top: -15px;
`;

const Mandatory = styled.p`
  margin-top: -0.75vh;
  text-align: center;
  letter-spacing: 0px;
  color: #10451D;
  font-family: DinLightItalic;
  opacity: 1;
  font-size: 1.64vh;
`;

const TestoSottoInput = styled.p`
  text-align: center;
  color: #10451d;
  opacity: 1;
  font-size: 2vw;
  font-family: DINPro;
`;

const BuyButton = styled.div`
  cursor: url("cursore2.png"), auto;
  &:hover {
    background-color: #555;
  }
  // position: relative;
  display: flex;
  // left: 4.1vw;
  //top: 1.7vw;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  background: #2dc653 0% 0% no-repeat padding-box;
  width: 21vw;
  height: 5.34vw;
  font-family: DinPROBlack2;
  font-size: 3.75vw;
  color: white;
`;
export {
  BoxTop,
  TestoSottoInput,
  BoxSinistra,
  BoxDestra,
  TestoForm,
  ButtonSignUp,
  TestoButton,
  TestoSwap,
  InputFormRegistrazione,
  InputCoin,
  TestoSupporto,
  ContainerIscrizione,
  FrecciaBasso,
  BoxDestraScuro,
  Mandatory,
  BuyButton,
};
