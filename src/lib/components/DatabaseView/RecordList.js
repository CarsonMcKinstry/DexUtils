import React, { Component } from 'react';
import _ from 'lodash/fp';
import uuid from 'uuid/v4';
import Empty from './Empty';
import { Page, PageTitle, ActionBar, ActionBarLeft, ActionBarRight, BreadCrumbs, BackButton } from '../Page';
import { Table, TableHeader, TableLink, TableRow, TableCell, RecordCell, TablePagination} from '../Table';
import FuzzySearch from '../Search/FuzzySearch';

class RecordList extends Component {

  componentWillReceiveProps(nextProps) {
    const { match, setRecordList } = this.props;
    if (nextProps.pagination.currentPage !== this.props.pagination.currentPage) {
      setRecordList(match.params.dbName, match.params.table)
    }
  }

  componentWillMount() {
    const { match, setRecordList } = this.props;
    setRecordList(match.params.dbName, match.params.table)
  }

  renderRecordList = () => {
    const { records, tableInfo, match } = this.props;

    return records.map(record => {
      const rest = _.pickBy((v, k) => !tableInfo.schema.includes(k), record);

      return (
        <TableLink
          to={`${match.url}/${record[tableInfo.primaryKey]}`}
          key={`${match.params.table}-${record[tableInfo.primaryKey]}`}
        >
          <TableRow columns={ tableInfo.schema.length + 1}>
            {
              tableInfo.schema.map(key => {
                return (
                  <TableCell key={uuid()}>
                    { record[key] || null }
                  </TableCell>
                )
              })
            }
            <RecordCell json={rest}/>
          </TableRow>
        </TableLink>
      )
    })
  }

  render() {

    const { match, records, tableInfo } = this.props;

    return (
      <Page>
        <PageTitle>Table: { match.params.table }</PageTitle>
        <BreadCrumbs match={ match }/>
        <ActionBar>
          <ActionBarLeft>
            <BackButton/>
          </ActionBarLeft>
          <ActionBarRight>
            {/* <FuzzySearch
              onChange={ this.props.handleFuzzySearch }
            /> */}
          </ActionBarRight>
        </ActionBar>
        <ActionBar>
            <ActionBarLeft></ActionBarLeft>
            <ActionBarRight>
              <TablePagination
                {...this.props.pagination }
                changePage={ this.props.changePage }
              />
            </ActionBarRight>
        </ActionBar>
        {
          _.isEmpty(records)
            ? <Empty/>
            : (
              <Table>
                <TableHeader headers={[...tableInfo.schema, 'Record']}/>
                { this.renderRecordList() }
              </Table>
            )
        }
      </Page>
    );
  }

}

RecordList.propTypes = {
};

export default RecordList;