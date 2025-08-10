import styled from "styled-components";

const BoxSesso = styled.div`
  width: 300px;
  height: 350px;
  background-color: #dfe5e1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
const BoxCrea = styled.div`
  width: 650px;
  height: 200px;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
  align-content: center;
  gap: 2rem;
  background-color: #dfe5e1;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const TextSesso = styled.p`
  color: #0a471d;
  font-size: 40px;
  font-weight: bold;
`;
const TestoPiccoloSesso = styled.div`
  color: #0a471d;
  font-size: 18px;
  font-weight: bold;
`;

const ButtonSesso = styled.div`
  background-color: #2bc251;
  border: none;
  height: 30px;
  width: 120px;
  font-size: 22px;
  color: black;
  font-weight: bold;
  padding: 0.3rem;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export { BoxSesso, BoxCrea, TextSesso, ButtonSesso, TestoPiccoloSesso };
