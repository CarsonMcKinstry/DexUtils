import styled from 'styled-components';

const PageTitle = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: .125em 0 .5em;
  margin-bottom: .5em;
  border-bottom: 4px solid ${props => props.theme.primary.base};
`
export default PageTitle;