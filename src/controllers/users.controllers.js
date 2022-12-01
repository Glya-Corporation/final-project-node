const { UserServices } = require("../services");
const { template, template2 } = require("../template/index");
const transporter = require('../utils/mailer');

const userRegister = async (req, res, next) => {
  try {
    const newUser = req.body;
    const dataCreated = await UserServices.create(newUser);
    const { userCreated, cart } = dataCreated;
    const result = { userCreated: userCreated, cart: cart };
    res.status(201).json(result);
    transporter.sendMail({
      from: "<alfonsouzcategui2@gmail.com>",
      to: userCreated.email,
      subject: "Welcome to my store",
      text: `¡Hello! ${userCreated.name} this is your verification code: ${userCreated.codeVerify}`,
      html: template(userCreated.name, userCreated.codeVerify)
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
    const id = req.params.id;
    const user = await UserServices.getPurchaseCart(id);
    transporter.sendMail({
      from: "<alfonsouzcategui2@gmail.com>",
      to: user.email,
      subject: "Successful purchase",
      text: `¡hi! ${user.name} It looks like you have made a successful purchase. I will show you the products you bought`,
      html: template2(user)
    });
    const result = await UserServices.purchaseCart(cartId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error)
    /* next({
      status: 400,
      errorContent: error,
      message: "",
    }); */
  }
}

const userVerify = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { codeVerify } = req.body;
    const result = await UserServices.updateVerify(id, codeVerify);
    if(result) res.status(200).json({status: "user verified", result});
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Verification error, invalid code",
    });
  }
}

module.exports = {
  userRegister,
  userOrders,
  userCart,
  addProductToCart,
  purchaseCart,
  userVerify
};