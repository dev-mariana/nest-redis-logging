"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const produto_module_1 = require("./produto/produto.module");
const usuario_module_1 = require("./usuario/usuario.module");
const postgres_config_service_1 = require("./config/postgres.config.service");
const pedido_module_1 = require("./pedido/pedido.module");
const core_1 = require("@nestjs/core");
const filtro_de_excecao_global_1 = require("./filtros/filtro-de-excecao-global");
const cache_manager_1 = require("@nestjs/cache-manager");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            usuario_module_1.UsuarioModule,
            produto_module_1.ProdutoModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: postgres_config_service_1.PostgresConfigService,
                inject: [postgres_config_service_1.PostgresConfigService],
            }),
            pedido_module_1.PedidoModule,
            cache_manager_1.CacheModule.register({ isGlobal: true, ttl: 10000 }),
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: filtro_de_excecao_global_1.FiltroDeExcecaoGlobal,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map