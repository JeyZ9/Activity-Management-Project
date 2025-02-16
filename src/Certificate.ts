import { Instructor } from "./Instructor";
import { Activity } from './Activity';

export class Certificate {
    private cerId: string;
    private issuer: Instructor;
    private activity: Activity;
    private signature: string;
    private template: string;

    constructor(cerId:string, issuer: Instructor, activity: Activity, sinature: string, template: string){
        this.cerId = cerId;
        this.issuer = issuer;
        this.activity = activity;
        this.signature = sinature;
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

    public generateCertificate(): string {
        return `
        Certificate ID: ${this.cerId}
        Issuer: ${this.issuer.getName()}
        Activity: ${this.activity.getActivityName()}
        Signature: ${this.signature}
        Template: ${this.template}
        `;
    }

    public sendNotification(email: string): void {
        console.log(`Notification sent to ${email} for certificate ${this.cerId}.`);
    }
}