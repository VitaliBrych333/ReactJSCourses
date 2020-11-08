import 'bootstrap-css-only/css/bootstrap.min.css';
import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Button } from 'react-bootstrap';
import ButtonsFormGroup from './ButtonsFormGroup';

export default {
  title: 'Example/ButtonsFormGroup',
  component: ButtonsFormGroup,
  decorators: [withKnobs],
  argTypes: {
    handleReset: { action: 'handleReset' },
    handleSave: { action: 'handleSave' },
  },
};

const TemplateButtonsFormGroup = (args) => <ButtonsFormGroup {...args} />;

export const TemplButtonsFormGroup = TemplateButtonsFormGroup.bind({});

TemplButtonsFormGroup.args = {
  nameButton: 'Edit',
  disabledSave: true,
};

const label = 'Color';
const options = ['primary', 'secondary', 'success', 'warning'];
const defaultValue = 'primary';

export const TemplButton = () => (
  <Button
    variant={select(label, options, defaultValue)}
    onClick={action('Clicked')}
  >
    {text('Label', 'My button Edit')}
  </Button>
);
