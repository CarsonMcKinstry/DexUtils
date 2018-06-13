import React from 'react';
import styled from 'styled-components';
import { Button as MDButton } from 'rmwc/Button';

const pickProps = Component => ({secondary, inline, ...props}) => <Component {...props}/>;

const buttonBackgroundStyle = ({raised, unelevated, ...props}) => {
  let styles = '';
  const { theme } = props;

  if (raised || unelevated ) {
    styles += `background-color: ${ theme.utils.getColor(props)}!important;`;
  } else {
    styles += `color: ${ theme.utils.getColor(props)}!important;`;
  }
  if (theme.utils.getColor(props) === theme.context.info) {
    styles += `color: ${theme.utils.hexAlpha(theme.env.bodyBlack, 0.86)}!important`;
  }

  return styles;
}

const afterBackground = props => {
  if (!props.raised && !props.unelevated) {
    return `background-color: ${props.theme.utils.getColor(props)}!important`;
  }
}

const borderColor = ({outlined, ...props}) => {
  if (outlined) {
    return `${ props.theme.utils.getColor(props)}!important;`;
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
