import { validateEmail } from "../validations";

describe("Email validator", () => {
  it("Returns true if the email is valid", () => {
    expect(validateEmail("x@c.com")).toBeTruthy();
    expect(validateEmail("abc@c.com.net")).toBeTruthy();
    expect(validateEmail("x@c.lt")).toBeTruthy();
  });
  it("Returns false if the email is not valid", () => {
    expect(validateEmail("x@com")).toBeFalsy();
    expect(validateEmail("x@.com")).toBeFalsy();
    expect(validateEmail("x.com")).toBeFalsy();
  });
});
