import Produto from "../models/produto";

class ProdutoRepository{
    private produtos: Array<Produto>;

    constructor(){
        this.produtos = [];
    }

    public create(nome: string): Produto{
        const novoProduto = new Produto(nome);
        this.produtos.push(novoProduto);

        return novoProduto;
    }

    public getAll(): Array<Produto>{
        return this.produtos;
    }
}

export default ProdutoRepository;