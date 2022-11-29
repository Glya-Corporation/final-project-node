const db = require("../utils/database");
const users = require("./users.models")
const { DataTypes} = require("sequelize");

const cart = db.define("cart",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id"
    },
    totalPrice:{
        type:DataTypes.INTEGER,
        field:"total_price",
        allowNull: false
    },

})

module.exports = cart