const { Router } = require("express");
const { createCart } = require("../controllers");

const router = Router();

router.post("./cats", createCart);

module.exports = router;