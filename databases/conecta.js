import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "floricultura", "root", "senacrs", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});