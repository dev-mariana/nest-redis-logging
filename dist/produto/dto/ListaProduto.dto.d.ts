declare class ListaCaracteristicaProdutoDTO {
    nome: string;
    descricao: string;
}
declare class ListaImagemProdutoDTO {
    url: string;
    descricao: string;
}
export declare class ListaProdutoDTO {
    readonly id: string;
    readonly nome: string;
    readonly caracteristicas: ListaCaracteristicaProdutoDTO[];
    readonly imagens: ListaImagemProdutoDTO[];
    constructor(id: string, nome: string, caracteristicas: ListaCaracteristicaProdutoDTO[], imagens: ListaImagemProdutoDTO[]);
}
export {};
