const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const User = require('../models/user');
function init(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'email'
    }, async (email, password, done) => {
        // check if email exists
        const user = await User.findOne({ email: email });
        if (!user) {
            return done(null, false, { message: 'No user with this email' });
        }
        else {
            bcrypt.compare(password, user.password).then(match => {
                if (match) {
                    return done(null, user, { messgae: 'Loggedin successfully' });
                }
                else {
                    return done(null, false, { message: 'Wrong username or password' });
                }
            }).catch(err => {
                return done(null, false, { message: 'Something went wrong' });
            });
        }
    }));
    passport.serializeUser((user, done) => {           // user is from done from above methods
        done(null, user._id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {               // id is the id of loggedin user
            done(err, user);
        });

    });
}
module.exports = init;