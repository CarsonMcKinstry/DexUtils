import React, {Component} from 'react';
import styled from 'styled-components';
import { Drawer, DrawerContent, DrawerHeader } from 'rmwc/Drawer';
import { ListItem, ListItemText } from 'rmwc/List';
import { NavLink } from 'react-router-dom';

const StyledDrawer = styled(Drawer)`
  position:fixed;
  top: 0;
  bottom: 0;
  &.mdc-drawer--permanent.mdc-drawer--permanent {
    background-color: ${props => props.theme.primary.base}
  }
  @media sreen and ( max-width: ${props => props.theme.screenSizes.medium}) {
    width: 0!important;
  }
`;

const StyledListItemText = styled(ListItemText)`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: ${props => props.theme.primary.dark};
  }
`

class Sidebar extends Component {

  render() {

    return (
      <StyledDrawer permanent>
        <DrawerHeader/>
        <DrawerContent>
          <StyledNavLink to={this.props.basePath}>
            <ListItem>
              <StyledListItemText>Databases</StyledListItemText>
            </ListItem>
          </StyledNavLink>
        </DrawerContent>
      </StyledDrawer>
    );
  }

}

Sidebar.propTypes = {
};

export default Sidebar;