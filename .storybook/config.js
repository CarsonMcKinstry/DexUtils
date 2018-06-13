import { configure, setAddon } from '@storybook/react';
import 'material-components-web/dist/material-components-web.min.css';
import centered from '@storybook/addon-centered';

// automatically import all files ending in *.stories.js
const req = require.context('../src/lib', true, /.stories.js$/);

setAddon({
  addCentered(storyName, storyFn) {
    this.add(storyName, (context) => (
      centered.call(context, storyFn)
    ));
  },
});

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
