const express = require("express");
const axios = require("axios");
const router = express.Router();
const UserRepositories = require("../../models/repo");

router.get("/", async (req, res) => {
  try {
    const username = req.query.username;

    let userRepoDetails = await UserRepositories.findOne({
      owner_name: username,
    });
    if (userRepoDetails) return res.status(200).json(userRepoDetails);

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );

    userRepoDetails = await response.data;

    const savedUserRepoDetails = await savetoDB(userRepoDetails);
    return res.status(200).json(savedUserRepoDetails);
  } catch (err) {
    return res.status(400).json({ msg: "Invalid username" });
  }
});

async function savetoDB(data) {
  const listOfRepositories = [];
  try {
    for (let i = 0; i < data.length; i++) {
      const repositoryDetails = {
        repo_url: data[i].html_url,
        description: data[i].description,
        stars_count: data[i].stargazers_count,
        repo_name: data[i].name,
      };
      listOfRepositories.push(repositoryDetails);
    }
    const username = data[0].owner.login;
    const userRepositories = new UserRepositories({
      owner_name: username,
      repoList: listOfRepositories,
    });
    const savedUserRepositories = await userRepositories.save();
    return savedUserRepositories;
  } catch (err) {
    console.log(err);
  }
}
module.exports = router;
