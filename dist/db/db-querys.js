"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.addNew = exports.queryBy = exports.queryAll = void 0;
const mysql_config_1 = __importDefault(require("./mysql-config"));
exports.queryAll = (table) => {
    return mysql_config_1.default.query(`SELECT * FROM ${table}`);
};
exports.queryBy = (table, query) => {
    const sql = `SELECT * FROM ${table} WHERE ?`;
    return mysql_config_1.default.query(sql, query);
};
exports.addNew = (table, resource) => {
    const sql = `INSERT INTO ${table} SET ?`;
    return mysql_config_1.default.query(sql, resource);
};
exports.deleteOne = (table, id) => {
    const sql = `DELETE FROM ${table} WHERE ?`;
    return mysql_config_1.default.query(sql, id);
};
