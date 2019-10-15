import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';

function Deck({ deck, navigation }) {
  const cardCount = deck.cards.length;

  const handleOnClick = () => navigation.navigate('Deck', { id: deck.id });

  return (
    <TouchableOpacity onPress={handleOnClick}>
      <Card>
        <Heading spacing="small">{deck.title}</Heading>
        <Text>{`${cardCount} ${cardCount > 1 ? 'cards' : 'card'}`}</Text>
      </Card>
    </TouchableOpacity>
  );
}

Deck.propTypes = {
  deck: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Deck;
