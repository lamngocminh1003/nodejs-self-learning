const express = require("express");
//để sd c2
const path = require("path");
const configViewEngine = (app) => {
  //config template engine
  //c1
  // app.set("views", "./src/views");
  //c2
  app.set("views", path.join("./src", "views"));
  app.set("view engine", "ejs");
  //config static files
  app.use(express.static(path.join("./src", "public")));
};
module.exports = configViewEngine;
