const db = require("../utils/database");
const {DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

const code = () => Math.ceil( Math.random() * 999999 );

/**
 * @openapi
 *  components:
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
 *           example: 123123
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
