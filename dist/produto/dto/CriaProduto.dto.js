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
exports.CriaProdutoDTO = exports.ImagemProdutoDTO = exports.CaracteristicaProdutoDTO = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CaracteristicaProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome da cadasterística não pode ser vazio' }),
    __metadata("design:type", String)
], CaracteristicaProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição da característica não pode ser vazio' }),
    __metadata("design:type", String)
], CaracteristicaProdutoDTO.prototype, "descricao", void 0);
exports.CaracteristicaProdutoDTO = CaracteristicaProdutoDTO;
class ImagemProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsUrl)({ message: 'URL para imagem inválida' }),
    __metadata("design:type", String)
], ImagemProdutoDTO.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição da imagem não pode ser vazia' }),
    __metadata("design:type", String)
], ImagemProdutoDTO.prototype, "descricao", void 0);
exports.ImagemProdutoDTO = ImagemProdutoDTO;
class CriaProdutoDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome do produto não pode ser vazio' }),
    __metadata("design:type", String)
], CriaProdutoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false }),
    (0, class_validator_1.Min)(1, { message: 'O valor precisa ser maior que zero' }),
    __metadata("design:type", Number)
], CriaProdutoDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0, { message: 'Quantidade mínima inválida' }),
    __metadata("design:type", Number)
], CriaProdutoDTO.prototype, "quantidadeDisponivel", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Descrição do produto não pode ser vazia ' }),
    (0, class_validator_1.MaxLength)(1000, {
        message: 'Descrição não pode ter mais que 1000 caracteres',
    }),
    __metadata("design:type", String)
], CriaProdutoDTO.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => CaracteristicaProdutoDTO),
    __metadata("design:type", Array)
], CriaProdutoDTO.prototype, "caracteristicas", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_transformer_1.Type)(() => ImagemProdutoDTO),
    __metadata("design:type", Array)
], CriaProdutoDTO.prototype, "imagens", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Categoria do produto não pode ser vazia' }),
    __metadata("design:type", String)
], CriaProdutoDTO.prototype, "categoria", void 0);
exports.CriaProdutoDTO = CriaProdutoDTO;
//# sourceMappingURL=CriaProduto.dto.js.map