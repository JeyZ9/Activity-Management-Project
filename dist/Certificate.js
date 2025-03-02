"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Certificate = void 0;
const AppNotification_1 = require("./AppNotification");
const uuid_1 = require("uuid");
class Certificate {
    constructor(cerId, issuer, participant, activity, signature, template) {
        this.cerId = cerId;
        this.issuer = issuer;
        this.participant = participant;
        this.activity = activity;
        this.signature = signature;
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
    generateCertificate(cerId, issuer, participant, activity, signature, template) {
        return new Certificate(cerId, issuer, participant, activity, signature, template);
    }
    sendNotification() {
        return new AppNotification_1.AppNotification((0, uuid_1.v4)(), this.participant, "เกียรติบัตรพร้อมให้สำหรับการดาวน์โหลดแล้ว", "approved");
    }
}
exports.Certificate = Certificate;
