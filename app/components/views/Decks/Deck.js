import React from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';

function Deck({ deck }) {
  return (
    <TouchableHighlight>
      <Card>
        <Heading>{deck.title}</Heading>
        <Text>cards: {deck.cards}</Text>
      </Card>
    </TouchableHighlight>
  );
}

Deck.propTypes = {
  deck: PropTypes.object.isRequired,
};

export default Deck;
