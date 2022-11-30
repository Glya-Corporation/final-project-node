const {Cart} = require("../models");

class cartServices{
    static async create(newCart){
        try {
           const result = await Cart.create(newCart);
           return result; 
        } catch (error) {
            throw(error);
        }
    }
}

module.exports = cartServices;