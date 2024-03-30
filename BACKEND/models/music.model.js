const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MusicSchema = new Schema({
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

const MusicModel = mongoose.model("music", MusicSchema);
module.exports = MusicModel;
