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
exports.ProdutoController = void 0;
const cache_manager_1 = require("@nestjs/cache-manager");
const common_1 = require("@nestjs/common");
const AtualizaProduto_dto_1 = require("./dto/AtualizaProduto.dto");
const CriaProduto_dto_1 = require("./dto/CriaProduto.dto");
const produto_service_1 = require("./produto.service");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    async criaNovo(dadosProduto) {
        const produtoCadastrado = await this.produtoService.criaProduto(dadosProduto);
        return {
            mensagem: "Produto criado com sucesso.",
            produto: produtoCadastrado,
        };
    }
    async listaTodos() {
        return this.produtoService.listProdutos();
    }
    async listaUm(id) {
        console.log("Produto sendo buscado do db...");
        return this.produtoService.listProduto(id);
    }
    async atualiza(id, dadosProduto) {
        const produtoAlterado = await this.produtoService.atualizaProduto(id, dadosProduto);
        return {
            mensagem: "produto atualizado com sucesso",
            produto: produtoAlterado,
        };
    }
    async remove(id) {
        const produtoRemovido = await this.produtoService.deletaProduto(id);
        return {
            mensagem: "produto removido com sucesso",
            produto: produtoRemovido,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CriaProduto_dto_1.CriaProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "criaNovo", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "listaTodos", null);
__decorate([
    (0, common_1.Get)("/:id"),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "listaUm", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AtualizaProduto_dto_1.AtualizaProdutoDTO]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "atualiza", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "remove", null);
ProdutoController = __decorate([
    (0, common_1.Controller)("produtos"),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map