import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = '@udacity-flashcards:DECKS';

export async function fetchDecks() {
  const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

export async function storeDeck(deck) {
  const storedDeck = { [deck.id]: deck };
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(storedDeck));
  return storedDeck;
}

export async function deleteDeck({ id }) {
  const data = AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = data ? JSON.parse(data) : {};
  delete decks[id];
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, decks);
}

export async function storeCard(card, deckId) {
  const storedCard = { [card.id]: card };
  const storedDeck = { [deckId]: { cards: storedCard } };
  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(storedDeck));
}

export async function deleteCard({ id, deckId }) {
  const data = AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = data ? JSON.parse(data) : {};
  delete decks[deckId].cards[id];
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, decks);
}
