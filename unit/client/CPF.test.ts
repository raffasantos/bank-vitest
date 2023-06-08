import { expect, test } from "vitest";
import { CPF } from "../../models/CPF";

test("should not be able to create a CPF with invalid value", () => {
    //given
    const input = ""
    //when
    const error = () => CPF.create(input)
    //then

    expect(error).toThrowError("Invalid CPF")
    
})

test("should be able to create an CPF with valid value", () => {
    //given
    const input = "111.111.111-11"
    //when
    const cpf = CPF.create(input)
    //then
    expect(cpf).toBeTruthy()
    expect(cpf.value).toEqual(input)
})