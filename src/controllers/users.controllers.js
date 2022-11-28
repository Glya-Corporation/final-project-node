const { UserServices } = require("../services");

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Faltan datos",
    });
  }
};

const userOrders = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await UserServices.getAllOrders(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
}

const userCart = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await UserServices.getCart(id);
    res.status(200).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
}


module.exports = {
  userRegister,
  userOrders,
  userCart
};