const express = require("express");
const axios = require("axios");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async (req, res) => {
  try {
    const username = req.query.username;

    //Find it in the DB
    const user = await User.findOne({ name: username });
    if (user) return res.status(200).json(user);

    //Not found in DB, then try to hit the API
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );

    //If username is not valid
    const data = await response.data;
    // if (!data) return res.status(400).json({ msg: "Invalid username" });

    //saved the details for further API request in DB
    const savedUser = await savetoDB(data);
    return res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Invalid username" });
  }
});

async function savetoDB(data) {
  try {
    const userDto = new User({
      name: data.login,
      followers_count: data.followers,
      following_count: data.following,
      image_url: data.avatar_url,
      repository_list_size: data.public_repos,
      member_since: data.created_at,
    });
    const savedUser = await userDto.save();
    return savedUser;
  } catch (err) {
    console.log(err);
  }
}
module.exports = router;
