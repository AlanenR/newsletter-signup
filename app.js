const express = require("express");
const app = express();
const https = require("https");

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('hello world');
  })

  app.listen("3000", function() {
      console.log("Server is running on port 3000");
  })