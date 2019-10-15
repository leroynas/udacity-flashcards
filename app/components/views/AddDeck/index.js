import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import generateId from 'uuid/v4';

import Container from '../../ui/Container';
import Flex from '../../ui/Flex';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

function AddDeck({ addDeck }) {
  const [title, setTitle] = useState('');

  const handleAddDeck = () =>
    title &&
    addDeck({
      id: generateId(),
      title,
      cards: {},
      createdAt: new Date().getTime(),
    });

  return (
    <Container as={KeyboardAvoidingView} behavior="padding">
      <Flex fill justifyContent="space-between">
        <Card fixedAspect justifyContent="center">
          <Input
            center
            multiline
            fontFamily="secondary"
            size="large"
            placeholder="Deck title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
        </Card>

        <Button title="Save deck" spacing="large" onPress={handleAddDeck} />
      </Flex>
    </Container>
  );
}

AddDeck.propTypes = {
  addDeck: PropTypes.func.isRequired,
};

export default AddDeck;
