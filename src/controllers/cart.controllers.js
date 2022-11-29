const { CartServices } = require('../services/cart.services');

const createCart = async (req, res, next) => {
  try {
    const newCart = req.body;
    const result = await CartServices.create(newCart);
    console.log(result)
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

module.exports = {
  createCart
};