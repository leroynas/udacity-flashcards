import produce from 'immer';

import { LOAD_DECKS_SUCCESS, ADD_DECK_SUCCESS } from './constants';

const initialState = {
  items: null,
};

/* eslint-disable default-case, no-param-reassign */
const decksReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_DECKS_SUCCESS:
        draft.items = action.decks;
        break;

      case ADD_DECK_SUCCESS:
        draft.items.push(action.deck);
        break;
    }
  });

export default decksReducer;
