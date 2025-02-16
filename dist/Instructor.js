"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
const Certificate_1 = require("./Certificate");
const User_1 = require("./User");
const uuid_1 = require("uuid");
class Instructor extends User_1.User {
    // private activity: Activity[] = [];
    // private activity: Activity[];
    // private certificate: Certificate;
    // constructor(userId:string, name:string, email:string, password:string, role:RoleEnum,activity: Activity[], certificate:Certificate){
    constructor(userId, name, email, password, role) {
        super(userId, name, email, password, role);
        // this.activity = activity;
        // this.certificate = certificate;
    }
    getName() {
        return super.getName();
    }
    createActivity(activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, schedule, certificate) {
        let uuid = (0, uuid_1.v4)();
        const newActivity = new Activity_1.Activity(uuid, activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, schedule, this, certificate);
        return newActivity;
    }
    // public searchActivity(keyword: string): Activity[] {
    //     return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    // }
    issueCertificate(activity, sinature, template) {
        let uuid = (0, uuid_1.v4)();
        return new Certificate_1.Certificate(uuid, this, activity, sinature, template);
    }
}
exports.Instructor = Instructor;
