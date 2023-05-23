import { Cliente } from '../models/Cliente.js';
import { Venda } from "../models/Venda.js";

export const vendaIndex = async (req, res) => {
  try {
    const vendas = await Venda.findAll(
      //{ include: [Carro, Cliente] }
    );
    res.status(200).json(vendas)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const vendaCreate = async (req, res) => {

  //id, cliente_id, data,total
  const { cliente_id, data, total } = req.body

  // se não informou estes atributos
  if (!cliente_id || !data || !total) {
    res.status(400).json({ id: 0, msg: "Erro... Informe cliente_id, data e total" })
    return
  }

  try {
    const vendas = await Venda.create({
      cliente_id, data, total
    });
    res.status(201).json(vendas)
  } catch (error) {
    res.status(400).send(error)
  }
}