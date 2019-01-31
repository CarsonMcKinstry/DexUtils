import * as React from 'react';

import { useJsonEditor } from '../hooks/useJsonEditor';
import { EditorContainer } from './Editor.styles';

const { useRef } = React;

interface EditorProps {
  json: object;
}

export const Editor: React.SFC<EditorProps> = ({ json }) => {
  const ref = useRef(null);

  useJsonEditor(ref, json);

  return <EditorContainer ref={ref} />;
};
