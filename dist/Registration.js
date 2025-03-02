"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    constructor(regisId, activity, participant, status) {
        this.regisId = regisId;
        this.participant = participant;
        this.activity = activity;
        this.status = status;
        Registration.registrations.push(this);
    }
    getParticipant() {
        return this.participant;
    }
    getActivity() {
        return this.activity;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.Registration = Registration;
