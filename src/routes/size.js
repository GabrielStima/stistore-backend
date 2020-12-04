const express = require("express");
const router = express.Router();

router.get("/size", () => console.log('/size'));

module.exports = router;