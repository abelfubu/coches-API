"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = void 0;
const viajes_1 = require("../db/viajes");
exports.getAll = (req, res) => {
    try {
        res.status(200).json({ viajes: viajes_1.viajes });
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.getOne = (req, res) => {
    try {
        const result = viajes_1.viajes.filter((viaje) => viaje.id === +req.params.id);
        res.status(200).json({ result });
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};