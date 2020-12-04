const express = require("express");
const router = express.Router();

router.get("/itens", () => console.log('/itens'));

module.exports = router;