import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.TextInput`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size[props.size]};
  color: ${props => props.theme.palette[props.color].text};
  ${props => props.center && `text-align: center;`}
`;

Input.propTypes = {
  fontFamily: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Input.defaultProps = {
  fontFamily: 'primary',
  size: 'small',
  color: 'light',
};

export default Input;
