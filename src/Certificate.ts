import { Instructor } from "./Instructor";
import { Activity } from './Activity';
import { AppNotification } from "./AppNotification";
import { Participant } from "./Participant";
import { v4 as uuidv4 } from "uuid";

export class Certificate {
    private cerId: string;
    private issuer: Instructor;
    private participant: Participant;
    private activity: Activity;
    private signature: string;
    private template: string;

    constructor(cerId:string, issuer: Instructor, participant:Participant, activity: Activity, signature: string, template: string){
        this.cerId = cerId;
        this.issuer = issuer;
        this.participant = participant;
        this.activity = activity;
        this.signature = signature;
        this.template = template;
    }  

    public getCerId(): string {
        return this.cerId;
    }

    public getIssuer(): Instructor {
        return this.issuer;
    }

    public getActivity(): Activity {
        return this.activity;
    }

    public getSignature(): string {
        return this.signature;
    }

    public getTemplate(): string {
        return this.template;
    }

    public setSignature(signature: string): void {
        this.signature = signature;
    }

    public setTemplate(template: string): void {
        this.template = template;
    }

    public generateCertificate(cerId:string, issuer: Instructor, participant:Participant, activity: Activity, signature: string, template: string): Certificate {
        return new Certificate(cerId, issuer, participant, activity, signature, template);
    }

    public sendNotification(): AppNotification {
        return new AppNotification(uuidv4(), this.participant, "เกียรติบัตรพร้อมให้สำหรับการดาวน์โหลดแล้ว", "approved")
    }
}