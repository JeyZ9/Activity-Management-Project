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

    constructor(userId:string, name:string, email:string, password:string, role:RoleEnum){
        this.userId = userId;
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
        // let randomId:number = Math.floor(Math.random() * 10)
        // let mixId:string = "US" + randomId;
        if(email == "" || password == ""){
            return false;
        }
        this.email = email;
        this.password = password;
        // const newUser = new User(mixId, "", email, password, RoleEnum.STUDENT);
        return true;
    }

    public login(email:string, password:string):boolean{
        // let users:User[];
        // let findUser = users.filter(item => console.log(item.getEmail()));
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