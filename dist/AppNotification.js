"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotification = void 0;
class AppNotification {
    constructor(notiId, recipant, message) {
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = "unread";
    }
    sendNotification(participants) {
        participants.forEach(user => {
            const newNotification = new AppNotification(Math.floor(Math.random() * 10000), user, this.message);
            user.saveNotification(newNotification);
        });
    }
}
exports.AppNotification = AppNotification;
