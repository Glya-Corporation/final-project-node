const { Users, ProductsInOrder, Order, Products, Cart, ProductsInCart } = require("../models");

class UserServices {
  static async create(user) {
    try {
      const userCreated = await Users.create(user);
      const { id } = userCreated;
      const cart = await Cart.create({ userId: id, totalPrice: 0, status: 'empty' });
      const result = { userCreated: userCreated, cart: cart };
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
          as: "order",
          attributes: ["totalPrice", "status"],
          include: {
            model: ProductsInOrder,
            as: "productOrder",
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
          as: "cart",
          attributes: ["totalPrice", "status"],
          include: {
            model: ProductsInCart,
            where: {status: 'in queue'},
            as: "products",
            attributes: ["productId", "quantity", "price", "status"],
          }
        }
      })
      return result
    } catch (error) {
      throw (error)
    }
  }

  static async addToCart(newItem) {
    try {
      newItem.status = 'in queue';
      const result = await ProductsInCart.create(newItem);
      const { quantity, price, cartId } = result;
      const cart = await Cart.findOne({
        where: { id: cartId },
        attributes: ['totalPrice']
      });
      const updateCart = await Cart.update({ status: 'pending' }, {
        where: {
          id: cartId
        }
      });

      const totalPrice = Number(cart.dataValues.totalPrice) + (Number(quantity * price));
      const updatePrice = await Cart.update({ totalPrice: totalPrice }, {
        where: {
          id: cartId
        }
      });
      return result;
    } catch (error) {
      throw (error);
    }
  }

  static async purchaseCart(cartId) {
    try {
      const result = await ProductsInCart.update({ status: "purchased" }, {
        where: {
          cartId: Number(cartId)
        }
      });
      const cart = await Cart.update({ status: "purchased", totalPrice: 0 }, {
        where: {
          id: Number(cartId)
        }
      });
      return result, cart;
    } catch (error) {
      throw (error);
    }
  }
}

module.exports = UserServices;