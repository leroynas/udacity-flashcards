import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { makeSelectDeck } from '../store/selectors';
import QuizResult from '../components/views/QuizResult';

function QuizResultContainer(props) {
  return <QuizResult {...props} />;
}

QuizResultContainer.propTypes = {
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

export default compose(withConnect)(QuizResultContainer);
