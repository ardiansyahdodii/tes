import {Sequelize} from "sequelize";

const conn = new Sequelize('ardiansyahdodii', 'ardiansyahdodii', 'qwerty123', {
    host: "localhost",
    dialect: "mysql"
});

export default conn;