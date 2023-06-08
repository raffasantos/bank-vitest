export class BirthDate {
    constructor(
      readonly date: Date,
      readonly age: number
      ) {
    }
  
    static create(date: Date) {
      const today = new Date();
  
      let age = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();
      const noBirthdayYet = monthDiff < 0 || monthDiff === 0 && today.getDate() < date.getDate();
  
      if (noBirthdayYet) {
        age--;
      }
  
      if (age <= 16){
        throw new Error("Invalid Age")
      }
      return new BirthDate(date, age);

    }
  }