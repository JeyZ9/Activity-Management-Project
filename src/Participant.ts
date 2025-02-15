import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { RoleEnum } from "./User";

export class Participant extends User {
    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum){
        super(userId, name, email, password, role);
    }

    public registerForActivity():void {

    }

    public searchActivity(keyword: string): Activity[] { // return Activity[]
        return null;
    }

    public downloadCertificate(activityId:number): Certificate { // return Certificate
        return null;
    }
}