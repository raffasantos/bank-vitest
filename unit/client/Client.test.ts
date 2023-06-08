import { test, expect } from "vitest";
import { Client } from "../../models/Client";

// TDD - Test-Driven Development
// Red - Fix - Green
// Entidade - Consigo dar identidade: CPF, iD (Identificador único)



function getValidCPF(){
    return "111.111.111-11"
}

function getValidEmail(){
    return "john@gmail.com"
}

function getValidName(){
    return "John Doe"
}


test("should not be able to create a Client with invalid name", () => {
    // given
    const input ={
        name: "",
        cpf: getValidCPF(),
        email: getValidEmail()
    }
    // when
    const error = () => Client.create(input.name, input.cpf, input.email)
    // then
    expect(error).toThrowError("Invalid Name")
})

test("should not be able to create a Client with invalid CPF", () => {
    const input = {
        name: getValidName(),
        cpf: "",
        email: getValidEmail()
    }
    const error = () => Client.create(input.name, input.cpf, input.email)

    expect(error).toThrowError("Invalid CPF")
})

test("should not be able to create a Client with invalid email", () => {
    const input = {
        name: getValidName(),
        cpf: getValidCPF(),
        email: ""
    }
    const error = () => Client.create(input.name, input.cpf, input.email)

    expect(error).toThrowError("Invalid Email")
})



