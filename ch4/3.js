"use strict";
class Collection {
    constructor() {
        this.data = [];
    }
    push(...items) {
        this.data.push(...items);
    }
    shift() {
        return this.data.shift();
    }
}
const numberCollection = new Collection();
numberCollection.push(1, 2, 3, 4, 5);
console.log(numberCollection.shift());
const stringCollection = new Collection();
stringCollection.push('123', '1', '232');
const userCollection = new Collection();
let user1 = { name: 'chen', age: 18 };
let user2 = { name: 'chen2', age: 20 };
userCollection.push(user1, user2);
console.log(userCollection.shift());
