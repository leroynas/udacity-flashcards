import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import DecksScreen from '../../../containers/DecksContainer';
import AddDeckScreen from '../../../containers/AddDeckContainer';
import DeckScreen from '../../../containers/DeckContainer';
import AddCardScreen from '../../../containers/AddCardContainer';
import QuizScreen from '../../../containers/QuizContainer';
import QuizResultScreen from '../../../containers/QuizResultContainer';

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
  Deck: {
    screen: DeckScreen,
    navigationOptions,
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions,
  },
  Quiz: {
    screen: QuizScreen,
    navigationOptions,
  },
  QuizResult: {
    screen: QuizResultScreen,
    navigationOptions,
  },
});

export default createAppContainer(Navigator);
