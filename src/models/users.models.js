const db = require("../utils/database");

const {DataTypes} = require("sequelize");

const bcrypt = require("bcrypt");


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
