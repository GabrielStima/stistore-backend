const express = require("express");
const router = express.Router();

router.get("/promotions", () => console.log('/promotions'));

module.exports = router;