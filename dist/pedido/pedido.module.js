"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModule = void 0;
const common_1 = require("@nestjs/common");
const pedido_service_1 = require("./pedido.service");
const pedido_controller_1 = require("./pedido.controller");
const typeorm_1 = require("@nestjs/typeorm");
const pedido_entity_1 = require("./pedido.entity");
const usuario_entity_1 = require("../usuario/usuario.entity");
const produto_entity_1 = require("../produto/produto.entity");
let PedidoModule = class PedidoModule {
};
PedidoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pedido_entity_1.PedidoEntity, usuario_entity_1.UsuarioEntity, produto_entity_1.ProdutoEntity]),
        ],
        controllers: [pedido_controller_1.PedidoController],
        providers: [pedido_service_1.PedidoService],
    })
], PedidoModule);
exports.PedidoModule = PedidoModule;
//# sourceMappingURL=pedido.module.js.map