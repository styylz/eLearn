import reducer, { initialState, setEmail } from "../slice";

test("should return initial state", () => {
  expect(reducer(undefined, setEmail)).toEqual(initialState);
});
