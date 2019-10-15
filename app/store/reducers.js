import produce from 'immer';

import {
  LOAD_DECKS_SUCCESS,
  ADD_DECK,
  ADD_DECK_FAILED,
  ADD_CARD,
  ADD_CARD_FAILED,
} from './constants';

const initialState = {
  decks: null,
};

/* eslint-disable default-case, no-param-reassign */
const decksReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DECKS_SUCCESS:
        draft.decks = action.decks;
        break;

      case ADD_DECK:
        draft.decks[action.deck.id] = action.deck;
        break;

      case ADD_DECK_FAILED:
        delete draft.decks[action.id];
        break;

      case ADD_CARD:
        draft.decks[action.deckId].cards[action.card.id] = action.card;
        break;

      case ADD_CARD_FAILED:
        delete draft.decks[action.deckId].cards[action.id];
        break;
    }
  });

export default decksReducer;
