import { calcMaxCategoryValue } from "../calculate";

describe("Max category value calculator", () => {
  it("should calculate return highest value", () => {
    expect(calcMaxCategoryValue({ uiUx: 5, IT: 1, design: 0 })).toEqual({
      max: ["uiUx", 5],
    });
  });
  it("should calculate equal values", () => {
    //   TODO: rewire function logic to make a case for equal values, if it's the case then return
    expect(calcMaxCategoryValue({ uiUx: 0, IT: 0, design: 0 })).toEqual({
      max: ["uiUx", 0],
    });
  });
});
