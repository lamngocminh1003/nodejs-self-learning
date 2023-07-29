const connection = require("../config/connectDB");
const getAllUsers = async () => {
  let [results, fields] = await connection.query(`SELECT * from Users`);
  return results;
};
const createAUser = async (data) => {
  // simple query(xài callback) để tạo user
  // connection.query(
  //   `INSERT INTO Users (email,name,city)
  //   VALUES(?,?,?)`,
  //   [email, email, city],
  //   function (err, results) {
  //     res.send("<h1>create new user succeed !</h1>");
  //     console.log("results", results);
  //   }
  // );
  // simple query(xài callback) để ds user
  // connection.query(`SELECT * FROM Users `, function (err, results, fields) {
  //   console.log("check results", results); // results contains rows returned by server
  // });
  //xài async await tạo mới user
  let { email, name, city } = data;
  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    VALUES(?,?,?)`,
    [email, name, city]
  );
  return results;
};
const getUserById = async (userId) => {
  let id = userId;
  let [results] = await connection.query(`SELECT * from Users where id=?`, [
    id,
  ]);
  console.log("check results from getUserById", results);
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};
const editAUser = async (data) => {
  let { email, name, city, id } = data;
  let [results, fields] = await connection.query(
    `UPDATE Users
    SET email = ?, name= ?, city=?
    WHERE id = ?`,
    [email, name, city, id]
  );
  return results;
};
const deleteAUser = async (data) => {
  let { id } = data;
  let [results, fields] = await connection.query(
    `DELETE FROM Users WHERE id =?`,
    [id]
  );
  return results;
};
module.exports = {
  getAllUsers,
  createAUser,
  getUserById,
  editAUser,
  deleteAUser,
};
