import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DecksScreen from '../../../containers/DecksContainer';
import AddDeckScreen from '../../../containers/AddDeckContainer';

const navigationOptions = {
  header: null,
};

const Navigator = createStackNavigator({
  Decks: {
    screen: DecksScreen,
    navigationOptions,
  },
  AddDeck: {
    screen: AddDeckScreen,
    navigationOptions,
  },
});

export default createAppContainer(Navigator);
