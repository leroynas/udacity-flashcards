import styled from 'styled-components';

const Touchable = styled.TouchableOpacity`
  background-color: ${props => props.theme.palette.primary.background};
  padding: ${props => props.theme.spacing.medium}px;
  border-radius: ${props => props.theme.shape.borderRadius}px;
  display: flex;
  align-items: center;
`;

export default Touchable;
