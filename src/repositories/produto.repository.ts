import Produto from "../models/produto";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Produto)
class ProdutoRepository extends Repository<Produto>{
}

export default ProdutoRepository;