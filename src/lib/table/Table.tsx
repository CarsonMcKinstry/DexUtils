import * as React from 'react';
import * as faker from 'faker';
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
        <ColumnHeader>Id</ColumnHeader>
        <ColumnHeader>Title</ColumnHeader>
      </TableHeader>
      {[...Array(100)].map((_, i) => (
        <Row>
          <Cell>{faker.random.uuid()}</Cell>
          <Cell>{faker.company.catchPhrase()}</Cell>
        </Row>
      ))}
    </TableContainer>
  );
};
