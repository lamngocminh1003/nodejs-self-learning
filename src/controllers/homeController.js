const getHomePage = (req, res) => {
  res.send("Hello World nodemon!");
};
const getAbc = (req, res) => {
  res.render("sample");
};
const getAmie = (req, res) => {
  res.send("<h1>Hello World with Amie nè </h1>");
};
module.exports = {
  getHomePage,
  getAbc,
  getAmie,
};
