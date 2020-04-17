const express = require("express");
const pkg = require("./package.json");
const landingPage = require("./index");

const e = express();

let name = pkg.name;
let vers = pkg.version;
console.log(name + " - " + vers);

e.get("/", (req, res) => {
  res.send(landingPage.generate());
});

e.get("/supplied", (req, res) => {
  res.send(landingPage.generate(name, vers));
});

const PORT = process.env.PORT || 5000;

e.listen(PORT, () => console.log(`Test server started on port ${PORT}...`));
