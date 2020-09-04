"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = void 0;
const coches_1 = require("../db/coches");
exports.getAll = (req, res) => {
    try {
        res.status(200).json({ coches: coches_1.coches });
    }
    catch (error) {
        console.log(error);
    }
};
