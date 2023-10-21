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
exports.FiltroDeExcecaoGlobal = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let FiltroDeExcecaoGlobal = class FiltroDeExcecaoGlobal {
    constructor(adapterHost) {
        this.adapterHost = adapterHost;
    }
    catch(excecao, host) {
        console.log(excecao);
        const { httpAdapter } = this.adapterHost;
        const contexto = host.switchToHttp();
        const resposta = contexto.getResponse();
        const requisicao = contexto.getRequest();
        const { status, body } = excecao instanceof common_1.HttpException
            ? {
                status: excecao.getStatus(),
                body: excecao.getResponse(),
            }
            : {
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                body: {
                    statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: httpAdapter.getRequestUrl(requisicao),
                },
            };
        httpAdapter.reply(resposta, body, status);
    }
};
FiltroDeExcecaoGlobal = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [core_1.HttpAdapterHost])
], FiltroDeExcecaoGlobal);
exports.FiltroDeExcecaoGlobal = FiltroDeExcecaoGlobal;
//# sourceMappingURL=filtro-de-excecao-global.js.map