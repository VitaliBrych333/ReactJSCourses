import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ModalWindow from './ModalWindow';

export default {
  title: 'Example/ModalWindow',
  component: ModalWindow,
  decorators: [withKnobs],
  argTypes: {
    handleClose: { action: 'handleClose' },
  },
};

const Context = () => (
  <>
    <p onClick={action('Edit')} onKeyDown={action('Edit')}>
      Edit
    </p>
    <p onClick={action('Delete')} onKeyDown={action('Delete')}>
      Delete
    </p>
  </>
);

export const TemplModalWindow = (args) => (
  <ModalWindow {...args}>
    {boolean('withContent', true) ? <Context /> : null}
  </ModalWindow>
);
