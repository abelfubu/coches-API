"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const passport_jwt_1 = require("passport-jwt");
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET,
};
exports.auth = new passport_jwt_1.Strategy(options, async (payload, done) => {
    try {
        const user = { id: 456 };
        // const user = await () => { } //find user in db by payload.id
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    }
    catch (error) {
        console.log(error);
    }
});
