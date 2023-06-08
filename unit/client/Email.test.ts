import { expect, test } from "vitest";
import { Email } from "../../models/Email";
import { faker } from "@faker-js/faker";

test("should not be able to create a Email with invalid value", () => {
    
    //given
    const input = faker.internet.exampleEmail().split("@")[0];
    //when
    const error = () => Email.create(input)
    //then

    expect(error).toThrowError("Invalid Email")
    
})

test("should be able to create an Email with valid value", () =>{
    //given
    const input = faker.internet.exampleEmail()
    //when
    const email = Email.create(input)
    //then
    expect(email).toBeTruthy()
    expect(email.value).toEqual(input)
})