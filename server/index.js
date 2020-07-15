import config from "../config.js";
import fs from "fs";
import { createMemoryHistory } from "history";
import Html from "./Html";
import express from "express";
import configureStore from "../src/configureStore.js";
// import HomePage from '../Home/index.html'
const server = express();
server.get(
  /^\/[a-zA-Z]+\.[js|svg|png|css|html]*[?a-zA-Z]+$/,
  express.static(__dirname.slice(0, -6) + "public"), //for hosting in herokuapp needed slicing since __dirname differs
);
server.get(
  /\/assets\/+/,
  express.static(__dirname.slice(0, -6) + "Home"), //for hosting in herokuapp needed slicing since __dirname differs
);

server.get("/", (req, res) => {
  fs.readFile("./Home/index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});
server.get("*", (req, res) => {
  try {
    const initialState = {};
    const history = createMemoryHistory({
      initialEntries: [req.url],
    });
    const { url } = req;
    console.log("req url ----> ", url);
    const store = configureStore(initialState, history);
    const html = Html({ store, url });
    res.status(200).send(html);
  } catch (err) {
    console.log("error in server side rendering .....", err);
    res.status(500).send("internal server error");
  }
});

server.listen(config.port, () => {
  console.log("Server listening on Port", config.port);
});
