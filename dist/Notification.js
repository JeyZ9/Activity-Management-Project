"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotification = void 0;
class AppNotification {
    constructor(notiId, recipant, message, status) {
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = status;
    }
    sendNotification(participants) {
        participants.forEach(user => {
            const newNotification = new Notification(Math.floor(Math.random() * 10000), user, this.message, "unread");
            user.saveNotification(newNotification);
        });
    }
}
exports.AppNotification = AppNotification;
