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
import { Editor } from './editor/Editor';
import { Table } from './table/Table';
import clearIcon from './icons/clear.svg';
import addIcon from './icons/add.svg';
import {
  ContextMenu,
  ContextMenuHandle,
} from './contextMenu/ContextMenu.styles';

const handleSave = (js: any) => {
  console.log(js);
};

const DexUtils = () => {
  const [contextOpen, setContextOpen] = React.useState(false);

  return (
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
          <Table />
          <Editor json={{}} onChange={handleSave} />
        </Frame>
        <ContextMenu
          open={contextOpen}
          onClick={() => setContextOpen(!contextOpen)}
        >
          <ContextMenuHandle open={contextOpen}>Hello</ContextMenuHandle>
        </ContextMenu>
      </>
    </ThemeProvider>
  );
};

export default DexUtils;
