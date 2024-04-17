const PostModel = require("../models/posts.model");

const createPost = async (req, res) => {
  try {
    const save_Post = new PostModel(req.body);
    const resp = await save_Post.save();
    res.json({
      code: 200,
      message: "Post successfully created",
      data: resp,
    });
  } catch (err) {
    res.json({
      code: 404,
      message: "Could Not Create Post",
    });
  }
};

const getPost = async (req, res) => {
  try {
    if (req.query.user_id) {
      const resp = await PostModel.find({ user_id: req.query.user_id });
      res.json({
        code: 200,
        message: "All Posts",
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
      message: "Could Not Get Posts",
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await PostModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Post Deleted Successfully",
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

module.exports = { createPost, getPost, deletePost };
