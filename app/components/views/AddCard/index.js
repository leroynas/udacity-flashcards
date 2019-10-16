import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import FlipCard from 'react-native-flip-card';
import PropTypes from 'prop-types';
import generateId from 'uuid/v4';

import Container from '../../ui/Container';
import Header from '../../ui/Header';
import IconButton from '../../ui/IconButton';
import Flex from '../../ui/Flex';
import TextButton from '../../ui/TextButton';
import Button from '../../ui/Button';

import Side from './Side';

function AddCard({ addCard, navigation }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);

  const deckId = navigation.getParam('id', null);

  const handleAddCard = () =>
    question &&
    answer &&
    deckId &&
    addCard(
      {
        id: generateId(),
        question,
        answer,
      },
      deckId,
    );

  const ButtonComponent = () => (
    <TextButton
      title="flip"
      color="light"
      onPress={() => setIsFlipped(!isFlipped)}
    />
  );

  return (
    <Container as={KeyboardAvoidingView} behavior="padding">
      <Header>
        <IconButton
          icon="arrowleft"
          onPress={() => navigation.navigate('Deck', { id: deckId })}
        />
      </Header>

      <Flex fill justifyContent="space-between">
        <Flex fill>
          <FlipCard
            flip={isFlipped}
            perspective={1000}
            flipHorizontal
            flipVertical={false}
            clickable={false}
          >
            <Side
              title="Question"
              value={question}
              setValue={setQuestion}
              ButtonComponent={ButtonComponent}
            />
            <Side
              title="Answer"
              value={answer}
              setValue={setAnswer}
              ButtonComponent={ButtonComponent}
            />
          </FlipCard>
        </Flex>

        <Button title="Save deck" spacing="large" onPress={handleAddCard} />
      </Flex>
    </Container>
  );
}

AddCard.propTypes = {
  addCard: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default AddCard;
