/*
[Hard]
This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers.
Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13,
since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/
export default class Problem9 {
	static solve(list) {
		let dp = new Array(list.length);

		for (let i = 0; i < list.length; i++) {
			dp[i] = list[i];
		}
		for (let i = 1; i < list.length; i++) {
			if (i == 1) dp[i] = Math.max(dp[i - 1], dp[i]);
			else dp[i] = Math.max(dp[i] - 1, dp[i - 2] + dp[i]);
		}

		return dp[list.length - 1];
	}

	static tests = [
		() => {
			const list = [2, 4, 6, 2, 5];
			return Problem9.solve(list) === 13;
		},
		() => {
			const list = [5, 1, 1, 5];
			return Problem9.solve(list) === 10;
		},
		() => {
			const list = [5, 1, 1, 5, 1, 5, 1];
			return Problem9.solve(list) === 15;
		},
	];
}
