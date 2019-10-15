import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.View`
  background-color: ${props =>
    props.shade
      ? props.theme.palette.grey[props.shade]
      : props.theme.palette.light.background};
  padding: ${props => props.theme.spacing.large}px
    ${props => props.theme.spacing.medium}px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  margin-bottom: ${props => props.theme.spacing.medium}px;
  ${props => props.theme.shape.boxShadow};
  flex: ${props => (props.fill ? 1 : '0 auto')};
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
  width: ${props => props.width}%;
  min-width: ${props => props.width}%;
  ${props => props.fixedAspect && 'aspect-ratio: 0.7'};
  display: flex;
`;

Card.propTypes = {
  fill: PropTypes.bool,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  fixedAspect: PropTypes.bool,
  width: PropTypes.number,
  shade: PropTypes.string,
};

Card.defaultProps = {
  fill: false,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fixedAspect: false,
  width: 100,
  shade: null,
};

export default Card;
