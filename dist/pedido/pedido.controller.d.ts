import { PedidoService } from './pedido.service';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';
import { CriaPedidoDTO } from './dto/CriaPedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    criaPedido(usuarioId: string, dadosDoPedido: CriaPedidoDTO): Promise<import("./pedido.entity").PedidoEntity>;
    obtemPedidosDeUsuario(usuarioId: string): Promise<import("./pedido.entity").PedidoEntity[]>;
    atualizaPedido(pedidoId: string, dadosDeAtualizacao: AtualizaPedidoDto): Promise<import("./pedido.entity").PedidoEntity>;
}
