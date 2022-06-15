const express = require("express");
const axios = require("axios");
const router = express.Router();
const RepoDetails = require("../../models/repo");

router.get("/", async (req, res) => {
  try {
    const username = req.query.githubHandle;
    //const profile = await Profile.find();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    const data = await response.data;
    if (!data) return res.json({ msg: "Invalid github handle" });

    const repoDetails = await RepoDetails.findOne({ owner_name: username });
    console.log(repoDetails);
    if (repoDetails) return res.json(repoDetails);

    const savedRepoDetails = await savetoDB(data);
    return res.json(savedRepoDetails);
  } catch (err) {
    console.log(err);
  }
});

async function savetoDB(data) {
  const repoDetailsArr = [];
  try {
    for (let i = 0; i < data.length; i++) {
      const repoDetails = {
        description: data[i].description,
        stars_count: data[i].stargazers_count,
        repo_url: data[i].html_url,
        repo_name: data[i].name,
      };
      repoDetailsArr.push(repoDetails);
    }
    const name = data[0].owner.login;
    const repoDetailsDto = new RepoDetails({
      owner_name: name,
      repoList: repoDetailsArr,
    });
    const savedRepoDetails = await repoDetailsDto.save();
    return savedRepoDetails;
  } catch (err) {
    console.log(err);
  }
}
module.exports = router;
