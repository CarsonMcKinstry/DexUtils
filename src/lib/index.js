import React from 'react';
import Theme, { globalStyles } from './styles/Theme';
import Typography from './styles/Typography';
import MainContent from './components/MainContent';
import UtilsSidebar from './components/UtilsSidebar';
import DatabaseProvider from './db/Provider';
import DatabaseList from './components/DatabaseView/DatabaseList';
import DatabaseTables from './components/DatabaseView/DatabaseTables';
import RecordList from './components/DatabaseView/RecordList';
import Record from './components/DatabaseView/Record';
import { databaseConsumer } from './db/Provider';
import { Route, Switch } from 'react-router';

globalStyles();

export default (props) => {
  return(
    <Theme>
      <Typography>
        <DatabaseProvider>
          <UtilsSidebar basePath={ props.match.path }/>
          <MainContent>
            <Switch>
              <Route exact path={ props.match.path } render={ databaseConsumer(DatabaseList) }/>
              <Route exact path={`${props.match.path}/:dbName`} render={ databaseConsumer(DatabaseTables) }/>
              <Route exact path={`${props.match.path}/:dbName/:table`} render={ databaseConsumer(RecordList) }/>
              <Route exact path={`${props.match.path}/:dbName/:table/:id`} render={ databaseConsumer(Record) }/>
            </Switch>
          </MainContent>
        </DatabaseProvider>
      </Typography>
    </Theme>
  )
}