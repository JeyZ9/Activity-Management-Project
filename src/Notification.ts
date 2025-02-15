import { Participant } from "./Participant";

export class Notification {
    private notiId: number;
    private recipant: Participant;
    private message: string;
    private status: string;

    constructor(notiId:number, recipant: Participant, message:string, status:string){
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = status;
    }

    public sendNotification():void {
        
    }
}