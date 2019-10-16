import styled from 'styled-components';
import PropTypes from 'prop-types';

const AbsoluteWrapper = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  ${props => !props.noBottom && 'bottom: -4px'};
  left: 0;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent};
`;

AbsoluteWrapper.propTypes = {
  justifyContent: PropTypes.string,
  noBottom: PropTypes.bool,
};

AbsoluteWrapper.defaultProps = {
  justifyContent: 'flex-end',
  noBottom: false,
};

export default AbsoluteWrapper;
