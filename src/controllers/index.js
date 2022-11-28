const { userRegister, userOrders, userCart } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createProduct, getAllProducts } = require("./products.controllers");

module.exports = { userRegister, userLogin, createProduct, getAllProducts, userOrders, userCart };