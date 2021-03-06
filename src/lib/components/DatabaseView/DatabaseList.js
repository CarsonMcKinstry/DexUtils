import React, { Component } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import uuid from 'uuid/v4';
import { Page, PageTitle, PageLink, ActionBar, BreadCrumbs } from '../Page';
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

import Empty from './Empty';


class DatabaseList extends Component {

  renderDatabaseCards = () => {
    const { databaseList, match } = this.props;
    return databaseList.map(database => (
      <PageLink 
        to={`${match.url}/${database.name}`}
        key={`${database.name}-${uuid()}`}
      >
          <Card>
            <CardPrimaryAction>
              <CardHeader>{ database.name }</CardHeader>
              <CardBody>
                <CardInfo>
                  <CardInfoKey>Version:</CardInfoKey>
                  <CardInfoProp>{ database.version }</CardInfoProp>
                  <CardInfoKey># of Tables:</CardInfoKey>
                  <CardInfoProp>{ database.tables }</CardInfoProp>
                  <CardInfoKey>Total Size:</CardInfoKey>
                  <CardInfoProp>{ database.size }</CardInfoProp>
                </CardInfo>
              </CardBody>
            </CardPrimaryAction>
          </Card>
      </PageLink>
    ))
  }

  render() {


    return (
      <Page>
        <PageTitle>Databases</PageTitle>
        <BreadCrumbs match={this.props.match}/>
        <ActionBar/>
        {
          isEmpty(this.props.databaseList)
            ? <Empty missing="databases"/>
            : (
              <Cards>
                { this.renderDatabaseCards() }
              </Cards>
            )
        }
      </Page>
    )
  }

}

export default DatabaseList;