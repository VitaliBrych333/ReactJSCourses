import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        textError: null
    };

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
