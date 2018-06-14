import styled from 'styled-components';

const MainContent = styled.main`
  max-width: ${props => props.theme.screenSizes.extraLarge};
  margin-left: 240px;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.theme.env.bgWhite};
  @media screen and ( max-width: ${props => props.theme.screenSizes.medium} ) {
    margin-left: 0;
    overflow-x: visible;
  }
`;

export default MainContent;