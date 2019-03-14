import React, { Component } from "react";
import { connect } from "react-redux";
import { DeckContainer } from "./AppStyle";

let cardBackImg = require("./assets/images/cardBack_blue1.png");

class DisplayDeckCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("in DisplayDeckCard render");
    return (
      <DeckContainer>
        <img src={cardBackImg} alt="card" />
      </DeckContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return { deck: state.deck, dealtDeck: state.dealtDeck };
};

export default connect(mapStateToProps)(DisplayDeckCards);
