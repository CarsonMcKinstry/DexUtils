import * as React from 'react';
import styled, { css } from '../styled-components';

export interface ContextMenuProps extends React.SFC {
  open?: boolean;
}

export interface ContextMenuHandleProps extends React.SFC {
  open?: boolean;
}

export const ContextMenu = styled.div<ContextMenuProps>`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  ${props =>
    props.open
      ? css`
          width: auto;
          border-left: 6px solid ${props => props.theme.green};
          padding: 12px;
        `
      : css`
          width: 0;
          padding: 0;
        `}
  background-color: white;
  z-index: 1000;
  box-sizing: border-box;
`;

export const ContextMenuHandle = styled.div<ContextMenuHandleProps>`
  cursor: pointer;
  width: 35px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 12px;
  position: absolute;
  top: 35%;
  left: -36px;
  writing-mode: vertical-lr;
  transform: rotate(-180deg);
  text-align: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  ${props =>
    props.open
      ? css`
          background-color: ${props => props.theme.green};
        `
      : css`
          background-color: ${props => props.theme.contextHandle};
        `}
`;
