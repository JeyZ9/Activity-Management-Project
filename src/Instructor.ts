import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { RoleEnum, User } from "./User";
import { v4 as uuidv4 } from "uuid"

export class Instructor extends User {
    // private activity: Activity[] = [];
    // private activity: Activity[];
    // private certificate: Certificate;

    // constructor(userId:string, name:string, email:string, password:string, role:RoleEnum,activity: Activity[], certificate:Certificate){
    constructor(name:string, email:string, password:string, role:RoleEnum){
        super(name, email, password, role);
        // this.activity = activity;
        // this.certificate = certificate;
    }

    public getName():string {
        return super.getName();
    }

    public createActivity(activityName:string, organizer:string, maxParticipant:number, activityPreiod:string, registrationPreiod:string, approvalRequest:boolean, certificateIssued:boolean, schedule:File | null, certificate:Certificate):Activity {
        let uuid = uuidv4();
        const newActivity = new Activity(uuid, activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, schedule, this, certificate, null);
        return newActivity;
    }

    // public searchActivity(keyword: string): Activity[] {
    //     return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    // }

    public issueCertificate(activity:Activity, sinature:string, template:string):Certificate {
        let uuid = uuidv4();
        return new Certificate(uuid, this, activity, sinature, template);
    }

}
