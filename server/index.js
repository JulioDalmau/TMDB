const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("routes");

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.json({ message: "working fine" });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
