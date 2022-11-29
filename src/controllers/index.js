const { userRegister, userOrders, userCart, addProduct } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createProduct, getAllProducts } = require("./products.controllers");
const { createCart } = require('./cart.controllers');

module.exports = { userRegister, userLogin, createProduct, getAllProducts, userOrders, userCart, addProduct, createCart };