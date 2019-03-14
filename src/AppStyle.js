import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const MiddleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 30%);
`;

const Title = styled.div`
  text-align: center;
  color: #fff;
  font-family: "Lilita One", cursive;
  font-size: 100px;
  text-shadow: 2px 2px 2px #000000;
`;

const GameContainer = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  background-color: #ffffff;
  border: solid 1px #000000;
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

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
`;

const SpinnerContainer = styled.div`
  margin-top: 10px;
  text-align: center;
`;

export {
  MainContainer,
  DeckContainer,
  DealtDeckContainer,
  SpinnerContainer,
  GameContainer,
  Title,
  MiddleContainer,
  MenuContainer
};
