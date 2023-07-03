"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_user) {
        this._user = _user;
        this.user = null;
    }
    get() {
        return this._user;
    }
}
const obj = new User({ name: 'chen', age: 12 });
console.log(obj.get().age);
