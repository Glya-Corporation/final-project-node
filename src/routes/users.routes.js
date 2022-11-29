const { Router } = require("express");
const { userRegister, userOrders, userCart, addProduct } = require("../controllers");
const authenticate = require("../middlewares/auth.middleware");

const router = Router();

router.post("/users", userRegister);

router.get("/users/:id/orders", userOrders);

router.get("/users/:id/cart", userCart);

router.post("/users/:id/cart", addProduct);


module.exports = router;

/* 
- Debe contener los siguientes puntos:
    - Crear usuarios y encriptar sus contraseñas con Bcrypt +++
    - Iniciar sesión y generar JWT +++
    - Crear un nuevo producto, incluyendo una imagen +++
    - Obtener todos los productos que su cantidad sea mayor que 0, debe incluir el nombre del usuario quien esta vendiendo el producto +++
    - Agregar un producto al carrito
    - Mostrar todos los productos que el usuario tiene hasta el momento en su carrito
    - Realizar una compra, todos los productos en el carrito se marcan como comprados y el carrito cambia a status ‘purchased’
    - Ver todas las ordenes del usuario
    - Mandar un correo cuando un usuario crea una cuenta y cuando realiza una compra
*/


// $2b$08$SXVYiKkCT3VgEtCBD1uGVu5oD6XcWhuu8U4C4Wy7UPn1kHh5/GjUG