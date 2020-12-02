'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.getOne = exports.getAll = void 0;
const coches_1 = require('../db/coches');
const uuid_2 = require('uuid');
exports.getAll = (req, res) => {
  try {
    res.status(200).json(coches_1.coches);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong...' });
  }
};
exports.getOne = (req, res) => {
  try {
    const result = coches_1.coches.find(coche => coche.id === req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong...' });
  }
};
exports.addOne = (req, res) => {
  try {
    if (req.body) {
      req.body.id = uuid_2.v4();
      coches_1.coches.push(req.body);
      res.status(200).json(req.body);
    }
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong...', error, body: req.body });
  }
};
exports.updateOne = (req, res) => {
  try {
    if (req.params.id) {
      const { id } = req.params;
      const newCoche = { id, ...req.body };
      const pos = coches_1.coches.findIndex(coche => coche.id === id);
      coches_1.coches.splice(pos, 1, req.body);
      res.status(200).json(newCoche);
    }
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong...' });
  }
};
exports.deleteOne = (req, res) => {
  try {
    if (req.params.id) {
      const { id } = req.params;
      const deleted = coches_1.coches.find(coche => coche.id === id);
      const pos = coches_1.coches.findIndex(coche => coche.id === id);
      coches_1.coches.splice(pos, 1);
      res.status(200).json(deleted);
    }
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong...' });
  }
};
