import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.Text`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.large}px;
  color: ${props => props.theme.palette[props.color].text};
  margin-bottom: ${props => props.theme.spacing[props.spacing]}px;
  text-align: ${props => props.textAlign};
`;

Heading.propTypes = {
  spacing: PropTypes.string,
  textAlign: PropTypes.string,
  color: PropTypes.string,
};

Heading.defaultProps = {
  spacing: 'none',
  textAlign: 'left',
  color: 'light',
};

export default Heading;
