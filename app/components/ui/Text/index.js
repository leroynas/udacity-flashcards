import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.Text`
  font-family: ${props => props.theme.font.family[props.fontFamily]};
  color: ${props => props.theme.palette[props.color].text};
  font-size: ${props => props.theme.font.size[props.size]};
`;

Text.propTypes = {
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

Text.defaultProps = {
  fontFamily: 'primary',
  color: 'light',
  size: 'small',
};

export default Text;
