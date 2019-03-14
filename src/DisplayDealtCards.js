import React, { Component } from "react";
import { connect } from "react-redux";
import { DealtDeckContainer } from "./AppStyle";
import { EMPTYDECKIMG } from "./Constants";

class DisplayDealtCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("in DisplayDealtCard render");
    return (
      <DealtDeckContainer>
        <img
          src={
            this.props.dealtDeck.length === 0
              ? EMPTYDECKIMG
              : this.props.dealtDeck[this.props.dealtDeck.length - 1].img
          }
          alt="card"
        />
      </DealtDeckContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    dealtDeck: state.dealtDeck
  };
};

export default connect(mapStateToProps)(DisplayDealtCards);
