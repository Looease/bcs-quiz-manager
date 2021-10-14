var restrictedAccess = (req, res, next) => {
    if (req.user && req.user.role == 'restricted') {
        next();
        return;
    }
    res.redirect('/error');
}

module.exports.restrictedAccess = restrictedAccess;