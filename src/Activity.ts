import { Participant } from "./Participant";

export class Activity {
    private activityId: number;
    private activityName: string;
    private organizer: string;
    private maxParticipant: number;
    private activityPeriod: string;
    private registrationPeriod: string;
    private status: string;
    private approvalRequest: boolean;
    private certificateIssued: boolean;
    private shedule: File;

    constructor(activityId: number, activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status: string, appovalRequest: boolean, certificateIssued: boolean, shedule: File){
        this.activityId = activityId;
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = appovalRequest;
        this.certificateIssued = certificateIssued;
        this.shedule = shedule;
    }

    public setCertificateIssued(issue: boolean):void {
        this.certificateIssued = issue;
    }

    public getActivityName():string {
        return this.activityName;
    }

    public createActivity():void {

    }

    public updateActivity():void {
        
    }

    public publishActivity():void {
        
    }

    public deleteActivity():void {
        
    }

    public approveParticipant(participants: Participant[]):void {

    }

    public generateCertificate(participants: Participant[]):void {

    }
}