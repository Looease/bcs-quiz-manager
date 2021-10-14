var viewAccess = (req, res, next) => {
    if (req.user && req.user.role == 'view') {
        next();
        return;
    }
    res.redirect('/error');
}

module.exports.viewAccess = viewAccess;