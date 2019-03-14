import React, { Component } from "react";
import { connect } from "react-redux";
import { MainContainer } from "./AppStyle";
import DisplayDealtCards from "./DisplayDealtCards";
import DisplayDeckCards from "./DisplayDeckCards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  shuffle = () => {
    let deck = this.props.deck;
    let shuffledDeck = [];
    let dice = 0;

    while (deck.length > 0) {
      dice = Math.floor(Math.random() * deck.length);
      shuffledDeck.push(deck[dice]);
      deck.splice(dice, 1);
    }
    this.props.dispatch({ type: "SET_DECK", deck: shuffledDeck });
  };
  dealOneCard = () => {
    let deck = this.props.deck;
    let card = deck.pop();
    this.props.dispatch({ type: "DEAL_CARD", card: card });
    this.props.dispatch({ type: "SET_DECK", deck: deck });
    console.log("end of dealOneCard");
  };
  displayDeck = () => {
    return this.props.deck.map(card => {
      return (
        <div>
          {card.nb}, {card.suit}
        </div>
      );
    });
  };
  render() {
    console.log("in App render");
    return (
      <MainContainer>
        <DisplayDealtCards />
        <DisplayDeckCards />
        <div>
          <div>
            <input type="button" onClick={this.shuffle} value="Shuffle" />
          </div>
          <div>
            <input
              type="button"
              onClick={this.dealOneCard}
              value="Deal one card"
            />
          </div>
        </div>
      </MainContainer>
    );
  }
}

let mapStateToProps = function(state) {
  return { deck: state.deck, dealtDeck: state.dealtDeck };
};

export default connect(mapStateToProps)(App);
