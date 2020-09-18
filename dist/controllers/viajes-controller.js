"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.addOne = exports.getOne = exports.getAll = void 0;
const viajes_1 = require("../db/viajes");
exports.getAll = (req, res) => {
    try {
        res.status(200).json(viajes_1.viajes);
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.getOne = (req, res) => {
    try {
        const result = viajes_1.viajes.filter((viaje) => viaje.id === +req.params.id);
        res.status(200).json(result[0]);
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.addOne = (req, res) => {
    try {
        if (req.body) {
            req.body.id = viajes_1.viajes.length + 1;
            viajes_1.viajes.push(req.body);
            res.status(200).json(req.body);
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.updateOne = (req, res) => {
    try {
        if (req.params.id) {
            const { id } = req.params;
            const newViaje = { ...req.body };
            viajes_1.viajes.splice(+id - 1, 1, req.body);
            res.status(200).json(newViaje);
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
exports.deleteOne = (req, res) => {
    try {
        if (req.params.id) {
            const { id } = req.params;
            const deleted = viajes_1.viajes.splice(+id - 1, 1);
            res.status(200).json(deleted);
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
};
