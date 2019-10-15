import * as Font from 'expo-font';

/* eslint-disable global-require */
export async function loadFonts() {
  await Font.loadAsync({
    'crete-round-regular': require('../../assets/fonts/CreteRound-Regular.ttf'),
    'lato-regular': require('../../assets/fonts/Lato-Regular.ttf'),
  });

  return true;
}
