const express = require("express");
const { createComment, getAllComments, deleteComment } = require("../controllers/comments.controller");
const FileUpload = require("../middlewares/FileUpload");
const router = express.Router();

router.post("/", FileUpload.single("track"), createComment);
router.get("/", getAllComments);
router.delete("/:id", deleteComment);

module.exports = router;