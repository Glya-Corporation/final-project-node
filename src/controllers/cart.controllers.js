const {cartServices} = require("../services");

const createCart = async (req, res, next) => {
    try {
        const {userId, totalPrice} = req.body;
        const newCart = {userId, totalPrice};
        const result = await cartServices.create(newCart);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
}

module.exports = {createCart};