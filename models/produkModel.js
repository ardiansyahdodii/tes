import {Sequelize} from "sequelize";
import conn from "../config/koneksi.js";
const {DataTypes} = Sequelize;

const Produk = conn.define('produk',{
    id_produk: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    kode: DataTypes.INTEGER,
    nama_produk: DataTypes.STRING,
    harga: DataTypes.INTEGER
},{
    freezeTableName: true
});

export default Produk;