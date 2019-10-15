import { createSelector } from 'reselect';

const selectDecks = state => state.decks && Object.values(state.decks);

const makeSelectDecks = createSelector(
  selectDecks,
  decks =>
    decks && decks.map(deck => ({ ...deck, cards: deck.questions.length })),
);

export { makeSelectDecks };
