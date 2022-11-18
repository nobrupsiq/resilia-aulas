const fetch = require("node-fetch"); // fetch
const express = require("express"); // express
const { response } = require("express");

const app = express();
app.get("/", function (req, resp) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.table(json));
  resp.end(); // NAO CAIR EM UM LOOPING
});

app.listen(8080);

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
