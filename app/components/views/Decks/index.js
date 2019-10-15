import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Container from '../../ui/Container';
import Button from '../../ui/Button';

import Deck from './Deck';

function Decks({ decks, navigation }) {
  return (
    <Container>
      <FlatList
        data={decks}
        renderItem={({ item }) => <Deck deck={item} />}
        keyExtractor={deck => deck.id}
        ListFooterComponent={() => (
          <Button
            title="Add deck"
            onPress={() => navigation.navigate('AddDeck')}
          />
        )}
      />
    </Container>
  );
}

Decks.propTypes = {
  decks: PropTypes.array,
  navigation: PropTypes.object.isRequired,
};

export default Decks;
