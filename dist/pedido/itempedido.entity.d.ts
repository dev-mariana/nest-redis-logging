import { PedidoEntity } from './pedido.entity';
import { ProdutoEntity } from '../produto/produto.entity';
export declare class ItemPedidoEntity {
    id: string;
    quantidade: number;
    precoVenda: number;
    pedido: PedidoEntity;
    produto: ProdutoEntity;
}
