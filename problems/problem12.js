import { factorial } from './utils.js';
/*
[Hard]
This problem was asked by Amazon.

There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
Given N, write a function that returns the number of unique ways you can climb the staircase.
The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2

What if, instead of being able to climb 1 or 2 steps at a time,
you could climb any number from a set of positive integers X?
For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
*/
export default class Problem12 {
	static solve(n) {
		let counter = 1n;
		if (n == 0) return 0;

		let numerator = factorial(n - Math.floor(n / 2));
		let denominator =
			factorial(Math.floor(n / 2)) * factorial(n - 2 * Math.floor(n / 2));
		for (let i = Math.floor(n / 2); i > 0; i--) {
			counter += numerator / denominator;
			console.log(numerator, denominator);
			numerator *= BigInt(n - i + 1);
			denominator /= BigInt(i);
			denominator *= BigInt(n - 2 * (i - 1)) * BigInt(n - 2 * (i - 1) - 1);
		}

		return counter;
	}

	static tests = [
		() => {
			const n = 4;
			return Problem12.solve(n) == 5;
		},
		() => {
			const n = 5;
			return Problem12.solve(n) == 8;
		},
		() => {
			const n = 0;
			return Problem12.solve(n) == 0;
		},
	];
}
/*
Permutação com repetição com i 2's e (n-2*i) 1's:
(n-i)!/(i!)(n-2*i)!
*/
