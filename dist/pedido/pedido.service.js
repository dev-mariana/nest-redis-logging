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
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./pedido.entity");
const typeorm_2 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
const statuspedido_enum_1 = require("./enum/statuspedido.enum");
const itempedido_entity_1 = require("./itempedido.entity");
const produto_entity_1 = require("../produto/produto.entity");
let PedidoService = class PedidoService {
    constructor(pedidoRepository, usuarioRepository, produtoRepository) {
        this.pedidoRepository = pedidoRepository;
        this.usuarioRepository = usuarioRepository;
        this.produtoRepository = produtoRepository;
    }
    async buscaUsuario(id) {
        const usuario = await this.usuarioRepository.findOneBy({ id });
        if (usuario === null) {
            throw new common_1.NotFoundException('O usuário não foi encontrado');
        }
        return usuario;
    }
    trataDadosDoPedido(dadosDoPedido, produtosRelacionados) {
        dadosDoPedido.itensPedido.forEach((itemPedido) => {
            const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId);
            if (produtoRelacionado === undefined) {
                throw new common_1.NotFoundException(`O produto com id ${itemPedido.produtoId} não foi encontrado`);
            }
            if (itemPedido.quantidade > produtoRelacionado.quantidadeDisponivel) {
                throw new common_1.BadRequestException(`A quantidade solicitada (${itemPedido.quantidade}) é maior do que a disponível (${produtoRelacionado.quantidadeDisponivel}) para o produto ${produtoRelacionado.nome}.`);
            }
        });
    }
    async cadastraPedido(usuarioId, dadosDoPedido) {
        const usuario = await this.buscaUsuario(usuarioId);
        const produtosIds = dadosDoPedido.itensPedido.map((itemPedido) => itemPedido.produtoId);
        const produtosRelacionados = await this.produtoRepository.findBy({
            id: (0, typeorm_2.In)(produtosIds),
        });
        const pedidoEntity = new pedido_entity_1.PedidoEntity();
        pedidoEntity.status = statuspedido_enum_1.StatusPedido.EM_PROCESSAMENTO;
        pedidoEntity.usuario = usuario;
        this.trataDadosDoPedido(dadosDoPedido, produtosRelacionados);
        const itensPedidoEntidades = dadosDoPedido.itensPedido.map((itemPedido) => {
            const produtoRelacionado = produtosRelacionados.find((produto) => produto.id === itemPedido.produtoId);
            const itemPedidoEntity = new itempedido_entity_1.ItemPedidoEntity();
            itemPedidoEntity.produto = produtoRelacionado;
            itemPedidoEntity.precoVenda = produtoRelacionado.valor;
            itemPedidoEntity.quantidade = itemPedido.quantidade;
            itemPedidoEntity.produto.quantidadeDisponivel -= itemPedido.quantidade;
            return itemPedidoEntity;
        });
        const valorTotal = itensPedidoEntidades.reduce((total, item) => {
            return total + item.precoVenda * item.quantidade;
        }, 0);
        pedidoEntity.itensPedido = itensPedidoEntidades;
        pedidoEntity.valorTotal = valorTotal;
        const pedidoCriado = await this.pedidoRepository.save(pedidoEntity);
        return pedidoCriado;
    }
    async obtemPedidosDeUsuario(usuarioId) {
        const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
        if (usuario === null) {
            throw new common_1.NotFoundException('O usuário não foi encontrado.');
        }
        return this.pedidoRepository.find({
            where: {
                usuario: { id: usuarioId },
            },
            relations: {
                usuario: true,
            },
        });
    }
    async atualizaPedido(id, dto) {
        const pedido = await this.pedidoRepository.findOneBy({ id });
        if (pedido === null) {
            throw new common_1.NotFoundException('O pedido não foi encontrado.');
        }
        Object.assign(pedido, dto);
        return this.pedidoRepository.save(pedido);
    }
};
PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pedido_entity_1.PedidoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(produto_entity_1.ProdutoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PedidoService);
exports.PedidoService = PedidoService;
//# sourceMappingURL=pedido.service.js.map