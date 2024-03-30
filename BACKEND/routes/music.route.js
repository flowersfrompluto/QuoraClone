const express = require("express");
const { createMusic, getMusic, deleteMusic } = require("../controllers/music.controller");
const FileUpload = require("../middlewares/FileUpload");
const router = express.Router();

router.post("/", FileUpload.single("track"), createMusic);
router.get("/", getMusic);
router.delete("/:id", deleteMusic);

module.exports = router;