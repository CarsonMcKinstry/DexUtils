import * as React from 'react';
import {
  TableContainer,
  TableHeader,
  ColumnHeader,
  Row,
  Cell,
} from './Table.styles';

export const Table = () => {
  return (
    <TableContainer>
      <TableHeader>
        <ColumnHeader>Header 1</ColumnHeader>
        <ColumnHeader>Header 2</ColumnHeader>
        <ColumnHeader>Header 3</ColumnHeader>
      </TableHeader>
      {[...Array(100)].map((_, i) => (
        <Row>
          {[...Array(3)].map((__, j) => (
            <Cell>
              [{i},{j}] Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Earum laboriosam eos aliquid laborum ratione neque? Non a
              similique perspiciatis debitis eius, alias tempora dignissimos,
              voluptatibus corrupti minima dicta, ratione soluta!
            </Cell>
          ))}
        </Row>
      ))}
    </TableContainer>
  );
};
