import Cliente from "../models/cliente";

class ClienteRepository{
    private clientes: Array<Cliente>;

    constructor(){
        this.clientes = [];
    }

    public create(nome: string): Cliente{
        const novoCliente = new Cliente(nome);
        this.clientes.push(novoCliente);

        return novoCliente;
    }

    public getAll(): Array<Cliente> {
        return this.clientes;
    }
}

export default ClienteRepository;