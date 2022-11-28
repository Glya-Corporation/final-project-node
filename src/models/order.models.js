const db = require("../utils/database");
const users = require("./users.models")
const { DataTypes } = require("sequelize");

const order = db.define("order", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        field: "total_price",
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = order