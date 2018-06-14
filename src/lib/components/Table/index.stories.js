import React from 'react';
import Theme from '../../styles/Theme';
import Typography from '../../styles/Typography';
import TablePagination from './TablePagination';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

const WithTheme = props => {
  return (
    <Theme>
      <Typography>
        { props.children }
      </Typography>
    </Theme>
  )
}

storiesOf('Table', module)
  .addCentered('pagination', () => {
    return (
      <WithTheme>
        <TablePagination
          currentPage={ 3 }
          limit={ 10 }
          count={ 200 }
          changePage={ action } 
        />
      </WithTheme>
    )
  })