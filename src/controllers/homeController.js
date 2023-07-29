const connection = require("../config/connectDB");
const { lock } = require("../routes/web");
const {
  getAllUsers,
  createAUser,
  getUserById,
  editAUser,
  deleteAUser,
} = require("../services/CRUDServices");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home", { listUsers: results });
};
const getAbc = (req, res) => {
  res.render("sample");
};
const getAmie = (req, res) => {
  res.send("<h1>Hello World with Amie nè </h1>");
};
const createUser = async (req, res) => {
  let data = req.body;
  console.log("check data", data);
  let results = await createAUser(data);
  res.redirect("/");
};
const create = (req, res) => {
  res.render("create");
};
const edit = async (req, res) => {
  let userId = req.params.id;
  console.log("check req.params", req.params, "check userId", userId);
  let results = await getUserById(userId);
  console.log("check results from getUserById", results);
  res.render("edit", { user: results });
};
const editUser = async (req, res) => {
  let data = req.body;
  console.log("check data", data);
  let results = await editAUser(data);
  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  let userId = req.params.id;
  let data = await getUserById(userId);
  res.render("delete", { user: data });
};
const deleteUser = async (req, res) => {
  let data = req.body;
  console.log("check data", data);
  let results = await deleteAUser(data);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  getAbc,
  getAmie,
  createUser,
  create,
  edit,
  editUser,
  postDeleteUser,
  deleteUser,
};
