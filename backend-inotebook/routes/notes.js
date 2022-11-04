const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  objnotes = {
    a: "Notes routes",
    number: 2,
  };
  res.json(objnotes);
});

module.exports = router;
