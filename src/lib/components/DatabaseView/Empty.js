import React from 'react';
import styled from 'styled-components';
import { Icon } from 'rmwc/Icon';

const EmptyStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${ props => props.theme.env.gray };
  padding-top: 4em;
`

const EmptyIcon = styled(Icon)`
  font-size: 10em;
`

const EmptyText = styled.p`
  font-size: 4em;
`

const Empty = ({missing = 'records'}) => (
  <EmptyStyle>
    <EmptyIcon strategy="ligature" use="help_outline"/>
    <EmptyText>Oops! We couldn't find any {missing}</EmptyText>
  </EmptyStyle>
);

Empty.propTypes = {}

export default Empty;