import React from 'react';
import ReactJson from 'react-json-view';
import styled from 'styled-components';

const EditorContainer = styled.div`
  max-width: ${ props => props.theme.screenSizes.extraLarge };
  .react-json-view {
    border-radius: .5em;
    padding: 20px;
    max-height: 500px;
    overflow: scroll;
  }
`;

export default (props) => (
  <EditorContainer>
    <ReactJson {...props}/>
  </EditorContainer>
)