import { CriaPedidoDTO } from './dto/CriaPedido.dto';
import { AtualizaPedidoDto } from './dto/AtualizaPedido.dto';
import { PedidoEntity } from './pedido.entity';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { ProdutoEntity } from '../produto/produto.entity';
export declare class PedidoService {
    private readonly pedidoRepository;
    private readonly usuarioRepository;
    private readonly produtoRepository;
    constructor(pedidoRepository: Repository<PedidoEntity>, usuarioRepository: Repository<UsuarioEntity>, produtoRepository: Repository<ProdutoEntity>);
    private buscaUsuario;
    private trataDadosDoPedido;
    cadastraPedido(usuarioId: string, dadosDoPedido: CriaPedidoDTO): Promise<PedidoEntity>;
    obtemPedidosDeUsuario(usuarioId: string): Promise<PedidoEntity[]>;
    atualizaPedido(id: string, dto: AtualizaPedidoDto): Promise<PedidoEntity>;
}
