import mongoose from 'mongoose'

const produtoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  quantidade: Number,
  urlDownload: String,
  tamanhoArquivo: Number,
  formatoArquivo: String,
  licenca: String,
  peso: Number,
  frete: Number
});

const Produtos = mongoose.model('Produtos', produtoSchema);

export default Produtos;

