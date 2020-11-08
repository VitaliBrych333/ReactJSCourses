import React from 'react';
import { Button } from 'react-bootstrap';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import NotFound from './IncorrectPath';

export default {
  title: 'Example/NotFound',
  component: NotFound,
  decorators: [withKnobs],
};

export const TemplModalWindow = (args) => <NotFound {...args} />;

const label = 'Color';
const options = ['primary', 'secondary', 'success', 'warning'];
const defaultValue = 'primary';

export const TemplButton = () => (
  <Button
    variant={select(label, options, defaultValue)}
    onClick={action('Clicked')}
  >
    {text('Label', 'Go back to home')}
  </Button>
);
