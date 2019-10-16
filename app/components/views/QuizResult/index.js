import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';

import Container from '../../ui/Container';
import Text from '../../ui/Text';
import Flex from '../../ui/Flex';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

function QuizResult({ deck, navigation }) {
  const correct = navigation.getParam('correct', 0);
  const cardCount = deck.cards.length;

  const percentage = Math.round((correct / cardCount) * 100);

  return (
    <Container>
      {deck === null ? (
        <Flex fill alignItems="center" justifyContent="center">
          <Text color="dark">{`Deck doesn't exist`}</Text>
        </Flex>
      ) : (
        <Flex fill justifyContent="space-between">
          <Card>
            <Heading>Score</Heading>
            <Heading>{`${percentage}%`}</Heading>
          </Card>

          <Flex>
            <Button
              title="Try again"
              spacing="small"
              color="success"
              onPress={() => navigation.navigate('Quiz', { id: deck.id })}
            />
            <Button
              title="Stop"
              color="danger"
              onPress={() => navigation.navigate('Deck', { id: deck.id })}
            />
          </Flex>
        </Flex>
      )}
    </Container>
  );
}

QuizResult.propTypes = {
  deck: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default QuizResult;
