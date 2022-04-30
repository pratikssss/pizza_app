function guest(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/');
}
module.exports = guest;


//  middlewares are used for things like if a user is loggedin then we should not allow him to visit register or login page