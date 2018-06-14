import React, { Component } from 'react';

import { 
  getDatabaseList, 
  genDatabaseInterface, 
  getTableList 
} from './access';

const { Provider, Consumer } = React.createContext({});

class DatabaseProvider extends Component {
  state = {
    databaseList: [],
    currentDatabase: null,
    tables: []
  }

  componentDidMount() {
    getDatabaseList()
      .then(databaseList => this.setState({databaseList}))
  }

  setDatabaseList = () => {
    getDatabaseList()
      .then(databaseList => this.setState({databaseList}));
  }

  setCurrentDatabase = (dbName) => {
    genDatabaseInterface(dbName)
      .then(database => this.setState({currentDatabase: database}))
      .then(this.setTableList)
  }

  setTableList = () => {
    const { currentDatabase } = this.state;

    return getTableList(currentDatabase)
      .then(tables => this.setState({tables}))
  }

  render() {
 
    return (
      <Provider
        value={{
          ...this.state,
          setDatabaseList: this.setDatabaseList,
          setCurrentDatabase: this.setCurrentDatabase
        }}
      >
        { this.props.children }
      </Provider>
    )
  }
}

export default DatabaseProvider;

export const databaseConsumer = Component => props => {
  return (
    <Consumer>
      { ctx => <Component {...ctx} {...props}/>}
    </Consumer>
  )
}