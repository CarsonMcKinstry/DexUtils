import React from 'react';
import styled from 'styled-components';
import DebouncedInput from 'react-debounce-input';
import { Icon } from 'rmwc/Icon';

const SearchBox = styled.div`
  display: flex;
  align-items: center;
`

const StyledSearch = styled(DebouncedInput)`
  font-size: 1em;
  padding: 7px 8px;
  @media screen and (max-width: ${ props => props.theme.screenSizes.medium }) {
    width: 80px;
  }
`
const StyledIcon = styled(Icon)`
  margin: 0;
  padding: 6px;
  box-sizing: border-box;
  background-color: ${ props => props.theme.secondary.dark };
  color: ${ props => props.theme.env.white };
  cursor: pointer;
`

const FuzzySearch = props => {
  return (
    <SearchBox>
      <StyledSearch {...props} placeholder="Search..."/>
      <span onClick={ () => props.onChange() }>
        <StyledIcon strategy="ligature" use="search" />
      </span>
    </SearchBox>
  )
}

FuzzySearch.propTypes = {}

export default FuzzySearch;