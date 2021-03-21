const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser");

const productsRouter = require("./routes/products");

var server = {
  port: 8000,
};

// use the modules
app.use(cors());
app.use(bodyParser.json());

app.use("", productsRouter);

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
