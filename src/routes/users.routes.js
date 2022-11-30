const { Router } = require("express");
const { userRegister, userOrders, userCart, addProductToCart, purchaseCart } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);

router.get("/users/:id/orders", userOrders);

router.get("/users/:id/cart", userCart);

router.post("/users/:id/cart", addProductToCart);

router.put("/users/:id/cart", purchaseCart);

module.exports = router