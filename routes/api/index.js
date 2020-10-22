const express = require("express");
const router = express.Router();

const dev = require("./dev");

// router.get("/", (req, res) => {
//   res.send("<h1>API</h1>");
// });

router.use("/dev", dev);

module.exports = router;
