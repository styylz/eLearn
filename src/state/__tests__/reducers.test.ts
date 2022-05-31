// import { Foods } from '../types';

import reducer, { initialState, setEmail } from "../slice";

test("should return initial state", () => {
  expect(reducer(undefined, setEmail)).toEqual(initialState);
});

// test('updates user_data state correctly', () => {
// 	const user = {
// 		id: 1,
// 		name: 'Viktorija',
// 		food: Foods.GRYBAI,
// 	};
// 	expect(reducer(initialState, setUserData(user))).toEqual({
// 		...initialState,
// 		user_data: user,
// 	});
// });
