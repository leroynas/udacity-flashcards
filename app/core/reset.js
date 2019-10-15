import { AsyncStorage } from 'react-native';

import data from './data';

const DECKS_STORAGE_KEY = '@udacity-flashcards:DECKS';

async function reset() {
  await AsyncStorage.removeItem(DECKS_STORAGE_KEY);
  await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
}

export default reset;
