import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import loadable from '@loadable/component';
import { hot } from 'react-hot-loader';

const StartPage = loadable(
  () =>
    import(/* webpackChunkName: 'StartPage' */ '../pages/StartPage/StartPage'),
  {
    ssr: true,
  }
);
const DetailsPage = loadable(
  () =>
    import(
      /* webpackChunkName: 'DetailsPage' */ '../pages/DetailsPage/DetailsPage'
    ),
  {
    ssr: true,
  }
);
const IncorrectPath = loadable(
  () =>
    import(
      /* webpackChunkName: 'IncorrectPath' */ '../pages/NotFoundPage/IncorrectPath'
    ),
  { ssr: true }
);

const App = ({ Router, location, context, store }) => (
  <Provider store={store}>
    <Router location={location} context={context}>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/movies/:id" component={DetailsPage} />
        <Route path="/search" component={StartPage} />
        <Route path="/404" component={IncorrectPath} />
        <Route path="*" component={IncorrectPath} />
      </Switch>
    </Router>
  </Provider>
);

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
};

export default hot(module)(App);
