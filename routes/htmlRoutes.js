const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/", blogController.findAll);
router.get("/post/:id", blogController.findOne);
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
