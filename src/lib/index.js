import React from 'react';
import Theme from './styles/Theme';
import Typography from './styles/Typography';
import MainContent from './components/MainContent';
import UtilsSidebar from './components/UtilsSidebar';

import 'material-components-web/dist/material-components-web.min.css';

export default (props) => {
  return(
    <Theme>
      <Typography>
        <UtilsSidebar basePath={ props.match.path }/>
        <MainContent>
          Hello World
        </MainContent>
      </Typography>
    </Theme>
  )
}