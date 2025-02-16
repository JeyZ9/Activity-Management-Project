import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { RoleEnum, User } from "./User";
import { v4 as uuidv4 } from "uuid"

export class Instructor extends User {
    // private activity: Activity[] = [];
    private activity: Activity[];
    private certificate: Certificate;

    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum,activity: Activity[], certificate:Certificate){
        super(userId, name, email, password, role);
        this.activity = activity;
        this.certificate = certificate;
    }

    public getName():string {
        return super.getName();
    }

    public createActivity():void {
        
    }

    public searchActivity(keyword: string): Activity[] {
        return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }

}
