import { ListaProdutoDTO } from "./dto/ListaProduto.dto";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>);
    criaProduto(dadosProduto: CriaProdutoDTO): Promise<ProdutoEntity>;
    listProdutos(): Promise<ListaProdutoDTO[]>;
    listProduto(id: string): Promise<ProdutoEntity>;
    atualizaProduto(id: string, novosDados: AtualizaProdutoDTO): Promise<ProdutoEntity>;
    deletaProduto(id: string): Promise<void>;
}
