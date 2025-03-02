"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
const Registration_1 = require("./Registration");
const uuid_1 = require("uuid");
class Activity {
    constructor(activityName, organizer, maxParticipant, activityPreiod, registrationPeriod, approvalRequest, status, certificateIssued, instructor, certificate, schedule) {
        this.activityId = (0, uuid_1.v4)();
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPreiod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
        this.schedule = schedule;
        Activity.activities.push(this);
    }
    // Getters
    getActivityId() {
        return this.activityId;
    }
    getActivityName() {
        return this.activityName;
    }
    getOrganizer() {
        return this.organizer;
    }
    getMaxParticipant() {
        return this.maxParticipant;
    }
    getActivityPeriod() {
        return this.activityPeriod;
    }
    getRegistrationPeriod() {
        return this.registrationPeriod;
    }
    getStatus() {
        return this.status;
    }
    isApprovalRequested() {
        return this.approvalRequest;
    }
    isCertificateIssued() {
        return this.certificateIssued;
    }
    getSchedule() {
        return this.schedule;
    }
    getInstructor() {
        return this.instructor;
    }
    // Setters
    setActivityName(name) {
        this.activityName = name;
    }
    setMaxParticipant(limit) {
        this.maxParticipant = limit;
    }
    setStatus(status) {
        this.status = status;
    }
    requestApproval(request) {
        this.approvalRequest = request;
    }
    setCertificateIssued(issue) {
        this.certificateIssued = issue;
    }
    uploadSchedule(file) {
        this.schedule = file;
    }
    createActivity(activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, schedule) {
        return new Activity(activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, null);
    }
    updateActivity(activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, instructor, certificate, schedule) {
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.isDeleted = false;
        this.instructor = instructor;
        this.certificate = certificate;
        this.schedule = schedule;
    }
    publishActivity() {
        this.status = true;
    }
    deleteActivity() {
        this.isDeleted = true;
    }
    approveParticipant(participants) {
        for (let i = 0; i < Registration_1.Registration.registrations.length; i++) {
            for (let j = 0; j < participants.length; j++) {
                if (Registration_1.Registration.registrations[i].getParticipant().getName() === participants[j].getName()) {
                    Registration_1.Registration.registrations[i].setStatus("approved");
                }
            }
        }
        // Registration.registrations.forEach(regis => regis.setStatus("approved"));
    }
    generateCertificate(participants) {
        // ใช้ function ใน certificate class 
        // loop ตามจำนวนคนที่ผ่าน
        for (let i = 0; i < participants.length; i++) {
            this.certificate.generateCertificate("cer1", this.instructor, participants[i], this, "", "");
        }
    }
}
exports.Activity = Activity;
