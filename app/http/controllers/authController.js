// logic inside routes  will be written here
const User = require('../../models/user');
const bcrypt = require('bcrypt');   // used for hashing passwordserr,user,info
const passport = require('passport');
function authController() {
    return {
        login(req, res) {
            res.render('auth/login');
        },
        postLogin(req, res, next) {
            passport.authenticate('local', (err, user, info) => {       // (err,user,info) is the done function which we defined in passport.js
                if (err) {
                    req.flash('error', info.message);
                    return next(err);
                }
                if (!user) {
                    req.flash('error', info.message);
                    return res.redirect('/login');
                }
                req.logIn(user, (err) => {
                    if (err) {
                        req.flash('error', info.message);
                        return next(err);
                    }
                    res.redirect('/');
                });
            })(req, res, next);
        },
        register(req, res) {
            res.render('auth/register');
        },
        async postRegister(req, res) {
            const { name, email, password } = req.body;
            // vaildate request
            if (!name || !email || !password) {
                req.flash('error', "All fields are required");
                req.flash('name', name);
                req.flash('email', email);
                return res.redirect('/register');
            }
            // check if email exists
            User.exists({ email: email }, (err, result) => {
                if (result) {
                    req.flash('error', "Email already taken");
                    req.flash('name', name);
                    req.flash('email', email);
                    return res.redirect('/register');
                }
            })
            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create a user
            const user = new User({
                name: name,
                email: email,
                password: hashedPassword,
            });
            user.save().then(() => {
                //login
                return res.redirect('/');
            }).catch(err => {
                req.flash('error', 'Something went wrong');
                return res.redirect('/register');
            });
        },
        logout(req, res) {
            req.logout();
            return res.redirect('/login');
        }
    }
}

module.exports = authController;