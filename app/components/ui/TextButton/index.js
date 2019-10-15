import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';

import Touchable from './Touchable';

function TextButton({ title, onPress, ...rest }) {
  return (
    <Touchable onPress={onPress}>
      <Text color="dark" {...rest}>
        {title}
      </Text>
    </Touchable>
  );
}

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default TextButton;
