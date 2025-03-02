import { Participant } from "./Participant";
// import { v4 as uuidv4 } from "uuid";

export class AppNotification {
    private notiId: string;
    private recipant: Participant;
    private message: string;
    private status: string;

    constructor(notiId:string, recipant: Participant, message:string, status:string){
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = status;
    }

    // public sendNotification(participants:Participant[], message:string, status:string):void{
    //     participants.forEach(user => {
    //         new AppNotification(uuidv4(), user, message, status)
    //     });
    // }

    // public sendNotification(participants:Participant[]):void {
    //     participants.forEach(user => {
    //         const newNotification = new AppNotification(
    //             Math.floor(Math.random() * 10000),
    //             user,
    //             this.message
    //         );

    //         user.saveNotification(newNotification);
    //     });
    // }
}