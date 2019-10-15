import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = styled.Text`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.large}px;
  margin-bottom: ${props => props.theme.spacing[props.spacing]}px;
`;

Heading.propTypes = {
  spacing: PropTypes.string,
};

Heading.defaultProps = {
  spacing: 'none',
};

export default Heading;
