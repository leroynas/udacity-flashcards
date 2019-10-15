import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { makeSelectDecks } from '../store/selectors';
import Decks from '../components/views/Decks';

function DecksContainer(props) {
  return <Decks {...props} />;
}

DecksContainer.propTypes = {
  decks: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  decks: makeSelectDecks,
});

function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DecksContainer);
