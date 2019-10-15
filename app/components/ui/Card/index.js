import styled from 'styled-components';

const Card = styled.View`
  background-color: ${props => props.theme.palette.light.background};
  padding: ${props => props.theme.spacing.large}px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  margin-bottom: ${props => props.theme.spacing.medium}px;
  display: flex;
  align-items: center;
`;

export default Card;
