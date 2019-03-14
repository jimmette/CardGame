import DECK from "./Deck";

const CONSTANTS = {
  nb_of_cards: 52
};

const CARDBACKIMG = require("./assets/images/cardBack_blue1.png");
const EMPTYDECKIMG = require("./assets/images/emptyDeck.png");

const INIT_STATE = { deck: DECK, dealtDeck: [], displaySpinner: false };

export default CONSTANTS;
export { CARDBACKIMG, EMPTYDECKIMG, INIT_STATE };
