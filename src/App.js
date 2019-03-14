import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MainContainer,
  GameContainer,
  Title,
  MiddleContainer
} from "./AppStyle";
import DisplayDealtCards from "./DisplayDealtCards";
import DisplayDeckCards from "./DisplayDeckCards";
import DisplayMenu from "./DisplayMenu";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("in App render");
    return (
      <MainContainer>
        <MiddleContainer>
          <Title>Card Game!</Title>
          <GameContainer>
            <DisplayDealtCards />
            <DisplayDeckCards />
            <DisplayMenu />
          </GameContainer>
        </MiddleContainer>
      </MainContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return {};
};

export default connect(mapStateToProps)(App);
