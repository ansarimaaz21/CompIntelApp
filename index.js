const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser");

const productsRouter = require("./routes/products");

// use the modules
app.use(cors());
app.use(bodyParser.json());

app.use("", productsRouter);

app.listen(process.env.PORT || 8000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
