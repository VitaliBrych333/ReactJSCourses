import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import App from './components/App';
import configureStore from './redux/store/index';

const store = configureStore(window.PRELOADED_STATE);

loadableReady(() => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <App Router={BrowserRouter} store={store} />,
    document.getElementById('root')
  );
});
