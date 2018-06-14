import styled from 'styled-components';

const MainContent = styled.main`
  max-width: ${props => props.theme.screenSizes.extraLarge};
  margin-left: 240px;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${props => props.theme.env.bgWhite};
  overflow: scroll;
  @media sreen and ( max-width: ${props => props.theme.screenSizes.medium} ) {
    margin-left: 0;
  }
`;

export default MainContent;