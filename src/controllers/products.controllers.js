const { ProductServices } = require("../services");

const createProduct = async (req, res, next) => {
    try {
        const newProduct = req.body;
        const result = await ProductServices.create(newProduct);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Faltan datos",
        });
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const result = await ProductServices.getAll();
        res.status(200).json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "",
          });
    }
}

module.exports = { createProduct, getAllProducts }