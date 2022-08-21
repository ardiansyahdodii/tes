import { Sequelize } from "sequelize";
import conn from "../config/koneksi.js";
import User from "../models/userModel.js"
import Produk from "../models/produkModel.js"

const { DataTypes } = Sequelize;

const Transaksi = conn.define('transaksi', {
    id_transaksi: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_produk: DataTypes.INTEGER,
    id_user: DataTypes.INTEGER
}, {
    freezeTableName: true
});

User.hasMany(Transaksi);
User.belongsTo(User, {foreignKey: 'id_user'});

Produk.hasMany(Transaksi);
Produk.belongsTo(Produk, {foreignKey: 'id_produk'});

export default Transaksi;