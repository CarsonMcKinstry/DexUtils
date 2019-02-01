import * as React from 'react';
import { EditorContainer } from './Editor.styles';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';
import { throttle } from 'lodash';

const { useRef, useLayoutEffect } = React;

interface EditorProps {
  json: object;
  onChange: (obj: any) => void;
}

export const Editor: React.SFC<EditorProps> = ({ json, onChange }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = throttle((raw: string) => {
    try {
      onChange(JSON.parse(raw));
    } catch (err) {}
  }, 300);

  useLayoutEffect(() => {
    if (ref !== null && ref.current !== null) {
      const editor = new JSONEditor(ref.current, {
        mode: 'code',
        onChangeText: handleChange,
      });

      editor.set(json);
      return () => editor.destroy();
    }
  }, [ref, json]);

  return <EditorContainer ref={ref} />;
};
