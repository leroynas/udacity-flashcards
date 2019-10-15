import styled from 'styled-components';
import Constants from 'expo-constants';

const TopBar = styled.View`
  background-color: ${props => props.theme.palette.dark.background};
  height: ${Constants.statusBarHeight}px;
  width: 100%;
`;

export default TopBar;
