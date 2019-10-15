import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { addDeck } from '../store/actions';

import AddDeck from '../components/views/AddDeck';

function AddDeckContainer(props) {
  return <AddDeck {...props} />;
}

AddDeckContainer.propTypes = {
  decks: PropTypes.array,
};

const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return {
    addDeck: deck => dispatch(addDeck(deck)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddDeckContainer);
