import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.timeout = undefined;
  }
  componentWillUnmount() {
    if (this.timeout !== undefined) {
      clearTimeout(this.timeout);
    }
  }
  onClickShuffle = () => {
    let deck = this.props.deck;
    let shuffledDeck = [];
    let dice = 0;

    this.props.dispatch({ type: "SET_DISPLAY_SPINNER", value: true });
    this.timeout = setTimeout(() => {
      console.log("in Timeout");
      this.props.dispatch({ type: "SET_DISPLAY_SPINNER", value: false });
    }, 2000);

    while (deck.length > 0) {
      dice = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck[dice]);
      deck.splice(dice, 1);
    }
    this.props.dispatch({ type: "SET_DECK", deck: shuffledDeck });
  };
  onClickDealOneCard = () => {
    let deck = this.props.deck.concat();
    let card = deck.pop();
    this.props.dispatch({ type: "DEAL_CARD", card: card });
    this.props.dispatch({ type: "SET_DECK", deck: deck });
    console.log("end of dealOneCard");
  };
  onClickReset = () => {
    this.props.dispatch({ type: "RESET" });
  };
  isShuffleDisabled = () => {
    let btn = document.getElementById("btn_shuffle");
    if (this.props.deck.length === 0 || this.props.displaySpinner === true) {
      btn.disabled = true;
    } else if (btn !== null) {
      btn.disabled = false;
    }
  };
  isDealDisabled = () => {
    let btn = document.getElementById("btn_deal");
    if (this.props.deck.length === 0 || this.props.displaySpinner === true) {
      btn.disabled = true;
    } else if (btn !== null) {
      btn.disabled = false;
    }
  };
  isResetDisabled = () => {
    let btn = document.getElementById("btn_reset");
    if (this.props.deck.length === 0 || this.props.displaySpinner === true) {
      btn.disabled = true;
    } else if (btn !== null) {
      btn.disabled = false;
    }
  };
  render() {
    console.log("in DisplayDealtCard render");
    return (
      <div>
        <div>
          <input
            type="button"
            id="btn_shuffle"
            onClick={this.onClickShuffle}
            value="Shuffle"
          />
          {this.isShuffleDisabled()}
        </div>
        <div>
          <input
            type="button"
            id="btn_deal"
            onClick={this.onClickDealOneCard}
            value="Deal one card"
          />
          {this.isDealDisabled()}
        </div>
        <div>
          <input
            type="button"
            id="btn_reset"
            onClick={this.onClickReset}
            value="Reset"
          />
          {this.isResetDisabled()}
        </div>
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  console.log("in DisplayMenu render");
  return {
    deck: state.deck,
    displaySpinner: state.displaySpinner
  };
};

export default connect(mapStateToProps)(DisplayMenu);
