"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        name: "Moisés Junior",
        email: "nem.moises@hotmail.com",
        password: "password",
        children: [{
                name: "Nenhum",
                rg: "34.387.319-3"
            }]
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
