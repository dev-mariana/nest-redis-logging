"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relacionaPedidoEItemPedido1685989050639 = void 0;
class relacionaPedidoEItemPedido1685989050639 {
    constructor() {
        this.name = 'relacionaPedidoEItemPedido1685989050639';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "itens_pedidos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantidade" integer NOT NULL, "preco_venda" integer NOT NULL, "pedidoId" uuid, CONSTRAINT "PK_d93e780d333fe5d91e43797e8b5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "itens_pedidos" ADD CONSTRAINT "FK_aaa757efbf4f9fb222709a140b2" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "itens_pedidos" DROP CONSTRAINT "FK_aaa757efbf4f9fb222709a140b2"`);
        await queryRunner.query(`DROP TABLE "itens_pedidos"`);
    }
}
exports.relacionaPedidoEItemPedido1685989050639 = relacionaPedidoEItemPedido1685989050639;
//# sourceMappingURL=1685989050639-relaciona-pedido-e-itemPedido.js.map