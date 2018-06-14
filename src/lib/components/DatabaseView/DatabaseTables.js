import React, { Component } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import uuid from 'uuid/v4';
import Empty from './Empty';
import { Page, PageLink, PageTitle, ActionBar, ActionBarLeft, BreadCrumbs, BackButton } from '../Page';
import { 
  Card, 
  CardInfo,
  CardInfoKey,
  CardInfoProp,
  CardPrimaryAction, 
  CardHeader, 
  CardBody, 
  Cards 
} from '../Cards';

class DatabaseTables extends Component {

  state = {
    loading: true
  }

  componentWillMount() {
    const { match, setCurrentDatabase } = this.props;

    setCurrentDatabase(match.params.dbName)
      .then(() => this.setState({loading: false}));
  }

  renderTableCards = () => {
    const { tables, match } = this.props;

    if(this.state.loading) return null;

    return tables.map(table => (
      <PageLink
        to={ `${match.url}/${table.name}` }
        key={ `${table.name}-${uuid()}` }
      >
        <Card>
          <CardPrimaryAction>
            <CardHeader>{ table.name }</CardHeader>
            <CardBody>
              <CardInfo>
                <CardInfoKey># of Records:</CardInfoKey>
                <CardInfoProp>{ table.count }</CardInfoProp>
                <CardInfoKey>Total Size:</CardInfoKey>
                <CardInfoProp>{ table.size }</CardInfoProp>
                <CardInfoKey>Schema:</CardInfoKey>
              </CardInfo>
              <p>{ table.schema }</p>
            </CardBody>
          </CardPrimaryAction>
        </Card>
      </PageLink>
    ));
  }

  render() {

    const { match } = this.props;
    
    return (
      <Page>
        <PageTitle>Database: { match.params.dbName }</PageTitle>
        <BreadCrumbs match={ match }/>
        <ActionBar>
          <ActionBarLeft>
            <BackButton/>
          </ActionBarLeft>
        </ActionBar>
        {
          isEmpty(this.props.tables)
            ? <Empty missing="tables"/>
            : (
              <Cards>
                { this.renderTableCards() }
              </Cards>
            )
        }
      </Page>
    )
  }
}

export default DatabaseTables;