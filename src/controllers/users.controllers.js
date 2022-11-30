const { UserServices } = require("../services");
const template = require("../template/template");
const transporter = require('../utils/mailer');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const dataCreated = await UserServices.create(newUser);
    const { userCreated, cart } = dataCreated;
    const result = { userCreated: userCreated, cart: cart };
    res.status(201).json(result);
    console.log(userCreated);
    transporter.sendMail({
      from: "<alfonsouzcategui2@gmail.com>",
      to: userCreated.email,
      subject: "Bienvenido a mi Ecommerce",
      text: `¡Hola! ${userCreated.name} bienvenido a la mejor aplicacion de mensajería jamás antes vista`,
      html: template(userCreated.name, userCreated.codeVerifi)
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
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

const addProductToCart = async (req, res, next) => {
  try {
    const newItem = req.body;
    const result = await UserServices.addToCart(newItem);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "",
    });
  }
}

const purchaseCart = async (req, res, next) => {
  try {
    const { cartId } = req.body;
    const result = await UserServices.purchaseCart(cartId);
    res.status(200).json(result)
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
  userCart,
  addProductToCart,
  purchaseCart
};