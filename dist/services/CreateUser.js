"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, address = _a.address, children = _a.children;
    var user = {
        name: name,
        email: email,
        password: password,
        address: address,
        children: children
    };
    return user;
}
exports.default = createUser;
