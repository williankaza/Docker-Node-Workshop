import { Request, Response, Router } from "express";

const produtoRouter = Router();

produtoRouter.get('/', (request: Request, response: Response)=>{
    //const body = request.body;

    return response.json([
        {
            codigo: 3,
            nome: "trento"
        },
        {
            codigo: 4,
            nome: "Celular"
        }
    ])
})


export default produtoRouter;