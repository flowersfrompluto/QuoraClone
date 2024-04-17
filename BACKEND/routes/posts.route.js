const express = require("express");
const { createPost, getPost, deletePost } = require("../controllers/posts.controller");
const router = express.Router();

router.post("/", createPost);
router.get("/", getPost);
router.delete("/:id", deletePost);

module.exports = router;
