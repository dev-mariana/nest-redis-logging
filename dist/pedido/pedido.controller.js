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
exports.PedidoController = void 0;
const common_1 = require("@nestjs/common");
const pedido_service_1 = require("./pedido.service");
const AtualizaPedido_dto_1 = require("./dto/AtualizaPedido.dto");
const CriaPedido_dto_1 = require("./dto/CriaPedido.dto");
let PedidoController = class PedidoController {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    async criaPedido(usuarioId, dadosDoPedido) {
        const pedidoCriado = await this.pedidoService.cadastraPedido(usuarioId, dadosDoPedido);
        return pedidoCriado;
    }
    async obtemPedidosDeUsuario(usuarioId) {
        const pedidos = await this.pedidoService.obtemPedidosDeUsuario(usuarioId);
        return pedidos;
    }
    atualizaPedido(pedidoId, dadosDeAtualizacao) {
        return this.pedidoService.atualizaPedido(pedidoId, dadosDeAtualizacao);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Query)('usuarioId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, CriaPedido_dto_1.CriaPedidoDTO]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "criaPedido", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('usuarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PedidoController.prototype, "obtemPedidosDeUsuario", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AtualizaPedido_dto_1.AtualizaPedidoDto]),
    __metadata("design:returntype", void 0)
], PedidoController.prototype, "atualizaPedido", null);
PedidoController = __decorate([
    (0, common_1.Controller)('pedidos'),
    __metadata("design:paramtypes", [pedido_service_1.PedidoService])
], PedidoController);
exports.PedidoController = PedidoController;
//# sourceMappingURL=pedido.controller.js.map