"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const usuario_entity_1 = require("./usuario.entity");
const typeorm_2 = require("typeorm");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async criaUsuario(dadosDoUsuario) {
        const usuarioEntity = new usuario_entity_1.UsuarioEntity();
        Object.assign(usuarioEntity, dadosDoUsuario);
        return this.usuarioRepository.save(usuarioEntity);
    }
    async listUsuarios() {
        const usuariosSalvos = await this.usuarioRepository.find();
        const usuariosLista = usuariosSalvos.map((usuario) => new ListaUsuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.nome));
        return usuariosLista;
    }
    async buscaPorEmail(email) {
        const checkEmail = await this.usuarioRepository.findOne({
            where: { email },
        });
        if (checkEmail === null)
            throw new common_1.NotFoundException("O email não foi encontrado.");
        return email;
    }
    async atualizaUsuario(id, novosDados) {
        const usuario = await this.usuarioRepository.findOneBy({ id });
        if (usuario === null)
            throw new common_1.NotFoundException("O usuário não foi encontrado.");
        Object.assign(usuario, novosDados);
        return this.usuarioRepository.save(usuario);
    }
    async deletaUsuario(id) {
        const resultado = await this.usuarioRepository.delete(id);
        if (!resultado.affected)
            throw new common_1.NotFoundException("O usuário não foi encontrado.");
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map