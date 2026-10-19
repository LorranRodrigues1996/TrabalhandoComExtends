import Produtos from "../model/Produto.js";
import Produto from "./produtoController.js";


class ProdutoDigital extends Produto {
    constructor(nome, preco, quantidade, urlDownload, tamanhoArquivo, formatoArquivo, licenca){
        super(nome, preco, quantidade)
        this.urlDownload = urlDownload
        this.tamanhoArquivo = tamanhoArquivo
        this.formatoArquivo = formatoArquivo
        this.licenca = licenca
    }

    salvarNovoProdutoDigital = async (req, res) => {
        try {
            const dados = await Object.assign(this, req.body)
            const novoProduto = await Produtos.create(dados)
            await novoProduto.save()
            return res.status(200).json({success: true, message: "Produto salvo com sucesso no banco de dados", novoProduto})
        } catch (error) {
            console.log(error)
            return res.status(500).json({success: false, message: "Erro interno ao salvar dados no banco de dados", error})
        }
    }
}

export default ProdutoDigital