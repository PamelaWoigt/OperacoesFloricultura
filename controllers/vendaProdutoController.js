import { Produto } from '../models/Produto.js';
import { Venda } from "../models/Venda.js";
import { VendaProduto } from '../models/VendaProduto.js';

export const vendaProdutoIndex = async (req, res) => {
  try {
    const vendaProdutos = await VendaProduto.findAll(
      //{ include: [Carro, Cliente] }
    );
    res.status(200).json(vendaProdutos)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const vendaProdutoCreate = async (req, res) => {
    //id, venda_id, produto_id, quant, preco
  const { venda_id, produto_id, preco, quant } = req.body

  // se não informou estes atributos
  if (!venda_id || !produto_id || !preco || !quant) {
    res.status(400).json({ id: 0, msg: "Erro... Informe venda_id, produto_id, preco e quant" })
    return
  }

  try {
    const vendaProdutos = await VendaProduto.create({
        venda_id, produto_id, preco, quant
    }, {transaction: t});

    await Produto.decrement('quant')
    res.status(201).json(vendaProdutos)
  } catch (error) {
    res.status(400).send(error)
  }
}


// 4. Criar a vendaProdutoController para incluir um produto na venda
//    com transaÃ§Ã£o (diminuir quantidade em estoque e aumentar valor
//    total da venda) e listar os registros (com dados do produto)

// First, we start a transaction from your connection and save it into a variable
const teste = await sequelize.transaction();

try {

  // Then, we do some calls passing this transaction as an option:

  const user = await VendaProduto.create({
    quant: 1,
    preco: 102.10,
    produto_id: 1,
    venda_id: 1
  }, { transaction: teste });

  await user.addSibling({
    data: "16-05-2023",
    total: 102.10,
    cliente_id: 1
  }, { transaction: teste });

  // If the execution reaches this line, no errors were thrown.
  // We commit the transaction.
  await t.commit();

} catch (error) {

  // If the execution reaches this line, an error was thrown.
  // We rollback the transaction.
  await t.rollback();

}
