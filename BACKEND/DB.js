const mongoose = require("mongoose");

const DB_connection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("Database Connection Successful"))
    .catch((err) => console.log(err));
};

module.exports = DB_connection;
