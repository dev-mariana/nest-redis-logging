"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUsuarioIdDoProduto1685564104595 = void 0;
class removeUsuarioIdDoProduto1685564104595 {
    constructor() {
        this.name = 'removeUsuarioIdDoProduto1685564104595';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "produtos" DROP COLUMN "usuario_id"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "produtos" ADD "usuario_id" character varying(100)`);
    }
}
exports.removeUsuarioIdDoProduto1685564104595 = removeUsuarioIdDoProduto1685564104595;
//# sourceMappingURL=1685564104595-remove-usuarioId-do-produto.js.map