// vendas
// id, cliente_id, data,total

import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Cliente } from './Cliente.js';

export const Venda = sequelize.define('venda', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false
  },
  total: {
    type: DataTypes.DECIMAL(9,2),
    //allowNull: false
    defaultValue: 0
  }
});

Venda.belongsTo(Cliente, {
    foreignKey: {
      name: 'cliente_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Cliente.hasMany(Venda, {
    foreignKey: 'cliente_id'
  })