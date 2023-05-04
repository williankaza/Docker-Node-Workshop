import { Request, Response, Router } from "express";
import { getCustomRepository } from "typeorm";
import ProdutoRepository from "../repositories/produto.repository";

const produtoRouter = Router();
const produtoRepository = new ProdutoRepository();

produtoRouter.get('/', async (request: Request, response: Response)=>{
    const produtoRepository = getCustomRepository(ProdutoRepository)

    return response.status(200).json(await produtoRepository.find())
})

produtoRouter.post('/', async ( request: Request, response: Response )=>{
    const { nome } = request.body;
    const produtoRepository = getCustomRepository(ProdutoRepository)
    const novoProduto = produtoRepository.create({nome})

    await produtoRepository.save(novoProduto)
    return response.status(200).json(novoProduto);
})

export default produtoRouter;