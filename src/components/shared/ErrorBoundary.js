/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PATTERN: Destructuring Arguments, Conditional Rendering
export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      textError: null,
    };
  }

  componentDidCatch(error, info) {
    console.log('error', error);
    console.log('info', info);
    this.setState({ hasError: true, textError: error.toString() });
  }

  render() {
    const { hasError, textError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <p>Error!!!</p>
          <p>{textError}</p>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
};
