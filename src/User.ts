import { Activity } from "./Activity";
import { v4 as uuidV4 } from "uuid";

export class RoleEnum {
    public static INSTRUCTOR = "instructor";
    public static STUDENT = "student";
}

export class User {
    private userId: string;
    private name: string;
    private email: string;
    private password: string;
    private role:RoleEnum;
    constructor(name:string, email:string, password:string, role:RoleEnum){
        this.userId = uuidV4();
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public getUserId():string {
        return this.userId;
    }

    public getName():string{
        return this.name;
    }

    public getEmail():string {
        return this.email;
    }

    public getPassword():string{
        return this.password;
    }

    public getRole():RoleEnum {
        return this.role;
    }

    public setName(name:string):void{
        this.name = name;
    }

    public setEmail(email:string):void {
        this.email = email;
    }

    public setPassword(pass:string): void {
        this.password = pass;
    }

    public setRole(role:RoleEnum): void {
        this.role = role;
    }

    public register(email:string, password:string):boolean {
        if(email == "" || password == ""){
            return false;
        }
        this.email = email;
        this.password = password;
        return true;
    }

    public login(email:string, password:string):boolean{
        if(email === this.email && password === this.password) {
            return true;
        }else{
            return false;
        }
    }

    public logout():boolean {
        return false;
    }

    public toString():string{
        return `{
        userId: ${this.userId},
        name: ${this.name},
        email: ${this.email},
        password: ${this.password},
        role: ${this.role}\n}`
    }
}