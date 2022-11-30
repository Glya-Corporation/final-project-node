const db = require("../utils/database");
const users = require("./users.models")
const { DataTypes } = require("sequelize");

const cart = db.define("cart", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "total_price"
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }

})

module.exports = cart