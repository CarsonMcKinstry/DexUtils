import React, { Component } from 'react';
import _ from 'lodash/fp';
import uuid from 'uuid/v4';
import Empty from './Empty';
import { Page, PageTitle, ActionBar, ActionBarLeft, ActionBarRight, BreadCrumbs, BackButton } from '../Page';

class RecordList extends Component {

  render() {

    const { match } = this.props;

    return (
      <Page>
        <PageTitle>Table: { match.params.table }</PageTitle>
        <BreadCrumbs match={ match }/>
        <ActionBar>
          <ActionBarLeft>
            <BackButton/>
          </ActionBarLeft>
        </ActionBar>
      </Page>
    );
  }

}

RecordList.propTypes = {
};

export default RecordList;