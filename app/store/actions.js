import {
  LOAD_DECKS,
  LOAD_DECKS_SUCCESS,
  LOAD_DECKS_FAILED,
  ADD_DECK,
  ADD_DECK_SUCCESS,
  ADD_DECK_FAILED,
  ADD_CARD,
  ADD_CARD_SUCCESS,
  ADD_CARD_FAILED,
} from './constants';

export function loadDecks() {
  return {
    type: LOAD_DECKS,
  };
}

export function decksLoaded(decks) {
  return {
    type: LOAD_DECKS_SUCCESS,
    decks,
  };
}

export function decksLoadingError(message) {
  return {
    type: LOAD_DECKS_FAILED,
    message,
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  };
}

export function deckAdded(id) {
  return {
    type: ADD_DECK_SUCCESS,
    id,
  };
}

export function deckAddingError(message, id) {
  return {
    type: ADD_DECK_FAILED,
    message,
    id,
  };
}

export function addCard(card, deckId) {
  return {
    type: ADD_CARD,
    card,
    deckId,
  };
}

export function cardAdded(id, deckId) {
  return {
    type: ADD_CARD_SUCCESS,
    id,
    deckId,
  };
}

export function cardAddingError(message, id, deckId) {
  return {
    type: ADD_CARD_FAILED,
    message,
    id,
    deckId,
  };
}
