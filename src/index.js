import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import DECK from "./Deck";

let reducer = function(state, action) {
  switch (action.type) {
    case "SET_DECK":
      return { ...state, deck: action.deck };
    case "DEAL_CARD":
      return { ...state };
    default:
      return state;
  }
};

const myStore = createStore(
  reducer,
  { deck: DECK, dealtDeck: [] },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
