import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { makeSelectDeck } from '../store/selectors';
import Deck from '../components/views/Deck';

function DeckContainer(props) {
  return <Deck {...props} />;
}

DeckContainer.propTypes = {
  deck: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  deck: makeSelectDeck,
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DeckContainer);
