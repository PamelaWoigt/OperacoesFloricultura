// produtos
// id, nome, tipo, preco, quant

import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Produto = sequelize.define('produto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  quant: {
    type: DataTypes.INTEGER(4).UNSIGNED,
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9,2),
    allowNull: false
  }
});