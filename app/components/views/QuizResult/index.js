import React from 'react';
import PropTypes from 'prop-types';

import {
  clearLocalNotification,
  setLocalNotification,
} from '../../../core/notification';
import { replace } from '../../../core/navigator';

import Container from '../../ui/Container';
import Text from '../../ui/Text';
import Flex from '../../ui/Flex';
import Card from '../../ui/Card';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';

function QuizResult({ deck, navigation }) {
  const correct = navigation.getParam('correct', 0);
  const cardCount = deck.cards.length;

  const score = Math.round((correct / cardCount) * 100);

  const sufficient = score > 80;
  const colorCode = sufficient ? 'success' : 'danger';

  clearLocalNotification.then(setLocalNotification);

  return (
    <Container>
      {deck === null ? (
        <Flex fill alignItems="center" justifyContent="center">
          <Text color="dark">{`Deck doesn't exist`}</Text>
        </Flex>
      ) : (
        <Flex fill justifyContent="space-between">
          <Card color={colorCode}>
            <Heading spacing="small" color={colorCode}>
              Score
            </Heading>
            <Heading color={colorCode}>{`${score}%`}</Heading>
          </Card>

          <Flex alignItems="center">
            <Heading spacing="small" color="dark" textAlign="center">
              {sufficient
                ? 'You did it!\nGreat job!'
                : 'You failed...\nTry again!'}
            </Heading>
          </Flex>

          <Flex>
            <Button
              title={`${sufficient ? 'Play' : 'Try'} Again`}
              spacing="small"
              color="success"
              onPress={() => replace('Quiz', { id: deck.id })}
            />
            <Button
              title="Back to Deck"
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
