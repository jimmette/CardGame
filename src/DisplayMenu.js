import React, { Component } from "react";
import { connect } from "react-redux";
import { SpinnerContainer, MenuContainer } from "./AppStyle";

let spinner = require("./assets/gif/spinner.gif");
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
    let deck = [...this.props.deck];
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
  displaySpinner = () => {
    if (this.props.displaySpinner === true) {
      return (
        <SpinnerContainer>
          <img src={spinner} alt="spinner" />
        </SpinnerContainer>
      );
    }
  };
  render() {
    console.log("in DisplayDealtCard render");
    return (
      <MenuContainer>
        <input
          type="button"
          id="btn_shuffle"
          onClick={this.onClickShuffle}
          value="Shuffle"
        />
        {this.isShuffleDisabled()}

        <input
          type="button"
          id="btn_deal"
          onClick={this.onClickDealOneCard}
          value="Deal one card"
        />
        {this.isDealDisabled()}

        <input
          type="button"
          id="btn_reset"
          onClick={this.onClickReset}
          value="Reset"
        />
        {this.isResetDisabled()}
        {this.displaySpinner()}
      </MenuContainer>
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
