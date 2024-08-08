const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/users", (req, res) => {
  const userData = req.body;
  console.log(userData);

  // Save userData to your database here

  res.status(200).json({ message: "User data saved successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
