import React, {Component, Fragment} from 'react';
import IconButton from '../Form/IconButton';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
`

const ButtonOffset = styled.div`
  width: 96px;
`

class Pagination extends Component {

  getNPages = () => {
    const { limit, count } = this.props;

    return Math.ceil(count / limit);
  }

  firstPageOffset = () => {
    const { currentPage } = this.props;

    return -(currentPage - 1);
  }

  lastPageOffset = () => {
    const { currentPage } = this.props;
    const nPages = this.getNPages();

    return nPages - currentPage;
  }

  render(){
    return(
      <PaginationContainer >
        { this.props.currentPage > 1 ?
          <Fragment>
            <IconButton
              secondary
              use="first_page"
              onClick={ () => this.props.changePage(this.firstPageOffset()) }
            />
            <IconButton
              secondary
              use="navigate_before"
              onClick={ () => this.props.changePage(-1) }
            />
          </Fragment>
          : <ButtonOffset/>
        }
        Page { this.props.currentPage } of { this.getNPages() }
        { this.props.currentPage < this.getNPages() ? 
          <Fragment>
            <IconButton
              secondary
              use="navigate_next"
              onClick={ () => this.props.changePage(1) }
            />
            <IconButton
              secondary
              use="last_page"
              onClick={ () => this.props.changePage(this.lastPageOffset()) }
            />
          </Fragment>
          : <ButtonOffset/>
        }
      </PaginationContainer>
    );
  }
}

Pagination.propTypes = {}

export default Pagination;