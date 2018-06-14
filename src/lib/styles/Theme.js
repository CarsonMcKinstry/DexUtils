import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import colors from './colors';
import * as utils from './utils';
import screenSizes from './screenSizes';

export const globalStyles = () => injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
  }
  body {
    background-color: ${colors.env.bgWhite};
  }
`

const theme = {
  ...colors,
  screenSizes,
  utils
}

const Theme = (props) => {

  return (
    <ThemeProvider theme={theme}>
      { props.children }
    </ThemeProvider>
  );

};

Theme.propTypes = {
};

export default Theme;