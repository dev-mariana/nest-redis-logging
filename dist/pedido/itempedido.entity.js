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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPedidoEntity = void 0;
const typeorm_1 = require("typeorm");
const pedido_entity_1 = require("./pedido.entity");
const produto_entity_1 = require("../produto/produto.entity");
let ItemPedidoEntity = class ItemPedidoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ItemPedidoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantidade', nullable: false }),
    __metadata("design:type", Number)
], ItemPedidoEntity.prototype, "quantidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'preco_venda', nullable: false }),
    __metadata("design:type", Number)
], ItemPedidoEntity.prototype, "precoVenda", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pedido_entity_1.PedidoEntity, (pedido) => pedido.itensPedido, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", pedido_entity_1.PedidoEntity)
], ItemPedidoEntity.prototype, "pedido", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.ProdutoEntity, (produto) => produto.itensPedido, {
        cascade: ['update'],
    }),
    __metadata("design:type", produto_entity_1.ProdutoEntity)
], ItemPedidoEntity.prototype, "produto", void 0);
ItemPedidoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'itens_pedidos' })
], ItemPedidoEntity);
exports.ItemPedidoEntity = ItemPedidoEntity;
//# sourceMappingURL=itempedido.entity.js.map