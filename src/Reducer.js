import { INIT_STATE } from "./Constants";

let reducer = function(state, action) {
  switch (action.type) {
    case "SET_DECK":
      console.log("in SET_DECK");
      return { ...state, deck: action.deck };
    case "DEAL_CARD":
      console.log("in DEAL_CARD");
      let newDeck = state.dealtDeck.concat();
      newDeck.push(action.card);
      return { ...state, dealtDeck: newDeck };
    case "SET_DISPLAY_SPINNER":
      console.log("in SET_DISPLAY_SPINNER");
      return { ...state, displaySpinner: action.value };
    case "RESET":
      console.log("in RESET", INIT_STATE);
      return INIT_STATE;
    default:
      return state;
  }
};

export default reducer;
