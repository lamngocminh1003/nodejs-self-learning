const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAbc,
  getAmie,
  createUser,
  create,
  edit,
  editUser,
  postDeleteUser,
  deleteUser,
} = require("../controllers/homeController");
//khai báo route
router.get("/", getHomePage);
router.get("/abc", getAbc);
router.get("/amie", getAmie);
router.get("/create", create);
router.post("/create-user", createUser);
router.get("/edit/:id", edit);
router.post("/edit-user", editUser);
router.post("/delete-user/:id", postDeleteUser);
router.post("/delete", deleteUser);
module.exports = router; // export  default
