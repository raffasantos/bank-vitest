import { CPF } from "./CPF";
import { Email } from "./Email";

export class Client {
    private constructor(name: string, cpf: CPF, email: Email) {
    }

    static create(name: string, cpf: string, email: string){
        if(name.split(" ").length < 2){
            throw new Error("Invalid Name")
        }

        const cpf_ = CPF.create(cpf);
        
        const email_ = Email.create(email);

        return new Client(name, cpf_, email_)
    }
}