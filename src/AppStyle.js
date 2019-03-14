import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  z-index: 0;
`;

const DeckContainer = styled.div`
  width: 140px;
  height: 190px;
  margin-right: 20px;
  z-index: 0;
`;

const DealtDeckContainer = styled.div`
  width: 140px;
  height: 190px;
  margin-right: 20px;
  z-index: 0;
`;

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  z-index: 50;
`;

export { MainContainer, DeckContainer, DealtDeckContainer, SpinnerContainer };
