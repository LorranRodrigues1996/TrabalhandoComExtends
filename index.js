import Database from "./database/Database.js";
import express from 'express';
import cors from 'cors'
import produtoRouter from './routes/produtoRouter.js'
import ProdutoDigital from "./controller/ProdutoDigitalController.js";
var app = express()
app.use(cors())
app.use(express.json())
const port = 5000;
Database()
// const produtoDigital = new ProdutoDigital(
//     "Curso de JavaScript",
//     99.90,
//     1,
//     "https://exemplo.com/curso",
//     500,
//     "MP4",
//     "individual"
// );

// console.log(produtoDigital);
app.use("/api/produtos", produtoRouter)
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});