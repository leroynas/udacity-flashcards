import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import Touchable from './Touchable';

function Button({ title, ...rest }) {
  return (
    <Touchable {...rest}>
      <Text fontFamily="secondary" color="primary" size="medium" center>
        {title}
      </Text>
    </Touchable>
  );
}

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
