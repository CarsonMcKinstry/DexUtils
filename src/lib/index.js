import React from 'react';
import Theme, { globalStyles } from './styles/Theme';
import Typography from './styles/Typography';
import MainContent from './components/MainContent';
import UtilsSidebar from './components/UtilsSidebar';
import DatabaseProvider from './db/Provider';
import DatabaseList from './components/Database/DatabaseList';
import { databaseConsumer } from './db/Provider';
import { Route, Switch } from 'react-router';
import 'material-components-web/dist/material-components-web.min.css';

globalStyles();

export default (props) => {
  return(
    <Theme>
      <Typography>
        <DatabaseProvider>
          <UtilsSidebar basePath={ props.match.path }/>
          <MainContent>
            <Switch>
              <Route exact path={ props.match.path } render={ databaseConsumer(DatabaseList) }/>}/>
            </Switch>
          </MainContent>
        </DatabaseProvider>
      </Typography>
    </Theme>
  )
}