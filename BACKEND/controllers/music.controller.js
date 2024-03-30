const MusicModel = require("../models/music.model");

const createMusic = async (req, res) => {
  try {
    const { title } = req.body;
    const newMusic = new MusicModel(req.body);
    if (req.file) {
      newMusic.track = req.file.path;
    }
    if (!title) {
      const [getTitle] = req.file.originalname.split(".mp3");
      newMusic.title = getTitle;
    }
    const resp = await newMusic.save();
    res.json({
      code: 200,
      message: "Song Uploaded successfully",
      data: resp,
    });
  } catch (err) {
    res.json({
      code: 404,
      message: err.message,
    });
  }
};

const getMusic = async (req, res) => {
  try {
    if (req.query.user_id) {
      const resp = await MusicModel.find({ user_id: req.query.user_id });
      res.json({
        code: 200,
        message: "All Libraries",
        data: resp,
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
      message: "Could Not Get Libraries",
    });
  }
};

const deleteMusic = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await MusicModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Music Deleted Successfully",
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

module.exports = { createMusic, getMusic, deleteMusic };
