"use strict";
const { User } = require('./User');
const user = new User();
const regisUser = user.register("664259015@webmail.npru.ac.th", "123456za");
// console.log(regisUser);
console.log(user.login());
