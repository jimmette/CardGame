import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

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
    return (
      <div>
        <div>
          <input type="button" onClick={this.shuffle} value="Shuffle" />
        </div>
        {this.displayDeck()}
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return { deck: state.deck };
};

export default connect(mapStateToProps)(App);
