import React, { Component } from 'react';
import _ from 'lodash/fp';
import uuid from 'uuid/v4';
import Empty from './Empty';
import { Page, PageLink, PageTitle, ActionBar, BreadCrumbs } from '../Page';
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

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.match.isExact !== this.props.match.isExact) {
  //     this.setDatabaseInterface();
  //   }
  // }

  componentWillMount() {
    const { match, setCurrentDatabase } = this.props;

    setCurrentDatabase(match.params.dbName);
  }

  renderTableCards = () => {
    const { tables, match } = this.props;

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
                <CardInfoKey># of Documents:</CardInfoKey>
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
        <ActionBar/>
        {
          _.isEmpty(this.props.tables)
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