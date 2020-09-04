"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const coches_1 = __importDefault(require("./routes/coches"));
const app = express_1.default();
app.use(express_1.default.static('dist/public'));
app.use(cors_1.default());
app.use(morgan_1.default('tiny'));
app.use('/', index_1.default);
app.use('/coches', coches_1.default);
app.listen(3000, () => console.log('PORT 3000 ON FIRE!'));
