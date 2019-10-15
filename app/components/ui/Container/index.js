import styled from 'styled-components';

const Container = styled.View`
  background-color: ${props => props.theme.palette.dark.background};
  padding: ${props => props.theme.spacing.large}px
    ${props => props.theme.spacing.xlarge}px;
  display: flex;
  flex: 1;
`;

export default Container;
