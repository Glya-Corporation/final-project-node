const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

const code = () => Math.ceil( Math.random() * 999999 );

/**
 * @openapi
 *  components:
 *   securitySchemes:
 *    bearerAuth:
 *     type: http
 *     scheme: bearer
 *     bearerFormat: jwt
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: example
 *         email:
 *           type: string
 *           example: example@gmail.com
 *         password:
 *           type: string
 *           example: example@gmail.com
 *     Register:
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *        example: example
 *       email:
 *        type: string
 *        example: example@gmail.com
 *       password:
 *        type: string
 *        example: 123123
 *     Login:
 *      type: object
 *      properties:
 *       email:
 *        type: string
 *        example: example@gmail.com
 *       password:
 *        type: string
 *        example: 111222
 *     AddToCart:
 *      type: object
 *      properties:
 *       cartId:
 *        type: integer
 *        example: 1
 *       productId:
 *        type: integer
 *        example: 1
 *       quantity:
 *        type: integer
 *        example: 12
 *       price:
 *        type: float
 *        example: 10
 *     Purchase:
 *      type: object
 *      properties:
 *       cartId:
 *        type: integer
 *        example: 1
 *     Verify:
 *      type: object
 *      properties:
 *       codeVerify:
 *        type: integer
 *        example: 123456
 *     CreateProduct:
 *      type: object
 *      properties:
 *       name:
 *        type: string
 *        example: Product
 *       price:
 *        type: float
 *        example: 11
 *       availableQty:
 *        type: integer
 *        example: 1
 *       userId:
 *        type: integer
 *        example: 1
 *       urlImg:
 *        type: string
 *        example: htttp://www.exampleUrl.com/
 */

const users = db.define("users",{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
          }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'unverified'
    },
    codeVerify: {
      type: DataTypes.INTEGER,
      defaultValue: code(),
      field: 'code_verify'
    }
},
{
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = bcrypt.hashSync(password, 8);
        user.password = hash;
      },
    },
  })

module.exports = users
