const express = require("express");
const { createComments, getComments, deleteComments } = require("../controllers/comments.controller");
const FileUpload = require("../middlewares/FileUpload");
const router = express.Router();

router.post("/", FileUpload.single("track"), createComments);
router.get("/", getComments);
router.delete("/:id", deleteComments);

module.exports = router;