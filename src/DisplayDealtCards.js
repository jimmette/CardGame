import React, { Component } from "react";
import { connect } from "react-redux";
import { DealtDeckContainer } from "./AppStyle";

let emptyDeck = require("./assets/images/emptyDeck.png");

class DisplayDealtCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("in DisplayDealtCard render");
    console.log(this.props.dealtDeck.length);
    return (
      <DealtDeckContainer>
        <img
          src={
            this.props.dealtDeck.length === 0
              ? emptyDeck
              : this.props.dealtDeck[this.props.dealtDeck.length - 1].img
          }
          alt="card"
        />
      </DealtDeckContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return { deck: state.deck, dealtDeck: state.dealtDeck };
};

export default connect(mapStateToProps)(DisplayDealtCards);
