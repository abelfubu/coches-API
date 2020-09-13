"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = void 0;
const coches_1 = require("../db/coches");
exports.getAll = (req, res) => {
    try {
        res.status(200).json({ coches: coches_1.coches });
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.getOne = (req, res) => {
    try {
        const result = coches_1.coches.filter((coche) => coche.id === +req.params.id);
        res.status(200).json({ result });
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
