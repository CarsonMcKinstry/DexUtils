import { useState, useEffect } from 'react';
import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

export const useJsonEditor = (
  ref: React.MutableRefObject<any>,
  initialJson = {}
): any => {
  const [json, setJson] = useState(initialJson);

  useEffect(() => {
    if (ref.current) {
      const editor = new JSONEditor(ref.current, {
        mode: 'code',
        onChangeText(rawJsonString: string) {
          try {
            setJson(JSON.parse(rawJsonString));
          } catch (err) {}
        },
      });

      editor.set(json);
    }
  }, [ref]);
  return json;
};
