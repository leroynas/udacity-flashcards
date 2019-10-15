import styled from 'styled-components';

const Heading = styled.Text`
  font-family: ${props => props.theme.font.family.secondary};
  font-size: ${props => props.theme.font.size.large}px;
  margin-bottom: ${props => props.theme.spacing.small}px;
`;

export default Heading;
