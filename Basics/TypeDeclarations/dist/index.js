"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We installed axois, now we just have to import it
const axios_1 = __importDefault(require("axios"));
// To learn what methods we can use, hover over an underscore
// To make a basic get request
axios_1.default.get("http://jsonplaceholder.typicode.com/users/1")
    .then((res) => {
    console.log('Success');
    console.log(res.data.name);
})
    .catch((event) => {
    console.log('Error', event);
});
