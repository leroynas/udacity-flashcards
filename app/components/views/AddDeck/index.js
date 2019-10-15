import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../ui/Container';

function AddDeck({ addDeck }) {
  return <Container></Container>;
}

AddDeck.propTypes = {
  addDeck: PropTypes.func.isRequired,
};

export default AddDeck;
