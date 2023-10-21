import { ProdutoEntity } from '../produto.entity';
export declare class CaracteristicaProdutoDTO {
    id: string;
    nome: string;
    descricao: string;
    produto: ProdutoEntity;
}
export declare class ImagemProdutoDTO {
    id: string;
    url: string;
    descricao: string;
    produto: ProdutoEntity;
}
export declare class CriaProdutoDTO {
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagens: ImagemProdutoDTO[];
    categoria: string;
}
