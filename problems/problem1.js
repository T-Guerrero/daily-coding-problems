/*
[Easy]
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/
export default class Problem1 {
	static solve(list, k) {
		for (let i = 0; i < list.length; i++) {
			for (let j = i + 1; j < list.length; j++) {
				if (list[i] + list[j] == k) return true;
			}
		}

		if (list.length == 0 && k == 0) return true;

		return false;
	}

	static tests = [
		() => {
			const list = [];
			const k = 0;
			return Problem1.solve(list, k) === true;
		},
		() => {
			const list = [10, 15, 3, 7];
			const k = 17;
			return Problem1.solve(list, k) === true;
		},
	];
}
