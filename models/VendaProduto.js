// venda_produtos
// id, venda_id, produto_id, quant, preco

import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Venda } from './Venda.js';
import { Produto } from './Produto.js';

export const VendaProduto = sequelize.define('vendaproduto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  quant: {
    type: DataTypes.INTEGER(4),
    allowNull: false
  },
  preco: {
    type: DataTypes.DECIMAL(9,2),
    //allowNull: false
    defaultValue: 0
  }
}, {
  tableName: "venda_produtos",
  timestamps: false
});

VendaProduto.belongsTo(Venda, {
    foreignKey: {
      name: 'venda_id',
      allowNull: false
    },
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
  })
  
  Venda.hasMany(VendaProduto, {
    foreignKey: 'venda_id'
  })

VendaProduto.belongsTo(Produto, {
  foreignKey: {
    name: 'produto_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})
