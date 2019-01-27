import styled from '../styled-components';

export const Tabs = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Tab = styled.li`
  background-color: ${props => props.theme.frame};
  height: 44px;
  padding: 12px;
  box-sizing: border-box;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
