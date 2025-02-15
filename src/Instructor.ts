import { Activity } from "./Activity";
import { Certificate } from "./Certificate";
import { RoleEnum } from "./User";
import { v4 as uuidv4 } from "uuid"

export class Instructor extends User {
    // private activity: Activity[] = [];
    private activity: Activity | Activity[];
    private certificate: Certificate;
    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum, activity:Activity, certificate:Certificate){
        super(userId, name, email, password, role);
        this.activity = activity || [];
        this.certificate = certificate;
    }

    // public createActivity():void {

    // }

    // public approveParticipant():void {

    // }

    // public addActivity(activity: Activity): void {
    //     this.activity.push(activity);
    // }

    // public issueCertificate(): Certificate | null {
    //     let generateId:string = uuidv4();
    //     const selectedActivity = this.activity.find(item => item.getActivityName().toLowerCase() === activityName.toLowerCase());
    //     return new Certificate(generateId, this, selectedActivity, "test");
    // }

    // public searchActivity(keyword: string): Activity[] {
    //     return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    // }
}

export class InstructorService {
    private instructor:Instructor;
    private activity:Activity | Activity[];

    constructor(instructor:Instructor, activity:Activity | Activity[]){
        this.instructor = instructor;
        this.activity = activity || [];
    }

    public searchActivity(keyword: string): Activity[] {
        return this.activity.filter(item => item.getActivityName().toLowerCase().includes(keyword.toLowerCase()));
    }
    
}