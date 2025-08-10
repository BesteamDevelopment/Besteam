import styled from "styled-components";
const FormIscrizione = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 34.722vw;
  height:37.5vw;
  gap: 1rem;
  background-color: #E8E8E8;
  position:relative;
`;


const InputIscrizione = styled.input`
  border: 0.75px solid #2DC653;
  width: 27.083vw;
  height: 1.727vw;
  font-family: 'DIN-Pro';
  color:#7C7C7C;
  text-align:center;
  font-size: 1.05vw;

`;

const ButtonIscrizione = styled.div`
  background-color: #2bc251;
  border: none;
  height: 2.590vw;
  width: 13.38vw;
  font-size: 2.072vw;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  font-family: DinPROBlack2;
`;

const TestoIscrizione = styled.div`
  color: #10451d;
  font-size: 1.71vw;
  font-family: 'DinPRO';
`;

const TestoPiccolo = styled.div`
  margin-top: -30px;
  color: #0a471d;
  font-size: 12px;
  font-style: italic;
`;
export {
  FormIscrizione,
  InputIscrizione,
  ButtonIscrizione,
  TestoIscrizione,
  TestoPiccolo,
};
