"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.RoleEnum = void 0;
class RoleEnum {
}
exports.RoleEnum = RoleEnum;
RoleEnum.INSTRUCTOR = "instructor";
RoleEnum.STUDENT = "student";
class User {
    constructor(userId, name, email, password, role) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(pass) {
        this.password = pass;
    }
    setRole(role) {
        this.role = role;
    }
    register(email, password) {
        // let randomId:number = Math.floor(Math.random() * 10)
        // let mixId:string = "US" + randomId;
        if (email == "" || password == "") {
            return false;
        }
        this.email = email;
        this.password = password;
        // const newUser = new User(mixId, "", email, password, RoleEnum.STUDENT);
        return true;
    }
    login(email, password) {
        // let users:User[];
        // let findUser = users.filter(item => console.log(item.getEmail()));
        if (email === this.email && password === this.password) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        return false;
    }
    toString() {
        return `{
        userId: ${this.userId},
        name: ${this.name},
        email: ${this.email},
        password: ${this.password},
        role: ${this.role}\n}`;
    }
}
exports.User = User;
