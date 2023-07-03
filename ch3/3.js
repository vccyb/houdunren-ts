"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(n, a, s = 1) {
        this.name = n;
        this.age = a;
        this.sex = s;
    }
    // 方法是在原型上
    info() {
        return `${this.name}的年龄是：${this.age}`;
    }
}
const hd = new User("chen", 2);
console.log(hd.info());
const users = [];
users.push(hd);
console.log(users);
console.log(hd);
