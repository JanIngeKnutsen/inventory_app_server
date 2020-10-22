const express = require("express");
const router = express.Router();

const items = require("./items");
const users = require("./users");

// router.get("/", (req, res) => {
//   res.send("<h1>API V: 1.0.0</h1>");
// });

router.use("/items", items);
router.use("/users", users);

module.exports = router;
