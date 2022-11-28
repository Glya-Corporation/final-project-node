const { Router } = require("express");
const { userRegister, userOrders, userCart } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);

router.get("/users/:id/orders", userOrders);

router.get("/users/:id/cart", userCart);


module.exports = router