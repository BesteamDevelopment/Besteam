import styled from "styled-components";
const CreazioneClubForm = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-color: #dfe5e1;
  width: 600px;
  height: 500px;
  gap: 2rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const ButtonLogo = styled.div`
  background-color: #0a471d;
  border: none;
  height: 30px;
  width: 120px;
  font-size: 22px;
  color: white;
  font-weight: bold;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

const InputClub = styled.input`
  background-color: white;
  width:31.042vw ;
  height: 1.528vw;
  border: none;
`;

const TestoLeftInput = styled.p`
  font-size:1.13vw;
  font-family: DINPro;
  text-align: left;
  letter-spacing: 0px;
  color: white;
  opacity: 1;
  font-weight:400;
  line-height:0

`

export { CreazioneClubForm, InputClub, ButtonLogo, TestoLeftInput };
