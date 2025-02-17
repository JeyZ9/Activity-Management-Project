import { Certificate } from "./Certificate";
import { Instructor } from "./Instructor";
import { Participant } from "./Participant";
import { Registration } from "./Registration";
import { v4 as uuidv4 } from "uuid";

export class Activity {
    private activityId: string;
    private activityName: string;
    private organizer: string;
    private maxParticipant: number;
    private activityPeriod: string;
    private registrationPeriod: string;
    private status: boolean;
    private approvalRequest: boolean;
    private certificateIssued: boolean;
    private schedule: File | null;
    private isDeleted:boolean;

    public static activities:Activity[];

    constructor(activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status:boolean, approvalRequest: boolean, certificateIssued: boolean, schedule: File | null){
        this.activityId = uuidv4();
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    
        // this.instructor = instructor;
        // this.certificate = certificate;
        this.isDeleted = false;
        // this.registration = registration ?? null;

        Activity.activities.push(this);
    }

     // Getters
     public getActivityId(): string {
        return this.activityId;
    }

    public getActivityName(): string {
        return this.activityName;
    }

    public getOrganizer(): string {
        return this.organizer;
    }

    public getMaxParticipant(): number {
        return this.maxParticipant;
    }

    public getActivityPeriod(): string {
        return this.activityPeriod;
    }

    public getRegistrationPeriod(): string {
        return this.registrationPeriod;
    }

    public getStatus(): boolean {
        return this.status;
    }

    public isApprovalRequested(): boolean {
        return this.approvalRequest;
    }

    public isCertificateIssued(): boolean {
        return this.certificateIssued;
    }

    public getSchedule(): File | null {
        return this.schedule;
    }

    // Setters
    public setActivityName(name: string): void {
        this.activityName = name;
    }

    public setMaxParticipant(limit: number): void {
        this.maxParticipant = limit;
    }

    public setStatus(status: boolean): void {
        this.status = status;
    }

    public requestApproval(request: boolean): void {
        this.approvalRequest = request;
    }

    public setCertificateIssued(issue: boolean): void {
        this.certificateIssued = issue;
    }

    public uploadSchedule(file: File): void {
        this.schedule = file;
    }

    public createActivity(activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status:boolean, approvalRequest: boolean, certificateIssued: boolean, schedule: File | null):Activity {
        return new Activity(activityName, organizer, maxParticipant, activityPeriod, registrationPeriod, status, approvalRequest, certificateIssued, null);
    }

    public updateActivity(activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, status:boolean, approvalRequest: boolean, certificateIssued: boolean, schedule: File | null):void {
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = status;
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    }

    public publishActivity():void {
        this.status = true;
    }

    public deleteActivity():void {
        this.isDeleted = true;
    }

    public approveParticipant(participants:Participant[]):void {
        for(let i=0; i<Registration.registrations.length; i++){
            for(let j=0; j<participants.length; j++){
                if(Registration.registrations[i].getParticipant().getName() === participants[j].getName()){
                    Registration.registrations[i].setStatus("approved");
                }
            }
        }
        // Registration.registrations.forEach(regis => regis.getActivity() == this && participant == regis.getParticipant() && regis.setStatus("approved"));
    }

    public generateCertificate():Certificate {
        // ใช้ function ใน certificate class 
        // loop ตามจำนวนคนที่ผ่าน
    }
}