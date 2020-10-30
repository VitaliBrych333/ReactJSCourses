import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ErrorBoundary from './shared/ErrorBoundary';
import IncorrectPath from './IncorrectPath';
import StartPage from './StartPage';
import DetailsPage from './DetailsPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ErrorBoundary>
          <StartPage />
        </ErrorBoundary>
      </Route>
      <Route path="/movies/:id">
        <ErrorBoundary>
          <DetailsPage />
        </ErrorBoundary>
      </Route>
      <Route path="/search">
        <ErrorBoundary>
          <StartPage />
        </ErrorBoundary>
      </Route>
      <Route path="/404">
        <ErrorBoundary>
          <IncorrectPath />
        </ErrorBoundary>
      </Route>
      <Redirect from="*" to="/404" />
    </Switch>
  </Router>
);

export default App;
