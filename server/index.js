import config from "../config.js";
import fs from "fs";
import { createMemoryHistory } from "history";
import Html from "./Html";
import express from "express";
import configureStore from "../src/configureStore.js";
import bodyParser from "body-parser";
import { mailArgsValidations } from "./mailArgValidations.js";
import { sendEmail } from "./helpers";
// import HomePage from '../Home/index.html'
const server = express();
server.use(bodyParser());
server.get(
  /^\/[a-zA-Z]+\.[js|svg|png|css|html|jpg|jpeg]*[?a-zA-Z]+$/,
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

server.post("/sendMail", async (req, res) => {
  try {
    const { body } = req;
    const isValidArgs = mailArgsValidations(body);
    if (!isValidArgs)
      res.status(405).send({
        code: false,
        message: "Invalid body",
      });
    else {
      const { email, name, address, mobile } = body;
      const emailArgs = {
        ...(email && { email }),
        ...(name && { name }),
        ...(mobile && { mobile }),
        ...(address && { address }),
      };
      await sendEmail(emailArgs);

      res
        .status(200)
        .send({ code: true, message: "Your request has been placed" });
    }
  } catch (err) {
    console.error("Caught in sending email", err);
    res.status(405).send({ code: false, message: "Please try again" });
  }
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
