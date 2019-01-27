import styled from 'styled-components';

export const Frame = styled.main`
  background-color: ${props => props.theme.frame};
  height: calc(100vh - 60px);
`;
