const { Products } = require("../models")
const { Op } = require("sequelize")

class productServices {
    static async create(newProduct) {
        try {
            const result = await Products.create(newProduct)
            return result
        } catch (error) {
            throw (error)
        }
    }

    static async getAll() {
        try {
            const result = await Products.findAll({
                where: { availableQty: { [Op.ne]: 0 } }
            })
            return result
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = productServices