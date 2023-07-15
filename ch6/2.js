"use strict";
var User;
(function (User) {
    User.q = "houdunren";
    let Member;
    (function (Member) {
        Member.name = "xxx";
    })(Member = User.Member || (User.Member = {}));
})(User || (User = {}));
console.log(User.Member.name);
