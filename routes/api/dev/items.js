const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // items.find({}, function (err, docs) {
  //   res.send(docs);
  // });
});

router.post("/newItem", (req, res) => {
  // const newItem = {
  //   name: req.body.name,
  //   description: req.body.description,
  //   createdAt: Date.now()
  // };
  // console.log(newItem); // REMOVE
  // items.insert(newItem);
  // res.send(newItem);
});

module.exports = router;
