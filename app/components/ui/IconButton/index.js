import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import theme from '../../../core/theme';

function IconButton({ onPress, icon, color, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name={icon} size={size} color={theme.palette[color].text} />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

IconButton.defaultProps = {
  color: 'dark',
  size: 24,
};

export default IconButton;
