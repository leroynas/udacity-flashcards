import { createSelector } from 'reselect';

const selectDecks = state => state.decks.items;

const makeSelectDecks = createSelector(
  selectDecks,
  decks => decks && Object.values(decks),
);

export { makeSelectDecks };
