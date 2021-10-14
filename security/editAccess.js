var editAccess = (req, res, next) => {
    if (req.user && req.user.role == 'admin') {
        next();
        return;
    }
    res.redirect('/error');
}

module.exports.editAccess = editAccess;

// var permission = (req, res, next) => {
//     if (req.user && req.user.role !== 'admin' || 'view'){
        
//     }
// }

