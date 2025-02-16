import { Activity } from "./Activity";
import { AppNotification } from "./AppNotification";
import { Certificate } from "./Certificate";
import { Registration } from "./Registration";
import { RoleEnum } from "./User";
import { v4 as uuidV4 } from "uuid";

export class Participant extends User {
    private registration:Registration;
    private certificate:Certificate[];
    private notification:AppNotification[] = [];

    // constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, activity:Activity[], registration:Registration, certificate:Certificate[]){
    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, registration:Registration, certificate:Certificate[]){
        super(userId, name, email, password, role);
        // this.activity = activity;
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
        // const regisId = uuidV4();
        // new Registration(regisId, this, activity)
        activity.getRegistration()?.addParticipant(this);
    }


    public saveNotification(notification:AppNotification):void{
        this.notification.push(notification);
    }

    public downloadCertificate(activityId:string): Certificate | null {
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