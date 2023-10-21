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
exports.ProdutoEntity = void 0;
const typeorm_1 = require("typeorm");
const produto_imagem_entity_1 = require("./produto-imagem.entity");
const produto_caracteristica_entity_1 = require("./produto-caracteristica.entity");
const itempedido_entity_1 = require("../pedido/itempedido.entity");
let ProdutoEntity = class ProdutoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor', nullable: false }),
    __metadata("design:type", Number)
], ProdutoEntity.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'quantidade_disponivel', nullable: false }),
    __metadata("design:type", Number)
], ProdutoEntity.prototype, "quantidadeDisponivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', length: 255, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'categoria', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], ProdutoEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_imagem_entity_1.ProdutoImagemEntity, (produtoImagemEntity) => produtoImagemEntity.produto, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], ProdutoEntity.prototype, "imagens", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_caracteristica_entity_1.ProdutoCaracteristicaEntity, (produtoCaracteristicaEntity) => produtoCaracteristicaEntity.produto, { cascade: true, eager: true }),
    __metadata("design:type", Array)
], ProdutoEntity.prototype, "caracteristicas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => itempedido_entity_1.ItemPedidoEntity, (itemPedido) => itemPedido.produto),
    __metadata("design:type", Array)
], ProdutoEntity.prototype, "itensPedido", void 0);
ProdutoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'produtos' })
], ProdutoEntity);
exports.ProdutoEntity = ProdutoEntity;
//# sourceMappingURL=produto.entity.js.map