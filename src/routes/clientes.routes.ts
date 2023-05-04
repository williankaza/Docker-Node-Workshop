import { Request, Response, Router } from "express";
import ClienteRepository from "../repositories/cliente.repository";

const clienteRouter = Router()
const clienteRepository = new ClienteRepository();

clienteRouter.get('/', (request: Request, response: Response)=>{
    return response.status(200).json(clienteRepository.getAll())
})

clienteRouter.post('/', ( request: Request, response: Response )=>{
    const { nome } = request.body;
    return response.status(200).json(clienteRepository.create(nome));
})

export default clienteRouter;