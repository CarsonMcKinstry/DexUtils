import styled from 'styled-components';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-column-gap: 12px;
  padding: 12px 12px 16px 12px;
  border-bottom: 1px solid ${props => props.theme.utils.hexAlpha('#000000', 0.125)};
  background-color: inherit;
`;

export default TableRow