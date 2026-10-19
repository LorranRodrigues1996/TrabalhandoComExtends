import express from 'express'
import Produto from '../controller/produtoController.js';
import ProdutoDigital from '../controller/ProdutoDigitalController.js';
const router = express.Router();
const produto = new Produto()
const produtoDigital = new ProdutoDigital()
router.post("/", produto.addProduto)
router.post("/salvaprodutodigital", produtoDigital.salvarNovoProdutoDigital)

export default router;