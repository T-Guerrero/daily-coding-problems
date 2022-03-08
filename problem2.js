import { equals } from './utils.js';
/*
Given an array of integers, return a new array such that each element
at index i of the new array is the product of all the numbers in the
original array except the one at i.

Follow-up: what if you can't use division?
*/
export default class Problem2 {
	static solve(list) {
		const left = [],
			right = [];
		let acumulated = 1;
		for (let element of list) {
			left.push(acumulated);
			acumulated *= element;
		}

		acumulated = 1;
		for (let element of list.reverse()) {
			right.push(acumulated);
			acumulated *= element;
		}

		for (let i in list) {
			list[i] = left[i] * right[list.length - i - 1];
		}

		return list;
	}

	static tests = [
		() => {
			const list = [1, 2, 3, 4, 5];
			const solution = [120, 60, 40, 30, 24];
			return equals(Problem2.solve(list), solution);
		},
		() => {
			const list = [3, 2, 1];
			const solution = [2, 3, 6];
			return equals(Problem2.solve(list), solution);
		},
		() => {
			const list = [];
			return equals(Problem2.solve(list), []);
		},
	];
}
