import styled from '../styled-components';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownButton = styled.button`
  text-align: left;
  letter-spacing: 0.53px;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 9px 8px 12px;
  background-color: ${props => props.theme.editor};
  color: white;
  border: 0;
  border-radius: ${props => props.theme.borderRadius}px;
  &:hover {
    background-color: ${props => props.theme.dropDownHover};
  }
  transition: background-color 0.1s linear 0s;
  width: 120px;
  &:active,
  &:focus {
    outline: none;
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DropDownItems = styled.ul<{ open?: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  margin: 0;
  padding: 0;
  list-style-type: none;
  top: 100%;
  width: 180px;
  max-height: 240px;
  overflow-y: scroll;
  background-color: ${props => props.theme.editor};
  border-radius: 3px;
  border-top-left-radius: 0;
  box-shadow: ${props => props.theme.shadows[2]};
`;

export const DropDownItem = styled.li`
  box-sizing: border-box;
  padding: 6px 6px 7px;
  background-color: inherit;
  width: inherit;
  &:hover {
    background-color: ${props => props.theme.dropDownHover};
  }
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
