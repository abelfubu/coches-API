'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
const express_1 = __importDefault(require('express'));
const cors_1 = __importDefault(require('cors'));
const morgan_1 = __importDefault(require('morgan'));
const passport_1 = __importDefault(require('passport'));
const check_auth_1 = require('./middleware/check-auth');
const viajes_routes_1 = __importDefault(require('./routes/viajes.routes'));
const coches_routes_1 = __importDefault(require('./routes/coches.routes'));
const auth_routes_1 = __importDefault(require('./routes/auth.routes'));
const app = express_1.default();
app.use(express_1.default.static('dist/public'));
app.use(cors_1.default());
app.use(morgan_1.default('tiny'));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(check_auth_1.auth);
// app.use('/', indexRouter);
app.use('/cars', coches_routes_1.default);
app.use('/travels', viajes_routes_1.default);
app.use('/auth', auth_routes_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PORT ${PORT} ON FIRE!`));
