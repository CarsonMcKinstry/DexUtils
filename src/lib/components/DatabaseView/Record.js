import React, { Component } from 'react';
import _ from 'lodash/fp';
import { withRouter } from 'react-router-dom';
import { Page, PageTitle, ActionBar, ActionBarLeft, ActionBarRight, BackButton, BreadCrumbs } from '../Page';
import IconButton from '../Button/IconButton';
import Button from '../Button/Button';
import Editor from '../JsonEditor/Editor';
import { Snackbar } from 'rmwc/Snackbar';

class Record extends Component {
  
  state = {
    record: null,
    messageOpen: false,
    snackbarMessage: null
  }

  activateSnackbar = (message) => {
    this.setState({
      messageOpen: true,
      snackbarMessage: message
    })
  }

  handleEdit = (e) => {
    this.setState({record: e.updated_src})
  }

  checkForEdits = () => {
    return _.equals(this.props.currentRecord, this.state.record);
  }

  componentWillMount() {
    const { match: {params: { dbName, table, id}}} = this.props;

    this.props.setCurrentRecord(dbName, table, id)
      .then(record => this.setState({record}));
  }

  updateRecord = () => {
    const { match: {params: { dbName, table, id}}} = this.props;

    this.props.updateRecord(this.state.record)
      .then(() => this.props.setCurrentRecord(dbName, table, id))
      .then(record => this.setState({record}))
      .then(() => this.activateSnackbar(`The document has been updated in ${ dbName }/${ table}`))
  }

  discardChanges = () => {
    this.setState({record: this.props.currentRecord});
  }

  deleteRecord = () => {

    const { match } = this.props;

    if (window.confirm('You sure \'bout that?')) {
      this.props.deleteRecord()
        .then(() => this.activateSnackbar(`Document deleted. Redirecting...`))
        .then(() => {
          setTimeout(() => {
            this.props.history.push(match.url.split('/').slice(0, -1).join('/'))
          }, 2000);
        })
    }
  }

  render() {

    const { match } = this.props;

    if (!this.state.record) return null;

    return (
      <Page>
        <PageTitle>Record: { match.params.id }</PageTitle>
        <BreadCrumbs match={match}/>
        <ActionBar>
          <ActionBarLeft>
            <BackButton/>
          </ActionBarLeft>
          <ActionBarRight>
            <IconButton
              use="delete"
              context="danger"
              onClick={ this.deleteRecord }
            />
          </ActionBarRight>
        </ActionBar>
        <Editor
          name={ match.params.id }
          src={ this.state.record }
          theme="solarized"
          displayDataTypes={false}
          displayObjectSize={false}
          onEdit={ this.handleEdit }
          onAdd={ this.handleEdit }
        />
        <ActionBar>
          <ActionBarLeft/>
          <ActionBarRight>
            <Button 
              onClick={ this.discardChanges }
              disabled={ this.checkForEdits() }
              unelevated 
              context="danger"
            >
              Discard Changes
            </Button>
            <Button 
              onClick={ this.updateRecord }
              disabled={ this.checkForEdits() }
              unelevated 
              context="success"
            >
              Save Changes
            </Button>
          </ActionBarRight>
        </ActionBar>
        <Snackbar
          show={ this.state.messageOpen }
          onHide={ () => this.setState({messageOpen: false})}
          message={ this.state.snackbarMessage }
          actionText="Close"
          actionHandler={() => this.setState({messageOpen: false})}
        />
      </Page>
    )
  }
}

export default withRouter(Record);