import React from 'react';
import Button from './Button';
import IconButton from './IconButton';
import Theme from '../../styles/Theme';
import Typography from '../../styles/Typography';

import { storiesOf } from '@storybook/react';

// dense	
// raised	
// unelevated
// outlined

const withTheme = Component => props => {
  return (
    <Theme>
      <Typography>
        <Component {...props}>
          { props.label }
        </Component>
      </Typography>
    </Theme>
  )
}

storiesOf ('Button', module)
  .addCentered('default - plain', () => withTheme(Button)({label: 'Default'}))
  .addCentered('default - dense', () => withTheme(Button)({label: 'Default', dense: true}))
  .addCentered('default - raised', () => withTheme(Button)({label: 'Default', raised: true}))
  .addCentered('default - unelevated', () => withTheme(Button)({label: 'Default', unelevated: true}))
  .addCentered('default - outlined', () => withTheme(Button)({label: 'Default', outlined: true}))
  .addCentered('info - plain', () => withTheme(Button)({label: 'info', context: "info"}))
  .addCentered('info - dense', () => withTheme(Button)({label: 'info', dense: true, context: "info"}))
  .addCentered('info - raised', () => withTheme(Button)({label: 'info', raised: true, context: "info"}))
  .addCentered('info - unelevated', () => withTheme(Button)({label: 'info', unelevated: true, context: "info"}))
  .addCentered('info - outlined', () => withTheme(Button)({label: 'info', outlined: true, context: "info"}))
  .addCentered('danger - plain', () => withTheme(Button)({label: 'danger', context: "danger"}))
  .addCentered('danger - dense', () => withTheme(Button)({label: 'danger', dense: true, context: "danger"}))
  .addCentered('danger - raised', () => withTheme(Button)({label: 'danger', raised: true, context: "danger"}))
  .addCentered('danger - unelevated', () => withTheme(Button)({label: 'danger', unelevated: true, context: "danger"}))
  .addCentered('danger - outlined', () => withTheme(Button)({label: 'danger', outlined: true, context: "danger"}))
  .addCentered('success - plain', () => withTheme(Button)({label: 'success', context: "success"}))
  .addCentered('success - dense', () => withTheme(Button)({label: 'success', dense: true, context: "success"}))
  .addCentered('success - raised', () => withTheme(Button)({label: 'success', raised: true, context: "success"}))
  .addCentered('success - unelevated', () => withTheme(Button)({label: 'success', unelevated: true, context: "success"}))
  .addCentered('success - outlined', () => withTheme(Button)({label: 'success', outlined: true, context: "success"}))
  .addCentered('secondary - plain', () => withTheme(Button)({label: 'secondary', secondary: true}))
  .addCentered('secondary - dense', () => withTheme(Button)({label: 'secondary', dense: true, secondary: true}))
  .addCentered('secondary - raised', () => withTheme(Button)({label: 'secondary', raised: true, secondary: true}))
  .addCentered('secondary - unelevated', () => withTheme(Button)({label: 'secondary', unelevated: true, secondary: true}))
  .addCentered('secondary - outlined', () => withTheme(Button)({label: 'secondary', outlined: true, secondary: true}));

storiesOf('IconButton', module)
  .addCentered('default', () => withTheme(IconButton)({use: 'favorite'}))
  .addCentered('secondary', () => withTheme(IconButton)({use: 'favorite', secondary: true}))
  .addCentered('info', () => withTheme(IconButton)({use: 'favorite', context: 'info'}))
  .addCentered('danger', () => withTheme(IconButton)({use: 'favorite', context: 'danger'}))
  .addCentered('success', () => withTheme(IconButton)({use: 'favorite', context: 'success'}))

