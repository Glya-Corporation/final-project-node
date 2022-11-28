const { Users, ProductsInOrder, Order, Products, Cart, ProductsInCart } = require("../models");

class UserServices {
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAllOrders(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["name"],
        include: {
          model: Order,
          as: "Order",
          attributes: ["totalPrice"],
          include: {
            model: ProductsInOrder,
            as: "Items",
            attributes: ["productId", "quantity", "price"],
          }

        }
      })
      return result
    } catch (error) {
      throw (error)
    }
  }

  static async getCart(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["name"],
        include: {
          model: Cart,
          as: "Cart",
          attributes: ["totalPrice"],
          include: {
            model: ProductsInCart,
            as: "Product",
            attributes: ["productId", "quantity", "price"],
          }
        }
      })
      return result
    } catch (error) {
      throw (error)
    }
  }
}

module.exports = UserServices;