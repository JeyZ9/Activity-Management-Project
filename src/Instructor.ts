import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { Participant } from "./Participant";
import { RoleEnum, User } from "./User";
import { v4 as uuidv4 } from "uuid"

export class Instructor extends User {

    constructor(name:string, email:string, password:string, role:RoleEnum){
        super(name, email, password, role);

    }

    public getName():string {
        return super.getName();
    }

    public createActivity(activityName:string, organizer:string, maxParticipant:number, activityPreiod:string, registrationPreiod:string, approvalRequest:boolean, certificateIssued:boolean, schedule:File | null, certificate:Certificate):Activity {

        const newActivity = new Activity(activityName, organizer, maxParticipant, activityPreiod, registrationPreiod, approvalRequest, certificateIssued, true, this, certificate, schedule);
        return newActivity;
    }
    
    public issueCertificate(participant:Participant, activity:Activity, sinature:string, template:string):Certificate {
        
        return new Certificate(uuidv4(), this, participant, activity, sinature, template);
    }

}
