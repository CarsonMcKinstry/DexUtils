import styled from '../styled-components';
import ThemeInterface from '../theme';

interface TabProps {
  active?: boolean;
  theme: ThemeInterface;
}

function isActive(props: TabProps) {
  const {
    theme: { frame, tabInactive },
    active,
  } = props;
  return active ? frame : tabInactive;
}

export const Tabs = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
`;

export const TabIcon = styled.img`
  height: 18px;
  width: 18px;
`;

export const Tab = styled('li')<TabProps>`
  background-color: ${isActive};
  height: 44px;
  padding: 12px;
  box-sizing: border-box;
  border-top-right-radius: ${props => props.theme.borderRadius}px;
  border-top-left-radius: ${props => props.theme.borderRadius}px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  span + ${TabIcon} {
    margin-left: 12px;
  }
`;
