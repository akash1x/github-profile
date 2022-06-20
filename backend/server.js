if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

const repositories = require("./routes/api/repositories");
const user = require("./routes/api/user");
app.use("/api/repositories", repositories);
app.use("/api/user", user);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server connected at port ${port}`);
});
