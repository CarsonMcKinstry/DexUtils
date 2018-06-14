import React, { Component } from 'react';

import { getDatabaseList } from './access';

const { Provider, Consumer } = React.createContext({});

const actions = {
  getDatabaseList
}

class DatabaseProvider extends Component {
  state = {
    databaseList: []
  }

  componentDidMount() {
    getDatabaseList()
      .then(databaseList => this.setState({databaseList}))
  }

  setDatabaseList() {
    getDatabaseList()
      .then(databaseList => this.setState({databaseList}));
  }

  render() {

    return (
      <Provider
        value={{
          ...this.state,
          setDatabaseList: this.setDatabaseList
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