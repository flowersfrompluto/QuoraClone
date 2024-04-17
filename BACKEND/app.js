const express = require("express");
const path = require("path");
const PORT = 4000;
const app = express();
const RouteLogger = require("./middlewares/RouteLogger");
const DB_connection = require("./DB");
const userRoutes = require("./routes/user.route");
const musicRoutes = require("./routes/comments.route");
const postsRoutes = require("./routes/posts.route");
const cors = require("cors");
require("dotenv").config();

app.use(RouteLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));

DB_connection();

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/music", musicRoutes);
app.use("/api/v1/posts", postsRoutes);

app.listen(process.env.PORT, () => console.log(`App Running on port: http://localhost:${PORT}`));
