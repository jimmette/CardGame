import React, { Component } from "react";
import { connect } from "react-redux";
import { DeckContainer } from "./AppStyle";
import { CARDBACKIMG, EMPTYDECKIMG } from "./Constants";

class DisplayDeckCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log("in DisplayDeckCard render");
    return (
      <DeckContainer id="deckContainer">
        <img
          src={this.props.deck.length === 0 ? EMPTYDECKIMG : CARDBACKIMG}
          alt="card"
        />
      </DeckContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    deck: state.deck,
    displaySpinner: state.displaySpinner
  };
};

export default connect(mapStateToProps)(DisplayDeckCards);
