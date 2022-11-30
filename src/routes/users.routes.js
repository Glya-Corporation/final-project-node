const { Router } = require("express");
const { userRegister, userOrders, userCart, addProductToCart, purchaseCart } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);

router.get("/users/:id/orders", authenticate, userOrders);

router.get("/users/:id/cart", authenticate, userCart);

router.post("/users/:id/cart", authenticate, addProductToCart);

router.put("/users/:id/cart", authenticate, purchaseCart);

module.exports = router;