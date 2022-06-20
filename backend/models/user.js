const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  followers_count: {
    type: Number,
    required: true,
  },
  following_count: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  repository_list_size: {
    type: String,
    required: true,
  },
  member_since: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
