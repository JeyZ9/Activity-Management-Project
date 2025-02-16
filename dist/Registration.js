"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registration = void 0;
class Registration {
    // constructor(regisId:string, participant: Participant, activity:Activity) {
    constructor(regisId, activity) {
        this.participants = [];
        this.regisId = regisId;
        // this.participant = participant;
        this.activity = activity;
        this.status = "wait";
    }
    toString() {
        return `{
        regisId: ${this.regisId},
        participant: {${this.participants}},
        activity: ${this.activity},
        status: ${this.status}\n}`;
    }
    getActivity() {
        return this.activity;
    }
    addParticipant(participant) {
        if (this.participants.length > this.activity.getMaxParticipant()) {
            console.log("Limit!");
            return;
        }
        this.participants.push(participant);
    }
    setActivity(activity) {
        this.activity = activity;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.Registration = Registration;
