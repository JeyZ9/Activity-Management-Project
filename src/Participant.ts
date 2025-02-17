import { Activity } from "./Activity";
import { AppNotification } from "./AppNotification";
import { Certificate } from "./Certificate";
import { Registration } from "./Registration";
import { RoleEnum } from "./User";
import { v4 as uuidV4 } from "uuid";

export class Participant extends User {
    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, registration:Registration, certificate:Certificate[]){
        super(userId, name, email, password, role);
    }

    public getRegistration():Registration {
        return this.registration;
    }

    public getEmail():string {
        return super.getEmail();
    }

    public registerForActivity(activity:Activity):Registration {
        return new Registration(uuidV4(), activity, this, "Pending");
    }

    public searchActivity(keyword: string): Activity[]{
        return Activity.activities.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }

    public downloadCertificate(): string {
        return `ดาวน์โหลด Certificate แล้ว`
    }
}