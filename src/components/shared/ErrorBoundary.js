import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            textError: null
        };
    }

    componentDidCatch(error, info) {
        console.log('error', error);
        console.log('info', info);
        this.setState({ hasError: true, textError: error.toString() });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <p>Error!!!</p>
                    <p>{this.state.textError}</p>
                </div>
            );
        } else {
            return this.props.children;
        }
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
};
