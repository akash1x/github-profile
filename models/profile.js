const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepoDetailsSchema = new Schema({
  owner_name: {
    type: String,
    required: true,
  },
  repoList: [
    {
      owner_name: String,
      description: String,
      stars_count: Number,
      repo_url: String,
      repo_name: String,
    },
  ],
});

module.exports = mongoose.model("RepoDetails", RepoDetailsSchema);
