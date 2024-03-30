const express = require("express");
const { createPlaylist, getPlaylist, deletePlaylist } = require("../controllers/playlist.controller");
const router = express.Router();

router.post("/", createPlaylist);
router.get("/", getPlaylist);
router.delete("/:id", deletePlaylist);

module.exports = router;
