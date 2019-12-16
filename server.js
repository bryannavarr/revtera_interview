const express = require("express");
const app = express();
// const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const router = require("./app/routes");

// initialize dotenv
// dotenv.config();

// set our port
const port = process.env.PORT || 8080;

// get all data/stuff of the body (POST) parameters
// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// register routes
app.use(router);

app.listen(port, "127.0.0.1")
console.log(`Node server running and listening on: ${port}`)




// start mongo connection pool, then start express app
