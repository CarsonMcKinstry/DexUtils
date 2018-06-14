import React, { Component } from 'react';

import { 
  getDatabaseList, 
  genDatabaseInterface, 
  getTableList,
  getAllRecords,
  getTableInfo
} from './access';

const { Provider, Consumer } = React.createContext({});

class DatabaseProvider extends Component {
  state = {
    databaseList: [],
    currentDatabase: null,
    tables: [],
    tableInfo: {},
    records: [],
    pagination: {
      limit: 10,
      count: 0,
      currentPage: 1
    },
    search: {
      query: ''
    }
  }

  componentWillMount() {
    getDatabaseList()
      .then(databaseList => this.setState({databaseList}))
  }

  setDatabaseList = () => {
    return getDatabaseList()
      .then(databaseList => this.setState({databaseList}));
  }

  setCurrentDatabase = (dbName) => {
    return genDatabaseInterface(dbName)
      .then(database => this.setState({currentDatabase: database}))
      .then(this.setTableList)
  }

  setTableList = () => {
    const { currentDatabase } = this.state;

    return getTableList(currentDatabase)
      .then(tables => this.setState({tables}))
  }

  setRecordList = (dbName, table) => {
    const { 
      pagination: {limit, count, currentPage}
    } = this.state;

    this.setCurrentDatabase(dbName)
      .then(() => getTableInfo(this.state.currentDatabase, table))
      .then(info => this.setState({tableInfo: info}))
      .then(() => getAllRecords(this.state.currentDatabase, table, currentPage, limit))
      .then(res => this.setState(prevState => ({
        records: res.documents,
        pagination: {
          ...prevState.pagination,
          count: res.count
        }
      })))
  }

  changePage = (offset) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        currentPage: this.state.pagination.currentPage + offset
      }
    });
  }

  setLimit = (e) => {
    this.setState({
      pagination: {
        ...this.state.pagination,
        limit: e.target.value
      }
    });
  }

  render() {
 
    return (
      <Provider
        value={{
          ...this.state,
          setDatabaseList: this.setDatabaseList,
          setCurrentDatabase: this.setCurrentDatabase,
          setRecordList: this.setRecordList,
          changePage: this.changePage,
          setLimit: this.setLimit
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