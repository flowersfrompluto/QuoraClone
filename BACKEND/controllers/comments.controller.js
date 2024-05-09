const CommentsModel = require("../models/comments.model");

// const getComments = async (req, res) => {
//   try {
//     if (req.query.user_id) {
//       const resp = await CommentsModel.find({ user_id: req.query.user_id });
//       res.json({
//         code: 200,
//         message: "All Libraries",
//         data: resp,
//       });
//     } else {
//       res.json({
//         code: 404,
//         message: "'user_id' required in the request query Parameter",
//       });
//     }
//   } catch (err) {
//     res.json({
//       code: 404,
//       message: "Could Not Get Libraries",
//     });
//   }
// };


// Get All Comment
const getAllComments = async (req, res) => {
  try {
    const resp = await CommentsModel.find();
    res.json({
      code: 200,
      statusText: "OK",
      message: "All Comment",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: 404,
      statusText: "",
      message: err.message,
    });
  }
};

// Create a Comment
const createComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const createComment = new CommentsModel({
      user_id,
      comment,
    });
    const resp = await createComment.save();
    res.status(200).json({
      code: 200,
      statusText: "OK",
      message: "Comment Created Successfully",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: 404,
      statusText: "",
      message: err.message,
    });
  }
};

// Deleting a Comment
const deleteComment = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await CommentsModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Comment Deleted Successfully",
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

module.exports = { createComment, getAllComments, deleteComment };
