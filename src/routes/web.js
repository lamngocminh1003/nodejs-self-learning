const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAbc,
  getAmie,
} = require("../controllers/homeController");
//khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/amie", getAmie);
module.exports = router; // export  default
