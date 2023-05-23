import { Router } from "express"
import { vendaCreate, vendaIndex } from "./controllers/vendaController.js"
import { }

const router = Router()

router.get('/vendas', vendaIndex)
      .post('/vendas', vendaCreate)

      router.ge
export default router