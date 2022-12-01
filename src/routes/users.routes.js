const { Router } = require("express");
const { userRegister, userOrders, userCart, addProductToCart, purchaseCart, createProduct, userVerify } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     tags:
 *       - Users
 *     summary: Here you can create an user
 *     requestBody:
 *      required: true
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         $ref: '#/components/schemas/Register'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     $ref: '#/components/schemas/Users'
 */

router.post("/users", userRegister);

router.post("/users/:id/verify", userVerify);

router.get("/users/:id/orders", authenticate, userOrders);

router.get("/users/:id/cart", authenticate, userCart);

router.post("/users/:id/products", authenticate, createProduct);

router.post("/users/:id/cart", authenticate, addProductToCart);

router.put("/users/:id/cart", authenticate, purchaseCart);

module.exports = router