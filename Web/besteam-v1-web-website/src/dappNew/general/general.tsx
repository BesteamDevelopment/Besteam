import styled from "styled-components";
import SfondoDapp from "../../dappNew/media/sfondodapp.jpg";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: relative;
  background-image: url(${SfondoDapp});
  background-repeat: no-repeat;
  background-size: cover;
`;


const HeaderDapp = styled.div`
  width: 100%;
  height:5.208vw;
  `




export { Container , HeaderDapp};
