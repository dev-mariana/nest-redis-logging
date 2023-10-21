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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ListaProduto_dto_1 = require("./dto/ListaProduto.dto");
const produto_entity_1 = require("./produto.entity");
const typeorm_2 = require("typeorm");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async criaProduto(dadosProduto) {
        const produtoEntity = new produto_entity_1.ProdutoEntity();
        Object.assign(produtoEntity, dadosProduto);
        return this.produtoRepository.save(produtoEntity);
    }
    async listProdutos() {
        const produtosSalvos = await this.produtoRepository.find({
            relations: {
                imagens: true,
                caracteristicas: true,
            },
        });
        const produtosLista = produtosSalvos.map((produto) => new ListaProduto_dto_1.ListaProdutoDTO(produto.id, produto.nome, produto.caracteristicas, produto.imagens));
        return produtosLista;
    }
    async listProduto(id) {
        const produto = await this.produtoRepository.findOneBy({ id });
        if (produto === null) {
            throw new common_1.NotFoundException("O produto não foi encontrado");
        }
        return produto;
    }
    async atualizaProduto(id, novosDados) {
        const entityName = await this.produtoRepository.findOneBy({ id });
        if (entityName === null) {
            throw new common_1.NotFoundException("O produto não foi encontrado");
        }
        Object.assign(entityName, novosDados);
        return this.produtoRepository.save(entityName);
    }
    async deletaProduto(id) {
        const resultado = await this.produtoRepository.delete(id);
        if (!resultado.affected) {
            throw new common_1.NotFoundException("O produto não foi encontrado");
        }
    }
};
ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.ProdutoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map