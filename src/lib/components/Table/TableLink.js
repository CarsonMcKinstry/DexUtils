import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TableLink = styled(Link)`
  color: ${ props => props.theme.env.bodyBlack };
  text-decoration: none;
  background-color: ${ props => props.theme.env.white };
  &:nth-of-type(2n) {
    background-color: ${props => props.theme.utils.hexAlpha(props.theme.primary.light, 0.1)};
  }
`;

export default TableLink