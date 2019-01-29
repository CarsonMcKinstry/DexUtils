import * as React from 'react';
import GlobalStyle from './GlobalStyle';
import { ThemeProvider } from './styled-components';
import { theme } from './theme';
import { Header } from './header/Header.styles';
import { Tabs, Tab, TabIcon } from './tabs/Tabs.styles';
import { Frame } from './frame/Frame.styles';
import { MenuBar } from './menuBar/MenuBar.styles';
import { DropDown, DropDownItem } from './dropdown/DropDown';
import { Search } from './search/Search.styles';
import clearIcon from './icons/clear.svg';
import addIcon from './icons/add.svg';

const DexUtils = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header>
        <Tabs>
          <Tab active={true}>
            <span>New Tab </span>
            <TabIcon src={clearIcon} />
          </Tab>
          <Tab>
            <TabIcon src={addIcon} />
          </Tab>
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
          <DropDown disabled={true}>
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
          <Search />
        </MenuBar>
      </Frame>
    </>
  </ThemeProvider>
);

export default DexUtils;
