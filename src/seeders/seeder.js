const db = require("../utils/database");
const initModels = require("../models/initModels");
const { Cart, ProductsInCart, Order, Products, ProductsInOrder, Users } = require("../models");

initModels();

const users = [
    { name: "Evelio", email: "eve@gmail.com", password: "123123" },
    { name: "Romario", email: "rom@gmail.com", password: "456456" },
    { name: "Josefina", email: "jose@gmail.com", password: "789789" },
]

const products = [
    { name: "Berries Jam", price: 10, availableQty: 15, status: "Available", userId: 1 },
    { name: "Toilet paper", price: 6, availableQty: 8, status: "Available", userId: 1 },
    { name: "Apple", price: 4, availableQty: 0, status: "Out of stock", userId: 2 },
    { name: "Pinapple", price: 3, availableQty: 7, status: "Available", userId: 2 },
    { name: "Wine pie", price: 30, availableQty: 3, status: "Available", userId: 3 },
    { name: "Coconut rum", price: 7, availableQty: 0, status: "Available", userId: 3 },
]

const carts = [
    {userId:1, totalPrice:0},
    {userId:2, totalPrice:0},
    {userId:3, totalPrice:0}
]

const order = [
    {totalPrice:0, userId:1},
    {totalPrice:0, userId:2},
    {totalPrice:0, userId:3},
]

const pic = [
    {cartId:1, productId:1, quantity:5, price:10, status:"in cart"},
    {cartId:1, productId:2, quantity:3, price:6, status:"in cart"},
    {cartId:2, productId:1, quantity:5, price:10, status:"in cart"},
    {cartId:2, productId:4, quantity:2, price:3, status:"in cart"},
    {cartId:3, productId:5, quantity:1, price:30, status:"in cart"},
]

const pio = [
    {orderId:1, productId:1, quantity:5, price:10, status:"in cart"},
    {orderId:1, productId:2, quantity:3, price:6, status:"in cart"},
    {orderId:2, productId:1, quantity:5, price:10, status:"in cart"},
    {orderId:2, productId:4, quantity:2, price:3, status:"in cart"},
    {orderId:3, productId:5, quantity:1, price:30, status:"in cart"},
]

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la plantación de Información");
        users.forEach((user) => Users.create(user))
        setTimeout(() => {
            products.forEach((products) => Products.create(products));
          }, 100);
          setTimeout(() => {
            carts.forEach((carts) => Cart.create(carts));
          }, 200);
          setTimeout(() => {
            order.forEach((order) => Order.create(order));
          }, 300);
          setTimeout(() => {
            pic.forEach((pic) => ProductsInCart.create(pic));
          }, 400);
          setTimeout(() => {
            pio.forEach((pio) => ProductsInOrder.create(pio));
          }, 500);
    })
    .catch((error) => console.log(error));