import { uuid } from "uuidv4";

class Produto{
    id: string;
    nome: string;

    constructor(nome: string){
        this.id = uuid();
        this.nome = nome;
    }
}

export default Produto