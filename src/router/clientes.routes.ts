import { Request, Response, Router } from "express";

const clienteRouter = Router()

clienteRouter.get('/', (request: Request, response: Response)=>{
    return response.json([
        {
            codigo: 1,
            cliente: "Willian"
        },
        {
            codigo: 2,
            cliente: "Maria"
        },
        {
            codigo: 3,
            cliente: "João"
        }
    ])
})

export default clienteRouter;