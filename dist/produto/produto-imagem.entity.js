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
exports.ProdutoImagemEntity = void 0;
const typeorm_1 = require("typeorm");
const produto_entity_1 = require("./produto.entity");
let ProdutoImagemEntity = class ProdutoImagemEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProdutoImagemEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'url', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoImagemEntity.prototype, "url", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'descricao', length: 100, nullable: false }),
    __metadata("design:type", String)
], ProdutoImagemEntity.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => produto_entity_1.ProdutoEntity, (produto) => produto.imagens, {
        orphanedRowAction: 'delete',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", produto_entity_1.ProdutoEntity)
], ProdutoImagemEntity.prototype, "produto", void 0);
ProdutoImagemEntity = __decorate([
    (0, typeorm_1.Entity)('produto_imagens')
], ProdutoImagemEntity);
exports.ProdutoImagemEntity = ProdutoImagemEntity;
//# sourceMappingURL=produto-imagem.entity.js.map