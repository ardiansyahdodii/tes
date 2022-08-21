import {Sequelize} from "sequelize";
import conn from "../config/koneksi.js";

const {DataTypes} = Sequelize;

const User = conn.define('user',{
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    },
},{
    freezeTableName: true
});

export default User;