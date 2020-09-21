"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const uuid_1 = require("uuid");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db = __importStar(require("../db/db-querys"));
exports.signup = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Invalid form data' });
    }
    try {
        const userExist = await db.queryBy('user', {
            email: req.body.email,
        });
        console.log(userExist);
        if (userExist[0].length) {
            return res.status(401).json({
                message: 'A user with the given email already exist in our Db',
            });
        }
    }
    catch (error) {
        res.status(400).json({ message: 'Something went wrong...' });
    }
    try {
        req.body.id = uuid_1.v4();
        const register = await db.addNew('user', req.body);
        res.status(200).json(register);
    }
    catch (error) {
        console.log(error);
    }
};
exports.login = async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ message: 'Invalid form data' });
    }
    try {
        const user = await db.queryBy('user', { email: req.body.email });
        console.log(user[0]);
        if (!user[0].length) {
            return res
                .status(401)
                .json({ message: 'Email or password is not correct' });
        }
        const { id, email } = user[0];
        const token = jsonwebtoken_1.default.sign({ id, email }, process.env.SECRET, {
            expiresIn: '1h',
        });
        res.status(200).json(token);
    }
    catch (error) {
        console.log(error);
    }
};
