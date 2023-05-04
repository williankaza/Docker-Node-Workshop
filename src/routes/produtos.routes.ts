import { Request, Response, Router } from "express";
import ProdutoRepository from "../repositories/produto.repository";

const produtoRouter = Router();
const produtoRepository = new ProdutoRepository();

produtoRouter.get('/', (request: Request, response: Response)=>{
    return response.status(200).json(produtoRepository.getAll())
})

produtoRouter.post('/', ( request: Request, response: Response )=>{
    const { nome } = request.body;
    return response.status(200).json(produtoRepository.create(nome));
})

export default produtoRouter;