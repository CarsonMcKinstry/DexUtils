import styled, { css } from '../styled-components';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownButton = styled.button`
  text-align: left;
  letter-spacing: 0.53px;
  cursor: pointer;
  font-size: 14px;
  padding: 6px 4px 8px 12px;
  background-color: ${props => props.theme.editor};
  color: white;
  border: 0;
  border-radius: ${props => props.theme.borderRadius}px;
  &:hover {
    background-color: ${props => props.theme.dropDownHover};
  }
  transition: background-color 0.1s linear 0s;
  width: 158px;
  &:active,
  &:focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
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

export const DropDownText = styled.span`
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

interface IconProps {
  size: number | null;
}

function getIconSize(props: IconProps) {
  if (!props.size) {
    return css`
      height: initial;
      width: initial;
    `;
  }

  return css`
    height: ${props.size}px;
    width: ${props.size}px;
  `;
}

export const IconWrapper = styled.span`
  height: 24px;
  width: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropDownIcon = styled.img<IconProps>`
  ${getIconSize}
`;
