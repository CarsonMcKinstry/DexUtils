import React from 'react';
import styled from 'styled-components';
import { Button as MDButton } from 'rmwc/Button';
import { getColor, hexAlpha } from '../../styles/utils';

const pickProps = Component => ({secondary, inline, ...props}) => <Component {...props}/>;

const buttonBackgroundStyle = ({raised, unelevated, ...props}) => {
  let styles = '';
  const { theme, utils } = props;

  if (raised || unelevated ) {
    styles += `background-color: ${ utils.getColor(props)}!important;`;
  } else {
    styles += `color: ${ utils.getColor(props)}!important;`;
  }
  if (utils.getColor(props) === theme.context.info) {
    styles += `color: ${utils.hexAlpha(theme.env.bodyBlack, 0.86)}!important`;
  }

  return styles;
}

const afterBackground = props => {
  if (!props.raised && !props.unelevated) {
    return `background-color: ${props.utils.getColor(props)}!important`;
  }
}

const borderColor = ({outlined, ...props}) => {
  if (outlined) {
    return `${ props.utils.getColor(props)}!important;`;
  } else {
    return 'transparent';
  }
}

const StyledButton = styled(pickProps(MDButton))`
  &.mdc-button {
    font-weight: bold;
    transition: all 0.2s ease-out;
    ${ buttonBackgroundStyle }
    &:after, &:before {
      ${ afterBackground }
    }
    border-color: ${ borderColor };
  }
  margin-right: ${props => props.inline ? '12px' : 0};
`;

export default StyledButton;
