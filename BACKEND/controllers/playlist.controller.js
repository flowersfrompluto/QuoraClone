const PlaylistModel = require("../models/playlist.model");

const createPlaylist = async (req, res) => {
  try {
    const save_playlist = new PlaylistModel(req.body);
    const resp = await save_playlist.save();
    res.json({
      code: 200,
      message: "Playlist successfully created",
      data: resp,
    });
  } catch (err) {
    res.json({
      code: 404,
      message: "Could Not Create Playlist",
    });
  }
};

const getPlaylist = async (req, res) => {
  try {
    if (req.query.user_id) {
      const resp = await PlaylistModel.find({ user_id: req.query.user_id });
      res.json({
        code: 200,
        message: "All Playlists",
        data: resp,
        length: resp.length,
      });
    } else {
      res.json({
        code: 404,
        message: "'user_id' required in the request query Parameter",
      });
    }
  } catch (err) {
    res.json({
      code: 404,
      message: "Could Not Get Playlists",
    });
  }
};

const deletePlaylist = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await PlaylistModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Playlist Deleted Successfully",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      statusCode: 404,
      statusText: "",
      message: err.message,
    });
  }
};

module.exports = { createPlaylist, getPlaylist, deletePlaylist };
