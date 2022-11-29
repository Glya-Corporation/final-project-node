const { Cart } = require("../models");

class CartServices {
    static async create(newCart) {
        try {
            const result = await Cart.create(newCart);
            console.log('result')
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CartServices;