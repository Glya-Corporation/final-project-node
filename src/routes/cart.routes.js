const { Router } = require("express");
const { createCart } = require("../controllers/");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post('/cart', createCart);


module.exports = router;