const app = require('./app');

const port = process.env.PORT || 8000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.info(`Express listening on port ${port}`);
});
