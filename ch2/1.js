"use strict";
var SexType;
(function (SexType) {
    SexType[SexType["BOY"] = 6] = "BOY";
    SexType[SexType["GIRL"] = 7] = "GIRL";
})(SexType || (SexType = {}));
let user = {
    name: '后盾人',
    sex: 1
};
console.log(SexType.GIRL);
