import React, { Fragment } from 'react';
import Sign from './shared/Sign';
import Image from './shared/Image';

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Image></Image>
        <Sign></Sign>
      </Fragment>
    )
  }
}

export default Header;
