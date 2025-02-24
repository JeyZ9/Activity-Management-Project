"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const AppNotification_1 = require("./AppNotification");
class Certificate {
    constructor(cerId, issuer, activity, sinature, template) {
        this.cerId = cerId;
        this.issuer = issuer;
        this.activity = activity;
        this.signature = sinature;
        this.template = template;
    }
    getCerId() {
        return this.cerId;
    }
    getIssuer() {
        return this.issuer;
    }
    getActivity() {
        return this.activity;
    }
    getSignature() {
        return this.signature;
    }
    getTemplate() {
        return this.template;
    }
    setSignature(signature) {
        this.signature = signature;
    }
    setTemplate(template) {
        this.template = template;
    }
    generateCertificate() {
        return `
        Certificate ID: ${this.cerId}
        Issuer: ${this.issuer.getName()}
        Activity: ${this.activity.getActivityName()}
        Signature: ${this.signature}
        Template: ${this.template}
        `;
    }
    sendNotification(email) {
        var _a;
        const findParticipantByEmail = (_a = this.activity.getRegistration()) === null || _a === void 0 ? void 0 : _a.getParticipants().find(user => user.getEmail() == email);
        if (!findParticipantByEmail) {
            console.log(`User with email ${email} not found!`);
            return;
        }
        let randomId = Math.floor(Math.random() * 1000);
        const newNotify = new AppNotification_1.AppNotification(randomId, findParticipantByEmail, "test");
        findParticipantByEmail.saveNotification(newNotify);
        // console.log(`Notification sent to ${email} for certificate ${this.cerId}.`);
    }
}
exports.Certificate = Certificate;
