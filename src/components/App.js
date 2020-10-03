import React from "react";
import ErrorBoundary from "./shared/ErrorBoundary";
import IncorrectPath from "./IncorrectPath";
import StartPage from "./StartPage";
import MoviesPage from "./MoviesPage";
import DetailsPage from "./DetailsPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
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
        <Route path="/movies">
          <ErrorBoundary>
            <MoviesPage />
          </ErrorBoundary>
        </Route>
        <Route path="/search/Search20Query">
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
};

export default App;
