import styled from 'styled-components';

const Container = styled.View`
  background-color: ${props => props.theme.palette.dark.background};
  padding: ${props => props.theme.spacing.large}px;
  flex: 1;
`;

export default Container;
