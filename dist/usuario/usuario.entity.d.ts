import { PedidoEntity } from '../pedido/pedido.entity';
export declare class UsuarioEntity {
    id: string;
    nome: string;
    email: string;
    senha: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    pedidos: PedidoEntity[];
}
