import styled from 'styled-components';
import PropTypes from 'prop-types';

const Touchable = styled.TouchableOpacity`
  background-color: ${props => props.theme.palette[props.color].background};
  padding: ${props => props.theme.spacing.xsmall}px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  margin-bottom: ${props => props.theme.spacing[props.spacing]}px;
  ${props => props.theme.shape.boxShadow};
  display: flex;
  align-items: center;
`;

Touchable.propTypes = {
  spacing: PropTypes.string,
  color: PropTypes.string,
};

Touchable.defaultProps = {
  spacing: 'none',
  color: 'primary',
};

export default Touchable;
