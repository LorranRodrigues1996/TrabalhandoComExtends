import Produtos from "../model/Produto.js"


class Produto {
    constructor(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    addProduto = async (req, res) => {
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

export default Produto