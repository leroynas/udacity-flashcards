import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import generateId from 'uuid/v4';

import Container from '../../ui/Container';
import Header from '../../ui/Header';
import IconButton from '../../ui/IconButton';
import Card from '../../ui/Card';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

function AddDeck({ addDeck, navigation }) {
  const [title, setTitle] = useState('');

  const handleAddDeck = () =>
    title &&
    addDeck({
      id: generateId(),
      title,
      questions: [],
    });

  return (
    <Container as={KeyboardAvoidingView} behavior="padding">
      <Header>
        <IconButton
          onPress={() => navigation.goBack()}
          icon="ios-arrow-round-back"
          color="dark"
        />
      </Header>

      <Card>
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

      <Button title="Save deck" onPress={handleAddDeck} />
    </Container>
  );
}

AddDeck.propTypes = {
  addDeck: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default AddDeck;
