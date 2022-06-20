const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RepoDetailsSchema = new Schema({
  owner_name: {
    type: String,
    required: true,
  },
  repoList: [
    {
      repo_url: String,
      description: String,
      stars_count: Number,
      repo_name: String,
    },
  ],
});

module.exports = mongoose.model("RepoDetails", RepoDetailsSchema);
