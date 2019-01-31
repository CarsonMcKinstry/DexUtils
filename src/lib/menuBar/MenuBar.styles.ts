import styled from '../styled-components';

export const MenuBar = styled.div`
  padding: 12px 12px 6px;
  box-sizing: border-box;
  display: flex;
  grid-area: menuBar;
  & > * {
    margin-right: 12px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
