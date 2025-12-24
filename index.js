const express = require("express");
const mongoose = require("mongoose");
const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
} = require("./config/config");
const postRouter = require("./routes/postRoutes");

const app = express();

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
  )
  .then(() => console.log("Successfully connected to DB"))
  .catch((e) => console.log(e));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h2>Hi there!! I am in docker!!!dev</h2>");
});

app.use("/api/v1/posts", postRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
