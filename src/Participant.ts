import { Activity } from "./Activity";
import { Registration } from "./Registration";
import { RoleEnum, User } from "./User";
import { v4 as uuidV4 } from "uuid";

export class Participant extends User {
    constructor(name:string, email:string, password:string, role:RoleEnum){
        super(name, email, password, role);
    }

    public getName():string {
        return super.getName();
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