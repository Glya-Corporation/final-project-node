const db = require("../utils/database");
const users = require("./users.models")
const { DataTypes} = require("sequelize");

const products = db.define("products",{
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
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    availableQty:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        allowNull:false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:"user_id"
    }
})

module.exports = products
