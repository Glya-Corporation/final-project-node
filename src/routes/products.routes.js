const { Router } = require("express");
const { createProduct, getAllProducts } = require("../controllers");

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *  get:
 *   tags: [Get all products in store]
 *   summary: obtain all the products in the catalog differents to 0
 *   responses:
 *     200:
 *       description: OK
 */

router.get("/products", getAllProducts);

module.exports = router
