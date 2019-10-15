import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import theme from '../../../core/theme';

import Touchable from './Touchable';

function IconButton({ onPress, icon, color, size }) {
  return (
    <Touchable onPress={onPress}>
      <Ionicons name={icon} size={size} color={theme.palette[color].text} />
    </Touchable>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

IconButton.defaultProps = {
  color: 'light',
  size: 32,
};

export default IconButton;
