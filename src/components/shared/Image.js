import React, { Component } from 'react';
import logo from '../../logo.svg';

const img = React.createElement(
  'img',
  {
    src: logo,
    className: 'App-logo',
    alt: 'logo'
  }
);

class Image extends Component {
  render() {
    return img
  }
}

export default Image;
