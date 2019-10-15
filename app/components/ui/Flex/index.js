import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.View`
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  display: flex;
  flex: ${props => (props.fill ? 1 : '0 auto')};
`;

Flex.propTypes = {
  fill: PropTypes.bool,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
};

Flex.defaultProps = {
  fill: false,
  direction: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
};

export default Flex;
