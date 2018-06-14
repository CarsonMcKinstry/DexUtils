import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageLink = styled(Link)`
  color: ${props => props.theme.env.bodyBlack};
  text-decoration: none;
`;

export default PageLink