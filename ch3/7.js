"use strict";
class Test {
    constructor(name) {
        this.name = name;
        this.name = name;
        console.log('go');
    }
    static make(name) {
        if (Test.instance === null) {
            Test.instance = new Test(name);
        }
        return Test.instance;
    }
}
Test.instance = null;
let obj1 = Test.make('chen');
let obj2 = Test.make('chen2');
let obj3 = Test.make('chen3');
console.log(obj1);
console.log(obj2);
console.log(obj3);
