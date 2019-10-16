import React from 'react';
import PropTypes from 'prop-types';

import { replace } from '../../../core/navigator';

import Container from '../../ui/Container';
import Text from '../../ui/Text';
import Flex from '../../ui/Flex';
import Cards from '../../ui/Cards';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

function Deck({ deck, navigation }) {
  const cardCount = deck.cards.length;

  return (
    <Container>
      {deck === null ? (
        <Flex fill alignItems="center" justifyContent="center">
          <Text color="dark">{`Deck doesn't exist`}</Text>
        </Flex>
      ) : (
        <Flex fill justifyContent="space-between">
          <Cards cards={cardCount}>
            <Card fixedAspect justifyContent="center">
              <Heading>{deck.title}</Heading>
              <Text>{`${cardCount} ${cardCount > 1 ? 'cards' : 'card'}`}</Text>
            </Card>
          </Cards>

          <Flex>
            <Button
              title="Add card"
              spacing="small"
              onPress={() => navigation.navigate('AddCard', { id: deck.id })}
            />
            <Button
              title="Start quiz"
              color="success"
              onPress={() => replace('Quiz', { id: deck.id })}
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
