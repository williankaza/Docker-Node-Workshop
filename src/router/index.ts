import { Request, Response, Router } from "express";
import produtoRouter from "./produtos.routes";
import clienteRouter from "./clientes.routes";

const routes = Router();
routes.use("/produtos", produtoRouter);
routes.use("/clientes", clienteRouter);

routes.get('/teste', (request: Request, response: Response)=>{
    return response.json([
        {
            codigo: 1,
            nome: "teste"
        },
        {
            codigo: 2,
            nome: "borracha"
        }
    ])
})

export default routes;