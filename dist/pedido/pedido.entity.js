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
exports.PedidoEntity = void 0;
const typeorm_1 = require("typeorm");
const statuspedido_enum_1 = require("./enum/statuspedido.enum");
const usuario_entity_1 = require("../usuario/usuario.entity");
const itempedido_entity_1 = require("./itempedido.entity");
let PedidoEntity = class PedidoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], PedidoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'valor_total', nullable: false }),
    __metadata("design:type", Number)
], PedidoEntity.prototype, "valorTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', enum: statuspedido_enum_1.StatusPedido, nullable: false }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], PedidoEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity, (usuario) => usuario.pedidos),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], PedidoEntity.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => itempedido_entity_1.ItemPedidoEntity, (itemPedido) => itemPedido.pedido, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], PedidoEntity.prototype, "itensPedido", void 0);
PedidoEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'pedidos' })
], PedidoEntity);
exports.PedidoEntity = PedidoEntity;
//# sourceMappingURL=pedido.entity.js.map