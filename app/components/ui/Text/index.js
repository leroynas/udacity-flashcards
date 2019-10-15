import styled from 'styled-components';
import PropTypes from 'prop-types';

const Text = styled.Text`
  font-family: ${props => props.theme.font.family[props.fontFamily]};
  color: ${props => props.theme.palette[props.color].text};
  font-size: ${props => props.theme.font.size[props.size]};
  margin-bottom: ${props => props.theme.spacing[props.spacing]}px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
`;

Text.propTypes = {
  fontFamily: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  spacing: PropTypes.string,
  uppercase: PropTypes.bool,
};

Text.defaultProps = {
  fontFamily: 'primary',
  color: 'light',
  size: 'small',
  spacing: 'none',
  uppercase: false,
};

export default Text;
