"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relacionaItemPedidoEProduto1685989589634 = void 0;
class relacionaItemPedidoEProduto1685989589634 {
    constructor() {
        this.name = 'relacionaItemPedidoEProduto1685989589634';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD "produtoId" uuid`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD CONSTRAINT "FK_d07fbe9a1faab330529824f7fea" FOREIGN KEY ("produtoId") REFERENCES "produtos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP CONSTRAINT "FK_d07fbe9a1faab330529824f7fea"`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP COLUMN "produtoId"`);
    }
}
exports.relacionaItemPedidoEProduto1685989589634 = relacionaItemPedidoEProduto1685989589634;
//# sourceMappingURL=1685989589634-relaciona-itemPedido-e-produto.js.map