"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppNotification = void 0;
// import { v4 as uuidv4 } from "uuid";
class AppNotification {
    constructor(notiId, recipant, message, status) {
        this.notiId = notiId;
        this.recipant = recipant;
        this.message = message;
        this.status = status;
    }
}
exports.AppNotification = AppNotification;
