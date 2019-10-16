import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FlipCard from 'react-native-flip-card';

import Container from '../../ui/Container';
import Text from '../../ui/Text';
import Flex from '../../ui/Flex';
import Cards from '../../ui/Cards';
import TextButton from '../../ui/TextButton';
import Button from '../../ui/Button';

import ZIndex from './ZIndex';
import Side from './Side';

function Quiz({ deck, navigation }) {
  const [current, setCurrent] = useState(1);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const cardCount = deck.cards.length;

  useEffect(() => {
    if (done && current >= cardCount)
      navigation.navigate('QuizResult', { id: deck.id, correct }, 'Quiz');
  }, [done, current]);

  const handleNext = () => {
    if (current < cardCount) setCurrent(current + 1);
    else setDone(true);
  };

  const handlePressCorrect = () => {
    setCorrect(correct + 1);
    handleNext();
  };

  const ButtonComponent = () => (
    <TextButton
      title="flip"
      color="light"
      onPress={() => setIsFlipped(!isFlipped)}
    />
  );

  return (
    <Container>
      {deck === null ? (
        <Flex fill alignItems="center" justifyContent="center">
          <Text color="dark">{`Deck doesn't exist`}</Text>
        </Flex>
      ) : (
        <Flex fill justifyContent="space-between">
          <Flex alignItems="center" marginTop={-10}>
            <Text color="dark" spacing="xsmall">
              {current}/{cardCount}
            </Text>
          </Flex>
          <Cards cards={cardCount - current}>
            <ZIndex>
              <FlipCard
                flip={isFlipped}
                perspective={500}
                flipHorizontal
                flipVertical={false}
                clickable={false}
              >
                <Side
                  title={deck.cards[0].question}
                  ButtonComponent={ButtonComponent}
                />
                <Side
                  title={deck.cards[0].answer}
                  ButtonComponent={ButtonComponent}
                />
              </FlipCard>
            </ZIndex>
          </Cards>

          <Flex>
            <Button
              title="Correct"
              spacing="small"
              color="success"
              onPress={handlePressCorrect}
            />
            <Button title="Incorrect" color="danger" onPress={handleNext} />
          </Flex>
        </Flex>
      )}
    </Container>
  );
}

Quiz.propTypes = {
  deck: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default Quiz;
