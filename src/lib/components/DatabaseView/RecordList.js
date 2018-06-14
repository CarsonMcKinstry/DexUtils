import React, { Component } from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import trim from 'lodash/fp/trim';
import pickBy from 'lodash/fp/pickBy';
import uuid from 'uuid/v4';
import Empty from './Empty';
import { Page, PageTitle, ActionBar, ActionBarLeft, ActionBarRight, BreadCrumbs, BackButton } from '../Page';
import { Table, TableHeader, TableLink, TableRow, TableCell, RecordCell } from '../Table';
import Button from '../Button/Button';
import PaginationBar from './PaginationBar';
import FuzzySearch from '../Search/FuzzySearch';
import AdvancedSearch from '../Search/AdvancedSearch';

class RecordList extends Component {

  state = {
    advancedOpen: false
  }

  componentWillUnmount() {
    this.props.resetRecordList();
  }

  componentWillReceiveProps(nextProps) {
    const { match, setRecordList } = this.props;
    if (
        (nextProps.pagination.currentPage !== this.props.pagination.currentPage)
        || (nextProps.pagination.limit !== this.props.pagination.limit)
      ) {
        if (!isEmpty(this.props.search.queryArray)) {
          this.props.handleAdvancedSearch(this.props.search.queryArray);
        } else if ( !isEmpty(trim(this.props.search.fuzzyQuery))) {
          this.props.handleFuzzySearch(match.params.table, null);
        } else {
          setRecordList(match.params.dbName, match.params.table)
        }
    }
  }

  componentWillMount() {
    const { match, setRecordList } = this.props;
    setRecordList(match.params.dbName, match.params.table)
  }

  renderRecordList = () => {
    const { records, tableInfo, match } = this.props;

    return records.map(record => {
      const rest = pickBy((v, k) => !tableInfo.schema.includes(k), record);

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

  toggleAdvancedSearch = () => {
    this.setState(prevState => ({
      advancedOpen: !prevState.advancedOpen
    }));
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
            <FuzzySearch
              onChange={ (e) => this.props.handleFuzzySearch(match.params.table, e.target.value) }
            />
            <Button
              unelevated
              secondary
              onClick={ this.toggleAdvancedSearch }
            >
              Advanced
            </Button>
          </ActionBarRight>
        </ActionBar>
        <AdvancedSearch
          open={ this.state.advancedOpen }
          schema={ tableInfo.schema }
          handleSearch={ this.props.handleAdvancedSearch }
          reset={ this.props.resetAdvanced }
        />
        <PaginationBar {...this.props}/>
        {
          isEmpty(records)
            ? <Empty/>
            : (
              <Table>
                <TableHeader headers={[...tableInfo.schema, 'Record']}/>
                { this.renderRecordList() }
              </Table>
            )
        }
        <PaginationBar {...this.props}/>
      </Page>
    );
  }

}

RecordList.propTypes = {
};

export default RecordList;