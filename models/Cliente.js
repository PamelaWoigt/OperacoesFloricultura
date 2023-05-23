// clientes
// // id, nome identidade, telefone, endereço

import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Cliente = sequelize.define('cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  identidade: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING(35),
    allowNull: false
  }
});

