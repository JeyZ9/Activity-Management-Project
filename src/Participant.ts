import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { Registration } from "./Registration";
import { RoleEnum } from "./User";
import { v4 as uuidV4 } from "uuid";

export class Participant extends User {
    private activity:Activity[];
    private registration:Registration;
    private certificate:Certificate[];

    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, activity:Activity[], registration:Registration, certificate:Certificate[]){
        super(userId, name, email, password, role);
        this.activity = activity;
        this.registration = registration;
        this.certificate = certificate;
    }

    public getRegistration():Registration {
        return this.registration;
    }

    public registerForActivity(activity:Activity):void {
        // this.registration.setParticipant(this);
        // this.registration.setActivity(activity);
        // this.registration.setStatus("pending");
        // const checkLimit = this.registration.
        // if(activity.getMaxParticipant <= )
        const regisId = uuidV4();
        new Registration(regisId, this, activity)
    }

    public searchActivity(keyword: string): Activity[] { // return Activity[]
        return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }

    public downloadCertificate(activityId:number): Certificate | null {
        const registrationActivity = this.registration.getActivity();
        if(!registrationActivity || registrationActivity.getActivityId() !== activityId){
            console.log("download failed.");
            return null;
        }

        if(!registrationActivity.isCertificateIssued()){
            console.log("Certificate has not issued!");
            return null;
        }
        // const findActivity = this.activity.find(item => item.getActivityId() === activityId);
        let cerId = uuidV4();
        const newCertificate = new Certificate(cerId, registrationActivity.getInstructor(), registrationActivity, "test", "test");
        this.certificate.push(newCertificate);
        
        return newCertificate;
    }
}