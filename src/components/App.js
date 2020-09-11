import React, { Component  } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from './shared/ErrorBoundary';
import IncorrectPath from './IncorrectPath';
import StartPage from './StartPage';
import DetailsPage from './DetailsPage';
import {
    BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';

class App extends Component {

    render() {
        const { error, loading, data } = this.props;
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <ErrorBoundary>
                            <StartPage data={this.props.data}/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/movies/:id">
                        <ErrorBoundary>
                            <DetailsPage/>
                        </ErrorBoundary>
                    </Route>
                    <Route path="/search/Search20Query">
                        <ErrorBoundary>
                            <StartPage data={this.props.data}/>
                        </ErrorBoundary>
                    </Route>
                    <Route path='/404'>
                        <ErrorBoundary>
                            <IncorrectPath/>
                        </ErrorBoundary>
                    </Route>
                    <Redirect from='*' to='/404'/>
                </Switch>
            </Router>
        );
    };
};

App.propTypes = {
    data: PropTypes.array
};

const mapStateToProps = state => ({
    data: state.movieReducer.movies.data,
    loading: state.movieReducer.loading,
    error: state.movieReducer.error
});

export default connect(mapStateToProps)(App);
