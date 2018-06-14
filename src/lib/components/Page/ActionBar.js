import styled from 'styled-components';

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  align-items: center;
  max-width: ${ props => props.theme.screenSizes.extraLarge };
  min-height: 36px;
`;

export default ActionBar

export const ActionBarLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  > * {
    margin-right: 12px;
  }
`;

export const ActionBarRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > * {
    margin-left: 12px;
  }
`