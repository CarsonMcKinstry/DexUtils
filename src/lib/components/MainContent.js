import styled from 'styled-components';

const MainContent = styled.main`
  padding: 12px;
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