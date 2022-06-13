const express = require("express");
const bodyParser = require('body-parser');
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html");
  });

app.post("/", function (req, res) {
    const firstName = req.body.inputFirstName;
    const lastName = req.body.inputLastName;
    const email = req.body.inputEmail;
    console.log(firstName + lastName + email)
    res.send("Success");
});

  app.listen("3000", function() {
      console.log("Server is running on port 3000");
  });
