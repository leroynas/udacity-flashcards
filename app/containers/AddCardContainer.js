import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { addCard } from '../store/actions';

import AddCard from '../components/views/AddCard';

function AddCardContainer(props) {
  return <AddCard {...props} />;
}

AddCardContainer.propTypes = {
  decks: PropTypes.array,
};

const mapStateToProps = null;

function mapDispatchToProps(dispatch) {
  return {
    addCard: (card, deckId) => dispatch(addCard(card, deckId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AddCardContainer);
