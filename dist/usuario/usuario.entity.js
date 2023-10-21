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
exports.UsuarioEntity = void 0;
const pedido_entity_1 = require("../pedido/pedido.entity");
const typeorm_1 = require("typeorm");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 100, nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'email', length: 70, nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'senha', length: 255, nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pedido_entity_1.PedidoEntity, (pedido) => pedido.usuario),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "pedidos", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuarios' })
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map