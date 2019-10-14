import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = '@udacity-flashcards:DECKS';

export async function fetchDecks() {
  const data = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}

export async function storeDeck({ deck, key }) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({ [key]: deck }),
  );
}

export async function deleteDeck({ key }) {
  const data = AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = data ? JSON.parse(data) : {};
  delete decks[key];
  return AsyncStorage.setItem(DECKS_STORAGE_KEY, decks);
}
