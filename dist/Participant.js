"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const Activity_1 = require("./Activity");
const Registration_1 = require("./Registration");
const User_1 = require("./User");
const uuid_1 = require("uuid");
class Participant extends User_1.User {
    constructor(name, email, password, role) {
        super(name, email, password, role);
    }
    getName() {
        return super.getName();
    }
    getEmail() {
        return super.getEmail();
    }
    registerForActivity(activity) {
        return new Registration_1.Registration((0, uuid_1.v4)(), activity, this, "Pending");
    }
    searchActivity(keyword) {
        return Activity_1.Activity.activities.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
    downloadCertificate() {
        return `ดาวน์โหลด Certificate แล้ว`;
    }
}
exports.Participant = Participant;
