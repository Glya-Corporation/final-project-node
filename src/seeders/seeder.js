const db = require("../utils/database");
const initModels = require("../models/initModels");
const { Cart, ProductsInCart, Order, Products, ProductsInOrder, Users } = require("../models");

initModels();

const users = [
    { name: "Luis Uzcategui", email: "alfonsouzcategui26@gmail.com", password: "123123" },
    { name: "Romario", email: "rom@gmail.com", password: "456456" },
    { name: "Josefina", email: "jose@gmail.com", password: "789789" },
]

const products = [
    { name: "Berries Jam", price: 10, availableQty: 15, urlImg: "Available", userId: 1 },
    { name: "Toilet paper", price: 6, availableQty: 8, urlImg: "Available", userId: 1 },
    { name: "Apple", price: 4, availableQty: 0, urlImg: "Out of stock", userId: 2 },
    { name: "Pinapple", price: 3, availableQty: 7, urlImg: "Available", userId: 2 },
    { name: "Wine pie", price: 30, availableQty: 3, urlImg: "Available", userId: 3 },
    { name: "Coconut rum", price: 7, availableQty: 0, urlImg: "Available", userId: 3 },
]

const carts = [
    {userId:1, totalPrice:68, status:"empty"},
    {userId:2, totalPrice:56, status:"empty"},
    {userId:3, totalPrice:30, status:"empty"}
]

const order = [
    {totalPrice:0, userId:1,status:"empty"},
    {totalPrice:0, userId:2, status:"empty"},
    {totalPrice:0, userId:3, status:"empty"},
]

const pic = [
    {cartId:1, productId:1, quantity:5, price:10, status:"in queue"},
    {cartId:1, productId:2, quantity:3, price:6, status:"in queue"},
    {cartId:2, productId:1, quantity:5, price:10, status:"in queue"},
    {cartId:2, productId:4, quantity:2, price:3, status:"in queue"},
    {cartId:3, productId:5, quantity:1, price:30, status:"in queue"},
]

const pio = [
    {orderId:1, productId:1, quantity:5, price:10, status:"Ordered"},
    {orderId:1, productId:2, quantity:3, price:6, status:"Ordered"},
    {orderId:2, productId:1, quantity:5, price:10, status:"Ordered"},
    {orderId:2, productId:4, quantity:2, price:3, status:"Ordered"},
    {orderId:3, productId:5, quantity:1, price:30, status:"Ordered"},
]

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la plantaci??n de Informaci??n");
        users.forEach((user) => Users.create(user))
        setTimeout(() => {
            products.forEach((products) => Products.create(products));
          }, 300);
          setTimeout(() => {
            carts.forEach((carts) => Cart.create(carts));
          }, 400);
          setTimeout(() => {
            order.forEach((order) => Order.create(order));
          }, 500);
          setTimeout(() => {
            pic.forEach((pic) => ProductsInCart.create(pic));
          }, 600);
          setTimeout(() => {
            pio.forEach((pio) => ProductsInOrder.create(pio));
          }, 600);
    })
    .catch((error) => console.log(error));