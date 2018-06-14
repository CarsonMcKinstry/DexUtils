import React from 'react';
import styled from 'styled-components';
import {IconToggle} from 'rmwc/IconToggle';
import '@material/icon-toggle/dist/mdc.icon-toggle.min.css';

const IconButtonStyle = styled(({secondary, ...props}) => <IconToggle {...props}/>)`
  &.mdc-icon-toggle {
    display: inline;
    color: ${ props => props.theme.utils.getColor(props) };
    &:after, &:before {
      background-color: ${ props => props.theme.utils.getColor(props) }!important;
    }
  }
`

export default ({use, label, ...props}) => {
  return (
    <IconButtonStyle 
      on={{content: use, label}} 
      off={{content: use, label}} 
      {...props}
    />
  )
};