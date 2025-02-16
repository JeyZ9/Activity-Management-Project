import { Participant } from "./Participant";

export class AppNotification {
    private notiId: number;
    private recipant: Participant;
    private message: string;
    private status: string;

    constructor(notiId:number, recipant: Participant, message:string){
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = "unread";
    }

    public sendNotification(participants:Participant[]):void {
        participants.forEach(user => {
            const newNotification = new AppNotification(
                Math.floor(Math.random() * 10000),
                user,
                this.message
            );

            user.saveNotification(newNotification);
        });
    }
}