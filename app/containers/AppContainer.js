import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { loadDecks } from '../store/actions/decks';
import { makeSelectDecks } from '../store/selectors/decks';
import App from '../components/App';

function AppContainer(props) {
  const { decks, getDecks } = props;

  useEffect(() => {
    if (decks === null) getDecks();
  }, []);

  return <App {...props} />;
}

AppContainer.propTypes = {
  decks: PropTypes.array,
  getDecks: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  decks: makeSelectDecks,
});

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => dispatch(loadDecks()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(AppContainer);
