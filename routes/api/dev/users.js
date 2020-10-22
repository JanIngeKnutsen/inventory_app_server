const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");

const User = require("../../../database/models/user");

function hidePassword(user) {
  return (user.login.password = null);
}

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    users.forEach(user => {
      hidePassword(user);
    });
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:uuid", async (req, res) => {
  try {
    const user = await User.findOne({ "login.uuid": req.params.uuid });
    hidePassword(user);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

router.post("/signup", async (req, res) => {
  const input = req.body;
  const email = input.contact.email;
  const username = input.login.username;

  try {
    const existingEmail = await User.findOne({
      "contact.email": email
    });
    const existingUsername = await User.findOne({
      "login.username": username
    });
    if (existingEmail) {
      res.json("A user with this email already exist");
    } else if (existingUsername) {
      res.json("A user with this username already exist");
    } else {
      const hashedPassword = await bcrypt.hash(req.body.login.password, 12);

      const profile = new User({
        name: input.name,
        contact: input.contact,
        login: {
          username,
          uuid: uuidv4(),
          password: hashedPassword
        },
        dob: input.dob,
        role: input.role
      });
      const savedUser = await profile.save();
      savedUser.login.password = null;
      res.json(savedUser);
    }
  } catch (err) {
    res.json(err);
  }
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ "login.username": username }, async (err, doc) => {
    if (err) {
      res.json(err);
    }
    if (!doc) {
      res.json("Wrong username");
    } else {
      console.log("doc", doc);
      const valid = await bcrypt.compare(password, doc.login.password);
      res.json(valid);
    }
  });
});

module.exports = router;
