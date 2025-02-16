"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity = void 0;
class Activity {
    constructor(activityId, activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, appovalRequest, certificateIssued, schedule, instructor, certificate) {
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = "Pending";
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
        this.instructor = instructor;
        this.certificate = certificate;
        this.isDeleted = false;
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
    getCertificate() {
        return this.certificate;
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
    // public createActivity():void {
    // }
    updateActivity(activityId, activityName, organizer, maxParticipant) {
        // const activity = new Activity()
        if (this.activityId !== activityId) {
            console.error(`Activity with ID ${activityId} not found!`);
            return null;
        }
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        return this;
    }
    publishActivity() {
        if (this.status !== "published") {
            this.status = "published";
            console.log(`Activity "${this.activityName}" has been published.`);
        }
        else {
            console.log(`Activity "${this.activityName}" is already published.`);
        }
    }
    deleteActivity() {
        if (this.isDeleted) {
            console.log(`Activity "${this.activityName}" has already been deleted.`);
            return;
        }
        this.isDeleted = true;
        console.log(`Activity "${this.activityName}" has been successfully deleted.`);
    }
    approveParticipant(participants) {
        // const participant = participants.map(item => item.getRegistration().getActivity().requestApproval(true));
        participants.forEach(item => item.getRegistration().setStatus("pass"));
    }
    generateCertificate(participants) {
    }
}
exports.Activity = Activity;
