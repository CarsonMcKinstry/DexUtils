import React from 'react';
import { ActionBar, ActionBarLeft, ActionBarRight } from '../Page';
import { TablePagination } from '../Table';

const Paginationbar = (props) => {

  return (
    <ActionBar>
      <ActionBarLeft>
          <select 
            value={props.pagination.limit}
            onChange={ props.setLimit }
          >
            <option value={ 10 }>10</option>
            <option value={ 25 }>25</option>
            <option value={ 50 }>50</option>
          </select>
        </ActionBarLeft>
        <ActionBarRight>
          <TablePagination
            {...props.pagination }
            changePage={ props.changePage }
          />
        </ActionBarRight>
    </ActionBar>
  );

};

Paginationbar.propTypes = {
};

export default Paginationbar;