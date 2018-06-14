import React, { Component } from 'react';
import isNil from 'lodash/fp/isNil';

import { 
  getDatabaseList, 
  genDatabaseInterface, 
  getTableList,
  getAllRecords,
  getTableInfo,
  getRecord
} from './access';
import {
  fuzzyQuery, advancedQuery
} from './query';
import { 
  updateRecord,
  deleteRecord
} from './interface';

const { Provider, Consumer } = React.createContext({});

class DatabaseProvider extends Component {
  state = {
    databaseList: [],
    currentDatabase: null,
    currentRecord: null,
    tables: [],
    tableInfo: {
      schema: []
    },
    records: [],
    pagination: {
      limit: 10,
      count: 0,
      currentPage: 1
    },
    search: {
      fuzzyQuery: ''
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
      pagination: {limit, currentPage}
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

  setCurrentRecord = (dbName, table, id) => {
    return this.setCurrentDatabase(dbName)
      .then(() => getTableInfo(this.state.currentDatabase, table))
      .then(info => this.setState({tableInfo: info}))
      .then(() => getRecord(this.state.currentDatabase, table, id))
      .then(record => {
        this.setState({currentRecord: record})
        return record;
      })
  }

  updateRecord = (newRecord) => {
    const { tableInfo, currentDatabase } = this.state;

    return updateRecord(currentDatabase, tableInfo.name, newRecord);
  }

  deleteRecord = () => {
    const { tableInfo, currentRecord, currentDatabase } = this.state;

    return deleteRecord(currentDatabase, tableInfo.name, currentRecord[tableInfo.primaryKey])
  }

  handleFuzzySearch = (table, q) => {
    const query = isNil(q) ? this.state.search.fuzzyQuery : q;
    const { currentDatabase } = this.state;
    fuzzyQuery(currentDatabase, table, query, this.state.pagination.currentPage, this.state.pagination.limit)
      .then(res => this.setState(prevState => ({
        search: {
          ...prevState.search,
          fuzzyQuery: query
        },
        records: res.documents,
        pagination: {
          ...prevState.pagination,
          count: res.count
        }
      })))
  }

  handleAdvancedSearch = (queryArray) => {
    const { currentDatabase, pagination: {currentPage, limit}, tableInfo: { name } } = this.state;

    advancedQuery(currentDatabase, name, queryArray, currentPage, limit)
      .then(res => this.setState(prevState => {
        return {
          search: {
            ...prevState.search,
            queryArray
          },
          records: res.documents,
          pagination: {
            ...prevState.pagination,
            count: res.count
          }
        }
      }))
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

  resetAdvanced = () => {
    this.setRecordList(this.state.currentDatabase.name, this.state.tableInfo.name)
    this.setState(prevState => ({
      search: {
        ...prevState.search,
        queryArray: []
      }
    }));
  }

  resetRecordList = () => {
    this.setState({
      records: []
    })
  }



  render() {
 
    return (
      <Provider
        value={{
          ...this.state,
          setDatabaseList: this.setDatabaseList,
          setCurrentDatabase: this.setCurrentDatabase,
          setRecordList: this.setRecordList,
          setCurrentRecord: this.setCurrentRecord,
          changePage: this.changePage,
          setLimit: this.setLimit,
          handleFuzzySearch: this.handleFuzzySearch,
          handleAdvancedSearch: this.handleAdvancedSearch,
          resetAdvanced: this.resetAdvanced,
          resetRecordList: this.resetRecordList,
          updateRecord: this.updateRecord,
          deleteRecord: this.deleteRecord
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