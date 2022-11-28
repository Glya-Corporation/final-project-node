const { Router } = require("express");
const { createProduct, getAllProducts } = require("../controllers");

const router = Router();

router.post("/products", createProduct);

router.get("/products", getAllProducts);

module.exports = router
