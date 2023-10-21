import { ProdutoImagemEntity } from './produto-imagem.entity';
import { ProdutoCaracteristicaEntity } from './produto-caracteristica.entity';
import { ItemPedidoEntity } from '../pedido/itempedido.entity';
export declare class ProdutoEntity {
    id: string;
    nome: string;
    valor: number;
    quantidadeDisponivel: number;
    descricao: string;
    categoria: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    imagens: ProdutoImagemEntity[];
    caracteristicas: ProdutoCaracteristicaEntity[];
    itensPedido: ItemPedidoEntity[];
}
