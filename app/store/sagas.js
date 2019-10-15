import { call, put, takeLatest } from 'redux-saga/effects';

import { navigate } from '../core/navigator';
import { fetchDecks, storeDeck } from '../core/api';

import { LOAD_DECKS, ADD_DECK } from './constants';
import {
  decksLoaded,
  decksLoadingError,
  deckAdded,
  deckAddingError,
} from './actions';

function* loadDecks() {
  try {
    const decks = yield call(fetchDecks);
    yield put(decksLoaded(decks));
  } catch ({ message }) {
    yield put(decksLoadingError(message));
  }
}

function* addDeck({ deck }) {
  try {
    yield navigate('Decks');
    yield call(storeDeck, deck);
    yield put(deckAdded(deck.id));
  } catch ({ message }) {
    yield put(deckAddingError(message, deck.id));
  }
}

export default function* rootSaga() {
  yield* [takeLatest(LOAD_DECKS, loadDecks), takeLatest(ADD_DECK, addDeck)];
}
