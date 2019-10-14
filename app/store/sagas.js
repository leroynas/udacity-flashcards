import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchDecks } from '../core/api';

import { LOAD_DECKS } from './constants';
import { decksLoaded, decksLoadingError } from './actions';

function* loadDecks() {
  try {
    const decks = yield call(fetchDecks);
    yield put(decksLoaded(decks));
  } catch ({ message }) {
    yield put(decksLoadingError(message));
  }
}

export default [takeLatest(LOAD_DECKS, loadDecks)];
