import { Instructor } from "./Instructor";
import { Activity } from './Activity';

export class Certificate {
    private cerId: string;
    private issuer: Instructor;
    private activity: Activity;
    private signature: string;
    // private template: File;

    constructor(cerId:string, issuer: Instructor, activity: Activity, sinature: string){
        this.cerId = cerId;
        this.issuer = issuer;
        this.activity = activity;
        this.signature = sinature;
    }

    // public setIssue

    public generateCertificate(): void {

    }

    public sendNotification(): void {

    }
}