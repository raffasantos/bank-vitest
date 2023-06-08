export class CPF {
    private constructor(readonly value: string) {}

    static create(value: string){
        if(!/^(?!000.0{3}.0{3}-00$)(\d{3}.){2}\d{3}-\d{2}$/.test(value)){
            throw new Error("Invalid CPF")
        }
        return new CPF(value);
    }
}