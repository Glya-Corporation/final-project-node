const { Users, Order, Cart, Products, ProductsInCart, ProductsInOrder } = require("./index")

const initModels = () => {
    //1 to many relation => Users and products
    Users.hasMany(Products, { as: "product", foreignKey: "user_id" });
    Products.belongsTo(Users, { as: "customer", foreignKey: "user_id" });

    //1 to 1 relation => Cart and Users
    Users.hasOne(Cart, { as: "cart", foreignKey: "user_id" });
    Cart.belongsTo(Users, { as: "user", foreignKey: "user_id" });

    //1 to many relation => Order and Users
    Users.hasMany(Order, { as: "order", foreignKey: "user_id" });
    Order.belongsTo(Users, { as: "author", foreignKey: "user_id" });

    //ProductInCart Relations
    ProductsInCart.belongsTo(Products, { as: "item", foreignKey: "product_id" });
    Products.hasOne(ProductsInCart, { as: "container", foreignKey: "product_id" });

    ProductsInCart.belongsTo(Cart, { as: "cart", foreignKey: "cart_id" });
    Cart.hasMany(ProductsInCart, { as: "products", foreignKey: "cart_id" });

    //ProductsInOrder Relations
    Order.hasMany(ProductsInOrder, { as: "productOrder", foreignKey: "order_id" });
    ProductsInOrder.belongsTo(Order, { as: "order", foreignKey: "order_id" });

    ProductsInOrder.belongsTo(Products, { as: "product", foreignKey: "product_id" });
    Products.hasOne(ProductsInOrder, { as: "bill", foreignKey: "product_id" });

}

module.exports = initModels