import styled from '../styled-components';

function getColumnNumber(props: any) {
  return props.children ? props.children.length : 1;
}

export const TableContainer = styled.div.attrs({ role: 'grid' })`
  box-sizing: border-box;
  width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  overflow: scroll;
  position: relative;
`;

export const TableHeader = styled.div.attrs({ role: 'row' })`
  background: ${props => props.theme.frame};
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${getColumnNumber}, 1fr);
  border-bottom: 2px solid ${props => props.theme.tableHeaderColor};
  position: sticky;
  top: 0;
  font-weight: bolder;
  color: ${props => props.theme.tableHeaderColor};
  font-size: 16px;
`;

export const ColumnHeader = styled.div.attrs({ role: 'columnheader' })`
  padding: 12px 6px;
  box-sizing: border-box;
  letter-spacing: 0.015em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover {
    background-color: ${props => props.theme.frameHighlight};
  }
`;

export const Row = styled.div.attrs({ role: 'row' })`
  color: ${props => props.theme.tableBorderColor};
  box-sizing: border-box;
  width: 100%;
  grid-template-columns: repeat(${getColumnNumber}, 1fr);
  border-bottom: 1px solid ${props => props.theme.tableBorderColor};
  padding: 6px;
  display: grid;
  &:last-child {
    border-bottom-width: 0;
  }
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.frameHighlight};
  }
`;

export const Cell = styled.div.attrs({ role: 'gridcell' })`
  padding: 6px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  letter-spacing: 0.015em;
`;
