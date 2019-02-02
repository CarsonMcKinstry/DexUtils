import styled from 'styled-components';

export const Frame = styled.main`
  background-color: ${props => props.theme.frame};
  height: calc(100vh - 60px);
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 6px;
  grid-column-gap: 12px;
  grid-template-areas:
    'menuBar menuBar'
    'records editor';
`;
