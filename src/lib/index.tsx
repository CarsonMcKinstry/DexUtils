import * as React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import { Header } from './header/Header.styles';
import { Tabs, Tab } from './tabs/Tabs.styles';
import { Frame } from './frame/Frame.styles';
import { MenuBar } from './menuBar/MenuBar.styles';
import { DropDown, DropDownItem } from './dropdown/DropDown';

const DexUtils = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header>
        <Tabs>
          <Tab active={true}>New Tab</Tab>
          <Tab> + </Tab>
        </Tabs>
      </Header>
      <Frame>
        <MenuBar>
          <DropDown>
            <DropDownItem>stuff</DropDownItem>
            <DropDownItem>other stuff</DropDownItem>
            <DropDownItem>more stuff that is really long</DropDownItem>
            <DropDownItem>stuff</DropDownItem>
            <DropDownItem>other stuff</DropDownItem>
            <DropDownItem>more stuff that is really long</DropDownItem>
            <DropDownItem>stuff</DropDownItem>
            <DropDownItem>other stuff</DropDownItem>
            <DropDownItem>more stuff that is really long</DropDownItem>
            <DropDownItem>stuff</DropDownItem>
            <DropDownItem>other stuff</DropDownItem>
            <DropDownItem>more stuff that is really long</DropDownItem>
          </DropDown>
        </MenuBar>
      </Frame>
    </>
  </ThemeProvider>
);

export default DexUtils;
