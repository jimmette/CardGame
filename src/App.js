import React, { Component } from "react";
import { connect } from "react-redux";
import { MainContainer } from "./AppStyle";
import DisplayDealtCards from "./DisplayDealtCards";
import DisplayDeckCards from "./DisplayDeckCards";
import DisplayMenu from "./DisplayMenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("in App render");
    return (
      <MainContainer>
        <DisplayDealtCards />
        <DisplayDeckCards />
        <DisplayMenu />
      </MainContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return {};
};

export default connect(mapStateToProps)(App);
