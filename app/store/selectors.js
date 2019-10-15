import { createSelector } from 'reselect';

const selectDecks = state => state.decks && state.decks;
const selectDeckID = (state, props) => props.navigation.getParam('id', null);

const makeSelectDecks = createSelector(
  selectDecks,
  decks =>
    decks &&
    Object.values(decks)
      .map(deck => ({
        ...deck,
        cards: Object.values(deck.cards),
      }))
      .sort((a, b) => b.createdAt - a.createdAt),
);

const makeSelectDeck = createSelector(
  selectDecks,
  selectDeckID,
  (decks, id) =>
    decks &&
    id && {
      ...decks[id],
      cards: Object.values(decks[id].cards),
    },
);

export { makeSelectDecks, makeSelectDeck };
