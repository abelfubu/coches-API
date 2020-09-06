"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.addNew = exports.queryBy = exports.queryAll = void 0;
const mysql_config_1 = __importDefault(require("./mysql-config"));
exports.queryAll = (table) => {
    return new Promise((resolve, reject) => {
        mysql_config_1.default.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.queryBy = (table, query) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${table} WHERE ?`;
        mysql_config_1.default.query(sql, query, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.addNew = (table, resource) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO ${table} SET ?`;
        mysql_config_1.default.query(sql, resource, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
exports.deleteOne = (table, id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM ${table} WHERE ?`;
        mysql_config_1.default.query(sql, id, (error, result) => {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    });
};
