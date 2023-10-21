import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { Repository } from "typeorm";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
export declare class UsuarioService {
    private readonly usuarioRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<UsuarioEntity>;
    listUsuarios(): Promise<ListaUsuarioDTO[]>;
    buscaPorEmail(email: string): Promise<string>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<UsuarioEntity>;
    deletaUsuario(id: string): Promise<void>;
}
