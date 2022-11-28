const { Users, Order, Cart, Products, ProductsInCart, ProductsInOrder } = require("./index")

const initModels = () => {
    // Relacion usuario producto
    Users.hasMany(Products, {as: "product", foreignKey: "user_id"});
    Products.belongsTo(Users, {as: "customer", foreignKey: "user_id"});

    Users.hasOne(Cart, {as: "cart", foreignKey: "user_id"});
    Cart.belongsTo(Users, {as: "user", foreignKey: "user_id"});

    Users.hasMany(Order, {as: "order", foreignKey: "user_id"});
    Order.belongsTo(Users, {as: "author", foreignKey: "user_id"});

    ProductsInCart.belongsTo(Products, {as: "item", foreignKey: "product_id"});
    Products.hasOne(ProductsInCart, {as: "container", foreignKey: "product_id"});

    ProductsInCart.belongsTo(Cart, {as: "cart", foreignKey: "cart_id"});
    Cart.hasMany(ProductsInCart, {as: "products", foreignKey: "cart_id"});

    Order.hasMany(ProductsInOrder, {as: "productOrder", foreignKey: "order_id"});
    ProductsInOrder.belongsTo(Order, {as: "order", foreignKey: "order_id"});

    ProductsInOrder.belongsTo(Products, {as: "product", foreignKey: "product_id"});
    Products.hasOne(ProductsInOrder, {as: "bill", foreignKey: "product_id"});

}

module.exports = initModels;

/* 
- Un ProductInCart puede tener un producto y pertenece a un carrito
- Un carrito tiene muchos ProductInCart
- Una orden tiene muchos ProductInOrder
- Un ProductInOrder tiene un producto y pertenece a una orden
*/

/* 
- Un usuario puede tener muchos productos, y un producto le pertenece a un usuario +++
- Un usuario solo puede tener un carrito, y un carrito le pertenece a un usuario +++
- Un usuario puede crear muchas ordenes y una orden le pertenece a un usuario +++
- más las que consideres necesarias
*/


/* 
- User (id, username, email, password) ++++
- Product (id, name, price, availableQty, status, userId)  +++
- Cart (id, userId, totalPrice) ++
- ProductInCart (id, cartId, productId, quantity, price, status) +++
- Order (id, totalPrice, userId, status) // si completada pendiente  +++
- ProductInOrder (id, orderId, productId, quantity, price, status)
*/