import { Activity } from './Activity';
import { Participant } from "./Participant";

export class Registration {
    private regisId: string;
    private participant: Participant;
    private activity: Activity;
    private status: string;

    constructor(regisId:string, participant: Participant, activity:Activity) {
        this.regisId = regisId;
        this.participant = participant;
        this.activity = activity;
        this.status = "wait";
    }

    public toString():string {
        return `{
        regisId: ${this.regisId},
        participant: ${this.participant},
        activity: ${this.activity},
        status: ${this.status}\n}`
    }

    public getActivity():Activity {
        return this.activity;
    }

    public setParticipant(participant:Participant):void {
        this.participant = participant;
    }

    public setActivity(activity:Activity):void{
        this.activity = activity;
    }

    public setStatus(status:string):void {
        this.status = status;
    }
     
}