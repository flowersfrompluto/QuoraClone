const mongoose = require("mongoose");

const DB_connection = () => {
  mongoose
  .connect("mongodb+srv://NewAuth:BJUdapD7cruHyQxP@cluster.st5u2bd.mongodb.net/")
  .then(() => console.log("Database Connection Successful"))
  .catch((err) => console.log(err));
};

module.exports = DB_connection;
