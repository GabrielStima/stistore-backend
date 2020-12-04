const express = require("express");
const router = express.Router();

router.get("/categories", () => console.log('/categories'));

module.exports = router;