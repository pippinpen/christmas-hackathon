const express = require("express");
const logger = require("./../logger");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from home")
});

module.exports = router;