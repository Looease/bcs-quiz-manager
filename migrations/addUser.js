var userService = require("../services/usersService");

edit_permissions_user = {
    username: "admin_user",
    password: "admin123",
    role: 'admin'
};

view_permissions_user = {
    username: "view_user",
    password: "view123",
    role: 'view'
};

restricted_permissions_user = {
    username: "basic_user",
    password: "basic123",
    role: 'restricted'
};

onSuccess = () => {};
userService.createUser(edit_permissions_user, onSuccess);
userService.createUser(view_permissions_user, onSuccess);
userService.createUser(restricted_permissions_user, onSuccess);