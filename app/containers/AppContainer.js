import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import reset from '../core/reset';
import { loadFonts } from '../core/fonts';

import { loadDecks } from '../store/actions';
import { makeSelectDecks } from '../store/selectors';
import App from '../components/views/App';

function AppContainer(props) {
  const { decks, getDecks } = props;

  const [dependenciesLoaded, setDependenciesLoaded] = useState(false);

  useEffect(() => {
    if (decks === null) getDecks();
  }, []);

  useEffect(() => {
    async function load() {
      await loadFonts();
      await reset();
      setDependenciesLoaded(true);
    }

    load();
  }, []);

  return dependenciesLoaded && <App />;
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
