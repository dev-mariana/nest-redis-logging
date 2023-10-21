import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";
import { UsuarioService } from "./usuario.service";
export declare class UsuarioController {
    private usuarioService;
    constructor(usuarioService: UsuarioService);
    criaUsuario(dadosDoUsuario: CriaUsuarioDTO): Promise<{
        usuario: ListaUsuarioDTO;
        messagem: string;
    }>;
    listUsuarios(): Promise<ListaUsuarioDTO[]>;
    atualizaUsuario(id: string, novosDados: AtualizaUsuarioDTO): Promise<{
        usuario: import("./usuario.entity").UsuarioEntity;
        messagem: string;
    }>;
    removeUsuario(id: string): Promise<{
        usuario: void;
        messagem: string;
    }>;
}
