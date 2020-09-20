import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';

const options: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

export const auth = new Strategy(options, async (payload, done) => {
  try {
    const user = { id: 456 };
    // const user = await () => { } //find user in db by payload.id
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
  }
});
