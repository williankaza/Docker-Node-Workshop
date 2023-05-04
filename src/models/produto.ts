import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('produto')
class Produto{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

export default Produto