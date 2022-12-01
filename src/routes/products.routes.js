const { Router } = require("express");
const { createProduct, getAllProducts } = require("../controllers");

const router = Router();

router.get("/products", getAllProducts);

module.exports = router
