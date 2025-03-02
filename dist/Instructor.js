"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instructor = void 0;
const Activity_1 = require("./Activity");
const Certificate_1 = require("./Certificate");
const User_1 = require("./User");
const uuid_1 = require("uuid");
class Instructor extends User_1.User {
    // private activity:Activity;
    constructor(name, email, password, role) {
        super(name, email, password, role);
    }
    getName() {
        return super.getName();
    }
    createActivity(activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, schedule, certificate) {
        const newActivity = new Activity_1.Activity(activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, true, this, certificate, schedule);
        return newActivity;
    }
    approveParticipant(activity, paticipant) {
        if (activity.getInstructor().getName() === this.getName()) {
            activity.approveParticipant(paticipant);
        }
    }
    issueCertificate(participant, activity, sinature, template) {
        return new Certificate_1.Certificate((0, uuid_1.v4)(), this, participant, activity, sinature, template);
    }
    searchActivity(keyword) {
        return Activity_1.Activity.activities.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
}
exports.Instructor = Instructor;
