const express = require("express");
const axios = require("axios");
const router = express.Router();
const User = require("../../models/user");

router.get("/", async (req, res) => {
  try {
    const username = req.query.username;
    //const profile = await Profile.find();
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = await response.data;
    if (!data) return res.json({ msg: "Invalid username" });

    const user = await User.findOne({ name: username });
    console.log(user);
    if (user) return res.json(user);

    const savedUser = await savetoDB(data);
    return res.json(savedUser);
  } catch (err) {
    console.log(err);
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
