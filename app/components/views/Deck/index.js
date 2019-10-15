import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../ui/Container';
import Text from '../../ui/Text';
import Flex from '../../ui/Flex';
import Cards from '../../ui/Cards';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

function Deck({ deck, navigation }) {
  return (
    <Container>
      {deck === null ? (
        <Flex fill alignItems="center" justifyContent="center">
          <Text color="dark">{`Deck doesn't exist`}</Text>
        </Flex>
      ) : (
        <Flex fill justifyContent="space-between">
          <Cards cards={deck.cards}>
            <Heading>{deck.title}</Heading>
            <Text>{`${deck.cards} ${deck.cards > 1 ? 'cards' : 'card'}`}</Text>
          </Cards>

          <Flex>
            <Button
              title="Add card"
              spacing="small"
              onPress={() => navigation.navigate('AddDeck')}
            />
            <Button
              title="Start quiz"
              color="success"
              onPress={() => navigation.navigate('AddDeck')}
            />
          </Flex>
        </Flex>
      )}
    </Container>
  );
}

Deck.propTypes = {
  deck: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default Deck;
