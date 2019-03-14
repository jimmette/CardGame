import React, { Component } from "react";
import { connect } from "react-redux";
import { DeckContainer, SpinnerContainer } from "./AppStyle";
import { CARDBACKIMG, EMPTYDECKIMG } from "./Constants";

let spinner = require("./assets/gif/spinner.gif");

class DisplayDeckCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  displaySpinner = () => {
    // if (this.props.displaySpinner === true) {
    //   return (
    //     <SpinnerContainer>
    //       <img src={spinner} alt="spinner" />
    //     </SpinnerContainer>
    //   );
    // }
  };

  render() {
    console.log("in DisplayDeckCard render");
    return (
      <DeckContainer id="deckContainer">
        {/* {this.displaySpinner()} */}
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
