import { StatusPedido } from './enum/statuspedido.enum';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ItemPedidoEntity } from './itempedido.entity';
export declare class PedidoEntity {
    id: string;
    valorTotal: number;
    status: StatusPedido;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    usuario: UsuarioEntity;
    itensPedido: ItemPedidoEntity[];
}
