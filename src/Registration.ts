import { Activity } from './Activity';
import { Participant } from "./Participant";

export class Registration {
    private regisId: string;
    private participant: Participant;
    private activity: Activity;
    private status: string;

    constructor(regisId:string, activity:Activity, participant: Participant, status:string) {
    // constructor(regisId:string, activity:Activity) {
        this.regisId = regisId;
        this.participant = participant;
        this.activity = activity;
        this.status = status;
    }

    // public toString():string {
    //     return `{
    //     regisId: ${this.regisId},
    //     participant: {${this.participants}},
    //     activity: ${this.activity},
    //     status: ${this.status}\n}`
    // }

    // public getActivity():Activity {
    //     return this.activity;
    // }

    // public getParticipants():Participant[] {
    //     return this.participants
    // }

    // public setActivity(activity:Activity):void{
    //     this.activity = activity;
    // }

    // public setStatus(status:string):void {
    //     this.status = status;
    // }
     
    // public addParticipant(participant:Participant):void {
    //     if(this.participants.length > this.activity.getMaxParticipant()){
    //         console.log("Limit!");
    //         return;
    //     }
    //     this.participants.push(participant);
    // }
}