import * as React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import { Header } from './header/Header.styles';
import { Tabs, Tab } from './tabs/Tabs.styles';
import { Frame } from './frame/Frame.styles';

const DexUtils = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header>
        <Tabs>
          <Tab>New Tab</Tab>
          <Tab> + </Tab>
        </Tabs>
      </Header>
      <Frame />
    </>
  </ThemeProvider>
);

export default DexUtils;
