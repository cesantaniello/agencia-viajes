import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const db = new Sequelize('agenciaviajes', 'root', '', {
    host: '127.0.0.1',
    port: 3307,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;