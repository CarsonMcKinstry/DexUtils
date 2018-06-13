import React from 'react';
import { ThemeProvider } from 'styled-components';
import colors from './colors';
import * as screenSizes from './screenSizes';

const theme = {
  ...colors,
  screenSizes
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