export class Email {
    private constructor(readonly value: string) {}
    static create(value: string){
        if(!/^[^\s@]+@[^\s@]+.[^\s@]+$/.test(value)){
            throw new Error("Invalid Email")
        }   
        return new Email(value)
    }
}
