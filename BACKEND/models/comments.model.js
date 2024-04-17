const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist_name: {
    type: String,
  },
  track: {
    type: String,
    required: true,
  },
});

const CommentsModel = mongoose.model("comments", CommentsSchema);
module.exports = CommentsModel;
