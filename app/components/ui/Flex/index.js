import styled from 'styled-components';
import PropTypes from 'prop-types';

const Flex = styled.View`
  flex-direction: ${props => props.direction};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  margin-top: ${props => props.marginTop}px;
  display: flex;
  flex: ${props => (props.fill ? 1 : '0 auto')};
`;

Flex.propTypes = {
  fill: PropTypes.bool,
  direction: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  marginTop: PropTypes.number,
};

Flex.defaultProps = {
  fill: false,
  direction: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  marginTop: 0,
};

export default Flex;
