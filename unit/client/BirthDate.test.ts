import { expect, test } from "vitest"
import { BirthDate } from "../../models/BirthDate"

test("should be abe to create a BirthDate being older then 16 years", () => {
    const input = new Date("2004-10-10")
    const birthDate = BirthDate.create(input)
    expect(birthDate).toBeTruthy()
    expect(birthDate.date.toISOString().slice(0, 10)).toEqual(input)
    expect(birthDate.age).toBe(18)
})

test("should not to be able to create a BirthDate being newer than 16 years", () => {
    const input = new Date("2022-10-10")
    const error = () => BirthDate.create(input)
    expect(error).toThrowError("Invalid Age")
})