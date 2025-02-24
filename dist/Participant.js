"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Participant = void 0;
const Certificate_1 = require("./Certificate");
const uuid_1 = require("uuid");
class Participant extends User {
    // constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, activity:Activity[], registration:Registration, certificate:Certificate[]){
    constructor(userId, name, email, password, role, registration, certificate) {
        super(userId, name, email, password, role);
        this.notification = [];
        // this.activity = activity;
        this.registration = registration;
        this.certificate = certificate;
    }
    getRegistration() {
        return this.registration;
    }
    getEmail() {
        return super.getEmail();
    }
    registerForActivity(activity) {
        var _a;
        // this.registration.setParticipant(this);
        // this.registration.setActivity(activity);
        // this.registration.setStatus("pending");
        // const checkLimit = this.registration.
        // if(activity.getMaxParticipant <= )
        // const regisId = uuidV4();
        // new Registration(regisId, this, activity)
        (_a = activity.getRegistration()) === null || _a === void 0 ? void 0 : _a.addParticipant(this);
    }
    saveNotification(notification) {
        this.notification.push(notification);
    }
    downloadCertificate(activityId) {
        const registrationActivity = this.registration.getActivity();
        if (!registrationActivity || registrationActivity.getActivityId() !== activityId) {
            console.log("download failed.");
            return null;
        }
        if (!registrationActivity.isCertificateIssued()) {
            console.log("Certificate has not issued!");
            return null;
        }
        // const findActivity = this.activity.find(item => item.getActivityId() === activityId);
        let cerId = (0, uuid_1.v4)();
        const newCertificate = new Certificate_1.Certificate(cerId, registrationActivity.getInstructor(), registrationActivity, "test", "test");
        this.certificate.push(newCertificate);
        return newCertificate;
    }
}
exports.Participant = Participant;
