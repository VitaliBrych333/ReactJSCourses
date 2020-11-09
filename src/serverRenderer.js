/* eslint-disable no-console */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import path from 'path';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import App from './components/App';
import configureStore from './redux/store/index';
import routes from './routes';

const statsFile = path.resolve('./public/loadable-stats.json');
const extractor = new ChunkExtractor({
  statsFile,
  entrypoints: ['serverRenderer'],
});

function parseScripts(scriptTags) {
  const scripts = scriptTags.match(/<(.*?)>/g);

  scripts.forEach((script, index) => {
    if (index > 3 && index % 2 === 0) {
      scripts[index] = script
        .substring(0, script.length - 1)
        .concat(' type="text/jsx">');
    }
  });

  return scripts.join('');
}

function renderHTML(linkTags, styleTags, html, scriptTags, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${linkTags}
          ${styleTags}
          ${
            process.env.NODE_ENV === 'development'
              ? ''
              : '<link href="/css/main.css" rel="stylesheet" type="text/css">'
          }
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(
              /</g,
              '\\u003c'
            )}
          </script>
          <script src="/js/main.js"></script>
          ${scriptTags}
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();

    const promises = routes.reduce((acc, route) => {
      if (
        matchPath(req.url, route) &&
        route.component &&
        route.component.initialAction
      ) {
        acc.push(
          Promise.resolve(store.dispatch(route.component.initialAction(req)))
        );
      }
      return acc;
    }, []);

    Promise.all(promises)
      .then(() => {
        const context = {};

        const renderRoot = () => (
          <ChunkExtractorManager extractor={extractor}>
            <App
              context={context}
              location={req.url}
              Router={StaticRouter}
              store={store}
            />
          </ChunkExtractorManager>
        );

        renderToString(renderRoot());

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const htmlString = renderToString(renderRoot());
        const linkTags = extractor.getLinkTags();
        const scriptTags = extractor.getScriptTags();
        const styleTags = extractor.getStyleTags();

        const parseScript = parseScripts(scriptTags);

        const preloadedState = store.getState();

        res.send(
          renderHTML(
            linkTags,
            styleTags,
            htmlString,
            parseScript,
            preloadedState
          )
        );
      })
      .catch((e) => console.error(e));
  };
}
