import config from '../config.js';
import { createMemoryHistory } from 'history';
import Html from './Html';
import express from 'express';
import configureStore from '../src/configureStore.js';

const server = express();
server.get(
  /^\/[a-zA-Z]+\.[js|svg|png|css]*[?a-zA-Z]+$/,
  express.static(__dirname.slice(0, -6) + 'public'), //for hosting in herokuapp needed slicing since __dirname differs
);
server.get('*', (req, res) => {
  try {
    const initialState = {};
    const history = createMemoryHistory({
      initialEntries: [req.url],
    });
    const { url } = req;
    console.log('req url ----> ', url);
    const store = configureStore(initialState, history);
    const html = Html({ store, url });
    res.status(200).send(html);
  } catch (err) {
    console.log('error in server side rendering .....', err);
    res.status(500).send('internal server error');
  }
});
server.use(express.static(__dirname + '/public'));

server.listen(config.port, () => {
  console.log('Server listening on Port', config.port);
});
