"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const typeorm_1 = require("typeorm");
const dataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/migrations/*.{js,ts}'],
};
const dataSource = new typeorm_1.DataSource(dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=data-source-cli.js.map