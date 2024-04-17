const CommentsModel = require("../models/comments.model");

const createComments = async (req, res) => {
  try {
    const { title } = req.body;
    const newComments = new CommentsModel(req.body);
    if (req.file) {
      newComments.track = req.file.path;
    }
    if (!title) {
      const [getTitle] = req.file.originalname.split(".mp3");
      newComments.title = getTitle;
    }
    const resp = await newComments.save();
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

const getComments = async (req, res) => {
  try {
    if (req.query.user_id) {
      const resp = await CommentsModel.find({ user_id: req.query.user_id });
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

const deleteComments = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await CommentsModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Comments Deleted Successfully",
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

module.exports = { createComments, getComments, deleteComments };
