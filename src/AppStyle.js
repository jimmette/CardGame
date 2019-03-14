import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`;

const DeckContainer = styled.div`
  width: 140px;
  height: 190px;
  margin-right: 20px;
`;

const DealtDeckContainer = styled.div`
  width: 140px;
  height: 190px;
  margin-right: 20px;
`;

export { MainContainer, DeckContainer, DealtDeckContainer };
