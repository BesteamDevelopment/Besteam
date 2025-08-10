import styled from "styled-components";

const HeaderContainerDapp = styled.div`
  height: 4.167vw;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  position: fixed;
  top: 0;
  z-index: 1000000000;
  color:white;
  gap:3rem;
`;
const ButtonConnessioneDapp = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  cursor: pointer;
  width: 250px;
  height: 50px;
  /* UI Properties */
  background: var(--unnamed-color-2dc653) 0% 0% no-repeat padding-box;
  background: #208b3a 0% 0% no-repeat padding-box;
  opacity: 1;
  &:hover {
    background-color: #555;
  }
`;

const LinkContainer = styled.div``;
const TextLink = styled.div``;
const ImageLink = styled.div``;

export { HeaderContainerDapp, ButtonConnessioneDapp };
