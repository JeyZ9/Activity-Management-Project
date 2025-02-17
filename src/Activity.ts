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
    private status: string;
    private approvalRequest: boolean;
    private certificateIssued: boolean;
    private schedule: File | null;

    // private instructor:Instructor;
    // private certificate:Certificate;
    // private registration:Registration | null;
    // private isDeleted:boolean;

    public static activities:Activity[];

    constructor(activityName: string, organizer: string, maxParticipant: number, activityPeriod: string, registrationPeriod: string, approvalRequest: boolean, certificateIssued: boolean, schedule: File | null, instructor: Instructor, certificate:Certificate, registration:Registration | null){
        this.activityId = uuidv4();
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        this.activityPeriod = activityPeriod;
        this.registrationPeriod = registrationPeriod;
        this.status = "Pending";
        this.approvalRequest = approvalRequest;
        this.certificateIssued = certificateIssued;
        this.schedule = schedule;
    
        this.instructor = instructor;
        this.certificate = certificate;
        this.isDeleted = false;
        this.registration = registration ?? null;

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

    public getStatus(): string {
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

    public getInstructor():Instructor {
        return this.instructor;
    }

    public getCertificate():Certificate {
        return this.certificate;
    }

    public getRegistration():Registration | null{
        return this.registration;
    }

    // Setters
    public setActivityName(name: string): void {
        this.activityName = name;
    }

    public setMaxParticipant(limit: number): void {
        this.maxParticipant = limit;
    }

    public setStatus(status: string): void {
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



    





    // public createActivity():void {
        
    // }

    public updateActivity(activityId:string, activityName:string, organizer:string, maxParticipant:number):Activity | null {
        // const activity = new Activity()
        if(this.activityId !== activityId){
            console.error(`Activity with ID ${activityId} not found!`);
            return null;
        }
        this.activityName = activityName;
        this.organizer = organizer;
        this.maxParticipant = maxParticipant;
        return this;
    }

    public publishActivity(): void {
        if (this.status !== "published") {
            this.status = "published";
            console.log(`Activity "${this.activityName}" has been published.`);
        } else {
            console.log(`Activity "${this.activityName}" is already published.`);
        }
    }

    public deleteActivity(): void {
        if (this.isDeleted) {
            console.log(`Activity "${this.activityName}" has already been deleted.`);
            return;
        }
    
        this.isDeleted = true;
        console.log(`Activity "${this.activityName}" has been successfully deleted.`);
    }

    public approveParticipant(participants: Participant[]):void {
        // const participant = participants.map(item => item.getRegistration().getActivity().requestApproval(true));
        participants.forEach(item => item.getRegistration().setStatus("pass"));
    }

    
    // public static searchActivity(keyword: string): Activity[] {
    //     return Activity.activities.filter(item => 
    //         item.activityName.toLowerCase().includes(keyword.toLowerCase()) 
    //     );
    // }

    public generateCertificate(participants: Participant[]):void {

    }
}