require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const express = require("express");

// import express from "express";
const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME || "localhost";

//config template engine and config static files

configViewEngine(app);
//config req.body
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); // Used to parse JSON bodies
//khai báo route
app.use("/", webRoutes);
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
