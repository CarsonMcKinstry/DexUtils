import React from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';

const TableHeaderStyle = styled.div`
  border-bottom: 4px solid ${props => props.theme.primary.light};
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-column-gap: 12px;
  padding: 24px 12px 12px;
  h2 {
    margin: 0;
    padding: 0;
    min-width: 120px;
  }
`

const TableHeader = ({headers}) => {

  return (
    <TableHeaderStyle columns={headers.length}>
      {headers.map(header => <h2 key={uuid()}>{header}</h2>)}
    </TableHeaderStyle>
  );

};

TableHeader.propTypes = {
};

export default TableHeader;