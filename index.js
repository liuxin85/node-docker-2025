const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hi there!!1 I am in docker</h2>");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
