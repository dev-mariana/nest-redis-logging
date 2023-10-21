import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { ProdutoService } from "./produto.service";
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    criaNovo(dadosProduto: CriaProdutoDTO): Promise<{
        mensagem: string;
        produto: import("./produto.entity").ProdutoEntity;
    }>;
    listaTodos(): Promise<import("./dto/ListaProduto.dto").ListaProdutoDTO[]>;
    listaUm(id: string): Promise<import("./produto.entity").ProdutoEntity>;
    atualiza(id: string, dadosProduto: AtualizaProdutoDTO): Promise<{
        mensagem: string;
        produto: import("./produto.entity").ProdutoEntity;
    }>;
    remove(id: string): Promise<{
        mensagem: string;
        produto: void;
    }>;
}
