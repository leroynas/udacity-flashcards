import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { loadFonts } from '../core/fonts';

import { loadDecks } from '../store/actions';
import { makeSelectDecks } from '../store/selectors';
import App from '../components/views/App';

function AppContainer(props) {
  const { decks, getDecks } = props;

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (decks === null) getDecks();
  }, []);

  useEffect(() => {
    async function load() {
      await loadFonts();
      setFontsLoaded(true);
    }

    load();
  }, []);

  return fontsLoaded && <App />;
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
