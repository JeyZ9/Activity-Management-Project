import { Activity } from './Activity';
import { Participant } from "./Participant";

export class Registration {
    private regisId: string;
    private participant: Participant;
    private activity: Activity;
    private status: string;

    public static registrations:Registration[];

    constructor(regisId:string, activity:Activity, participant: Participant, status:string) {
        this.regisId = regisId;
        this.participant = participant;
        this.activity = activity;
        this.status = status;

        Registration.registrations.push(this);
    }

    public getParticipant():Participant{
        return this.participant;
    }

    public getActivity():Activity {
        return this.activity;
    }

    public setStatus(status:string):void {
        this.status = status;
    }
}