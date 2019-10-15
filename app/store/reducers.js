import produce from 'immer';

import { LOAD_DECKS_SUCCESS, ADD_DECK, ADD_DECK_FAILED } from './constants';

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
    }
  });

export default decksReducer;
