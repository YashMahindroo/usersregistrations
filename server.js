const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post(
  "/api/users",
  [
    body("firstName").notEmpty().withMessage("First Name is required"),
    body("lastName").notEmpty().withMessage("Last Name is required"),
    body("mobile").isMobilePhone().withMessage("Invalid mobile number"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("loginId").notEmpty().withMessage("Login ID is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userData = req.body;
    console.log(userData);

    // Save userData to your database here

    res.status(200).json({ message: "User data saved successfully!" });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
